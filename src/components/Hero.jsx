import Logo from './Logo';
import PillButton from './PillButton';

const NAV_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

export default function Hero() {
  return (
    <header className="relative min-h-[1080px] overflow-hidden text-white">
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/assets/images/hero-bg.png"
        alt=""
      />

      <nav className="relative z-[3] mx-auto flex max-w-(--container-max) items-center gap-10 pt-[30px]">
        <Logo />

        <div className="h-[70px] w-px shrink-0 bg-white/15" aria-hidden="true" />

        <div className="flex h-[70px] min-w-0 flex-1 items-center justify-between rounded-lg bg-[rgba(217,217,217,0.16)] px-[60px] py-5 backdrop-blur-[20px]">
          <ul className="flex items-center gap-10 font-display text-sm font-medium tracking-[1px] uppercase">
            {NAV_LINKS.map((label, i) => (
              <li key={label}>
                <a
                  href="#"
                  className={`transition-colors duration-200 ${
                    i === 0 ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button className="h-4 w-4 shrink-0" aria-label="Search">
            <img className="h-full w-full" src="/assets/icons/search.svg" alt="" />
          </button>
        </div>

        <PillButton variant="outline-light" icon="/assets/icons/arrow-right-white.svg" href="#">
          Get In Touch
        </PillButton>

        <div className="flex shrink-0 items-center gap-5">
          <div className="flex items-center gap-0.5 text-base text-[#9ab2bc] uppercase">
            Eng
            <img className="h-4 w-4" src="/assets/icons/angle-down.svg" alt="" />
          </div>
          <button
            className="grid h-[26px] w-[26px] grid-cols-2 content-center justify-center gap-3.5"
            aria-label="Open menu"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-[10px] bg-white" />
            ))}
          </button>
        </div>
      </nav>

      <div className="relative z-[2] mx-auto max-w-(--container-max) pt-[clamp(140px,26vw,330px)]">
        <h1 className="m-0 max-w-[800px] font-display text-[clamp(34px,4.2vw,80px)] leading-none font-semibold tracking-[1.6px] uppercase">
          The <br />Development<br />of Digital<br />Elegance.
        </h1>
      </div>

      <PillButton
        variant="solid"
        icon="/assets/icons/arrow-right-1.svg"
        href="#"
        className="absolute z-[3] bottom-[90px]"
        style={{ right: 'max(20px, calc((100vw - var(--container-max)) / 2))' }}
      >
        Experience the work
      </PillButton>

      <div
        className="absolute z-[3] top-[420px] flex origin-top-right items-center gap-2.5 rotate-90 font-body text-base whitespace-nowrap text-white"
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
