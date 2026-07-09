import { PORTFOLIO_FILTERS } from '../../data/portfolioPage';

export default function PortfolioFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="mx-auto max-w-(--container-max) px-5 md:px-8 lg:px-0">
      <ul className="m-0 flex list-none justify-center gap-8 overflow-x-auto py-8 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-12 md:py-10 lg:gap-16 [&::-webkit-scrollbar]:hidden">
        {PORTFOLIO_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <li key={filter.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onFilterChange(filter.id)}
                className={`font-display text-xs font-medium tracking-[1.4px] uppercase transition-colors md:text-sm ${
                  isActive ? 'text-brand-ink-2' : 'text-brand-gray-400 hover:text-brand-ink-2'
                }`}
              >
                {isActive ? `// ${filter.label}` : filter.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
