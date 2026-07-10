const IMAGE_BASE = '/assets/images/project-details/loni-dekor';

const img = (n, ext = 'webp') => `${IMAGE_BASE}/loni-${n}.${ext}`;

/** Loni Dekor case study — images ordered loni-1 … loni-13. */
export const LONI_DEKOR_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Loni Dekor',
    subtitle:
      'A simple, yet sophisticated system that lets you focus on what really matters — creating an environment that supports you.',
    siteUrl: '#',
    heroImage: img(1),
  },
  stats: [
    { label: 'Brand', value: 'Loni Dekor' },
    { label: 'Client', value: 'Loni Dekor' },
    { label: 'Year', value: '2024' },
    { label: 'Role', value: 'Digital Design & Development' },
    { label: 'Category', value: 'E-commerce' },
    { label: 'Location', value: 'Albania' },
  ],
  intro:
    'Building a digital presence for a brand that prides itself on high-quality craftsmanship and unique designs. The goal was to create a seamless user experience that showcases the beauty and detail of Loni Dekor’s work while providing a functional platform for customers to explore and inquire.',
  // 4 photos — 2 visible, slide one-by-one
  showcase: [
    { image: img(2), alt: 'Loni Dekor website mockup 1' },
    { image: img(3), alt: 'Loni Dekor website mockup 2' },
    { image: img(4), alt: 'Loni Dekor website mockup 3' },
    { image: img(5), alt: 'Loni Dekor website mockup 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Build a modern digital system that reflects the quality of premium craftsmanship.',
    body: [
      'Loni Dekor needed more than a brochure website. They needed a platform that could communicate quality, trust, and premium service through screens alone.',
      'The challenge was translating a physical brand experience into a digital journey — without losing the warmth, detail, and trust that define the brand.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Loni Dekor challenge visual',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Loni Dekor devices in interior setting',
        className: 'md:col-span-2',
      },
    ],
  },
  // 5 photos — 4 visible, slide one-by-one
  idea: {
    title: 'The Idea:',
    headline:
      'Building a digital system for a brand like Loni Dekor meant focusing on more than just the surface.',
    mobiles: [img(8), img(9), img(10), img(11, 'png'), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'By building for total quality, the system is ready to grow with the company for years.',
    body:
      'The new platform improved discoverability, elevated perceived brand value, and created a scalable foundation for future product lines, campaigns, and expansion.',
    metrics: [
      { label: 'Visibility', value: '40% Increase' },
      { label: 'Engagement', value: '25% Increase' },
      { label: 'Conversion', value: '15% Increase' },
      { label: 'Traffic', value: '30% Increase' },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'The team at Meta Creative understood our vision from the very beginning. They delivered a website that perfectly captures the essence of Loni Dekor and provides our customers with an exceptional online experience.',
    author: 'Loni Dekor',
    role: 'Client',
  },
};
