/* Exact on/off state per word and its leading divider, pulled from Figma
   get_design_context for node 1249:3 -- the ticker is a repeating
   divider+word unit (one divider before each word, 4 total), not a
   divider-between-words pattern, and "Branding" is off despite having
   no distinguishing visual cue in a quick glance at the screenshot. */
const TICKER = [
  { word: 'Websites', wordOn: false, dividerOn: false },
  { word: 'Mobile app', wordOn: true, dividerOn: true },
  { word: 'Branding', wordOn: false, dividerOn: true },
  { word: 'Software', wordOn: false, dividerOn: false },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-[1760px] overflow-hidden rounded-none bg-brand-dark px-5 pt-16 text-white md:rounded-lg md:px-10 md:pt-24 lg:px-[100px] lg:pt-[140px] min-[1921px]:max-w-[calc(var(--container-max)+40px)]">
      <div className="mb-16 flex flex-col items-start gap-8 md:mb-24 md:gap-12 lg:mb-[140px] lg:flex-row lg:flex-wrap lg:justify-between lg:gap-[280px]">
        <h2 className="m-0 font-display text-[clamp(28px,3.2vw,50px)] font-semibold tracking-[1px] uppercase">
          The Core Capabilities
        </h2>
        <div className="flex w-full max-w-[610px] flex-col gap-6 md:gap-10">
          <span className="block font-display text-sm font-medium tracking-[1.4px] text-brand-bg uppercase">
            // Technical Suite
          </span>
          <p className="m-0 text-base leading-[1.55] text-[#959a9d] md:text-lg">
            At our creative agency, imagination meets strategy.
            <br />
            Our talented team crafts vibrant visuals and compelling narratives. We transform your
            vision into a dynamic brand experience that stands out.
          </p>
        </div>
      </div>

      <div className="mx-[-20px] mb-16 flex items-center justify-start gap-6 overflow-x-auto px-5 font-caps text-[clamp(40px,11vw,200px)] leading-[0.9] whitespace-nowrap uppercase [-ms-overflow-style:none] [scrollbar-width:none] md:mx-[-40px] md:mb-20 md:gap-10 md:px-10 lg:mx-[-100px] lg:mb-[100px] lg:px-[100px] [&::-webkit-scrollbar]:hidden">
        {TICKER.map((item) => (
          <span key={item.word} className="contents">
            <span className={`h-0.5 w-10 shrink-0 ${item.dividerOn ? 'bg-brand-bg' : 'bg-[#252a2c]'}`} />
            <span className={item.wordOn ? 'text-brand-bg' : 'text-[#252a2c]'}>{item.word}</span>
          </span>
        ))}
      </div>

      <div className="relative mb-16 flex min-h-[360px] items-start overflow-hidden rounded-lg md:mb-20 md:min-h-[420px] lg:mb-[100px] lg:min-h-[480px]">
        <img className="absolute inset-0 h-full w-full object-cover" src="/assets/images/services-card-bg.png" alt="" />
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/services-card-overlay.png"
          alt=""
        />
        <div className="relative z-[1] m-5 flex w-full min-h-[320px] flex-col items-start gap-8 bg-brand-dark px-6 py-8 sm:m-8 sm:w-[min(420px,90%)] sm:min-h-[400px] sm:gap-[50px] sm:px-10 sm:py-[50px]">
          <h3 className="m-0 font-display text-lg font-semibold uppercase sm:text-xl">Mobility without compromise</h3>
          <img className="h-[50px] w-[50px]" src="/assets/icons/services-frame-icon.svg" alt="" />
          <p className="m-0 text-base leading-[1.6] text-[#959a9d]">
            Native performance meets logical flow.
            <br />
            We build mobile experiences that stay fast under pressure and look incredible on every
            single screen.
          </p>
        </div>
        <button
          className="absolute top-5 right-5 z-[2] flex h-20 w-20 items-center justify-center rounded-full bg-brand-bg sm:top-8 sm:right-8 sm:h-[110px] sm:w-[110px] lg:top-10 lg:right-10 lg:h-[130px] lg:w-[130px]"
          aria-label="View service"
        >
          <img className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]" src="/assets/icons/services-arrow.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
