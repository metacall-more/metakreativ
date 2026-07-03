import { PORTFOLIO_FILTERS } from '../../data/portfolioPage';

export default function PortfolioFilters({ activeFilter, onFilterChange }) {
  return (
    <div className="mx-auto max-w-(--container-max) border-b border-brand-ink/10 px-5 md:px-8 lg:px-0">
      <ul className="m-0 flex list-none gap-6 overflow-x-auto py-6 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-10 md:py-8 [&::-webkit-scrollbar]:hidden">
        {PORTFOLIO_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;

          return (
            <li key={filter.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onFilterChange(filter.id)}
                className={`border-b-2 pb-1 font-display text-sm font-medium tracking-[1px] uppercase transition-colors md:text-base ${
                  isActive
                    ? 'border-brand-ink-2 text-brand-ink-2'
                    : 'border-transparent text-brand-gray-400 hover:text-brand-ink-2'
                }`}
              >
                {filter.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
