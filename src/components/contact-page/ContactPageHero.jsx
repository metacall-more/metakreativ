export default function ContactPageHero() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 pt-6 md:px-8 lg:px-10 lg:pt-0">
      <div className="relative min-h-[min(500px,70vw)] overflow-hidden rounded-[20px]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/assets/images/contact-page/contact-hero.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(5,8,12,0.55)] via-[rgba(5,8,12,0.2)] to-[rgba(5,8,12,0.35)]" />

        <div className="relative z-[1] flex min-h-[min(500px,70vw)] flex-col justify-end gap-8 px-5 pb-10 pt-24 md:px-10 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-20 lg:pb-16 lg:pt-32">
          <div className="max-w-[420px]">
            <p className="m-0 font-body text-sm leading-[1.7] text-white/85 md:text-base">
              Ready to bring your vision to life? Tell us about your project and we&rsquo;ll help you
              shape the next step with clarity and confidence.
            </p>
          </div>

          <h1 className="m-0 max-w-[700px] font-display text-[clamp(28px,4.5vw,45px)] leading-[1.22] font-semibold tracking-[0.5px] text-white uppercase lg:text-right">
            Got a vision?
            <br />
            Let&rsquo;s bring it to life!
          </h1>
        </div>
      </div>
    </section>
  );
}
