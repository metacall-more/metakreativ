const IMAGE_BASE = '/assets/images/project-details/lissus';

const img = (n) => `${IMAGE_BASE}/lissus-${n}.webp`;

/** Lissus Studio case study — brand identity & digital presence, images lissus-1 … 13. */
export const LISSUS_OVERRIDES = {
  meta: {
    label: 'AGENCY BRANDING & IDENTITY',
    title: 'Lissus',
    subtitle:
      'A creative studio that speaks through design. We partnered with Lissus Studio to transform their vision into a complete, high-end brand identity—building the foundation from a single idea into a full digital reality.',
    siteUrl: 'https://www.instagram.com/lissusstudio/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'Full Identity, Brand Book' },
    { label: 'Client', value: 'Lissus' },
    { label: 'Timeline', value: '6 - 8 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe' },
    { label: 'Category', value: 'Creative Agency' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro: `Creating a brand for a creative agency requires an identity that is both a bold statement and a clean canvas. Lissus Studio partnered with us to turn their heritage into a premium visual identity. Taking inspiration from the name of an ancient Illyrian king, we merged historical roots with a sophisticated, modern design. The result is a platform that establishes their creative authority while letting their work take center stage.`,
  showcase: [
    { image: img(2), alt: 'Lissus showcase 1' },
    { image: img(3), alt: 'Lissus showcase 2' },
    { image: img(4), alt: 'Lissus showcase 3' },
    { image: img(5), alt: 'Lissus showcase 4' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'DEFINING THE IDENTITY OF A CREATIVE POWERHOUSE.',
    bodyTitle: 'Rallying around Vision',
    body: [
      `Lissus Studio needed a brand that was both a statement and a canvas. The challenge was to take a name rooted in ancient Illyrian history and build a complete visual world around it from the ground up.`,
      `We focused on merging a sophisticated, minimalist look with a strong digital presence. The result ensures their first impression is as powerful as the name they carry and the creative work they produce.`,
    ],
    images: [
      {
        image: img(6),
        alt: 'Lissus challenge visual',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Lissus challenge visual wide',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline: 'UNITING ANCIENT HERITAGE WITH MODERN CREATIVE VISION.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'CRAFTING A LEGACY FOR THE NEXT GENERATION OF DESIGN.',
    bodyTitle: 'A timeless Identity',
    body: `The goal was to give Lissus Studio a foundation that feels both ancient and modern. We built an identity that is clean and ready to evolve as the agency grows. The logo gives them a strong presence in the creative world, making the brand as powerful and lasting as the history behind its name.`,
    metrics: null,
    columns: [
      {
        label: 'The Mission',
        items: ['Creative Strategy', 'Identity Genesis', 'Brand Positioning', 'Visual Narrative'],
      },
      {
        label: 'The Backend',
        items: ['Clean Code Logic', 'High-Speed CMS', 'Asset Management', 'System Stability'],
      },
      {
        label: 'The Frontend',
        items: ['Conceptual UI', 'Smooth Transitions', 'Portfolio Display', 'Minimalist Design'],
      },
      {
        label: 'The Testing',
        items: ['Visual Precision', 'Motion Fluidity', 'Load Performance', 'Cross-Device Flow'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote: `Working with Meta Kreativ was a perfect partnership. They took our core idea and turned it into a strong brand identity that perfectly fits our studio. They didn't just build a website; they built a foundation for our future. Our digital presence now looks as professional and intentional as the work we do for our own clients. It's sharp, bold, and built to last.`,
    author: 'Labeat toska',
    role: 'founder and CEO',
  },
};
