import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageCta from '../components/PageCta';
import ContactPageHero from '../components/contact-page/ContactPageHero';
import ContactMap from '../components/contact-page/ContactMap';
import ContactSection from '../components/contact-page/ContactSection';

export default function ContactUsPage() {
  return (
    <div className="bg-brand-bg">
      <Nav theme="light" activeLink="Contact" />
      <ContactPageHero />

      <ContactMap />
      <ContactSection />

      <PageCta image="/assets/images/services/cta-bg.webp" />
      <Footer />
    </div>
  );
}
