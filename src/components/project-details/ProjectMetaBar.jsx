export default function ProjectMetaBar({ stats }) {
  return (
    <section className="mx-auto max-w-(--container-max) px-5 pb-6 md:px-8 md:pb-8 lg:px-0 lg:pb-8">
      <div className="overflow-hidden rounded-[12px] bg-brand-ink">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {stats.map((item, i) => (
            <div key={`${item.label}-${i}`} className="px-5 py-8 text-center sm:px-6 lg:px-5 lg:py-10">
              <p className="m-0 font-display text-xs font-semibold tracking-[1.2px] text-white uppercase md:text-sm">
                {item.label}
              </p>
              <p className="m-0 mt-2 font-body text-sm leading-snug text-white/55 md:text-[15px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
