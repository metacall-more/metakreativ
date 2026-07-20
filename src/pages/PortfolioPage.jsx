import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageCta from '../components/PageCta';
import PortfolioPageHero from '../components/portfolio-page/PortfolioPageHero';
import PortfolioFilters from '../components/portfolio-page/PortfolioFilters';
import PortfolioMasonry from '../components/portfolio-page/PortfolioMasonry';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-brand-bg">
      <Nav theme="light" activeLink="Portfolio" />
      <PortfolioPageHero />

      <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PortfolioMasonry activeFilter={activeFilter} />

      <PageCta image="/assets/images/services/cta-bg.webp" />
      <Footer />
    </div>
  );
}
