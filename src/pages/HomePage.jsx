import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import About from '../components/About';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <div className="-mt-[90px] lg:-mt-[116px]">
        <Hero />
      </div>
      <Clients />
      <About />
      <Marquee />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}
