const IMAGE_FILES = {
  hero: 'hero.jpg',
  showcaseLeft: 'showcase-left.jpg',
  showcaseRight: 'showcase-right.jpg',
  challengeLeft: 'challenge-left.jpg',
  challengeRight: 'challenge-right.jpg',
  mobile1: 'mobile-1.jpg',
  mobile2: 'mobile-2.jpg',
  mobile3: 'mobile-3.jpg',
  mobile4: 'mobile-4.jpg',
  impactWide: 'impact-wide.jpg',
};

function imagePath(slug, file) {
  return `/assets/images/project-details/${slug}/${file}`;
}

export function createProjectDetail(name, slug, { moreProjectSlugs = [] } = {}) {
  const title = name;

  return {
    slug,
    meta: {
      label: 'Projects',
      title,
      subtitle: `A comprehensive digital solution for ${title}, focusing on high-end craftsmanship and user experience.`,
      siteUrl: '#',
      heroImage: imagePath(slug, IMAGE_FILES.hero),
    },
    stats: [
      { label: 'Client', value: title },
      { label: 'Services', value: 'UI/UX Design & Development' },
      { label: 'Timeline', value: '3 Months' },
      { label: 'Year', value: '2023' },
      { label: 'Platform', value: 'Web / Mobile' },
      { label: 'Location', value: 'Prishtina' },
    ],
    intro: `Building a digital presence for a brand that prides itself on high-quality craftsmanship and unique designs. The goal was to create a seamless user experience that showcases the beauty and detail of ${title}'s work while providing a functional platform for customers to explore and inquire.`,
    showcase: [
      {
        image: imagePath(slug, IMAGE_FILES.showcaseLeft),
        alt: `${title} website on laptop in lounge chair`,
      },
      {
        image: imagePath(slug, IMAGE_FILES.showcaseRight),
        alt: `Close-up of ${title} website interface`,
      },
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
          image: imagePath(slug, IMAGE_FILES.challengeLeft),
          alt: `${title} project mood visual`,
          className: 'md:col-span-1',
        },
        {
          image: imagePath(slug, IMAGE_FILES.challengeRight),
          alt: `${title} website in interior setting`,
          className: 'md:col-span-2',
        },
      ],
    },
    idea: {
      title: 'The Idea:',
      headline: `Building a digital system for a brand like ${title} means focusing on more than just the surface.`,
      mobiles: [
        imagePath(slug, IMAGE_FILES.mobile1),
        imagePath(slug, IMAGE_FILES.mobile2),
        imagePath(slug, IMAGE_FILES.mobile3),
        imagePath(slug, IMAGE_FILES.mobile4),
      ],
    },
    impact: {
      title: 'The Impact:',
      headline: 'By building the new website, the brand is now ready to grow with the company for years.',
      body:
        'The new platform improved discoverability, elevated perceived brand value, and created a scalable foundation for future product lines, campaigns, and international expansion.',
      metrics: [
        { label: 'Visibility', value: '40% Increase' },
        { label: 'Engagement', value: '25% Increase' },
        { label: 'Conversion', value: '15% Increase' },
        { label: 'Traffic', value: '30% Increase' },
      ],
      image: imagePath(slug, IMAGE_FILES.impactWide),
    },
    testimonial: {
      quote: `The team at Meta Creative understood our vision from the very beginning. They delivered a website that perfectly captures the essence of ${title} and provides our customers with an exceptional online experience. We are thrilled with the results and look forward to our continued partnership.`,
      author: title,
      role: 'CEO',
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
