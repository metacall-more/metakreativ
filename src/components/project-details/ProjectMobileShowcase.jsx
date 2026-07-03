export default function ProjectMobileShowcase({ title, headline, mobiles }) {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <p className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">{title}</p>
        <h2 className="m-0 mt-4 max-w-[1100px] font-display text-[clamp(24px,3.5vw,42px)] leading-[1.25] font-semibold tracking-[0.5px] text-brand-ink-2 uppercase">
          {headline}
        </h2>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-14 md:gap-6 [&::-webkit-scrollbar]:hidden">
          {mobiles.map((src, index) => (
            <div
              key={src}
              className="h-[min(420px,60vw)] w-[min(220px,42vw)] shrink-0 overflow-hidden rounded-[28px] bg-brand-dark md:h-[480px] md:w-[240px]"
            >
              <img className="h-full w-full object-cover" src={src} alt={`Mobile screen ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
