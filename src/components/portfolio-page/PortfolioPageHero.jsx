import { Link } from 'react-router-dom';

export default function PortfolioPageHero() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 pt-6 md:px-8 lg:px-10 lg:pt-0">
      <div className="relative min-h-[min(500px,70vw)] overflow-hidden rounded-[20px]">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/assets/images/portfolio-page/portfolio-hero.webp"
          alt=""
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(5,8,12,0.55)] via-[rgba(5,8,12,0.25)] to-[rgba(254,0,0,0.35)]" />

        <div className="relative z-[1] flex min-h-[min(500px,70vw)] flex-col justify-end gap-8 px-5 pb-10 pt-24 md:px-10 md:pb-12 lg:flex-row lg:items-end lg:justify-between lg:px-20 lg:pb-16 lg:pt-32">
          <div className="max-w-[420px]">
            <nav className="mb-4 flex items-center gap-2 font-body text-sm text-white/80 md:text-base" aria-label="Breadcrumb">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Portfolio</span>
            </nav>
            <p className="m-0 font-body text-sm leading-[1.7] text-white/85 md:text-base">
              A curated selection of branding, digital products, and campaigns built with precision
              and purpose.
            </p>
          </div>

          <h1 className="m-0 max-w-[700px] font-display text-[clamp(28px,4.5vw,45px)] leading-[1.22] font-semibold tracking-[0.5px] text-white uppercase lg:text-right">
            Explore our successful
            <br />
            and outstanding projects
          </h1>
        </div>
      </div>
    </section>
  );
}
