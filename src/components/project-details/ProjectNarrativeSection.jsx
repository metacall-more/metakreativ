export default function ProjectNarrativeSection({ title, headline, body, images, variant = 'light' }) {
  const isDark = variant === 'dark';

  return (
    <section className={isDark ? 'bg-brand-dark text-white' : 'bg-brand-bg text-brand-ink-2'}>
      <div className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <p className="m-0 font-display text-sm font-medium tracking-[1.4px] uppercase">{title}</p>
        <h2
          className={`m-0 mt-4 max-w-[1100px] font-display text-[clamp(24px,3.5vw,42px)] leading-[1.25] font-semibold tracking-[0.5px] uppercase ${
            isDark ? 'text-white' : 'text-brand-ink-2'
          }`}
        >
          {headline}
        </h2>

        {body && (
          <div className="mt-8 grid max-w-[1000px] gap-6 md:grid-cols-2 md:gap-10">
            {(Array.isArray(body) ? body : [body]).map((paragraph) => (
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
        )}

        {images && images.length > 0 && (
          <div className="mt-10 grid grid-cols-1 items-start gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
            {images.map((item) => (
              <div key={item.image} className={item.className ?? ''}>
                <img
                  className="h-auto w-full rounded-lg object-contain"
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
