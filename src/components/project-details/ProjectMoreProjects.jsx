import { Link } from 'react-router-dom';

export default function ProjectMoreProjects({ projects }) {
  return (
    <section className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <h2 className="m-0 text-center font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
        More Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {projects.map((project) => {
          const content = (
            <>
              <div className="overflow-hidden rounded-lg">
                <img
                  className="h-[min(240px,45vw)] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="mt-4">
                <h3 className="m-0 font-display text-base font-medium text-brand-ink-2">{project.title}</h3>
                <p className="m-0 mt-1 font-body text-sm text-brand-gray-600">{project.category}</p>
              </div>
            </>
          );

          if (project.slug) {
            return (
              <Link key={project.title} to={`/portfolio/${project.slug}`} className="group block">
                {content}
              </Link>
            );
          }

          return (
            <a key={project.title} href="#" className="group block">
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
