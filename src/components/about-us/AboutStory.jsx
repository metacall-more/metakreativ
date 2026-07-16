import PillButton from '../PillButton';

const VALUES = [
  {
    title: 'Strong Ideas, Done Right',
    description: 'We turn simple ideas into clear, effective creative work.',
  },
  {
    title: 'Built to Connect',
    description: 'We combine design and strategy to create brands people understand and remember.',
  },
  {
    title: 'Real Partnership',
    description: 'We work closely with you, keeping things simple, honest, and focused on results.',
  },
];

export default function AboutStory() {
  return (
    <section className="border-t border-brand-ink/15 bg-brand-bg">
      <div className="mx-auto max-w-(--container-max) px-5 py-10 md:px-8 md:py-14 lg:px-0 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 font-display text-sm font-medium tracking-[1.4px] uppercase md:mb-14 md:flex-row md:items-center md:justify-between">
          <span className="text-brand-ink-2">// about meta kreativ</span>
          <span className="text-brand-ink-2 md:text-right">since 1996</span>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          <div className="lg:w-1/2 lg:pr-16 lg:pt-10 xl:pr-24">
            <h2 className="m-0 font-display text-[clamp(32px,4vw,50px)] leading-[1.4] font-semibold tracking-[0.5px] text-brand-dark uppercase">
              Our story, raw. real. unscripted.
            </h2>
            <p className="mt-10 max-w-[510px] font-display text-lg leading-9 tracking-[0.4px] text-brand-ink-2 md:text-xl">
              We believe that creativity isn&rsquo;t just about visuals... it&rsquo;s about creating
              meaning. We&rsquo;re a multidisciplinary creative agency focused on building digital
              solutions, from websites and CRM systems to mobile apps, all shaped by clear strategy
              and thoughtful design.
            </p>
          </div>

          <div className="hidden w-px shrink-0 bg-brand-ink/15 lg:block" aria-hidden="true" />

          <div className="flex flex-col gap-10 lg:w-1/2 lg:pl-16 xl:pl-24">
            <div className="flex flex-col gap-6">
              {VALUES.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-[26px] w-[26px] shrink-0 -scale-y-100"
                      src="/assets/images/about-us/about-story-icon.svg"
                      alt=""
                    />
                    <h3 className="m-0 font-display text-xl font-medium text-brand-dark">{item.title}</h3>
                  </div>
                  <p className="m-0 pl-7 font-body text-base leading-[1.65] text-[#4f5153]">{item.description}</p>
                </div>
              ))}
            </div>

            <PillButton
              variant="outline"
              icon="/assets/icons/arrow-right-1.svg"
              href="/about-us"
              className="h-12 w-full max-w-[270px] rounded-[27px] px-[26px] py-3"
            >
              more about us
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
