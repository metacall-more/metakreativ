import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLayoutClass, PORTFOLIO_PROJECTS } from '../../data/portfolioPage';

const INITIAL_VISIBLE = 9;
const LOAD_MORE_COUNT = 6;

function LoadMoreIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.2 8A5.2 5.2 0 0 0 4.9 4.9L4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4V7.2H7.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.8 8A5.2 5.2 0 0 0 11.1 11.1L12 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V8.8H8.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PortfolioMasonry({ activeFilter }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section className="mx-auto max-w-(--container-max) px-5 pb-12 md:px-8 md:pb-16 lg:px-0 lg:pb-20">
      <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[200px] md:grid-cols-3 md:gap-5 lg:auto-rows-[240px] lg:gap-6">
        {visibleProjects.map((project) => {
          const className = `group relative overflow-hidden bg-brand-gray-300 ${getLayoutClass(project.layout)}`;
          const content = (
            <>
              <img
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] md:min-h-0 md:h-full"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-5 left-5 font-display text-sm font-medium tracking-[1px] text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {project.title}
              </span>
            </>
          );

          if (project.slug) {
            return (
              <Link key={project.id} to={`/portfolio/${project.slug}`} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <a key={project.id} href="#" className={className}>
              {content}
            </a>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-16 text-center font-body text-lg text-brand-gray-600">
          No projects found in this category.
        </p>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center md:mt-16">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
            className="inline-flex items-center gap-3 rounded-full bg-[#d2d7db] px-8 py-4 font-display text-xs font-medium tracking-[1.4px] text-brand-ink-2 uppercase transition-opacity hover:opacity-75 md:text-sm"
          >
            Load More
            <LoadMoreIcon />
          </button>
        </div>
      )}
    </section>
  );
}
