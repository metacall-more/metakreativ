const IMAGE_BASE = '/assets/images/project-details/loni-dekor';

const img = (n, ext = 'webp') => `${IMAGE_BASE}/loni-${n}.${ext}`;

/** Loni Dekor case study — images ordered loni-1 … loni-13. */
export const LONI_DEKOR_OVERRIDES = {
  meta: {
    label: 'furniture factory',
    title: 'Loni Dekor',
    subtitle:
      'A leading furniture manufacturer known for its high-quality craftsmanship and modern design, partnered with Meta Kreativ to elevate their digital presence.',
    siteUrl: 'https://lonidekor.com/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'UI UX Design, Development' },
    { label: 'Client', value: 'Loni Dekor' },
    { label: 'Timeline', value: '6 - 8 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe' },
    { label: 'Category', value: 'Portfolio, E-commerce' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
    'Following their 2020 Rebrand, Loni Dekor partnered with us to engineer their most ambitious digital campaign to date: "The Standard of Craft." Our goal was to re-architect Loni Dekor’s connection with their high-end clientele and broaden technical awareness for a brand that represents the pinnacle of bespoke interior production.',
  // 4 photos — 2 visible, slide one-by-one
  showcase: [
    { image: img(2), alt: 'Loni Dekor website mockup 1' },
    { image: img(3), alt: 'Loni Dekor website mockup 2' },
    { image: img(4), alt: 'Loni Dekor website mockup 3' },
    { image: img(5), alt: 'Loni Dekor website mockup 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'BUILD  A MODERN  DIGITAL  SYSTEM  THAT  REFLECTS THE  QUALITY  OF  PREMIUM  CRAFTSMANSHIP.',
    bodyTitle: 'Rallying around Quality',
    body: [
      'Loni Dekor needed more than a brochure website. They needed a platform that could communicate quality, trust, and premium service through screens alone.',
      'They didn’t just need a "pretty" website; they needed a high-speed engine that could grow the business while keeping that clean, high-end feel.',
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
    bodyTitle: 'A Lasting Result',
    body: "The goal was to make sure Loni Dekor never has to worry about their digital setup again. We built a foundation that is tough, fast, and easy to scale as they take on bigger projects. It's not just a website; it's a long-term asset that works as hard as they do.",
    metrics: null,
    columns: [
      {
        label: 'The Mission',
        items: ['Project Scope', 'Digital Strategy', 'User Experience', 'Brand Positioning'],
      },
      {
        label: 'The Backend',
        items: ['Workflow Logic', 'Custom Code', 'Database Design', 'System Stability'],
      },
      {
        label: 'The Frontend',
        items: ['User Interface', 'Mobile Responsiveness', 'Interactive Layouts', 'Visual Aesthetics'],
      },
      {
        label: 'The Testing',
        items: ['Quality Assurance', 'Performance Metrics', 'User Feedback', 'Bug Tracking'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      "Teaming up with Meta was the best decision we made for our growing business. They didn't just give us a beautiful website; they rebuilt the entire engine behind our work. For the first time, our digital systems actually match the quality of our craftsmanship. Everything is faster, simpler, and built to last.",
    author: 'Faton Hyseni',
    role: 'Owner, Loni Dekor',
  },
};
