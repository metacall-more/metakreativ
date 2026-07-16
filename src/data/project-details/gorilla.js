const IMAGE_BASE = '/assets/images/project-details/gorilla';

const img = (n) => `${IMAGE_BASE}/gorilla-${n}.webp`;

/** Gorilla case study — images gorilla-1 … 13. Copy aligned to brand; refine from Figma when available. */
export const GORILLA_OVERRIDES = {
  meta: {
    label: 'e-commerce online store',
    title: 'Gorilla mall',
    subtitle:
      'A dominant multi-category marketplace designed for massive scale, Gorilla Mall partnered with Meta Kreativ to build a fearless brand identity and a high-velocity shopping experience.',
    siteUrl: 'https://gorilla-mall.com/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'UI UX Design, Development' },
    { label: 'Client', value: 'Gorilla Mall' },
    { label: 'Timeline', value: '6 - 8 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe' },
    { label: 'Category', value: 'Portfolio, E-commerce' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
    'Building a marketplace that houses every category requires a brand identity that can carry that weight. Gorilla Mall partnered with us to move beyond a standard online shop and create a dominant e-commerce ecosystem. Our mission was to merge a bold, aggressive visual style with a streamlined user journey. By focusing on a high-velocity checkout and a clean, modern interface, we built a platform that handles massive inventory while maintaining a fast, premium shopping experience.',
  showcase: [
    { image: img(2), alt: 'Gorilla website mockup 1' },
    { image: img(3), alt: 'Gorilla website mockup 2' },
    { image: img(4), alt: 'Gorilla website mockup 3' },
    { image: img(5), alt: 'Gorilla website mockup 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'BUILDING A HIGH-SPEED MARKETPLACE FOR MASSIVE INVENTORY.',
    bodyTitle: 'Built for Strength',
    body: [
      'Gorilla Mall came to us with an ambitious goal: to build an online space that could house every product category without losing its identity or its speed. They were starting from zero and needed a platform that could handle a huge inventory without losing its speed or its personality.',
      "They didn't just need a place to list items; they needed a high-performance engine that could handle massive amounts of data and a custom design that makes browsing thousands of items feel easy. Our mission was to build a brand and a platform from scratch that brought a bold, strong look together with a fast, modern shopping experience.",
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
      'CREATING A BOLD BRAND AND A STORE BUILT FOR POWER.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'BUILDING A SHOPPING EXPERIENCE MADE FOR GROWTH.',
    bodyTitle: 'A Lasting Result',
    body:
      'The goal was to make sure Gorilla Mall never slows down. We built a system from scratch that is fast, strong, and ready to handle huge numbers of shoppers and any type of product. It’s more than just an online shop; it’s a powerful tool designed to grow as big and as fast as the business does.',
    metrics: null,
    columns: [
      {
        label: 'THE MISSION',
        items: ['Marketplace Strategy', 'Brand Dominance', 'Category Architecture', 'Conversion Mapping'],
      },
      {
        label: 'THE BACKEND',
        items: ['High-Volume CMS', 'Fast Checkout Logic', 'Inventory Scaling', 'System Integrity'],
      },
      {
        label: 'THE FRONTEND',
        items: ['Dynamic Interface', 'Search Optimization', 'Seamless Navigation', 'Mobile-First Design'],
      },
      {
        label: 'THE TESTING',
        items: ['Load Stress Testing', 'Transaction Security', 'Performance Benchmarks', 'UX Validation'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      "Meta Kreativ built us a powerhouse. We needed a store that could handle thousands of products from the start without slowing down, and they delivered exactly that. They didn't just design a shop; they built a fast, bold system that actually matches the scale of Gorilla Mall. It’s reliable, easy to use, and exactly what we needed to lead the market.",
    author: 'Gorilla team',
    role: 'founders',
  },
};
