const ITEMS = ['Design Beyond Limits', 'Crafting Tomorrow’s', 'Beyond The Ordinary', 'Innovate, Create, Inspire'];

const textClass =
  'font-display text-[clamp(14px,2.8vw,30px)] font-medium whitespace-nowrap text-brand-ink-2 uppercase';

function MarqueeItems() {
  return ITEMS.map((item) => (
    <span key={item} className="inline-flex shrink-0 items-center gap-4 sm:gap-6 md:gap-10">
      <span>{item}</span>
      <span className="h-1 w-1 shrink-0 bg-[#2d3031]" aria-hidden="true" />
    </span>
  ));
}

export default function Marquee() {
  return (
    <>
      <div
        className={`mx-auto hidden max-w-(--container-max) flex-nowrap items-center justify-center gap-[60px] px-[100px] py-[30px] lg:flex ${textClass}`}
      >
        {ITEMS.map((item, i) => (
          <span key={item} className="contents">
            <span className="shrink-0">{item}</span>
            {i < ITEMS.length - 1 && <span className="h-1 w-1 shrink-0 bg-[#2d3031]" aria-hidden="true" />}
          </span>
        ))}
      </div>

      <div className="text-marquee overflow-hidden py-6 md:py-[30px] lg:hidden">
        <div className={`text-marquee__track flex w-max flex-nowrap items-center px-5 md:px-8 ${textClass}`}>
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
    </>
  );
}
