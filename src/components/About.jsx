import PillButton from './PillButton';

export default function About() {
  return (
    <section className="mx-auto flex max-w-(--container-max) flex-col gap-10 px-5 py-10 md:gap-12 md:px-8 md:py-[50px] lg:flex-row lg:gap-5 lg:px-0 lg:py-[60px]">
      <div className="w-full shrink-0 lg:w-[730px]">
        <div className="relative flex flex-col gap-5 sm:flex-row">
          <div className="h-[min(420px,60vw)] w-full shrink-0 overflow-hidden rounded-lg sm:h-[520px] sm:w-[min(430px,55%)] lg:h-[620px] lg:w-[430px]">
            <img className="h-full w-full object-cover" src="/assets/images/about-eagle.png" alt="" />
          </div>
          <div className="flex min-h-[200px] w-full shrink-0 flex-col items-center justify-center gap-10 rounded-lg bg-brand-red px-8 py-10 text-center text-white sm:h-[310px] sm:w-[min(280px,40%)] sm:gap-[90px] sm:px-10 sm:py-[50px] lg:w-[280px]">
            <span className="font-display text-[clamp(48px,12vw,70px)] leading-none font-medium tracking-[7px]">15</span>
            <span className="font-display text-sm leading-[1.7] font-medium tracking-[1.4px] uppercase">
              years of<br />experience in the<br />digital field
            </span>
          </div>
        </div>

        <div className="mt-10 lg:mt-[60px]">
          <h3 className="m-0 mb-[30px] font-display text-[clamp(18px,3vw,22px)] leading-[1.45] font-semibold tracking-[0.44px] text-brand-ink-2 uppercase">
            We don&rsquo;t just design interfaces;<br className="hidden sm:block" />we engineer digital superiority.
          </h3>
          <p className="m-0 mb-[30px] text-base leading-[1.6] text-[#4f5153]">
            At Meta Kreativ, we don&rsquo;t just connect the dots; we paint the whole picture. Complex
            websites, Mobile Apps, custom CRMs, creative branding &ndash; every line of code flows
            together, building something bigger, faster, and impossible to break. Whether we&rsquo;re
            engineering your infrastructure or refining your UI, we create systems that perform.
          </p>
          <PillButton
            variant="outline"
            icon="/assets/icons/arrow-right-1.svg"
            href="/about-us"
            className="h-12 w-full max-w-[270px] rounded-[26px] px-[26px] py-3"
          >
            more about us
          </PillButton>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="m-0 mb-[30px] text-center font-caps text-[clamp(48px,12vw,200px)] leading-none tracking-[clamp(4px,1.5vw,8px)] uppercase">
          Meta kreativ
        </h2>

        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="relative h-[min(320px,50vw)] w-full overflow-hidden rounded-lg sm:h-[400px] sm:w-[48.5%] lg:h-[470px]">
            <img className="absolute inset-0 h-full w-full object-cover" src="/assets/images/about-office-1.png" alt="" />
          </div>
          <div className="relative h-[min(400px,65vw)] flex-1 overflow-hidden rounded-lg sm:h-[500px] lg:h-[620px]">
            <img className="absolute inset-0 h-full w-full object-cover" src="/assets/images/about-office-2-bg.png" alt="" />
            <img
              className="absolute inset-0 h-full w-full object-contain object-bottom"
              src="/assets/images/about-office-2-overlay.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
