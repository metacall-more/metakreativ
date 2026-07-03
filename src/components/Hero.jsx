import Nav from './Nav';
import PillButton from './PillButton';

export default function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden text-white lg:min-h-[1080px]">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/assets/images/hero-bg.png"
        alt=""
      />

      <Nav />

      <div className="relative z-[2] mx-auto max-w-(--container-max) px-5 pt-[clamp(80px,18vw,330px)] md:px-8 lg:px-0 lg:pt-[clamp(140px,26vw,330px)]">
        <h1 className="m-0 max-w-[800px] font-display text-[clamp(34px,4.2vw,80px)] leading-none font-semibold tracking-[1.6px] uppercase">
          The <br />Development<br />of Digital<br />Elegance.
        </h1>
      </div>

      <PillButton
        variant="solid"
        icon="/assets/icons/arrow-right-1.svg"
        href="#"
        className="hero-cta absolute z-[3]"
      >
        Experience the work
      </PillButton>

      <div
        className="absolute z-[3] top-[420px] hidden origin-top-right items-center gap-2.5 rotate-90 font-body text-base whitespace-nowrap text-white lg:flex"
        style={{ right: 'max(20px, calc((100vw - var(--container-max)) / 2 + 20px))' }}
      >
        <a href="#">X.</a>
        <span>/</span>
        <a href="#">Tele.</a>
        <span>/</span>
        <a href="#">Fb.</a>
        <span className="ml-2.5">Follow Us —</span>
      </div>
    </header>
  );
}
