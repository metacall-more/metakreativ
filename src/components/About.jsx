import PillButton from './PillButton';

export default function About() {
  return (
    <section className="mx-auto flex max-w-(--container-max) gap-5 py-[60px]">
      <div className="w-[730px] shrink-0">
        <div className="relative flex gap-5">
          <div className="h-[620px] w-[430px] shrink-0 overflow-hidden rounded-lg">
            <img className="h-full w-full object-cover" src="/assets/images/about-eagle.png" alt="" />
          </div>
          <div className="flex h-[310px] w-[280px] shrink-0 flex-col items-center justify-center gap-[90px] rounded-lg bg-brand-red px-10 py-[50px] text-center text-white">
            <span className="font-display text-[70px] leading-none font-medium tracking-[7px]">15</span>
            <span className="font-display text-sm leading-[1.7] font-medium tracking-[1.4px] uppercase">
              years of<br />experience in the<br />digital field
            </span>
          </div>
        </div>

        <div className="mt-[60px]">
          <h3 className="m-0 mb-[30px] font-display text-[22px] leading-[1.45] font-semibold tracking-[0.44px] text-brand-ink-2 uppercase">
            We don&rsquo;t just design interfaces;<br />we engineer digital superiority.
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
            href="#"
            className="h-12 w-[270px] rounded-[26px] px-[26px] py-3"
          >
            more about us
          </PillButton>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="m-0 mb-[30px] text-center font-caps text-[clamp(60px,9vw,200px)] leading-none tracking-[8px] uppercase">
          Meta kreativ
        </h2>

        <div className="flex gap-5">
          <div className="relative h-[470px] w-[48.5%] overflow-hidden rounded-lg">
            <img className="absolute inset-0 h-full w-full object-cover" src="/assets/images/about-office-1.png" alt="" />
          </div>
          <div className="relative h-[620px] flex-1 overflow-hidden rounded-lg">
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
