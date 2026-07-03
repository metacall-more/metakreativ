export default function ProjectMetaBar({ stats }) {
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-(--container-max) grid-cols-2 gap-6 px-5 py-10 md:grid-cols-3 md:gap-8 md:px-8 md:py-12 lg:grid-cols-6 lg:px-0 lg:py-14">
        {stats.map((item) => (
          <div key={item.label} className="text-center lg:text-left">
            <p className="m-0 font-display text-xs font-medium tracking-[1.4px] text-brand-gray-400 uppercase">
              {item.label}
            </p>
            <p className="m-0 mt-2 font-display text-base font-medium text-white md:text-lg">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
