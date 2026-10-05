import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FormField, RequiredMark } from './FormField';
import { errorTextClass, textareaClass } from './formStyles';

export const MAX_CV_FILES = 1;

function CloudUploadIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M10.5 21.5H9.25A4.75 4.75 0 1 1 10.4 12.1 6.75 6.75 0 0 1 23.2 13.6 4.25 4.25 0 0 1 22.75 21.5H21.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 20.5v-8m0 0-2.75 2.75M16 12.5l2.75 2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="23.25" cy="23.25" r="4.25" fill="white" stroke="currentColor" strokeWidth="1.4" />
      <path d="M21.4 23.3 22.7 24.6l2.6-2.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
      <path d="M3 3l6 6M9 3 3 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M3.5 5.5h13M8.5 8.5v5M11.5 8.5v5M7 5.5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5M5 5.5l.7 10a1.5 1.5 0 0 0 1.5 1.4h5.6a1.5 1.5 0 0 0 1.5-1.4l.7-10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${Math.max(0, Math.round(bytes))} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  const mb = bytes / (1024 * 1024);
  return `${mb >= 10 ? Math.round(mb) : mb.toFixed(1)} MB`;
};

const getExtension = (name) => (name.includes('.') ? name.slice(name.lastIndexOf('.') + 1).toLowerCase() : '');

function FileTypeIcon({ name }) {
  const ext = getExtension(name);
  if (ext === 'doc' || ext === 'docx') {
    return (
      <span className="relative h-10 w-8 shrink-0" aria-hidden="true">
        <svg viewBox="0 0 32 40" className="h-10 w-8">
          <path d="M5 1.5h14.5L30 12.2V37a2.5 2.5 0 0 1-2.5 2.5h-22A2.5 2.5 0 0 1 3 37V4A2.5 2.5 0 0 1 5.5 1.5H5Z" fill="#2B579A" />
          <path d="M19.5 1.5V9a2.5 2.5 0 0 0 2.5 2.5H30" fill="#1E3F73" />
          <text x="16" y="28" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif">
            W
          </text>
        </svg>
      </span>
    );
  }

  const badge =
    ext === 'pdf'
      ? { label: 'PDF', className: 'bg-[#e53935]' }
      : ext === 'png'
        ? { label: 'PNG', className: 'bg-[#0284c7]' }
        : ext === 'jpg' || ext === 'jpeg'
          ? { label: 'JPG', className: 'bg-[#0284c7]' }
          : { label: (ext || 'FILE').slice(0, 4).toUpperCase(), className: 'bg-[#6b7280]' };

  return (
    <span className="relative h-10 w-8 shrink-0" aria-hidden="true">
      <svg viewBox="0 0 32 40" className="h-10 w-8" fill="none">
        <path
          d="M5 1.5h14.5L30 12.2V37a2.5 2.5 0 0 1-2.5 2.5h-22A2.5 2.5 0 0 1 3 37V4A2.5 2.5 0 0 1 5.5 1.5H5Z"
          fill="white"
          stroke="#d4d4d8"
        />
        <path d="M19.5 1.5V9a2.5 2.5 0 0 0 2.5 2.5H30" fill="#f4f4f5" stroke="#d4d4d8" />
      </svg>
      <span
        className={`font-instrument absolute bottom-0.5 left-[-3px] rounded-[3px] px-1 py-px text-[8px] leading-none font-bold tracking-wide text-white ${badge.className}`}
      >
        {badge.label}
      </span>
    </span>
  );
}

