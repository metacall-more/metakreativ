export default function ProjectTestimonial({ quote, author, role }) {
  return (
    <section className="border-y border-brand-ink/10 bg-brand-bg px-5 py-16 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="m-0 font-body text-[clamp(60px,12vw,95px)] leading-none text-brand-ink">&ldquo;</p>
        <blockquote className="m-0 mt-4 font-body text-lg leading-[1.85] text-[#4f5153] md:text-xl">
          {quote}
        </blockquote>
        <p className="m-0 mt-8 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
          {author}
          {role ? `, ${role}` : ''}
        </p>
      </div>
    </section>
  );
}
