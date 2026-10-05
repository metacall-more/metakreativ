import { FormField } from './FormField';
import { inputClass } from './formStyles';

const capitalizeFirst = (value) => {
  if (!value) return value;
  return value.charAt(0).toLocaleUpperCase('en') + value.slice(1);
};

const digitsOnly = (value) => value.replace(/\D/g, '').slice(0, 15);

export default function PersonalInformationStep({ formId, formData, fieldErrors, onChange }) {
  const describedBy = (key) => (fieldErrors[key] ? `${formId}-${key}-error` : undefined);

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <header className="mb-1">
        <h3
          id={`${formId}-step-1-heading`}
          tabIndex={-1}
          className="font-instrument text-xl font-semibold tracking-[-0.02em] text-[#111013] outline-none sm:text-2xl"
        >
          Personal details
        </h3>
        <p className="font-instrument mt-1.5 text-sm leading-6 text-[#555555] sm:text-base">
          Tell us who you are so our team can reach you.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        <FormField id={`${formId}-firstName`} label="First name" required error={fieldErrors.firstName}>
          <input
            id={`${formId}-firstName`}
            name="First name"
            type="text"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={(event) => onChange('firstName', event.target.value)}
            aria-invalid={Boolean(fieldErrors.firstName)}
            aria-describedby={describedBy('firstName')}
            className={inputClass(Boolean(fieldErrors.firstName))}
          />
        </FormField>

        <FormField id={`${formId}-lastName`} label="Last name" required error={fieldErrors.lastName}>
          <input
            id={`${formId}-lastName`}
            name="Last name"
            type="text"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={(event) => onChange('lastName', event.target.value)}
            aria-invalid={Boolean(fieldErrors.lastName)}
            aria-describedby={describedBy('lastName')}
            className={inputClass(Boolean(fieldErrors.lastName))}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        <FormField id={`${formId}-email`} label="Email" required error={fieldErrors.email}>
          <input
            id={`${formId}-email`}
            name="Email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={(event) => onChange('email', event.target.value)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={describedBy('email')}
            className={inputClass(Boolean(fieldErrors.email))}
          />
        </FormField>

        <FormField id={`${formId}-phone`} label="Phone number" required error={fieldErrors.phone}>
          <input
            id={`${formId}-phone`}
            name="Phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={15}
            value={formData.phone}
            onChange={(event) => onChange('phone', digitsOnly(event.target.value))}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={describedBy('phone')}
            className={inputClass(Boolean(fieldErrors.phone))}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
        <FormField id={`${formId}-city`} label="City" required error={fieldErrors.city}>
          <input
            id={`${formId}-city`}
            name="City"
            type="text"
            autoComplete="address-level2"
            value={formData.city}
            onChange={(event) => onChange('city', capitalizeFirst(event.target.value))}
            aria-invalid={Boolean(fieldErrors.city)}
            aria-describedby={describedBy('city')}
            className={inputClass(Boolean(fieldErrors.city))}
          />
        </FormField>

        <FormField id={`${formId}-country`} label="Country" required error={fieldErrors.country}>
          <input
            id={`${formId}-country`}
            name="Country"
            type="text"
            autoComplete="country-name"
            value={formData.country}
            onChange={(event) => onChange('country', capitalizeFirst(event.target.value))}
            aria-invalid={Boolean(fieldErrors.country)}
            aria-describedby={describedBy('country')}
            className={inputClass(Boolean(fieldErrors.country))}
          />
        </FormField>
      </div>
    </div>
  );
}
