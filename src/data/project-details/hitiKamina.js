const IMAGE_BASE = '/assets/images/project-details/hiti-kamina';

const img = (n) => `${IMAGE_BASE}/hiti-${n}.webp`;

/** Hiti Kamina case study — copy from Figma screenshot, images hiti-1 … 13. */
export const HITI_KAMINA_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Hiti Kamina',
    subtitle:
      'A modern digital platform that brings the warmth and quality of traditional craftsmanship to the digital world.',
    siteUrl: '#',
    ctaLabel: 'Visit Live',
    heroImage: img(1),
  },
  stats: [
    { label: 'Client', value: 'Hiti' },
    { label: 'Role', value: 'Branding, UI/UX' },
    { label: 'Team', value: 'Meta Creative' },
    { label: 'Year', value: '2024' },
    { label: 'Industry', value: 'Furniture' },
    { label: 'Category', value: 'Interior Design' },
  ],
  intro:
    'Hiti Kamina brings the warmth of traditional craftsmanship into modern living. The project focused on building a digital experience that feels as refined and inviting as the products themselves — combining heritage, material quality, and a clear path for customers to explore and connect.',
  showcase: [
    { image: img(2), alt: 'Hiti Kamina website mockup 1' },
    { image: img(3), alt: 'Hiti Kamina website mockup 2' },
    { image: img(4), alt: 'Hiti Kamina website mockup 3' },
    { image: img(5), alt: 'Hiti Kamina website mockup 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Integrating traditional craftsmanship with a modern digital user experience.',
    body: [
      'Hiti needed a digital presence that could translate tactile craftsmanship — wood, fire, and material detail — into an interface that feels warm, premium, and easy to navigate.',
      'The challenge was to honor traditional making while delivering a modern showroom experience that builds trust and helps customers discover the right products.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Hiti Kamina lifestyle visual',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Hiti Kamina website on laptop',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline: 'Bringing the warmth of craftsmanship to the digital world.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'Building the ultimate digital showroom for fireplace enthusiasts.',
    body:
      'The new platform elevated how Hiti presents its craft — creating a digital showroom that strengthens brand presence, improves product discovery, and supports long-term growth.',
    metrics: null,
    columns: [
      {
        label: 'Strategy',
        items: ['Brand Positioning', 'Customer Journey', 'Showroom Concept', 'Project Discovery'],
      },
      {
        label: 'Design',
        items: ['Visual Identity', 'UI Design', 'UX Design', 'Prototyping'],
      },
      {
        label: 'Digital',
        items: ['Website Design', 'Product Presentation', 'Motion', 'Content Structure'],
      },
      {
        label: 'Launch',
        items: ['Frontend', 'Branding Assets', 'Showroom Launch', 'Ongoing Support'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'Meta Creative captured the essence of Hiti — the warmth, the craft, and the quiet strength of the brand — and turned it into a digital experience that feels true to who we are.',
    author: 'Hiti Kamina',
    role: 'Client',
  },
};
