export default function PageCta({ image = '/assets/images/services/cta-bg.webp' }) {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+120px)] px-5 py-10 md:px-8 md:py-14 lg:px-[60px] lg:py-16">
      <div className="relative flex min-h-[min(360px,55vw)] items-center justify-center overflow-hidden rounded-[20px] md:min-h-[420px] lg:min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(5,10,12,0.2) 0%, rgba(254,0,0,0.55) 100%), url(${image})`,
          }}
        />
        <h2 className="relative z-[1] m-0 px-6 text-center font-caps text-[clamp(56px,12vw,200px)] leading-none tracking-[clamp(4px,1.5vw,8px)] text-white uppercase">
          Let&rsquo;s work together
        </h2>
      </div>
    </section>
  );
}
