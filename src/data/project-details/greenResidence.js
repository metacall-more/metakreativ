const IMAGE_BASE = '/assets/images/project-details/green-residence';

const img = (n) => `${IMAGE_BASE}/green-${n}.webp`;

/** Green Residence case study — copy from Figma screenshot, images green-1 … 13. */
export const GREEN_RESIDENCE_OVERRIDES = {
  meta: {
    label: 'ARCHITECTURAL residential',
    title: 'Green Residence',
    subtitle:
      'A leader in modern construction, Green Residence partnered with Meta Kreativ to showcase two of the most prestigious residential projects in Ferizaj: "Bifurkacioni" and "Green Residence 2.',
    siteUrl: 'https://www.greenresidence-ks.com/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'Branding, UI UX, Web' },
    { label: 'Client', value: 'Green Residence' },
    { label: 'Timeline', value: '10 – 12 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe, CMS' },
    { label: 'Category', value: 'Portfolio, Construction' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
    `Green Residence came to us with projects that redefine the skyline of Ferizaj. The challenge was to create a digital presence that reflects the scale of their "Bifurkacioni" and "Green Residence 2" complexes. They didn't just need a website, they needed a platform that communicates technical superiority, from ventilated facades to high-end architectural details while assuring future residents of safety, comfort, and modern luxury.`,
  showcase: [
    { image: img(2), alt: 'Green Residence business cards' },
    { image: img(3), alt: 'Green Residence logo and brand assets' },
    { image: img(4), alt: 'Green Residence stationery' },
    { image: img(5), alt: 'Green Residence building signage' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'CRAFTING A DIGITAL IDENTITY AS SOLID AS THE CONSTRUCTION ITSELF.',
    bodyTitle: 'Rallying around Power',
    body: [
      `For Green Residence, we focused on a clean, monumental design language. By highlighting the latest technology and premium materials used in their projects, we created a digital presence that stands for security and comfort.`,
      `The experience was made to be simple and smooth, allowing people to explore high-ceiling apartments and large terraces through a premium, easy-to-use interface.`
    ],
    images: [
      {
        image: img(6),
        alt: 'Green Residence interior branding',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Green Residence website on laptop',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline: 'CREATING A DIGITAL LANDMARK THAT MATCHES THE QUALITY OF MODERN LIVING.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'ESTABLISHING A DIGITAL LANDMARK FOR PREMIUM RESIDENTIAL LIVING.',
    bodyTitle: 'A Standard of Excellence',
    body:
      `The goal was to reflect the safety and grandeur of their projects. We built a high performance showroom that showcases every architectural detail, from ventilated facades to expansive terraces. It is a solid foundation designed to build trust and grow alongside their presence in the skyline.`,
    metrics: null,
    columns: [
      {
        label: 'THE MISSION',
        items: ['Development Strategy', 'Project Grandeur', 'Investor Trust', 'Urban Integration'],
      },
      {
        label: 'THE BACKEND',
        items: ['High-Resolution CMS', 'Secure Lead Capture', 'Scalable Architecture', 'Performance Speed'],
      },
      {
        label: 'THE FRONTEND',
        items: ['Architectural UI', 'Immersive Galleries', 'Mobile Optimization', 'Interactive Floorplans'],
      },
      {
        label: 'THE TESTING',
        items: ['Browser Stability', 'Security Protocols', 'Speed Benchmarks', 'UX Precision'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
     `Meta Kreativ understood that our buildings are landmarks, and our website needed to be one too. They delivered a platform that perfectly communicates the quality, safety, and modern technology behind our complexes. For the first time, our digital identity matches the prestigious standards of our work. It is clean, reliable, and exactly what we needed to showcase the future of living in Ferizaj.`,
    author: 'Liridon Qerkini',
    role: 'co founder',
  },
};
