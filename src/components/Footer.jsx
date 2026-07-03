import Logo from './Logo';
import PillButton from './PillButton';

export default function Footer() {
  return (
    <footer className="mt-10 bg-brand-dark text-white md:mt-[60px]">
      <div className="mx-auto max-w-(--container-max) px-5 pb-12 md:px-8 md:pb-16 lg:px-0 lg:pb-20">
        <div className="flex h-[min(120px,20vw)] items-center justify-center overflow-hidden border border-brand-dark-border md:h-[160px] lg:h-[200px]">
          <p className="m-0 font-caps text-[clamp(48px,14vw,240px)] tracking-[clamp(4px,2vw,14px)] whitespace-nowrap text-[#dfdfdf] opacity-60 uppercase">
            Meta&nbsp;&nbsp;kreativ
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-b border-brand-dark-border py-8 text-center md:flex-row md:py-10 lg:items-center">
          <Logo />
          <p className="m-0 text-center text-base leading-[1.65] text-brand-light-text md:text-right md:text-lg">
            Design. Innovate. Inspire
            <br />
            Crafting Your Creative Future.
          </p>
        </div>

        <div className="flex flex-col flex-wrap justify-between gap-8 border-b border-brand-dark-border py-8 text-center sm:flex-row sm:gap-10 md:py-[45px]">
          <div className="flex-[1_1_260px]">
            <h3 className="m-0 mb-2.5 font-display text-xl font-medium capitalize md:text-2xl">Ali Vitia 4, Pristina, Kosovo</h3>
            <p className="m-0 text-sm text-brand-light-text md:text-base">Latitude: 42.6377803, Longitude: 21.14958073</p>
          </div>
          <div className="flex-[1_1_260px]">
            <h3 className="m-0 mb-2.5 font-display text-xl font-medium capitalize md:text-2xl">(+383) 49-000 000</h3>
            <p className="m-0 text-sm text-brand-light-text md:text-base">Call Us Support &amp; Consulting 24/7</p>
          </div>
          <div className="flex-[1_1_260px]">
            <h3 className="m-0 mb-2.5 font-display text-xl font-medium capitalize md:text-2xl">info@metakreativ.de</h3>
            <p className="m-0 text-sm text-brand-light-text md:text-base">Reply Within 12 Hours</p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 pt-10 md:grid-cols-2 md:pt-12 lg:grid-cols-3 lg:pt-[55px]">
          <div>
            <h4 className="m-0 mb-[25px] text-center font-display text-lg font-medium uppercase">about studio</h4>
            <p className="m-0 mb-[25px] text-center text-base leading-[1.65] text-brand-light-text">
              Meta Kreativ is a full-service creative agency turning ideas into real experiences. We
              blend design, strategy, and technology to create work that connects, inspires, and lasts.
            </p>
            <ul className="m-0 flex list-none justify-center gap-5 p-0 font-display text-sm font-medium tracking-[1.4px] uppercase">
              <li><a href="#">facebook</a></li>
              <li><a href="#">instagram</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-8 rounded-xl border border-brand-dark-border p-8 text-center md:gap-10 md:p-10 lg:order-none">
            <h3 className="m-0 font-display text-[clamp(28px,5vw,40px)] leading-[1.25] font-semibold uppercase">
              Your Brand
              <br />
              Our Mission
            </h3>
            <PillButton variant="solid" icon="/assets/icons/arrow-right-1.svg" href="#">
              Let&rsquo;s work together
            </PillButton>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="m-0 mb-[25px] text-center font-display text-lg font-medium uppercase">subscribe news</h4>
            <p className="m-0 mb-[25px] text-center text-base leading-[1.65] text-brand-light-text">
              Join our newsletter to stay informed about new tips, tutorials, projects, products,
              Investments!
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-6 text-center md:py-[34px]">
        <p className="m-0 text-sm text-brand-light-text md:text-base">
          Copyright &copy; 2026 <span className="text-white">MetaKreativ</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
