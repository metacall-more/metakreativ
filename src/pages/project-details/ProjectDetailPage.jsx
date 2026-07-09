import { Navigate, useParams } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PageCta from '../../components/PageCta';
import ProjectDetailHero from '../../components/project-details/ProjectDetailHero';
import ProjectMetaBar from '../../components/project-details/ProjectMetaBar';
import ProjectNarrativeSection from '../../components/project-details/ProjectNarrativeSection';
import ProjectMobileShowcase from '../../components/project-details/ProjectMobileShowcase';
import ProjectImpactSection from '../../components/project-details/ProjectImpactSection';
import ProjectTestimonial from '../../components/project-details/ProjectTestimonial';
import ProjectMoreProjects from '../../components/project-details/ProjectMoreProjects';
import { getProjectBySlug } from '../../data/project-details';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-brand-bg">
      <header>
        <Nav theme="light" activeLink="Portfolio" />
      </header>

      <ProjectDetailHero {...project.meta} />

      <ProjectMetaBar stats={project.stats} />

      <section className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <p className="mx-auto max-w-[900px] text-center font-body text-base leading-[1.85] text-[#4f5153] md:text-lg">
          {project.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {project.showcase.map((item) => (
            <div key={item.image} className="overflow-hidden rounded-lg">
              <img
                className="h-[min(320px,50vw)] w-full object-cover md:h-[min(420px,32vw)]"
                src={item.image}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </section>

      <ProjectNarrativeSection {...project.challenge} />
      <ProjectMobileShowcase {...project.idea} />
      <ProjectImpactSection {...project.impact} />
      <ProjectTestimonial {...project.testimonial} />
      <ProjectMoreProjects projects={project.moreProjects} />

      <PageCta image="/assets/images/services/cta-bg.webp" />
      <Footer />
    </div>
  );
}
