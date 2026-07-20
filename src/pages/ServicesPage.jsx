import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageCta from '../components/PageCta';
import ServicesPageHero from '../components/services-page/ServicesPageHero';
import ServiceBlock from '../components/services-page/ServiceBlock';
import { SERVICES } from '../data/servicesPage';

export default function ServicesPage() {
  return (
    <div className="bg-brand-bg">
      <Nav theme="light" activeLink="Services" />
      <ServicesPageHero />

      <div className="pb-8 md:pb-12 lg:pb-16">
        {SERVICES.map((service, index) => (
          <ServiceBlock key={service.id} service={service} index={index} />
        ))}
      </div>

      <PageCta />
      <Footer />
    </div>
  );
}
