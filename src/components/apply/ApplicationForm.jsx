import { useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExperienceStep from './ExperienceStep';
import PersonalInformationStep from './PersonalInformationStep';
import StepIndicator from './StepIndicator';
import { MAX_CV_FILES } from './DocumentsStep';
import { FORM_STEPS, TOTAL_STEPS, initialFormData } from './types';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/info@metakreativ.de';
const SUBMIT_FRAME = 'application-submit-frame';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png']);
const ALLOWED_CV_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
]);

const STEP_FIELDS = {
  1: ['firstName', 'lastName', 'email', 'phone', 'city', 'country'],
  2: ['solidityLevel', 'solanaLevel', 'fullstackLevel', 'blockchainExperience', 'cv', 'privacyConsent'],
};

const getFileExtension = (name) => {
  const idx = name.lastIndexOf('.');
  return idx >= 0 ? name.slice(idx).toLowerCase() : '';
};

const isAllowedCvFile = (file) => {
  const ext = getFileExtension(file.name);
  if (ALLOWED_CV_EXTENSIONS.has(ext)) return true;
  return Boolean(file.type) && ALLOWED_CV_MIME_TYPES.has(file.type);
};

const isValidPhone = (value) => {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
};

const validateCvFile = (file) => {
  if (!isAllowedCvFile(file)) {
    return 'Invalid file type. Please upload a PDF, Word file (.doc, .docx), or an image (.jpg, .jpeg, .png).';
  }
  if (file.size > MAX_CV_BYTES) {
    return 'That file is too large. Please upload a file under 5 MB.';
  }
  return undefined;
};

