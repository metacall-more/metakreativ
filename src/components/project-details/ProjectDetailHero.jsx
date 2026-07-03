import PillButton from '../PillButton';

export default function ProjectDetailHero({ label, title, subtitle, siteUrl, heroImage }) {
  return (
    <section className="mx-auto max-w-(--container-max) px-5 pb-10 pt-4 text-center md:px-8 md:pb-14 lg:px-0 lg:pb-16">
      <span className="font-display text-sm font-medium tracking-[1.4px] text-brand-red uppercase">{label}</span>
      <h1 className="m-0 mt-4 font-display text-[clamp(40px,7vw,80px)] leading-none font-semibold tracking-[1px] text-brand-ink-2 uppercase">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-[760px] font-body text-base leading-[1.75] text-[#4f5153] md:text-lg">
        {subtitle}
      </p>
      <PillButton
        variant="outline"
        icon="/assets/icons/arrow-right-1.svg"
        href={siteUrl}
        className="mx-auto mt-8 h-12 rounded-[27px] px-8"
      >
        Visit Site
      </PillButton>

      <div className="mx-auto mt-10 max-w-[1200px] overflow-hidden rounded-[20px] md:mt-12">
        <img className="h-[min(420px,55vw)] w-full object-cover md:h-[min(520px,42vw)]" src={heroImage} alt={title} />
      </div>
    </section>
  );
}
