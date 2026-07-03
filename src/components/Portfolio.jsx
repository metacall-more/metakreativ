import { usePortfolioScroll } from '../hooks/usePortfolioScroll';

const PROJECTS = [
  {
    img: '/assets/images/portfolio-1.png',
    alt: 'Lissus Studio',
    icon: '/assets/icons/arrow-right-4.svg',
    title: 'Lissus Studio',
    tags: ['digital marketing', 'Branding identity'],
  },
  {
    img: '/assets/images/portfolio-2.png',
    alt: 'Telling Stories That Matter',
    icon: '/assets/icons/link-icon-2.svg',
    title: 'Telling Stories That Matter',
    tags: ['Branding', 'graphic design'],
  },
  {
    img: '/assets/images/portfolio-3.png',
    alt: 'Redefining Creativity',
    icon: '/assets/icons/link-icon-3.svg',
    title: 'Redefining Creativity',
    tags: ['Branding', 'website design'],
  },
  {
    img: '/assets/images/portfolio-4.png',
    alt: 'Marketing with Emotion',
    icon: '/assets/icons/link-icon-4.svg',
    title: 'Marketing with Emotion',
    tags: ['creative', 'digital marketing'],
  },
  {
    img: '/assets/images/portfolio-5.png',
    alt: 'Marketing with Emotion',
    icon: '/assets/icons/link-icon-5.svg',
    title: 'Marketing with Emotion',
    tags: ['Branding', 'graphic design'],
  },
];

export default function Portfolio() {
  const { stackRef, setCardRef, rollerRef } = usePortfolioScroll(PROJECTS.length);

  return (
    <section className="mx-auto max-w-(--container-max) border-t border-brand-gray-300 px-5 pt-6 pb-10 md:px-8 md:pt-[30px] md:pb-[50px] lg:px-0 lg:pb-[60px]">
      <div className="flex flex-col gap-3 pt-5 font-display text-xs font-medium tracking-[1.4px] uppercase sm:flex-row sm:justify-between sm:pt-[27px] sm:text-sm">
        <span>// Showcasing Our Outstanding Projects</span>
        <span>PRECISION. SCALE. LEGACY.</span>
      </div>

      <div className="mt-6 text-center md:mt-[30px]">
        <h2 className="m-0 font-caps text-[clamp(48px,10vw,180px)] leading-[0.9] uppercase">The Meta Edition</h2>
        <div className="mt-5 border-t border-brand-gray-300" />
      </div>

      <div className="flex items-center justify-between gap-6 max-lg:flex-col max-lg:items-stretch">
        <div className="h-5 shrink-0 overflow-hidden font-display text-lg font-medium tracking-[0.9px] max-lg:hidden">
          <div ref={rollerRef} className="portfolio__counter-roller flex flex-col">
            {PROJECTS.map((_, i) => (
              <span key={i} className="h-5 leading-5">
                {String(i + 1).padStart(2, '0')}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={stackRef}
          className="relative mx-auto my-10 h-[calc(min(700px,62vh)+150px)] w-[min(1300px,84vw)] overflow-hidden [perspective:1000px] [perspective-origin:50%_-55%] max-lg:my-10 max-lg:flex max-lg:h-auto max-lg:w-full max-lg:flex-col max-lg:gap-5 max-lg:![perspective:none]"
        >
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              ref={setCardRef(i)}
              className="portfolio-card absolute top-[150px] right-0 bottom-0 left-0 overflow-hidden rounded-[20px] bg-brand-gray-600 will-change-transform max-lg:top-auto max-lg:right-auto max-lg:bottom-auto max-lg:left-auto"
            >
              <img className="absolute inset-0 h-full w-full object-cover" src={project.img} alt={project.alt} />
              <div className="absolute inset-0 bg-linear-to-b from-black/0 from-50% to-black/40" />
              <button
                className="portfolio-card__link absolute left-[50px] bottom-[50px] z-2 flex h-20 w-20 items-center justify-center rounded-full bg-brand-bg max-lg:opacity-100"
                aria-label="Open project"
              >
                <img className="h-4 w-4" src={project.icon} alt="" />
              </button>
              <div className="portfolio-card__footer absolute right-[50px] bottom-5 left-[50px] z-2 flex flex-wrap items-end justify-between gap-4 max-lg:opacity-100 sm:gap-6">
                <h3 className="m-0 font-display text-lg font-semibold text-brand-bg uppercase sm:text-2xl">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.7px] text-brand-bg uppercase sm:gap-4 sm:text-sm">
                  {project.tags.map((tag, ti) => (
                    <span key={tag} className="contents">
                      {ti > 0 && <span className="h-[5px] w-[5px] rounded-full bg-current" />}
                      <span className="underline">{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <span className="shrink-0 font-display text-lg font-medium tracking-[0.9px] max-lg:hidden">
          / {String(PROJECTS.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
