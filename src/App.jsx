import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import UnderConstruction from './components/UnderConstruction';

function App() {
  // return <UnderConstruction />;

  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Marquee />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
