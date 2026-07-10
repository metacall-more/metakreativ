const IMAGE_BASE = '/assets/images/project-details/wynthorpe';

const img = (n) => `${IMAGE_BASE}/wynthorpe-${n}.webp`;

/** Wynthorpe Technology case study — copy from Figma, images wynthorpe-1 … 13. */
export const WYNTHORPE_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Wynthorpe Technology',
    subtitle:
      'We provide premium tech solutions that empower businesses worldwide. Our commitment to quality and innovation sets us apart.',
    siteUrl: 'https://www.wynthorpetech.com',
    ctaLabel: 'View Website',
    heroImage: img(1),
  },
  stats: [
    { label: 'Strategy', value: 'Discovery & Planning' },
    { label: 'Design', value: 'Brand & UI/UX' },
    { label: 'Digital', value: 'Web & Social' },
    { label: 'Build', value: 'Development' },
    { label: 'Launch', value: 'Go-to-Market' },
    { label: 'Delivery', value: 'Support & Growth' },
  ],
  intro:
    'Wynthorpe is a world-class technology company founded on the idea of innovation and forward-thinking digital solutions. Their mission is to empower businesses worldwide with premium tech systems that drive growth, strengthen brand presence, and deliver lasting impact.',
  showcase: [
    { image: img(2), alt: 'Wynthorpe laptop mockup on sofa' },
    { image: img(3), alt: 'Wynthorpe laptop in red-lit room' },
    { image: img(4), alt: 'Wynthorpe tablet on red fabric' },
    { image: img(5), alt: 'Wynthorpe laptop brand mockup' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Building a brand that matches the power of the Viking.',
    body: [
      'Wynthorpe needed a visual language as bold as their ambition — modern, timeless, and rooted in strength. The challenge was to translate Viking-inspired power into a refined digital brand without losing clarity or sophistication.',
      'We set out to build an identity and website system that feels premium, memorable, and ready to scale with the company across markets and platforms.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Wynthorpe monitor with Viking brand mark',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Wynthorpe brand collateral flat lay',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline:
      'How to create a distinct brand, establishing a brand-driven visual identity, and build a modern product.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'By building internal quality, the brand sustains its mission for the company for years.',
    body:
      'The new identity and digital system elevated how Wynthorpe presents itself to clients and partners — creating consistency, stronger recognition, and a foundation that can grow with the business for years to come.',
    metrics: null,
    columns: [
      {
        label: 'Strategy',
        items: ['Brand Audit', 'Market Research', 'Competitor Analysis', 'Project Discovery'],
      },
      {
        label: 'Design',
        items: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'UI/UX Design'],
      },
      {
        label: 'Digital',
        items: ['Website Design', 'Social Media Assets', 'Digital Marketing', 'Content Strategy'],
      },
      {
        label: 'Launch',
        items: ['Brand Activation', 'Marketing Collateral', 'Launch Event', 'Public Relations'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'Built on excellence and driven by innovation, Wynthorpe Technology stands for premium solutions that empower businesses worldwide. The new brand system captures that promise with clarity, strength, and lasting presence.',
    author: 'Wynthorpe Technology',
    role: 'Client',
  },
};
