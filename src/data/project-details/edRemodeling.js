const IMAGE_BASE = '/assets/images/project-details/ed-remodeling';

const img = (n) => `${IMAGE_BASE}/ed-${n}.webp`;

/** E&D Remodeling case study — copy from Figma screenshot, images ed-1 … 13. */
export const ED_REMODELING_OVERRIDES = {
  meta: {
    label: 'Brand Identity / Architecture',
    title: 'E&D Remodeling',
    subtitle:
      'E&D Remodeling has built its legacy on crafting spaces that resonate with quality and timelessness. Our rebranding effort was to bridge their artisanal roots with a modern digital persona.',
    siteUrl: '#',
    ctaLabel: 'Visit Website',
    heroImage: img(1),
  },
  stats: [
    { label: 'Industry', value: 'Construction' },
    { label: 'Service', value: 'Brand Identity' },
    { label: 'Year', value: '2023' },
    { label: 'Location', value: 'Philadelphia' },
    { label: 'Client', value: 'E&D Remodeling' },
    { label: 'Category', value: 'Architecture' },
  ],
  intro:
    'Crafting a brand for E&D Remodeling was more than just a visual update; it was about honoring decades of construction mastery. We chose a palette of deep blues and slate grays to reflect both the stability of their structures and the precision of their craft. From a redefined logo that mirrors architectural strength to a cohesive digital presence, every touchpoint was meticulously designed to echo the trust E&D Remodeling has built with its clients.',
  showcase: [
    { image: img(2), alt: 'E&D Remodeling logo on fabric' },
    { image: img(3), alt: 'E&D Remodeling brand assets' },
    { image: img(4), alt: 'E&D Remodeling banner and keychain' },
    { image: img(5), alt: 'E&D Remodeling street banners' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Translating decades of craftsmanship into a digital legacy.',
    body: [
      "The challenge was to capture the essence of E&D Remodeling's hands-on expertise and translate it into a digital experience that feels as solid and reliable as their construction work. We needed to ensure that their heritage of quality wasn't lost in modernization, but rather highlighted through clean, contemporary design.",
    ],
    images: [
      {
        image: img(6),
        alt: 'E&D Remodeling folder mockup',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'E&D Remodeling brand flat lay',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline: 'Crafting a digital masterpiece for substantial craftsmanship.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'Establishing a digital benchmark for quality remodeling.',
    body:
      'The results were immediate and impactful. The new brand identity provided E&D Remodeling with a cohesive professional look that resonated with both long-term clients and a new generation of homeowners. The modernized digital presence led to increased engagement and a stronger market position, solidifying their reputation as leaders in the construction industry.',
    metrics: null,
    columns: [
      {
        label: 'Logo Design',
        items: ['Typography', 'Iconography', 'Visual Balance'],
      },
      {
        label: 'Color Palette',
        items: ['Deep Blue', 'Slate Gray', 'Architectural White'],
      },
      {
        label: 'Brand Elements',
        items: ['Business Cards', 'Letterheads', 'Brochures'],
      },
      {
        label: 'Digital Presence',
        items: ['Responsive Website', 'Social Media', 'UX/UI Design'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      "Quality is not an act, it is a habit. E&D Remodeling's new identity is a testament to their unwavering commitment to excellence and their vision for the future of construction.",
    author: 'E&D Remodeling',
    role: 'Client',
  },
};
