import { Navigate, useParams } from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PageCta from '../../components/PageCta';
import ProjectDetailHero from '../../components/project-details/ProjectDetailHero';
import ProjectMetaBar from '../../components/project-details/ProjectMetaBar';
import ProjectShowcaseCarousel from '../../components/project-details/ProjectShowcaseCarousel';
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
      <Nav theme="light" activeLink="Portfolio" />

      <ProjectDetailHero {...project.meta} />

      <ProjectMetaBar stats={project.stats} />

      <section className="mx-auto max-w-(--container-max) px-5 pt-2 pb-14 md:px-8 md:pt-4 md:pb-20 lg:px-0 lg:pt-4 lg:pb-24">
        <p className="mx-auto max-w-[900px] text-center font-body text-base leading-[1.85] text-[#4f5153] md:text-lg">
          {project.intro}
        </p>

        <ProjectShowcaseCarousel images={project.showcase} />
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
