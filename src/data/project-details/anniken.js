const IMAGE_BASE = '/assets/images/project-details/anniken';

const img = (n, ext = 'webp') => `${IMAGE_BASE}/anniken-${n}.${ext}`;

/** Anniken Brinchmann case study — copy from Figma screenshot, images anniken-1 … 13. */
export const ANNIKEN_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Anniken Brinchmann',
    subtitle:
      'An integrated brand identity for a therapeutic and wellness center in Cologne, Germany.',
    siteUrl: '#',
    ctaLabel: 'Visit Website',
    heroImage: img(1),
  },
  stats: [
    { label: 'Client', value: 'Anniken Brinchmann' },
    { label: 'Services', value: 'Brand Identity' },
    { label: 'Year', value: '2023' },
    { label: 'Category', value: 'Wellness' },
    { label: 'Location', value: 'Cologne, Germany' },
    { label: 'Industry', value: 'Therapy & Wellness' },
  ],
  intro:
    'Anniken Brinchmann is a therapeutic and wellness center built around calm, care, and presence. The project focused on creating an integrated brand identity that feels warm and refined — connecting print, space, and digital touchpoints into one coherent experience.',
  showcase: [
    { image: img(2), alt: 'Anniken Brinchmann treatment visual' },
    { image: img(3), alt: 'Anniken Brinchmann branded towels' },
    { image: img(4), alt: 'Anniken Brinchmann soap packaging' },
    { image: img(5), alt: 'Anniken Brinchmann brochure mockup' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Digitalizing the world of therapeutic wellbeing.',
    body: [
      'The brand needed a visual system that could carry the softness of therapeutic care into every touchpoint — from printed materials to digital experiences — without losing warmth or clarity.',
      'The challenge was to build an identity that feels personal and calming, while remaining flexible enough for packaging, space, and online presence.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Anniken Brinchmann banner stand',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Anniken Brinchmann print materials',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline: 'Tangible and physical merging with digital experiences.',
    mobiles: [img(8), img(9), img(10, 'png'), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'Scalable and responsive brand architecture.',
    body:
      'The new identity created a cohesive brand system across physical and digital channels — giving Anniken Brinchmann a clear, calm presence that can grow with the practice.',
    metrics: null,
    columns: [
      {
        label: 'Strategy',
        items: ['Brand Positioning', 'Audience Insight', 'Touchpoint Mapping', 'Project Discovery'],
      },
      {
        label: 'Design',
        items: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Print System'],
      },
      {
        label: 'Digital',
        items: ['Website Design', 'UI/UX', 'Mobile Experience', 'Content Structure'],
      },
      {
        label: 'Launch',
        items: ['Packaging', 'Collateral', 'Brand Activation', 'Ongoing Support'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'The brand system captures the calm and care at the heart of the practice — connecting every detail, from print to digital, into one clear and lasting identity.',
    author: 'Anniken Brinchmann',
    role: 'Client',
  },
};
