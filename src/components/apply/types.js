export const FOCUS_AREAS = [
  { value: 'solidity', label: 'Solidity', levelField: 'solidityLevel' },
  { value: 'solana', label: 'Solana', levelField: 'solanaLevel' },
  { value: 'fullstack', label: 'Full-stack Web3', levelField: 'fullstackLevel' },
];

export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const EXPERIENCE_OPTIONS = [
  { value: '', label: 'Select experience' },
  { value: 'No professional experience', label: 'No professional experience' },
  { value: 'Less than 1 year', label: 'Less than 1 year' },
  { value: '1–2 years', label: '1–2 years' },
  { value: '3–5 years', label: '3–5 years' },
  { value: '5+ years', label: '5+ years' },
];

export const FORM_STEPS = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'Experience' },
];

export const TOTAL_STEPS = FORM_STEPS.length;

export const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  solidityLevel: '',
  solanaLevel: '',
  fullstackLevel: '',
  blockchainExperience: '',
  comments: '',
  privacyConsent: false,
};
