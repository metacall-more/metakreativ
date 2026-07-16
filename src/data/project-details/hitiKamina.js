const IMAGE_BASE = '/assets/images/project-details/hiti-kamina';

const img = (n) => `${IMAGE_BASE}/hiti-${n}.webp`;

/** Hiti Kamina case study — copy from Figma screenshot, images hiti-1 … 13. */
export const HITI_KAMINA_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Hiti Kamina',
    subtitle:
      'A modern digital platform that brings the warmth and quality of traditional craftsmanship to the digital world.',
    siteUrl: 'https://hiticompany.net/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'UI UX Design, Development' },
    { label: 'Client', value: 'Hiti Kamina' },
    { label: 'Timeline', value: '8 – 10 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe, CMS' },
    { label: 'Category', value: 'Portfolio, E-commerce' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
    'Hiti Kamina is more than just a retailer; they are experts in creating the heart of the home. From sophisticated built-in fireplaces and pellet stoves to luxury spas and saunas, their inventory is vast and diverse. Our mission was to design a platform that manages this wide range of products while maintaining a high-end, inviting aesthetic. We focused on a user journey that feels as warm and comfortable as the products they sell, ensuring that whether a customer is looking for a budget-friendly stove or a premium sauna, the experience remains premium and professional.',
  showcase: [
    { image: img(2), alt: 'Hiti Kamina website mockup 1' },
    { image: img(3), alt: 'Hiti Kamina website mockup 2' },
    { image: img(4), alt: 'Hiti Kamina website mockup 3' },
    { image: img(5), alt: 'Hiti Kamina website mockup 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'INTEGRATING TRADITIONAL CRAFTSMANSHIP INTO A MODERN DIGITAL COMMERCE SYSTEM.',
    bodyTitle: 'Rallying around Comfort',
    body: [
      'Hiti Kamina provides a vast range of technical products, from complex built-in fireplaces to luxury outdoor spas. The challenge was to take this massive, diverse inventory and present it in a way that feels premium and easy to browse.',
      "They didn't just need an online catalog; they needed an intuitive shopping experience that guides a customer from a high-level search to a specific heating solution. The mission was to simplify the complex technical specs of stoves and saunas while maintaining a warm, high-end brand feel that resonates with homeowners.",
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
    headline: 'BRINGING THE WARMTH OF CRAFTSMANSHIP TO THE DIGITAL WORLD.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'BUILDING THE ULTIMATE DIGITAL SHOWROOM FOR HOME COMFORT.',
    bodyTitle: 'A Professional Standard',
    body:
     "The goal was to make sure Hiti Kamina could showcase everything from small accessories to full-scale saunas in a clean, simple way. We built a professional foundation from the ground up that is designed to grow with their inventory. It is more than just a website; it’s a high-quality digital space that brings the warmth of their physical showroom to every screen, making it easy for homeowners to find exactly what they need.",
    metrics: null,
    columns: [
      {
        label: 'THE MISSION',
        items: ['Comfort Strategy', 'Brand Warmth', 'Inventory Logic', 'Trust Mapping'],
      },
      {
        label: 'THE BACKEND',
        items: ['Structured CMS', 'Smart Search Filters', 'High-Performance Sync', 'Reliable Architecture'],
      },
      {
        label: 'THE FRONTEND',
        items: ['Inviting Interface', 'Mobile Excellence', 'Product Storytelling', 'Intuitive Navigation'],
      },
      {
        label: 'THE TESTING',
        items: ['Search Precision', 'Checkout Security', 'Speed Benchmarks', 'System Stability'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
     "Working with Meta Kreativ was the best decision for our brand’s growth.  We needed a platform that could elegantly showcase everything from built-in fireplaces to luxury spas, and they delivered a perfectly structured system, and they delivered a perfectly structured platform. Our online presence finally matches the quality and warmth of our products. It’s clean, fast, and built for growth.",
    author: 'Hiti Kamina',
    role: 'Founder team',
  },
};
