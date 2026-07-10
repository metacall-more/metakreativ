function imagePath(slug, file) {
  return `/assets/images/project-details/${slug}/${file}`;
}

/**
 * Shared case-study shape (identical to Loni Dekor layout).
 * Per-project text/images can override via PROJECT_OVERRIDES.
 */
export function createProjectDetail(name, slug, { moreProjectSlugs = [] } = {}) {
  const title = name;
  const base = `/assets/images/project-details/${slug}`;

  return {
    slug,
    meta: {
      label: 'Case Study',
      title,
      subtitle:
        'A simple, yet sophisticated system that lets you focus on what really matters — creating an environment that supports you.',
      siteUrl: '#',
      heroImage: `${base}/hero.jpg`,
    },
    stats: [
      { label: 'Brand', value: title },
      { label: 'Client', value: title },
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Digital Design & Development' },
      { label: 'Category', value: 'E-commerce' },
      { label: 'Location', value: 'Albania' },
    ],
    intro: `Building a digital presence for a brand that prides itself on high-quality craftsmanship and unique designs. The goal was to create a seamless user experience that showcases the beauty and detail of ${title}'s work while providing a functional platform for customers to explore and inquire.`,
    // 4 photos — carousel shows 2, advances one-by-one
    showcase: [
      { image: `${base}/showcase-left.jpg`, alt: `${title} showcase 1` },
      { image: `${base}/showcase-right.jpg`, alt: `${title} showcase 2` },
      { image: `${base}/mobile-1.jpg`, alt: `${title} showcase 3` },
      { image: `${base}/mobile-2.jpg`, alt: `${title} showcase 4` },
    ],
    challenge: {
      title: 'The Challenge:',
      headline: 'Build a modern digital system that reflects the quality of premium craftsmanship.',
      body: [
        `${title} needed more than a brochure website. They needed a platform that could communicate quality, trust, and premium service through screens alone.`,
        'The challenge was translating a physical brand experience into a digital journey — without losing the warmth, detail, and trust that define the brand.',
      ],
      images: [
        {
          image: `${base}/challenge-left.jpg`,
          alt: `${title} challenge visual`,
          className: 'md:col-span-1',
        },
        {
          image: `${base}/challenge-right.jpg`,
          alt: `${title} challenge visual wide`,
          className: 'md:col-span-2',
        },
      ],
    },
    // 5 photos — carousel shows 4, advances one-by-one
    idea: {
      title: 'The Idea:',
      headline: `Building a digital system for a brand like ${title} meant focusing on more than just the surface.`,
      mobiles: [
        `${base}/mobile-1.jpg`,
        `${base}/mobile-2.jpg`,
        `${base}/mobile-3.jpg`,
        `${base}/mobile-4.jpg`,
        `${base}/showcase-left.jpg`,
      ],
    },
    impact: {
      title: 'The Impact:',
      headline: 'By building for total quality, the system is ready to grow with the company for years.',
      body: 'The new platform improved discoverability, elevated perceived brand value, and created a scalable foundation for future product lines, campaigns, and expansion.',
      metrics: [
        { label: 'Visibility', value: '40% Increase' },
        { label: 'Engagement', value: '25% Increase' },
        { label: 'Conversion', value: '15% Increase' },
        { label: 'Traffic', value: '30% Increase' },
      ],
      image: `${base}/impact-wide.jpg`,
    },
    testimonial: {
      quote: `The team at Meta Creative understood our vision from the very beginning. They delivered a website that perfectly captures the essence of ${title} and provides our customers with an exceptional online experience.`,
      author: title,
      role: 'Client',
    },
    moreProjectSlugs,
  };
}

export function withMoreProjects(project, registry) {
  const slugs = project.moreProjectSlugs ?? [];
  return {
    ...project,
    moreProjects: slugs.map((slug) => {
      const entry = registry[slug];
      return {
        title: entry.meta.title,
        category: 'UI/UX Design',
        image: entry.meta.heroImage,
        slug,
      };
    }),
  };
}

export { imagePath };
