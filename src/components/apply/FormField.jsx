import { errorTextClass, hintTextClass, labelClass } from './formStyles';

export function RequiredMark() {
  return (
    <span className="text-[#e10600]" aria-hidden="true">
      {' '}
      *
    </span>
  );
}

export function FormField({ id, label, required, error, hint, children }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={hintId} className={hintTextClass}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className={errorTextClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormFieldset({ legend, required, error, errorId, children }) {
  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className={labelClass}>
        {legend}
        {required ? <RequiredMark /> : null}
      </legend>
      {children}
      {error ? (
        <p id={errorId} role="alert" className={errorTextClass}>
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
