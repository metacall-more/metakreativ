import Logo from './Logo';
import PillButton from './PillButton';

export default function Footer() {
  return (
    <footer className="mt-[60px] bg-brand-dark text-white">
      <div className="mx-auto max-w-(--container-max) pb-20">
        <div className="flex h-[200px] items-center justify-center overflow-hidden border border-brand-dark-border">
          <p className="m-0 font-caps text-[clamp(90px,14vw,240px)] tracking-[14px] whitespace-nowrap text-[#dfdfdf] opacity-60 uppercase">
            Meta&nbsp;&nbsp;kreativ
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-brand-dark-border py-10 max-[960px]:flex-col max-[960px]:gap-5 max-[960px]:text-center">
          <Logo />
          <p className="m-0 text-right text-lg leading-[1.65] text-brand-light-text max-[960px]:text-center">
            Design. Innovate. Inspire
            <br />
            Crafting Your Creative Future.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-10 border-b border-brand-dark-border py-[45px] text-center max-[960px]:text-center">
          <div className="flex-[1_1_260px]">
            <h3 className="m-0 mb-2.5 font-display text-2xl font-medium capitalize">Ali Vitia 4, Pristina, Kosovo</h3>
            <p className="m-0 text-base text-brand-light-text">Latitude: 42.6377803, Longitude: 21.14958073</p>
          </div>
          <div className="flex-[1_1_260px]">
            <h3 className="m-0 mb-2.5 font-display text-2xl font-medium capitalize">(+383) 49-000 000</h3>
            <p className="m-0 text-base text-brand-light-text">Call Us Support &amp; Consulting 24/7</p>
          </div>
          <div className="flex-[1_1_260px]">
            <h3 className="m-0 mb-2.5 font-display text-2xl font-medium capitalize">info@metakreativ.de</h3>
            <p className="m-0 text-base text-brand-light-text">Reply Within 12 Hours</p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-start gap-10 pt-[55px] max-[960px]:grid-cols-1">
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

          <div className="flex flex-col items-center gap-10 rounded-xl border border-brand-dark-border p-10 text-center">
            <h3 className="m-0 font-display text-[40px] leading-[1.25] font-semibold uppercase">
              Your Brand
              <br />
              Our Mission
            </h3>
            <PillButton variant="solid" icon="/assets/icons/arrow-right-1.svg" href="#">
              Let&rsquo;s work together
            </PillButton>
          </div>

          <div>
            <h4 className="m-0 mb-[25px] text-center font-display text-lg font-medium uppercase">subscribe news</h4>
            <p className="m-0 mb-[25px] text-center text-base leading-[1.65] text-brand-light-text">
              Join our newsletter to stay informed about new tips, tutorials, projects, products,
              Investments!
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-[34px] text-center">
        <p className="m-0 text-base text-brand-light-text">
          Copyright &copy; 2026 <span className="text-white">MetaKreativ</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
