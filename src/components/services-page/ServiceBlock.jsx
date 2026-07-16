function FeatureList({ items }) {
  const midpoint = Math.ceil(items.length / 2);
  const columns = [items.slice(0, midpoint), items.slice(midpoint)];

  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-3 p-0 sm:grid-cols-2">
      {columns.map((column, colIndex) => (
        <li key={colIndex} className="contents">
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {column.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm leading-[1.6] text-brand-ink-2 md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-ink-2" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceBlock({ service, index }) {
  const imageFirst = index % 2 === 0;

  return (
    <section className="border-t border-brand-ink/10 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-(--container-max) px-5 md:px-8 lg:px-0">
        <h2 className="m-0 font-caps text-[clamp(48px,10vw,160px)] leading-[0.95] tracking-[clamp(3px,1vw,6px)] text-brand-ink-2 uppercase">
          {service.title}
        </h2>

        <div
          className={`mt-8 flex flex-col gap-8 md:mt-10 md:gap-10 lg:mt-12 lg:gap-12 lg:flex-row `}
        >
          <div className="w-full shrink-0 overflow-hidden rounded-lg lg:w-[48%] xl:w-[52%]">
            <img
              className="h-[min(320px,55vw)] w-full object-cover md:h-[min(400px,42vw)] lg:h-[min(480px,36vw)]"
              src={service.image}
              alt={service.title}
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-8 lg:justify-center lg:py-4">
            <p className="m-0 max-w-[560px] font-body text-base leading-[1.75] text-[#4f5153] md:text-lg">
              {service.description}
            </p>

            <FeatureList items={service.features} />

            <a
              href="/services"
              className="inline-flex w-fit items-center gap-4 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase transition-opacity hover:opacity-70"
            >
              view more services
              <img className="h-4 w-4" src="/assets/icons/arrow-right-1.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
