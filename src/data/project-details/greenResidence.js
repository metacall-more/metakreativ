const IMAGE_BASE = '/assets/images/project-details/green-residence';

const img = (n) => `${IMAGE_BASE}/green-${n}.webp`;

/** Green Residence case study — copy from Figma screenshot, images green-1 … 13. */
export const GREEN_RESIDENCE_OVERRIDES = {
  meta: {
    label: 'Real Estate & Landscape',
    title: 'Green Residence',
    subtitle:
      'Green Residence is a cutting-edge real estate company committed to designing sustainable and high-quality living spaces.',
    siteUrl: 'https://www.greenresidence.com',
    ctaLabel: 'Visit Site',
    heroImage: img(1),
  },
  stats: [
    { label: 'Project', value: 'Green Residence' },
    { label: 'Year', value: '2023' },
    { label: 'Category', value: 'Real Estate' },
    { label: 'Client', value: 'Private Client' },
    { label: 'Website', value: 'greenresidence.com' },
    { label: 'Industry', value: 'Real Estate' },
  ],
  intro:
    'Green Residence is a cutting-edge real estate company committed to designing sustainable and high-quality living spaces. Their mission is to provide environmentally-friendly homes that integrate modern architecture with the tranquility of nature. They wanted a brand identity that reflects their dedication to luxury, modernism, and a connection to the environment.',
  showcase: [
    { image: img(2), alt: 'Green Residence business cards' },
    { image: img(3), alt: 'Green Residence logo and brand assets' },
    { image: img(4), alt: 'Green Residence stationery' },
    { image: img(5), alt: 'Green Residence building signage' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Crafting a digital identity as solid as the construction itself.',
    body: [
      'Green Residence needed a brand and web presence that would differentiate them in a competitive market. The goal was to communicate luxury and sustainability simultaneously, ensuring the digital experience was as premium as the physical properties.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Green Residence interior branding',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Green Residence website on laptop',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline: 'Creating a digital landmark that matches the quality of modern living.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'Establishing a digital landmark for premium residential living.',
    body:
      "By blending natural elements with modern design, we created a digital identity that resonates with Green Residence's core values. The result is a cohesive, high-end brand experience that appeals to eco-conscious homeowners and investors.",
    metrics: null,
    columns: [
      {
        label: 'Strategy',
        items: ['Brand Positioning', 'Market Research', 'Audience Definition', 'Project Discovery'],
      },
      {
        label: 'Design',
        items: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'UI/UX Design'],
      },
      {
        label: 'Digital',
        items: ['Website Design', 'Property Presentation', 'Digital Assets', 'Content Structure'],
      },
      {
        label: 'Launch',
        items: ['Brand Activation', 'Signage System', 'Launch Support', 'Ongoing Growth'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      "META's team was able to capture the essence of our project and transform it into a stunning digital brand. Their attention to detail and commitment to excellence made the entire process seamless.",
    author: 'Artan Beqiri',
    role: 'CEO',
  },
};
