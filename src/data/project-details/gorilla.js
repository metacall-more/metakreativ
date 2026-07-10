const IMAGE_BASE = '/assets/images/project-details/gorilla';

const img = (n) => `${IMAGE_BASE}/gorilla-${n}.webp`;

/** Gorilla case study — images gorilla-1 … 13. Copy aligned to brand; refine from Figma when available. */
export const GORILLA_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Gorilla',
    subtitle:
      'From the technology jungle straight to your home — a bold e-commerce experience for tech, gaming, and lifestyle.',
    siteUrl: '#',
    ctaLabel: 'View Website',
    heroImage: img(1),
  },
  stats: [
    { label: 'Brand', value: 'Gorilla' },
    { label: 'Client', value: 'Gorilla' },
    { label: 'Year', value: '2024' },
    { label: 'Role', value: 'Digital Design & Development' },
    { label: 'Category', value: 'E-commerce' },
    { label: 'Location', value: 'Albania' },
  ],
  intro:
    'Gorilla is a modern technology and lifestyle retailer built to bring the energy of the tech jungle into everyday life. The goal was to create a seamless e-commerce experience that showcases products with impact — from gaming gear to accessories — while staying fast, clear, and conversion-focused.',
  showcase: [
    { image: img(2), alt: 'Gorilla website mockup 1' },
    { image: img(3), alt: 'Gorilla website mockup 2' },
    { image: img(4), alt: 'Gorilla website mockup 3' },
    { image: img(5), alt: 'Gorilla website mockup 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Build a digital store that feels as bold as the brand.',
    body: [
      'Gorilla needed more than a product catalog. They needed an online presence that could communicate energy, trust, and tech credibility — while making it easy for customers to explore categories and buy with confidence.',
      'The challenge was translating a jungle-inspired brand personality into a clean, scalable e-commerce system without losing the boldness that makes Gorilla memorable.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Gorilla challenge visual',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Gorilla brand and product presentation',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline:
      'Create a distinct e-commerce identity and a modern shopping experience built for discovery and conversion.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'By building for clarity and scale, the platform is ready to grow with Gorilla for years.',
    body:
      'The new digital system elevated product storytelling, improved navigation across categories, and created a flexible foundation for campaigns, merchandising, and future expansion.',
    metrics: null,
    columns: [
      {
        label: 'Strategy',
        items: ['Brand Positioning', 'Customer Journey', 'Category Architecture', 'Project Discovery'],
      },
      {
        label: 'Design',
        items: ['Visual Identity', 'UI/UX Design', 'Product Presentation', 'Design System'],
      },
      {
        label: 'Digital',
        items: ['E-commerce Website', 'Category Pages', 'Campaign Assets', 'Content Structure'],
      },
      {
        label: 'Launch',
        items: ['Store Launch', 'Merchandising Setup', 'Performance Optimization', 'Ongoing Support'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'Meta Creative captured the energy of Gorilla and turned it into a digital experience that feels bold, clear, and ready to sell. The new platform reflects who we are — and where we are going.',
    author: 'Gorilla',
    role: 'Client',
  },
};
