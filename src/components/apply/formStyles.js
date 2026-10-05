export const labelClass = 'mb-2 block font-instrument text-sm font-medium text-[#111013] sm:text-base';

export const errorTextClass = 'mt-1.5 font-instrument text-sm font-medium text-[#e10600]';

export const hintTextClass = 'mt-1.5 font-instrument text-sm text-[#666666]';

export const baseFieldClass =
  'h-12 w-full rounded-[8px] bg-[#f3f3f3] px-4 font-instrument text-base text-[#111013] outline-none transition-shadow';

export const selectChevron = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23111013' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
};

export const inputClass = (hasError) =>
  `${baseFieldClass} border ${
    hasError
      ? 'border-[#e10600] focus:ring-2 focus:ring-[#e10600]/25'
      : 'border-[#d0d0d0] focus:border-[#111013] focus:ring-2 focus:ring-[#111013]/15'
  }`;

export const textareaClass = (hasError) =>
  `min-h-[140px] w-full resize-y rounded-[8px] border bg-[#f3f3f3] px-4 py-3 font-instrument text-base text-[#111013] outline-none transition-shadow ${
    hasError
      ? 'border-[#e10600] focus:ring-2 focus:ring-[#e10600]/25'
      : 'border-[#d0d0d0] focus:border-[#111013] focus:ring-2 focus:ring-[#111013]/15'
  }`;

export const selectClass = (hasError) =>
  `${inputClass(hasError)} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`;
