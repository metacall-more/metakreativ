const benefits = [
  {
    title: 'Studio work',
    description: 'Build from our Pristina studio, side by side with design, product, and engineering.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="3.75" y="5" width="16.5" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 3.5V6.5M16 3.5V6.5M3.75 10h16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Room to grow',
    description: 'Own features end to end, with code review and architecture conversations that raise the bar.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M4 9h16v9.5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5V9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Modern stack',
    description: 'Ship with Solidity, Web3 tooling, and a clear path from prototype to a live contract.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 19h8M12 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'A real team',
    description: 'Join a Meta Kreativ team that designs, builds, and supports you from day one.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="2.75" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 18.5c.7-2.4 2.7-3.75 4.5-3.75s3.8 1.35 4.5 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 18.5c.45-1.5 1.5-2.5 2.5-2.5 1.4 0 2.6.9 3.2 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section
      aria-labelledby="application-benefits-heading"
      className="mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20 xl:px-12"
    >
      <div className="mb-8 sm:mb-10">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded bg-[#ff3f02]" aria-hidden="true" />
          <span className="font-instrument text-xs font-medium tracking-[0.08em] text-[#050912] uppercase sm:text-sm">Why apply</span>
        </div>
        <h2
          id="application-benefits-heading"
          className="font-instrument text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold tracking-[-0.03em] text-[#111013]"
        >
          A role for focused, professional growth
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-[16px] border border-[#05091210] bg-white p-5 transition-transform duration-300 hover:-translate-y-0.5 sm:p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e0e3] bg-[#fafbfc] text-[#ff3f02]">
              {benefit.icon}
            </div>
            <h3 className="font-instrument text-lg font-semibold text-[#111013]">{benefit.title}</h3>
            <p className="font-instrument mt-2 text-sm leading-6 text-[#555555]">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
