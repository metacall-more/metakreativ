import Nav from '../components/Nav';
import Footer from '../components/Footer';
import AboutPageHero from '../components/about-us/AboutPageHero';
import AboutWelcome from '../components/about-us/AboutWelcome';
import AboutStory from '../components/about-us/AboutStory';
import AboutMission from '../components/about-us/AboutMission';
import AboutExperience from '../components/about-us/AboutExperience';
import AboutTeam from '../components/about-us/AboutTeam';
import AboutImpact from '../components/about-us/AboutImpact';
import AboutCta from '../components/about-us/AboutCta';

export default function AboutUsPage() {
  return (
    <div className="bg-brand-bg">
      <Nav theme="light" activeLink="About" />
      <AboutPageHero />
      <AboutWelcome />
      <AboutStory />
      <AboutMission />
      <AboutExperience />
      <AboutTeam />
      <AboutImpact />
      <AboutCta />
      <Footer />
    </div>
  );
}
