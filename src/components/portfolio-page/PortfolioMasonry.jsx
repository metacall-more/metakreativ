import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLayoutClass, PORTFOLIO_PROJECTS } from '../../data/portfolioPage';

const ITEMS_PER_PAGE = 8;

export default function PortfolioMasonry({ activeFilter }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="mx-auto max-w-(--container-max) px-5 py-10 md:px-8 md:py-12 lg:px-0 lg:py-16">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-3 md:gap-6 lg:auto-rows-[260px]">
        {visibleProjects.map((project) => {
          const className = `group relative overflow-hidden rounded-lg bg-brand-gray-300 ${getLayoutClass(project.layout)}`;
          const content = (
            <>
              <img
                className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:min-h-0 md:h-full"
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

      {totalPages > 1 && (
        <nav
          className="mt-12 flex items-center justify-center gap-4 font-display text-sm font-medium tracking-[1px] text-brand-ink-2"
          aria-label="Portfolio pagination"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="transition-opacity hover:opacity-60 disabled:opacity-30"
            aria-label="Previous page"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;
            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={`min-w-6 transition-opacity hover:opacity-60 ${
                  currentPage === pageNumber ? 'text-brand-red' : ''
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="transition-opacity hover:opacity-60 disabled:opacity-30"
            aria-label="Next page"
          >
            &gt;
          </button>
        </nav>
      )}
    </section>
  );
}
