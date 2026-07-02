import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import {useState, useEffect} from 'react';

function App() {
   const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="icon">🚧</div>

        <h1>Under Construction{dots}</h1>

        <div className="loader"></div>

        <div className="footer">
          © {new Date().getFullYear()} Your Project
        </div>
      </div>
    </div>
    // <>
    //   <Hero />
    //   <Clients />
    //   <About />
    //   <Marquee />
    //   <Services />
    //   <Portfolio />
    //   <Testimonials />
    //   <Footer />
    // </>
  );
}

export default App;
