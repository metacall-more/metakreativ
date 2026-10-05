import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ApplicationForm from '../components/apply/ApplicationForm';
import ApplicationHero from '../components/apply/ApplicationHero';
import BenefitsSection from '../components/apply/BenefitsSection';

const PAGE_TITLE = 'Apply now | Meta Kreativ';
const PAGE_DESCRIPTION =
  'Apply for the Blockchain Developer role at Meta Kreativ. Fill in the form and take the next step in your career.';

export default function ApplyNowPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const previousDescription = meta.getAttribute('content');
    meta.setAttribute('content', PAGE_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (createdMeta) {
        meta?.remove();
      } else if (previousDescription !== null) {
        meta?.setAttribute('content', previousDescription);
      }
    };
  }, []);

  if (searchParams.get('sent') === '1') {
    return <Navigate to="/applynow/thank-you" replace />;
  }

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f0f2f5] text-[#050912]">
      <Nav theme="light" activeLink="Careers" />
      <ApplicationHero />
      <BenefitsSection />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
