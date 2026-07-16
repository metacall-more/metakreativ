const IMAGE_BASE = '/assets/images/project-details/ed-remodeling';

const img = (n) => `${IMAGE_BASE}/ed-${n}.webp`;

/** E&D Remodeling case study — copy from Figma screenshot, images ed-1 … 13. */
export const ED_REMODELING_OVERRIDES = {
  meta: {
    label: 'HOME TRANSFORMATION',
    title: 'E&D Remodeling',
    subtitle:
     `A family-owned leader in home transformation, E&D Remodeling partnered with Meta Kreativ to build a digital presence that reflects their dedication to quality craftsmanship and the trust they’ve earned across Thornton since 2019.`,
    siteUrl: 'https://ed-remodeling.com/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'Branding, UI UX, Web' },
    { label: 'Client', value: 'E&D Remodeling' },
    { label: 'Timeline', value: '6 - 8 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe, CMS' },
    { label: 'Category', value: 'Construction, Remodeling' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
    `Building a brand for a high-end contractor requires a digital presence rooted in trust. E&D Remodeling partnered with us to transform their family-owned expertise into a professional digital home. By merging a clean aesthetic with an intuitive showcase of their kitchen and bathroom mastery, we built a platform that highlights their craftsmanship and establishes long term confidence for Colorado homeowners.`,
  showcase: [
    { image: img(2), alt: 'E&D Remodeling logo on fabric' },
    { image: img(3), alt: 'E&D Remodeling brand assets' },
    { image: img(4), alt: 'E&D Remodeling banner and keychain' },
    { image: img(5), alt: 'E&D Remodeling street banners' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'TRANSLATING DECADES OF CRAFTSMANSHIP INTO A DIGITAL LEGACY.',
    bodyTitle: 'Rallying around Trust',
    body: [
    `E&D Remodeling came to us with a vision to modernize their family-owned brand without losing the personal touch that defined them since 2019. Their existing presence lacked the visual depth required to showcase high-end kitchen and bathroom transformations.`,
    `They didn't just need a website; they needed a professional platform that communicates dedication and expertise. The mission was to bridge the gap between their hands-on remodeling skill and a clean, high-performance digital experience that builds immediate confidence with Colorado homeowners.`,
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
    headline: 'CRAFTING A DIGITAL SHOWROOM FOR SUPERIOR CRAFTSMANSHIP.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'ESTABLISHING A DIGITAL BENCHMARK FOR QUALITY remodeling.',
    bodyTitle: 'A Lasting Result',
    body: `The goal was to ensure E&D Remodeling stands out in a competitive market. We built a high-performance digital presence designed to showcase their kitchen and bathroom transformations with clinical precision. It is a solid foundation that communicates trust, simplifies the customer journey, and scales alongside their reputation for excellence in Colorado.`,
    metrics: null,
    columns: [
      {
        label: 'THE MISSION',
        items: ['Brand Evolution', 'Trust Positioning', 'Service Hierarchy','Market Authority'],
      },
      {
        label: 'THE BACKEND',
        items: ['Clean CMS Logic', 'Lead Optimization', 'Image Performance','System Stability'],
      },
      {
        label: 'THE FRONTEND',
        items: ['Gallery-First UI', 'Clean Aesthetics', 'Simple Navigation', 'Mobile Fluidity'],
      },
      {
        label: 'THE TESTING',
        items: ['Visual Precision', 'Device Loading', 'UX Flow','Cross-Browser Stability'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote: 
    `Working with Meta Kreativ was a game-changer for our family business. We needed a platform that could showcase the dedication and craftsmanship we put into every kitchen and bathroom remodel. They didn't just build a website; they created a professional digital home that truly reflects our passion for quality. For the first time, our digital presence matches the high standards of our physical work. It is clean, trustworthy, and built to last.`,
    author: 'Nick cakolli',
    role: 'founder & CEO',
  },
};
