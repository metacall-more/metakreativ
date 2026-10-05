import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactUsPage from './pages/ContactUsPage';
import CareersPage from './pages/CareersPage';
import ApplyNowPage from './pages/ApplyNowPage';
import ApplySuccessPage from './pages/ApplySuccessPage';
import ProjectDetailPage from './pages/project-details/ProjectDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/applynow" element={<ApplyNowPage />} />
        <Route path="/applynow/thank-you" element={<ApplySuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