function FileUploadItem({ file, onRemove }) {
  const [progress, setProgress] = useState(0);
  const isUploading = progress < 100;
  const loadedBytes = Math.round((progress / 100) * file.size);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setProgress(100);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress((1 - (1 - t) ** 3) * 100);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[12px] bg-[#eef2f6] px-3 py-3 sm:px-4">
      <div className="flex items-start gap-3">
        <FileTypeIcon name={file.name} />
        <div className="min-w-0 flex-1">
          <p className="font-instrument truncate text-sm font-semibold text-[#111013]">{file.name}</p>
          <p className="font-instrument mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-[#6b7280]" aria-live="polite">
            <span>
              {formatBytes(loadedBytes)} of {formatBytes(file.size)}
            </span>
            <span aria-hidden="true">•</span>
            {isUploading ? (
              <span className="inline-flex items-center gap-1.5 text-[#2f6fed]">
                <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
                  <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Uploading...
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[#6b7280]">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" fill="#22c55e" />
                  <path d="M4.6 8.2 7 10.6 11.5 5.6" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Complete
              </span>
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={onRemove}
          aria-label={isUploading ? 'Cancel upload' : 'Remove file'}
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#8a8a8e] transition-colors hover:text-[#111013] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050912]"
        >
          {isUploading ? <CloseIcon /> : <TrashIcon />}
        </button>
      </div>
      {isUploading ? (
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#dbe3ea]">
          <div className="h-full rounded-full bg-[#2f6fed]" style={{ width: `${progress}%` }} />
        </div>
      ) : null}
    </div>
  );
}

export default function DocumentsStep({
  formId,
  formData,
  fieldErrors,
  cvFiles,
  onAddFiles,
  onRemoveFile,
  onChange,
  onConsentChange,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const hasFiles = cvFiles.length > 0;
  const atLimit = cvFiles.length >= MAX_CV_FILES;

  const handleDragOver = (event) => {
    event.preventDefault();
    if (atLimit) return;
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    const next = event.relatedTarget;
    if (next && event.currentTarget.contains(next)) return;
    setIsDragging(false);
  };

  const assignFileToInput = (file) => {
    const input = fileInputRef.current;
    if (!input) return;
    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    assignFileToInput(file);
    onAddFiles([file]);
  };

  useLayoutEffect(() => {
    const input = fileInputRef.current;
    if (!input) return;
    if (cvFiles.length === 0) {
      if (input.value) input.value = '';
      return;
    }
    const wanted = cvFiles[0].file;
    const current = input.files?.[0];
    if (current && current.name === wanted.name && current.size === wanted.size && current.lastModified === wanted.lastModified) {
      return;
    }
    assignFileToInput(wanted);
  }, [cvFiles]);

  const dropzoneClass = `group relative flex rounded-[12px] border-2 border-dashed transition-all duration-200 ${
    atLimit ? 'cursor-not-allowed' : 'cursor-pointer'
  } ${
    hasFiles
      ? 'min-h-0 flex-row items-center gap-3 px-3 py-3 text-left sm:px-4'
      : 'min-h-[200px] flex-col items-center justify-center px-4 py-8 text-center'
  } ${
    fieldErrors.cv
      ? 'border-[#e10600] bg-[#fff5f5]'
      : isDragging
        ? 'border-[#4f46e5] bg-[#eef2ff]'
        : atLimit
          ? 'border-[#e4e4e7] bg-white'
          : 'border-[#d4d4d8] bg-white hover:border-[#4f46e5] hover:bg-[#eef2ff]'
  }`;

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <div id={`${formId}-cv`}>
        <p id={`${formId}-cv-label`} className="font-instrument text-sm font-medium text-[#111013] sm:text-base">
          CV / Resume
          <RequiredMark />
        </p>
        <p className="font-instrument mt-1.5 mb-2 text-sm text-[#8a8a8e]">Choose a file and upload it</p>
        <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={dropzoneClass}>
          <input
            id={`${formId}-cv-input`}
            ref={fileInputRef}
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
            aria-labelledby={`${formId}-cv-label`}
            aria-invalid={Boolean(fieldErrors.cv)}
            aria-describedby={fieldErrors.cv ? `${formId}-cv-error` : `${formId}-cv-hint`}
            className={`absolute inset-0 z-10 h-full w-full opacity-0 ${atLimit ? 'pointer-events-none' : 'cursor-pointer'}`}
            tabIndex={atLimit ? -1 : 0}
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) {
                onAddFiles([]);
                return;
              }
              onAddFiles([file]);
            }}
          />
          <span
            className={`flex shrink-0 items-center justify-center rounded-full border bg-white transition-colors duration-200 ${
              hasFiles ? 'h-9 w-9' : 'mb-4 h-12 w-12'
            } ${
              isDragging
                ? 'border-[#c7d2fe] text-[#4f46e5]'
                : atLimit
                  ? 'border-[#e4e4e7] text-[#6b7280]'
                  : 'border-[#e4e4e7] text-[#6b7280] group-hover:border-[#c7d2fe] group-hover:text-[#4f46e5]'
            }`}
            aria-hidden="true"
          >
            <CloudUploadIcon className={hasFiles ? 'h-4 w-4' : 'h-6 w-6'} />
          </span>
          <span className={`min-w-0 ${hasFiles ? 'flex-1' : ''}`}>
            <span className="font-instrument block text-sm font-medium text-[#3f3f46] sm:text-base">Select a file or drag it here</span>
            <span id={`${formId}-cv-hint`} className="font-instrument mt-0.5 block text-xs text-[#a1a1aa] sm:text-sm">
              JPEG, PNG, PDF, and DOC, up to 5 MB
            </span>
          </span>
          <span
            className={`font-instrument inline-flex min-h-10 shrink-0 items-center justify-center rounded-[8px] border border-[#d4d4d8] bg-white px-4 text-sm font-medium text-[#3f3f46] ${
              hasFiles ? '' : 'mt-5'
            }`}
          >
            Browse file
          </span>
        </div>

        {hasFiles ? (
          <div className="mt-3 flex flex-col gap-2.5">
            {cvFiles.map((item) => (
              <FileUploadItem
                key={item.id}
                file={item.file}
                onRemove={() => {
                  if (fileInputRef.current) fileInputRef.current.value = '';
                  onRemoveFile(item.id);
                }}
              />
            ))}
          </div>
        ) : null}

        {fieldErrors.cv ? (
          <p id={`${formId}-cv-error`} role="alert" className={errorTextClass}>
            {fieldErrors.cv}
          </p>
        ) : null}
      </div>

      <FormField id={`${formId}-comments`} label="Portfolio or notes" hint="Optional">
        <textarea
          id={`${formId}-comments`}
          name={formData.comments.trim() ? 'Portfolio or notes' : undefined}
          rows={4}
          value={formData.comments}
          onChange={(event) => onChange('comments', event.target.value)}
          placeholder="GitHub, a shipped contract, or anything else we should know"
          className={textareaClass(false)}
        />
      </FormField>

      <div id={`${formId}-privacyConsent`}>
        <div
          className={`flex items-start gap-3 rounded-[12px] border px-3 py-3 sm:px-4 ${
            fieldErrors.privacyConsent ? 'border-[#e10600] bg-[#fff5f5]' : 'border-[#d0d0d0] bg-white'
          }`}
        >
          <input
            id={`${formId}-privacyConsent-input`}
            name="Privacy consent"
            type="checkbox"
            value="Yes"
            checked={formData.privacyConsent}
            onChange={(event) => onConsentChange(event.target.checked)}
            aria-invalid={Boolean(fieldErrors.privacyConsent)}
            aria-describedby={fieldErrors.privacyConsent ? `${formId}-privacyConsent-error` : undefined}
            className={`mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-auto rounded-[4px] border-2 bg-white accent-[#111013] ${
              fieldErrors.privacyConsent ? 'border-[#e10600]' : 'border-[#111013]'
            }`}
          />
          <label htmlFor={`${formId}-privacyConsent-input`} className="font-instrument cursor-pointer text-sm leading-6 text-[#111013] sm:text-base">
            I agree that my personal data may be processed for the purpose of reviewing this application.
            <span className="text-[#e10600]" aria-hidden="true">
              {' '}
              *
            </span>
          </label>
        </div>
        {fieldErrors.privacyConsent ? (
          <p id={`${formId}-privacyConsent-error`} role="alert" className={errorTextClass}>
            {fieldErrors.privacyConsent}
          </p>
        ) : null}
      </div>
    </div>
  );
}
