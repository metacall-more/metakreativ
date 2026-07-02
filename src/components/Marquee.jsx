const ITEMS = ['Design Beyond Limits', 'Crafting Tomorrow’s', 'Beyond The Ordinary', 'Innovate, Create, Inspire'];

export default function Marquee() {
  return (
    <div className="mx-auto flex max-w-(--container-max) flex-wrap items-center justify-center gap-[60px] py-[30px] font-display text-[30px] font-medium text-brand-ink-2 uppercase">
      {ITEMS.map((item, i) => (
        <span key={item} className="contents">
          <span>{item}</span>
          {i < ITEMS.length - 1 && <span className="h-1 w-1 shrink-0 bg-[#2d3031]" />}
        </span>
      ))}
    </div>
  );
}
