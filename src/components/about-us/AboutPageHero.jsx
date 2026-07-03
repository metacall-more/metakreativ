export default function AboutPageHero() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 pt-6 md:px-8 lg:px-10 lg:pt-0">
      <div className="relative min-h-[min(500px,70vw)] overflow-hidden rounded-[20px]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          src="/assets/images/about-us/about-hero-bg.png"
          alt=""
        />
        <div className="absolute inset-0 bg-[rgba(5,8,12,0.1)]" />

        <div className="relative z-[1] hidden flex-wrap items-start gap-x-10 gap-y-2 px-8 pt-10 font-body text-base text-white md:flex lg:px-[70px] lg:pt-10">
          <div className="space-y-1.5">
            <p className="m-0">Based In Los Angeles, California</p>
            <p className="m-0">Dreamslab112@gmail.com +</p>
          </div>
          <div className="mx-4 hidden h-[60px] w-px bg-white/20 lg:block" aria-hidden="true" />
          <p className="m-0">Call Us — (234) 109-6666</p>
        </div>

        <div className="relative z-[1] flex min-h-[min(500px,70vw)] flex-col justify-end gap-8 px-5 pb-10 pt-24 md:px-10 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-20 lg:pb-16 lg:pt-32">
          <div className="flex items-center gap-2 font-body text-base text-white">
            <span className="flex gap-0.5" aria-hidden="true">
              <span className="h-3 w-px rotate-[17deg] bg-white" />
              <span className="h-3 w-px rotate-[17deg] bg-white" />
            </span>
            <span>About us</span>
          </div>

          <h1 className="m-0 max-w-[636px] font-display text-[clamp(28px,4.5vw,45px)] leading-[1.22] font-semibold tracking-[0.5px] text-white uppercase lg:text-right">
            Empathy and innovation
            <br />
            create engaging digital
            <br />
            experiences
          </h1>
        </div>
      </div>
    </section>
  );
}
