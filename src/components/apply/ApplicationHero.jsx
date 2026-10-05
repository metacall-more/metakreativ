const scrollToForm = () => {
  const form = document.getElementById('application-form');
  if (!form) return;
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function ApplicationHero() {
  return (
    <section aria-labelledby="application-hero-heading" className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#ff3f02]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#050912]/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-12 lg:px-10 xl:px-12">
        <div className="min-w-0 lg:col-span-6">
          <div className="animate-fade-up mb-5 inline-flex items-center gap-2 sm:mb-6" style={{ '--animation-delay': '0.05s' }}>
            <span className="h-2 w-2 shrink-0 rounded bg-[#ff3f02]" aria-hidden="true" />
            <span className="font-instrument text-xs font-medium tracking-[0.08em] text-[#050912] uppercase sm:text-sm">
              Blockchain Developer
            </span>
          </div>

          <h1
            id="application-hero-heading"
            className="travel-font animate-fade-up text-[clamp(1.85rem,4.6vw,3.15rem)] leading-[1.08] font-normal tracking-[0] text-[#050912]"
            style={{ '--animation-delay': '0.1s' }}
          >
            Start your
            <br />
            career as a
            <br />
            <span className="whitespace-nowrap text-[#ff3f02]">Blockchain Developer</span>
          </h1>

          <p
            className="font-instrument animate-fade-up mt-5 max-w-[540px] text-base leading-7 tracking-[-0.3px] text-[#050912] sm:mt-6 sm:text-lg sm:leading-8"
            style={{ '--animation-delay': '0.18s' }}
          >
            Meta Kreativ is hiring a blockchain developer to design, build, and ship secure on-chain products. Fill in
            the form — our team reviews your profile and gets back to you with the next steps.
          </p>

          <div className="animate-fade-up mt-7 sm:mt-8" style={{ '--animation-delay': '0.26s' }}>
            <button
              type="button"
              onClick={scrollToForm}
              className="font-instrument inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff3f02] px-6 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050912] sm:h-[52px] sm:px-7"
            >
              Apply now
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white" aria-hidden="true">
                <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div
          className="animate-fade-up relative mx-auto w-full max-w-[540px] lg:col-span-6 lg:max-w-none"
          style={{ '--animation-delay': '0.22s' }}
        >
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-[#05091212] bg-white shadow-[0_20px_50px_-30px_rgba(5,9,18,0.35)] sm:rounded-[32px]">
              <img
                src="/assets/images/careers/gallery-2.png"
                alt="The Meta Kreativ team at work in the studio"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>

            <div className="absolute top-5 right-3 rounded-[16px] border border-white/10 bg-[#050912]/90 px-4 py-3 text-white shadow-sm backdrop-blur-md sm:top-8 sm:right-6">
              <p className="font-instrument text-xs tracking-[0.06em] text-white/70 uppercase">Application</p>
              <p className="font-instrument mt-0.5 text-sm font-semibold">2 clear steps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
