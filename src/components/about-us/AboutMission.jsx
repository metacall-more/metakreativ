export default function AboutMission() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16">
      <div className="relative min-h-[min(520px,70vw)] overflow-hidden rounded-[20px] bg-brand-dark lg:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(254,0,0,0.35) 0%, rgba(5,10,12,0.9) 45%, #050a0c 100%), url(/assets/images/about-us/about-hero-bg.png)',
          }}
        />

        <div className="relative z-[1] flex h-full min-h-[min(520px,70vw)] items-end justify-end p-5 md:p-8 lg:min-h-[680px] lg:p-10">
          <div className="w-full max-w-[670px] bg-white px-8 py-10 md:px-12 md:py-12 lg:px-[60px] lg:py-[60px]">
            <h2 className="m-0 font-display text-2xl font-semibold text-brand-dark md:text-[30px]">Our Mission</h2>
            <p className="m-0 mt-10 max-w-[550px] font-body text-base leading-[1.65] text-[#4f5153] md:mt-16 md:text-lg">
              We exist to turn ambitious ideas into digital products that perform. Through empathy,
              craft, and relentless iteration, we build experiences that connect brands with the
              people who matter most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
