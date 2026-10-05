import { useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ApplicationSuccess from '../components/apply/ApplicationSuccess';

const PAGE_TITLE = 'Application sent | Meta Kreativ';

export default function ApplySuccessPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f0f2f5] text-[#050912]">
      <Nav theme="light" activeLink="Careers" />
      <div className="mx-auto w-full max-w-[1320px] flex-1 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-20 md:px-8 lg:px-10 lg:pt-16 lg:pb-24 xl:px-12">
        <ApplicationSuccess />
      </div>
      <Footer />
    </main>
  );
}
