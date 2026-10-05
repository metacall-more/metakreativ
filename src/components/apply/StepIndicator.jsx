import { FORM_STEPS, TOTAL_STEPS } from './types';

export default function StepIndicator({ currentStep }) {
  const progress = (currentStep / TOTAL_STEPS) * 100;
  const currentMeta = FORM_STEPS[currentStep - 1];

  return (
    <div className="mb-8 sm:mb-10">
      <div className="mb-4 flex items-end justify-between gap-3 sm:hidden">
        <p className="font-instrument text-sm font-medium text-[#111013]">
          Step {currentStep} of {TOTAL_STEPS}
        </p>
        <p className="font-instrument text-sm text-[#666666]">{currentMeta?.label}</p>
      </div>

      <ol className="mb-5 hidden list-none items-center gap-0 p-0 sm:flex">
        {FORM_STEPS.map((step, index) => {
          const isCurrent = step.id === currentStep;
          const isComplete = step.id < currentStep;

          return (
            <li key={step.id} className="flex min-w-0 flex-1 items-center">
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`font-instrument flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                    isCurrent
                      ? 'bg-[#ff3f02] text-white'
                      : isComplete
                        ? 'bg-[#050912] text-white'
                        : 'border border-[#d0d0d0] bg-white text-[#7f7f7f]'
                  }`}
                  aria-hidden="true"
                >
                  {String(step.id).padStart(2, '0')}
                </span>
                <span
                  className={`font-instrument truncate text-sm font-medium ${
                    isCurrent ? 'text-[#111013]' : isComplete ? 'text-[#050912]' : 'text-[#7f7f7f]'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < FORM_STEPS.length - 1 ? (
                <span
                  className={`mx-3 h-px min-w-[12px] flex-1 transition-colors duration-300 ${
                    isComplete ? 'bg-[#050912]' : 'bg-[#d9d9d9]'
                  }`}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-[#e6e8eb]"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-valuenow={currentStep}
        aria-label={`Application progress: step ${currentStep} of ${TOTAL_STEPS}`}
      >
        <div className="h-full rounded-full bg-[#ff3f02] transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
