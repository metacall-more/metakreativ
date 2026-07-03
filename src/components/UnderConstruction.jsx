import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function UnderConstruction() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((current) => (current.length >= 3 ? '' : `${current}.`));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(177,186,194,0.35),transparent_35%)]"
      />

      <div className="relative w-full max-w-xl">
        <div className="rounded-[28px] border border-white/70 bg-white/55 p-8 shadow-[0_24px_80px_rgba(3,3,3,0.08)] backdrop-blur-xl sm:p-12">
          <div className="mb-10 flex justify-center">
            <Logo iconHeight={36} metaWidth={120} kreativWidth={145} />
          </div>

          <div className="text-center">
            <p className="mb-4 font-display text-xs font-semibold tracking-[0.35em] text-brand-gray-600 uppercase">
              Coming Soon
            </p>

            <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-none font-semibold text-brand-ink-2">
              Under Construction{dots}
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-gray-600">
              We&apos;re building something new. The site will be back online shortly with a refreshed experience.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-ink-2 [animation-delay:0ms]" />
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-gray-400 [animation-delay:180ms]" />
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-gray-300 [animation-delay:360ms]" />
          </div>

          <div className="mt-10 h-1.5 overflow-hidden rounded-full bg-brand-gray-300/60">
            <div className="h-full w-1/3 animate-[loader_1.8s_ease-in-out_infinite] rounded-full bg-brand-ink-2" />
          </div>

          <p className="mt-8 text-center text-sm text-brand-gray-400">
            © {new Date().getFullYear()} Metakreativ
          </p>
        </div>
      </div>
    </div>
  );
}
