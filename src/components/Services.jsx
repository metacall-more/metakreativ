import { TICKER_MIDDLE_SET, TICKER_SETS, useServicesTicker } from '../hooks/useServicesTicker';

const SERVICES = [
  {
    id: 'websites',
    label: 'Websites',
    image: '/assets/images/services/websites.webp',
    title: 'Digital experiences that scale',
    description:
      'From concept to launch, we craft web solutions built on solid architecture, intuitive UX, and code that grows with your ambition.',
  },
  {
    id: 'mobile-app',
    label: 'Mobile app',
    image: '/assets/images/services/mobile-app.webp',
    title: 'Mobility without compromise',
    description:
      'Native performance meets logical flow. We build mobile experiences that stay fast under pressure and look incredible on every single screen.',
  },
  {
    id: 'branding',
    label: 'Branding',
    image: '/assets/images/services/branding.webp',
    title: 'Identity that resonates',
    description:
      'Your brand is more than a logo. We shape visual identities that feel authentic, stand out in crowded markets, and grow with your business.',
  },
  {
    id: 'software',
    label: 'Software',
    image: '/assets/images/services/software.webp',
    title: 'Engineered for complexity',
    description:
      'We build custom software, CRMs, and enterprise systems that automate workflows, eliminate bottlenecks, and deliver measurable ROI.',
  },
  {
    id: 'marketing',
    label: 'Marketing',
    image: '/assets/images/services/marketing.webp',
    title: 'Amplify your message',
    description:
      'Data-driven campaigns across social, search, and email that attract the right audience and convert interest into action.',
  },
];

export default function Services() {
  const { activeIndex, trackRef, setItemRef, select } = useServicesTicker(SERVICES.length);
  const activeService = SERVICES[activeIndex];

  return (
    <section className="w-full overflow-hidden bg-brand-dark px-5 pt-16 text-white md:px-10 md:pt-24 lg:px-[100px] lg:pt-[140px]">
      <div className="mb-16 flex flex-col items-start gap-8 md:mb-24 md:gap-12 lg:mb-[140px] lg:flex-row lg:flex-wrap lg:justify-between lg:gap-[280px]">
        <h2 className="m-0 font-display text-[clamp(28px,3.2vw,50px)] font-semibold tracking-[1px] uppercase">
          The Core Capabilities
        </h2>
        <div className="flex w-full max-w-[610px] flex-col gap-6 md:gap-10">
          <span className="block font-display text-sm font-medium tracking-[1.4px] text-brand-bg uppercase">
            // Technical Suite
          </span>
          <p className="m-0 text-base leading-[1.55] text-[#959a9d] md:text-lg">
            At our creative agency, imagination meets strategy.
            <br />
            Our talented team crafts vibrant visuals and compelling narratives. We transform your
            vision into a dynamic brand experience that stands out.
          </p>
        </div>
      </div>

      <div className="services-ticker mx-[-20px] mb-16 overflow-hidden md:mx-[-40px] md:mb-20 lg:mx-[-100px] lg:mb-[100px]">
        <div
          ref={trackRef}
          className="services-ticker__track flex w-max items-center gap-6 font-caps text-[clamp(40px,11vw,200px)] leading-[0.9] whitespace-nowrap uppercase md:gap-10"
        >
          {Array.from({ length: TICKER_SETS }, (_, set) =>
            SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              const physicalIndex = set * SERVICES.length + index;
              const isInteractive = set === TICKER_MIDDLE_SET;

              return (
                <button
                  key={`${set}-${service.id}`}
                  type="button"
                  ref={setItemRef(physicalIndex)}
                  onClick={() => select(index)}
                  tabIndex={isInteractive ? 0 : -1}
                  aria-hidden={!isInteractive}
                  aria-pressed={isInteractive ? isActive : undefined}
                  className="inline-flex shrink-0 cursor-pointer items-center gap-6 border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] leading-[inherit] tracking-[inherit] uppercase md:gap-10"
                >
                  <span
                    className={`h-0.5 w-10 shrink-0 transition-colors duration-300 ${isActive ? 'bg-brand-bg' : 'bg-[#252a2c]'}`}
                    aria-hidden="true"
                  />
                  <span
                    className={`transition-colors duration-300 ${isActive ? 'text-brand-bg' : 'text-[#252a2c] hover:text-[#3a3f42]'}`}
                  >
                    {service.label}
                  </span>
                </button>
              );
            }),
          )}
        </div>
      </div>

      <div className="relative mb-16 flex min-h-[360px] items-start overflow-hidden rounded-lg md:mb-20 md:min-h-[420px] lg:mb-[100px] lg:min-h-[480px]">
        {SERVICES.map((service, index) => (
          <img
            key={service.id}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            src={service.image}
            alt=""
          />
        ))}

        <div className="relative z-[1] m-5 flex w-full min-h-[320px] flex-col items-start gap-8 bg-brand-dark px-6 py-8 sm:m-8 sm:w-[min(420px,90%)] sm:min-h-[400px] sm:gap-[50px] sm:px-10 sm:py-[50px]">
          <h3
            key={activeService.id + '-title'}
            className="services-card__text m-0 font-display text-lg font-semibold uppercase sm:text-xl"
          >
            {activeService.title}
          </h3>
          <img className="h-[50px] w-[50px]" src="/assets/icons/services-frame-icon.svg" alt="" />
          <p
            key={activeService.id + '-desc'}
            className="services-card__text m-0 text-base leading-[1.6] text-[#959a9d]"
          >
            {activeService.description}
          </p>
        </div>

        <button
          className="absolute top-5 right-5 z-[2] flex h-20 w-20 items-center justify-center rounded-full bg-brand-bg sm:top-8 sm:right-8 sm:h-[110px] sm:w-[110px] lg:top-10 lg:right-10 lg:h-[130px] lg:w-[130px]"
          aria-label={`View ${activeService.label} service`}
        >
          <img className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]" src="/assets/icons/services-arrow.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
