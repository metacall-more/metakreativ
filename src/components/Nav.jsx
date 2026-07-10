import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import PillButton from './PillButton';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  // { label: 'Blog', to: '#blog' },
  { label: 'Contact', to: '/contact-us' },
];

export default function Nav({ theme = 'dark', activeLink }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLight = theme === 'light';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  const isActive = (link) => {
    if (activeLink) return link.label === activeLink;
    if (link.to === '/') return location.pathname === '/';
    return location.pathname === link.to;
  };

  const linkClass = (active) =>
    isLight
      ? active
        ? 'text-brand-ink-2'
        : 'text-brand-ink-2/50 hover:text-brand-ink-2'
      : active
        ? 'text-white'
        : 'text-white/50 hover:text-white';

  return (
    <>
      <nav
        className={`mb-4 relative mx-auto flex max-w-(--container-max) items-center gap-10 px-5 pt-[30px] md:px-8 lg:z-[3] lg:px-0 ${open ? 'z-[61]' : 'z-[3]'}`}
      >
        <Link to="/" aria-label="Meta Kreativ home">
          <Logo theme={theme} />
        </Link>

        <div
          className={`hidden h-[70px] w-px shrink-0 lg:block ${isLight ? 'bg-brand-ink/15' : 'bg-white/15'}`}
          aria-hidden="true"
        />

        <div
          className={`hidden h-[70px] min-w-0 flex-1 items-center justify-between rounded-lg px-[60px] py-5 backdrop-blur-[20px] lg:flex ${
            isLight ? 'bg-[rgba(5,10,12,0.06)]' : 'bg-[rgba(217,217,217,0.16)]'
          }`}
        >
          <ul className="flex items-center gap-10 font-display text-sm font-medium tracking-[1px] uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.to.startsWith('#') ? (
                  <a href={link.to} className={`transition-colors duration-200 ${linkClass(isActive(link))}`}>
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.to} className={`transition-colors duration-200 ${linkClass(isActive(link))}`}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button className="h-4 w-4 shrink-0" aria-label="Search">
            <img
              className={`h-full w-full ${isLight ? 'brightness-0' : ''}`}
              src="/assets/icons/search.svg"
              alt=""
            />
          </button>
        </div>

        <PillButton
          variant={isLight ? 'outline' : 'outline-light'}
          icon={isLight ? '/assets/icons/arrow-right-1.svg' : '/assets/icons/arrow-right-white.svg'}
          href="/contact-us"
          className="hidden lg:inline-flex"
        >
          Get In Touch
        </PillButton>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <div
            className={`flex items-center gap-0.5 text-base uppercase ${isLight ? 'text-brand-gray-600' : 'text-[#9ab2bc]'}`}
          >
            Eng
            <img
              className={`h-4 w-4 ${isLight ? 'brightness-0 opacity-60' : ''}`}
              src="/assets/icons/angle-down.svg"
              alt=""
            />
          </div>
          <button
            className="grid h-[26px] w-[26px] grid-cols-2 content-center justify-center gap-3.5"
            aria-label="Open menu"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-[10px] ${isLight ? 'bg-brand-ink-2' : 'bg-white'}`}
              />
            ))}
          </button>
        </div>

        <button
          type="button"
          className={`hamburger ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300 lg:hidden ${
            isLight
              ? 'border-brand-ink/20 bg-brand-ink/5 hover:bg-brand-ink/10'
              : 'border-white/20 bg-white/10 hover:bg-white/20'
          } ${open ? 'is-open' : ''} ${isLight ? 'hamburger--light' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div
        className={`mobile-menu fixed inset-0 z-50 lg:hidden ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div
          className="mobile-menu__backdrop absolute inset-0 bg-[#050a0c]/80 backdrop-blur-xl"
          onClick={close}
        />

        <div className="mobile-menu__panel relative flex h-full flex-col overflow-y-auto px-6 pt-28 pb-10 md:px-10">
          <ul className="m-0 flex list-none flex-col gap-1 p-0 font-display text-[clamp(32px,8vw,48px)] font-semibold tracking-[1px] uppercase">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label} className="mobile-menu__item overflow-hidden" style={{ '--i': i }}>
                {link.to.startsWith('#') ? (
                  <a
                    href={link.to}
                    className="block py-3 text-white transition-colors duration-200 hover:text-white/70"
                    onClick={close}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="block py-3 text-white transition-colors duration-200 hover:text-white/70"
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mobile-menu__footer mt-auto flex flex-col gap-6 pt-10">
            <PillButton
              variant="outline-light"
              icon="/assets/icons/arrow-right-white.svg"
              href="/contact-us"
              className="w-fit"
              onClick={close}
            >
              Get In Touch
            </PillButton>

            <div className="flex items-center justify-between border-t border-white/15 pt-6">
              <div className="flex items-center gap-0.5 text-base text-[#9ab2bc] uppercase">
                Eng
                <img className="h-4 w-4" src="/assets/icons/angle-down.svg" alt="" />
              </div>
              <div className="flex items-center gap-4 font-body text-sm text-white/70">
                <a href="#" className="transition-colors hover:text-white">
                  X.
                </a>
                <span>/</span>
                <a href="#" className="transition-colors hover:text-white">
                  Tele.
                </a>
                <span>/</span>
                <a href="#" className="transition-colors hover:text-white">
                  Fb.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
