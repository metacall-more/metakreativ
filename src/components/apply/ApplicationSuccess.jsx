import { Link } from 'react-router-dom';

export default function ApplicationSuccess() {
  return (
    <section
      aria-labelledby="application-success-heading"
      className="animate-fade-up mx-auto w-full max-w-[720px] rounded-[24px] border border-[#05091214] bg-white px-6 py-12 text-center shadow-[0_20px_50px_-30px_rgba(5,9,18,0.35)] sm:px-10 sm:py-16"
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff3f02] text-white" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <path d="M6 12.5 10.2 16.5 18 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="font-instrument mb-3 text-sm font-medium tracking-[0.08em] text-[#ff3f02] uppercase">Application sent</p>
      <h1
        id="application-success-heading"
        className="font-instrument text-[clamp(1.75rem,4vw,2.5rem)] leading-tight font-semibold tracking-[-0.03em] text-[#111013]"
      >
        Thank you for your application!
      </h1>
      <p className="font-instrument mx-auto mt-4 max-w-[520px] text-base leading-7 text-[#555555] sm:text-lg">
        We have received your application. Our team will review it and get back to you about the next steps.
      </p>
      <Link
        to="/"
        className="font-instrument mt-8 inline-flex h-12 min-w-[180px] items-center justify-center rounded-full bg-[#ff3f02] px-6 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050912]"
      >
        Back to home
      </Link>
    </section>
  );
}
