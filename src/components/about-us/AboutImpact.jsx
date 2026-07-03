const STATS = [
  {
    value: '12',
    label: 'Total Projects',
    description:
      'We deliver end-to-end solutions across branding, web, mobile, and software — each project built to perform.',
  },
  {
    value: '98%',
    label: 'Happy Customers',
    description:
      'Our clients stay because we listen, adapt, and deliver work that exceeds expectations every time.',
  },
  {
    value: '150+',
    label: 'Completed Tasks',
    description:
      'From strategy sessions to shipped products, we move fast without sacrificing quality or craft.',
  },
  {
    value: '10+',
    label: 'Creative Minds',
    description:
      'A multidisciplinary team of designers, developers, and strategists united by one goal: your success.',
  },
];

export default function AboutImpact() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="shrink-0 lg:w-[200px]">
          <span className="font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
            // talking number
          </span>
        </div>
        <p className="m-0 max-w-[740px] font-body text-lg leading-[1.65] text-[#4f5153] md:text-xl">
          We measure our success by the success of our clients. Every project is an opportunity to
          push boundaries, solve real problems, and create digital experiences that last.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 border-t border-brand-gray-300 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex min-h-[320px] flex-col border-b border-brand-gray-300 p-8 sm:min-h-[400px] sm:p-11 lg:min-h-[450px] lg:border-r lg:last:border-r-0"
          >
            <div className="mb-6">
              <p className="m-0 font-display text-[clamp(40px,6vw,60px)] leading-none font-semibold text-brand-red">
                {stat.value}
              </p>
              <p className="m-0 mt-4 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
                {stat.label}
              </p>
            </div>
            <p className="m-0 mt-auto font-body text-base leading-[1.65] text-[#4f5153]">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
