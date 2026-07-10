export default function ProjectImpactSection({ title, headline, body, metrics, columns, image }) {
  const hasMetrics = Array.isArray(metrics) && metrics.length > 0;
  const hasColumns = Array.isArray(columns) && columns.length > 0;

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <div className="text-center">
          <p className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">{title}</p>
          <h2 className="mx-auto m-0 mt-4 max-w-[1000px] font-display text-[clamp(24px,3.5vw,42px)] leading-[1.25] font-semibold tracking-[0.5px] text-brand-ink-2 uppercase">
            {headline}
          </h2>
          {body && (
            <p className="mx-auto m-0 mt-6 max-w-[760px] font-body text-base leading-[1.75] text-[#4f5153] md:text-lg">
              {body}
            </p>
          )}
        </div>

        {hasMetrics && (
          <div className="mt-10 grid grid-cols-2 gap-6 md:mt-14 md:grid-cols-4 md:gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="m-0 font-display text-[clamp(28px,4vw,40px)] leading-none font-semibold text-brand-red">
                  {metric.value}
                </p>
                <p className="m-0 mt-3 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {hasColumns && (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-10">
            {columns.map((column) => (
              <div key={column.label} className="text-left">
                <p className="m-0 font-display text-sm font-semibold tracking-[1.4px] text-brand-ink-2 uppercase">
                  {column.label}
                </p>
                <ul className="mt-4 list-none space-y-2 p-0">
                  {column.items.map((item) => (
                    <li key={item} className="font-body text-sm leading-[1.6] text-[#4f5153] md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {image && (
          <div className="mt-10 md:mt-14">
            <img className="h-auto w-full rounded-[20px] object-contain" src={image} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
