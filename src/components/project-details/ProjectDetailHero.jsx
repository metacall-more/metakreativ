export default function ProjectDetailHero({
  label,
  title,
  subtitle,
  siteUrl,
  heroImage,
  ctaLabel = 'view project',
}) {
  return (
    <section className="mx-auto max-w-(--container-max) px-5 pb-4 pt-4 text-center md:px-8 md:pb-5 lg:px-0 lg:pb-6">
      <span className="font-display text-sm font-medium tracking-[1.4px] text-brand-red uppercase">{label}</span>
      <h1 className="m-0 mt-4 font-display text-[clamp(40px,7vw,80px)] leading-none font-semibold tracking-[1px] text-brand-ink-2 uppercase">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-[760px] font-body text-base leading-[1.75] text-[#4f5153] md:text-lg">
        {subtitle}
      </p>
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-8 inline-flex h-12 w-fit items-center justify-center gap-3 rounded-full bg-brand-ink px-8 font-display text-sm tracking-[0.5px] text-white uppercase transition-opacity duration-200 hover:opacity-75"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
        {ctaLabel}
      </a>

      <div className="mt-10 md:mt-12">
        <img
          className="h-auto w-full rounded-[20px] object-contain"
          src={heroImage}
          alt={title}
        />
      </div>
    </section>
  );
}
