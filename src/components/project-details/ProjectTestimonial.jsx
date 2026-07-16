export default function ProjectTestimonial({ quote, author, role }) {
  return (
    <section className="border-b border-brand-ink/10 bg-brand-bg px-5 py-16 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="m-0 font-body text-[clamp(40px,7vw,64px)] leading-none text-brand-ink">&ldquo;</p>
        <blockquote className="m-0 mt-6 font-body text-lg leading-[1.85] text-brand-ink-2 md:text-xl lg:text-[22px]">
          {quote}
        </blockquote>
        <div className="mt-10">
          <p className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
            {author}
          </p>
          {role && (
            <p className="m-0 mt-2 font-display text-xs tracking-[1.2px] text-[#6b6e70] uppercase md:text-sm">
              {role}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
