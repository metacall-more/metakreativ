export default function ProjectNarrativeSection({
  title,
  headline,
  bodyTitle,
  body,
  images,
  variant = 'light',
}) {
  const isDark = variant === 'dark';
  const isPair = images?.length === 2;
  const paragraphs = body ? (Array.isArray(body) ? body : [body]) : [];

  return (
    <section className={isDark ? 'bg-brand-dark text-white' : 'bg-brand-bg text-brand-ink-2'}>
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <p
          className={`m-0 font-display text-[clamp(28px,4vw,48px)] leading-none font-semibold tracking-[0.5px] uppercase ${
            isDark ? 'text-white' : 'text-brand-ink-2'
          }`}
        >
          {title}
        </p>
        <h2
          className={`m-0 mt-5 max-w-[1100px] font-display text-[clamp(18px,2.4vw,28px)] leading-[1.35] font-medium tracking-[0.4px] uppercase ${
            isDark ? 'text-white' : 'text-brand-ink-2'
          }`}
        >
          {headline}
        </h2>

        <div className={`mt-8 border-t md:mt-10 ${isDark ? 'border-white/15' : 'border-brand-gray-300'}`} />

        {paragraphs.length > 0 && (
          <div className="mt-10 grid md:mt-12 md:grid-cols-12">
            <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
              {bodyTitle && (
                <h3
                  className={`m-0 font-display text-base font-medium tracking-[0.3px] md:text-lg ${
                    isDark ? 'text-white/70' : 'text-[#6b6e70]'
                  }`}
                >
                  {bodyTitle}
                </h3>
              )}
              <div className={`flex flex-col gap-5 ${bodyTitle ? 'mt-4' : ''}`}>
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={`m-0 font-body text-base leading-[1.75] md:text-lg ${
                      isDark ? 'text-brand-light-text' : 'text-[#4f5153]'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {images && images.length > 0 && (
          <div
            className={
              isPair
                ? 'mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-6'
                : 'mt-10 grid grid-cols-1 items-start gap-5 md:mt-14 md:grid-cols-3 md:gap-6'
            }
          >
            {images.map((item) => (
              <div
                key={item.image}
                className={
                  isPair
                    ? 'overflow-hidden rounded-[12px]'
                    : `overflow-hidden rounded-[12px] ${item.className ?? ''}`
                }
              >
                <img
                  className={
                    isPair
                      ? 'h-[min(360px,70vw)] w-full object-cover md:h-[480px] lg:h-[560px]'
                      : 'h-auto w-full object-contain'
                  }
                  src={item.image}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
