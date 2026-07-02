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
    <section className="mx-auto max-w-[1760px] overflow-hidden rounded-lg bg-brand-dark px-[100px] pt-[140px] text-white">
      <div className="mb-[140px] flex flex-wrap items-start justify-between gap-[280px]">
        <h2 className="m-0 font-display text-[clamp(28px,3.2vw,50px)] font-semibold tracking-[1px] uppercase">
          The Core Capabilities
        </h2>
        <div className="flex max-w-[610px] flex-col gap-10">
          <span className="block font-display text-sm font-medium tracking-[1.4px] text-brand-bg uppercase">
            // Technical Suite
          </span>
          <p className="m-0 text-lg leading-[1.55] text-[#959a9d]">
            At our creative agency, imagination meets strategy.
            <br />
            Our talented team crafts vibrant visuals and compelling narratives. We transform your
            vision into a dynamic brand experience that stands out.
          </p>
        </div>
      </div>

      <div className="mx-[-100px] mb-[100px] flex items-center justify-start gap-10 overflow-hidden px-[100px] font-caps text-[clamp(60px,11vw,200px)] leading-[0.9] whitespace-nowrap uppercase">
        {TICKER.map((item) => (
          <span key={item.word} className="contents">
            <span className={`h-0.5 w-10 shrink-0 ${item.dividerOn ? 'bg-brand-bg' : 'bg-[#252a2c]'}`} />
            <span className={item.wordOn ? 'text-brand-bg' : 'text-[#252a2c]'}>{item.word}</span>
          </span>
        ))}
      </div>

      <div className="relative mb-[100px] flex min-h-[480px] items-start overflow-hidden rounded-lg">
        <img className="absolute inset-0 h-full w-full object-cover" src="/assets/images/services-card-bg.png" alt="" />
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/images/services-card-overlay.png"
          alt=""
        />
        <div className="relative z-[1] m-10 flex w-[420px] min-h-[400px] flex-col items-start gap-[50px] bg-brand-dark px-10 py-[50px]">
          <h3 className="m-0 font-display text-xl font-semibold uppercase">Mobility without compromise</h3>
          <img className="h-[50px] w-[50px]" src="/assets/icons/services-frame-icon.svg" alt="" />
          <p className="m-0 text-base leading-[1.6] text-[#959a9d]">
            Native performance meets logical flow.
            <br />
            We build mobile experiences that stay fast under pressure and look incredible on every
            single screen.
          </p>
        </div>
        <button
          className="absolute top-10 right-10 z-[2] flex h-[130px] w-[130px] items-center justify-center rounded-full bg-brand-bg"
          aria-label="View service"
        >
          <img className="h-[30px] w-[30px]" src="/assets/icons/services-arrow.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
