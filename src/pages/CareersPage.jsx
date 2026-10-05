import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import RecruitmentHeroSection from '../components/careers/RecruitmentHeroSection';

const PAGE_TITLE = 'Careers | Meta Kreativ';

const openings = [
  {
    position: 'Blockchain Developer',
    roles: '(1 open role)',
    type: 'Full-time',
    applyLabel: 'Apply now',
    href: '/applynow',
  },
];

function ApplyArrow() {
  return (
    <span className="ml-2 flex h-4 w-4 items-center justify-center rounded-full border border-white">
      <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function CareersPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-[#f0f2f5]">
      <Nav theme="light" activeLink="Careers" />

      <div className="mx-auto mt-10 mb-10 w-full max-w-[1520px] px-4 sm:mt-14 sm:mb-12 sm:px-6 lg:px-10">
        <h1 className="font-instrument max-w-[16ch] text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] font-semibold text-[#ff3f02]">
          JOIN US &amp; <br /> LEAVE A MARK <br /> ON YOUR CAREER.
        </h1>
      </div>

      <section
        id="open-roles"
        aria-label="Open roles"
        className="mx-auto mb-[8%] w-full max-w-[1520px] scroll-mt-28 px-4 sm:px-6 lg:px-10"
      >
        <RecruitmentHeroSection />

        <div className="mt-10 flex w-full flex-col items-start">
          <div className="hidden w-full items-center border-b border-[#d9d9d9] py-3 text-xs text-[#7f7f7f] lg:flex lg:text-sm">
            <div className="w-1/4 pl-1">Position</div>
            <div className="w-1/4">Openings</div>
            <div className="w-1/4">Type</div>
            <div className="flex-1" />
          </div>

          {openings.map((job) => (
            <div
              key={job.position}
              className="flex w-full flex-col items-start gap-4 border-b border-[#d9d9d9] py-6 text-center lg:flex-row lg:items-center lg:gap-0 lg:text-left"
            >
              <div className="w-full pl-1 text-lg font-medium text-[#050912] lg:w-1/4 lg:text-xl">
                <Link
                  to={job.href}
                  className="transition-colors hover:text-[#ff3f02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3f02]"
                >
                  {job.position}
                </Link>
              </div>

              <div className="w-full text-base text-[#7f7f7f] lg:w-1/4 lg:text-lg">{job.roles}</div>

              <div className="w-full text-base text-[#7f7f7f] lg:w-1/4 lg:text-lg">{job.type}</div>

              <div className="flex w-full justify-center lg:flex-1 lg:justify-end">
                <Link
                  to={job.href}
                  aria-label={`${job.applyLabel} for ${job.position}`}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#ff5c00] px-4 text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  {job.applyLabel}
                  <ApplyArrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
