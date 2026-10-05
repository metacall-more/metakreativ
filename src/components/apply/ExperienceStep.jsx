import DocumentsStep from './DocumentsStep';
import { FormField, FormFieldset } from './FormField';
import { selectChevron, selectClass } from './formStyles';
import { EXPERIENCE_OPTIONS, FOCUS_AREAS, SKILL_LEVELS } from './types';

function LevelPills({ id, value, error, describedBy, onSelect }) {
  return (
    <div
      id={id}
      role="radiogroup"
      aria-invalid={Boolean(error)}
      aria-describedby={describedBy}
      className="flex flex-wrap gap-2"
    >
      {SKILL_LEVELS.map((level) => {
        const selected = value === level;
        return (
          <label
            key={level}
            className={`font-instrument inline-flex min-h-10 cursor-pointer items-center justify-center rounded-full border px-3 text-sm font-medium transition-all duration-200 focus-within:ring-2 focus-within:ring-[#ff3f02] focus-within:ring-offset-2 ${
              selected
                ? 'border-[#ff3f02] bg-[#ff3f02] text-white'
                : 'border-[#d0d0d0] bg-white text-[#111013] hover:border-[#111013]'
            }`}
          >
            <input type="radio" value={level} checked={selected} onChange={() => onSelect(level)} className="sr-only" />
            {level}
          </label>
        );
      })}
    </div>
  );
}

export default function ExperienceStep({
  formId,
  formData,
  fieldErrors,
  onChange,
  cvFiles,
  onAddFiles,
  onRemoveFile,
  onConsentChange,
}) {
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <header className="mb-1">
        <h3
          id={`${formId}-step-2-heading`}
          tabIndex={-1}
          className="font-instrument text-xl font-semibold tracking-[-0.02em] text-[#111013] outline-none sm:text-2xl"
        >
          Experience & resume
        </h3>
        <p className="font-instrument mt-1.5 text-sm leading-6 text-[#555555] sm:text-base">
          Choose your level for each skill, then upload your resume.
        </p>
      </header>

      {FOCUS_AREAS.map((area) => {
        const field = area.levelField;
        const value = formData[field];
        const error = fieldErrors[field];
        return (
          <FormFieldset key={area.value} legend={`${area.label} level`} required error={error} errorId={`${formId}-${field}-error`}>
            <input type="hidden" name={`${area.label} level`} value={value} />
            <LevelPills
              id={`${formId}-${field}`}
              value={value}
              error={error}
              describedBy={error ? `${formId}-${field}-error` : undefined}
              onSelect={(level) => onChange(field, level)}
            />
          </FormFieldset>
        );
      })}

      <FormField
        id={`${formId}-blockchainExperience`}
        label="Blockchain development experience"
        required
        error={fieldErrors.blockchainExperience}
      >
        <select
          id={`${formId}-blockchainExperience`}
          name="Blockchain experience"
          value={formData.blockchainExperience}
          onChange={(event) => onChange('blockchainExperience', event.target.value)}
          aria-invalid={Boolean(fieldErrors.blockchainExperience)}
          aria-describedby={fieldErrors.blockchainExperience ? `${formId}-blockchainExperience-error` : undefined}
          className={selectClass(Boolean(fieldErrors.blockchainExperience))}
          style={selectChevron}
        >
          {EXPERIENCE_OPTIONS.map((option) => (
            <option key={option.label} value={option.value} disabled={option.value === ''}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>

      <DocumentsStep
        formId={formId}
        formData={formData}
        fieldErrors={fieldErrors}
        cvFiles={cvFiles}
        onAddFiles={onAddFiles}
        onRemoveFile={onRemoveFile}
        onChange={onChange}
        onConsentChange={onConsentChange}
      />
    </div>
  );
}