const createCvFileId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export default function ApplicationForm() {
  const formId = useId();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const hasMovedStep = useRef(false);
  const awaitingReply = useRef(false);

  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [cvFiles, setCvFiles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (!hasMovedStep.current) return;
    const heading = document.getElementById(`${formId}-step-${currentStep}-heading`);
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [currentStep, formId]);

  const clearFieldError = (key) => {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    clearFieldError(key);
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setSubmitError('');
    }
  };

  const scrollToField = (key) => {
    const el = document.getElementById(`${formId}-${key}`);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if ('focus' in el && typeof el.focus === 'function') {
      window.setTimeout(() => el.focus(), 250);
    }
  };

  const validateFields = (keys) => {
    const errors = {};

    for (const key of keys) {
      switch (key) {
        case 'firstName':
          if (!formData.firstName.trim()) errors.firstName = 'Please enter your first name.';
          break;
        case 'lastName':
          if (!formData.lastName.trim()) errors.lastName = 'Please enter your last name.';
          break;
        case 'email':
          if (!formData.email.trim()) errors.email = 'Please enter your email address.';
          else if (!EMAIL_RE.test(formData.email.trim())) errors.email = 'Please enter a valid email address.';
          break;
        case 'phone':
          if (!formData.phone.trim()) errors.phone = 'Please enter your phone number.';
          else if (!isValidPhone(formData.phone)) errors.phone = 'Please enter a valid phone number.';
          break;
        case 'city':
          if (!formData.city.trim()) errors.city = 'Please enter your city.';
          break;
        case 'country':
          if (!formData.country.trim()) errors.country = 'Please enter your country.';
          break;
        case 'solidityLevel':
          if (!formData.solidityLevel.trim()) errors.solidityLevel = 'Please choose your Solidity level.';
          break;
        case 'solanaLevel':
          if (!formData.solanaLevel.trim()) errors.solanaLevel = 'Please choose your Solana level.';
          break;
        case 'fullstackLevel':
          if (!formData.fullstackLevel.trim()) errors.fullstackLevel = 'Please choose your Full-stack Web3 level.';
          break;
        case 'blockchainExperience':
          if (!formData.blockchainExperience.trim()) {
            errors.blockchainExperience = 'Please choose your blockchain development experience.';
          }
          break;
        case 'cv': {
          if (cvFiles.length === 0) {
            errors.cv = 'Please upload your resume.';
            break;
          }
          for (const item of cvFiles) {
            const cvError = validateCvFile(item.file);
            if (cvError) {
              errors.cv = cvError;
              break;
            }
          }
          break;
        }
        case 'privacyConsent':
          if (!formData.privacyConsent) {
            errors.privacyConsent = 'Please agree to the processing of your personal data to continue.';
          }
          break;
        default:
          break;
      }
    }

    return errors;
  };

  const handleAddFiles = (incoming) => {
    if (incoming.length === 0) {
      setCvFiles([]);
      return;
    }

    if (cvFiles.length >= MAX_CV_FILES) {
      setFieldErrors((prev) => ({
        ...prev,
        cv: 'You can upload only one file.',
      }));
      return;
    }

    const accepted = [];
    let error;

    for (const file of incoming) {
      if (cvFiles.length + accepted.length >= MAX_CV_FILES) {
        error = 'You can upload only one file.';
        break;
      }
      const exists = [...cvFiles, ...accepted].some(
        (item) => item.file.name === file.name && item.file.size === file.size && item.file.lastModified === file.lastModified,
      );
      if (exists) continue;
      const cvError = validateCvFile(file);
      if (cvError) {
        error = cvError;
        continue;
      }
      accepted.push({ id: createCvFileId(), file });
    }

    if (accepted.length > 0) {
      setCvFiles([...cvFiles, ...accepted]);
      clearFieldError('cv');
      if (status === 'error') {
        setStatus('idle');
        setSubmitError('');
      }
    }
    if (error) {
      setFieldErrors((prev) => ({ ...prev, cv: error }));
    }
  };

  const handleRemoveFile = (id) => {
    setCvFiles((prev) => prev.filter((item) => item.id !== id));
    clearFieldError('cv');
  };

  const goToStep = (step) => {
    hasMovedStep.current = true;
    setCurrentStep(step);
  };

  const handleNext = () => {
    const errors = validateFields(STEP_FIELDS[currentStep]);
    if (Object.keys(errors).length > 0) {
      setFieldErrors((prev) => ({ ...prev, ...errors }));
      const first = STEP_FIELDS[currentStep].find((key) => errors[key]);
      if (first) scrollToField(first);
      return;
    }

    setFieldErrors((prev) => {
      const next = { ...prev };
      for (const key of STEP_FIELDS[currentStep]) delete next[key];
      return next;
    });

    if (currentStep < TOTAL_STEPS) {
      goToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  const finishSubmit = () => {
    if (!awaitingReply.current) return;
    awaitingReply.current = false;
    navigate('/applynow/thank-you');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentStep !== TOTAL_STEPS) {
      handleNext();
      return;
    }

    setSubmitError('');

    const errors = validateFields(STEP_FIELDS[currentStep]);
    if (Object.keys(errors).length > 0) {
      setFieldErrors((prev) => ({ ...prev, ...errors }));
      setStatus('idle');
      const first = STEP_FIELDS[currentStep].find((key) => errors[key]);
      if (first) scrollToField(first);
      return;
    }

    const allKeys = FORM_STEPS.flatMap((step) => STEP_FIELDS[step.id]);
    const allErrors = validateFields(allKeys);
    if (Object.keys(allErrors).length > 0) {
      setFieldErrors(allErrors);
      setStatus('idle');
      const firstStep = FORM_STEPS.find((step) => STEP_FIELDS[step.id].some((key) => allErrors[key]));
      if (firstStep) {
        goToStep(firstStep.id);
        window.setTimeout(() => {
          const first = STEP_FIELDS[firstStep.id].find((key) => allErrors[key]);
          if (first) scrollToField(first);
        }, 50);
      }
      return;
    }

    const form = formRef.current;
    const file = cvFiles[0]?.file;
    const input = form?.querySelector('input[type="file"][name="attachment"]');
    if (!form || !file || !input) {
      setFieldErrors((prev) => ({ ...prev, cv: 'Please upload your resume.' }));
      setStatus('idle');
      scrollToField('cv');
      return;
    }

    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;

    setFieldErrors({});
    setStatus('sending');
    awaitingReply.current = true;
    form.target = SUBMIT_FRAME;
    form.submit();
  };

  const currentLabel = FORM_STEPS[currentStep - 1]?.label ?? 'Application';
  const isLastStep = currentStep === TOTAL_STEPS;
  const applicantName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
  const emailSubject = applicantName ? `Blockchain Developer application: ${applicantName}` : 'Blockchain Developer application';

  return (
    <section
      id="application-form"
      aria-labelledby="application-form-heading"
      className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pb-16 sm:scroll-mt-32 sm:px-6 sm:pb-20 md:px-8 lg:px-10 lg:pb-24 xl:px-12"
    >
      <div className="mb-8 max-w-[720px] sm:mb-10">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded bg-[#ff3f02]" aria-hidden="true" />
          <span className="font-instrument text-xs font-medium tracking-[0.08em] text-[#050912] uppercase sm:text-sm">Application</span>
        </div>
        <h2
          id="application-form-heading"
          className="font-instrument text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold tracking-[-0.03em] text-[#111013]"
        >
          Start your application
        </h2>
        <p className="font-instrument mt-2 text-sm leading-6 text-[#555555] sm:text-base">Two short steps. You will be done in a few minutes.</p>
      </div>

      <iframe
        name={SUBMIT_FRAME}
        title="Application upload"
        className="pointer-events-none absolute h-px w-px opacity-0"
        onLoad={finishSubmit}
      />
      <form
        ref={formRef}
        action={FORMSUBMIT_ENDPOINT}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Blockchain Developer application form"
        className="relative rounded-[24px] border border-[#05091214] bg-white p-5 sm:p-8 lg:p-10"
      >
        <input type="hidden" name="_subject" value={emailSubject} readOnly />
        <input type="hidden" name="_replyto" value={formData.email.trim()} readOnly />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="Position" value="Blockchain Developer" />
        <input
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-10000px] h-px w-px overflow-hidden opacity-0"
        />
        <StepIndicator currentStep={currentStep} />

        <div className="sr-only" aria-live="polite">
          Step {currentStep} of {TOTAL_STEPS}: {currentLabel}
        </div>

        <div className={currentStep === 1 ? 'animate-fade-up' : 'hidden'}>
          <PersonalInformationStep formId={formId} formData={formData} fieldErrors={fieldErrors} onChange={updateField} />
        </div>
        <div className={currentStep === 2 ? 'animate-fade-up' : 'hidden'}>
          <ExperienceStep
            formId={formId}
            formData={formData}
            fieldErrors={fieldErrors}
            onChange={updateField}
            cvFiles={cvFiles}
            onAddFiles={handleAddFiles}
            onRemoveFile={handleRemoveFile}
            onConsentChange={(checked) => updateField('privacyConsent', checked)}
          />
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#ececef] pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1 || status === 'sending'}
            className="font-instrument inline-flex h-12 items-center justify-center rounded-full border border-[#d0d0d0] bg-white px-6 text-base font-medium text-[#111013] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#111013] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050912] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            Back
          </button>

          {isLastStep ? (
            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-instrument inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-[#ff3f02] px-8 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050912] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:brightness-100"
            >
              {status === 'sending' ? 'Sending…' : 'Send application'}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="font-instrument inline-flex h-12 min-w-[140px] items-center justify-center rounded-full bg-[#ff3f02] px-8 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050912] active:translate-y-0"
            >
              Next
            </button>
          )}
        </div>

        {status === 'error' && submitError ? (
          <p role="alert" className="font-instrument mt-4 text-sm font-medium text-[#e10600]">
            {submitError}
          </p>
        ) : null}
      </form>
    </section>
  );
}
