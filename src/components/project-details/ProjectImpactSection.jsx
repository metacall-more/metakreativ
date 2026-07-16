export default function ProjectImpactSection({
  title,
  headline,
  bodyTitle,
  body,
  metrics,
  columns,
  image,
}) {
  const hasMetrics = Array.isArray(metrics) && metrics.length > 0;
  const hasColumns = Array.isArray(columns) && columns.length > 0;

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="m-0 font-display text-[clamp(28px,4vw,48px)] leading-none font-semibold tracking-[0.5px] text-brand-ink-2 uppercase">
              {title}
            </p>
            <h2 className="m-0 mt-5 max-w-[720px] font-display text-[clamp(18px,2.4vw,28px)] leading-[1.35] font-medium tracking-[0.4px] text-brand-ink-2 uppercase">
              {headline}
            </h2>
          </div>

          {(bodyTitle || body) && (
            <div className="md:col-span-6 lg:col-span-5">
              {bodyTitle && (
                <h3 className="m-0 font-display text-base font-medium tracking-[0.3px] text-[#6b6e70] md:text-lg">
                  {bodyTitle}
                </h3>
              )}
              {body && (
                <p
                  className={`m-0 font-body text-base leading-[1.75] text-[#4f5153] md:text-lg ${
                    bodyTitle ? 'mt-4' : ''
                  }`}
                >
                  {body}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-brand-gray-300 md:mt-12" />

        {hasColumns && (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-10">
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

        {hasMetrics && !hasColumns && (
          <div className="mt-10 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-4 md:gap-8">
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

        {image && (
          <div className="mt-10 overflow-hidden rounded-[20px] md:mt-14">
            <img
              className="aspect-[16/10] h-auto w-full object-cover object-[center_35%]"
              src={image}
              alt=""
            />
          </div>
        )}
      </div>
    </section>
  );
}
