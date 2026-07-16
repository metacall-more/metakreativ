import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectShowcaseCarousel from './ProjectShowcaseCarousel';

function ProjectCard({ project }) {
  const content = (
    <>
      <div className="overflow-hidden rounded-lg bg-brand-gray-300/30">
        <img
          className="aspect-[4/3] h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
          src={project.image}
          alt={project.title}
          draggable={false}
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
      <Link to={`/portfolio/${project.slug}`} className="group block">
        {content}
      </Link>
    );
  }

  return (
    <a href="#" className="group block">
      {content}
    </a>
  );
}

export default function ProjectMoreProjects({ projects }) {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setVisible(mq.matches ? 4 : 2);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!projects?.length) return null;

  return (
    <section className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <h2 className="m-0 text-center font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
        More Projects
      </h2>

      <ProjectShowcaseCarousel
        items={projects}
        visible={visible}
        className="mt-10"
        gapClass="gap-5 md:gap-6"
        infinite
        clickToNavigate={false}
        renderItem={(project) => <ProjectCard project={project} />}
      />
    </section>
  );
}
