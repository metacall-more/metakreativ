export default function ServicesPageHero() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 pt-6 md:px-8 lg:px-10 lg:pt-0">
      <div className="relative min-h-[min(500px,70vw)] overflow-hidden rounded-[20px]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/assets/images/services/services-hero.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(5,8,12,0.75)] via-[rgba(5,8,12,0.45)] to-[rgba(254,0,0,0.25)]" />

        <div className="relative z-[1] flex min-h-[min(500px,70vw)] flex-col justify-end gap-8 px-5 pb-10 pt-24 md:px-10 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-20 lg:pb-16 lg:pt-32">
          <div className="flex items-center gap-2 font-body text-base text-white">
            <span className="flex gap-0.5" aria-hidden="true">
              <span className="h-3 w-px rotate-[17deg] bg-white" />
              <span className="h-3 w-px rotate-[17deg] bg-white" />
            </span>
            <span>Services</span>
          </div>

          <h1 className="m-0 max-w-[700px] font-display text-[clamp(28px,4.5vw,45px)] leading-[1.22] font-semibold tracking-[0.5px] text-white uppercase lg:text-right">
            Turning concepts
            <br />
            into masterpieces
          </h1>
        </div>
      </div>
    </section>
  );
}
