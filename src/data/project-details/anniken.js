const IMAGE_BASE = '/assets/images/project-details/anniken';

const img = (n, ext = 'webp') => `${IMAGE_BASE}/anniken-${n}.${ext}`;

/** Anniken Brinchmann case study — copy from Figma screenshot, images anniken-1 … 13. */
export const ANNIKEN_OVERRIDES = {
  meta: {
    label: 'muscle therapist',
    title: 'Anniken Brinchmann',
    subtitle:
      'A veteran in muscle therapy with over 30 years of clinical expertise, Anniken Brinchmann partnered with Meta Kreativ to create a digital presence that reflects her deep knowledge of human physiology and interdisciplinary care.',
    siteUrl: 'https://annikenbrinchmannmassasje.no/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'Branding, UI UX, Web' },
    { label: 'Client', value: 'Anniken Brinchmann' },
    { label: 'Timeline', value: '6 – 8 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe, CMS' },
    { label: 'Category', value: 'Health & Wellness' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
   `Anniken Brinchmann came to us with a rare level of expertise: over 30 years of specialized muscle therapy in Oslo’s most respected interdisciplinary clinics. Our mission was to move beyond a standard practitioner site and create a professional digital home that reflects this deep clinical knowledge. By focusing on a clean, medical-grade aesthetic and an intuitive service hierarchy, we built a platform that handles everything from sports injury recovery to chronic pain management while maintaining a calm, reassuring patient experience.`,
  showcase: [
    { image: img(2), alt: 'Anniken Brinchmann treatment visual' },
    { image: img(3), alt: 'Anniken Brinchmann branded towels' },
    { image: img(4), alt: 'Anniken Brinchmann soap packaging' },
    { image: img(5), alt: 'Anniken Brinchmann brochure mockup' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'DIGITALIZING THREE DECADES OF THERAPEUTIC EXPERTISE.',
    bodyTitle: 'Bridging Care and Technology',
    body: [
     `Anniken came to us with a career built on trust and results. The challenge was to create a complete brand identity and a website that does more than just showcase her work.`,
     `We needed a smart booking system that allows clients to choose specific massage types and treatments with ease. By moving away from generic design, we built a professional platform that manages her schedule while giving patients the confidence that they are in expert hands.`,
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
    headline: 'TRANSLATING PHYSICAL MASTERY INTO A DIGITAL EXPERIENCE.',
    mobiles: [img(8), img(9), img(10, 'png'), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'BUILDING A TRUST-DRIVEN PLATFORM FOR EXPERT CARE.',
    bodyTitle: 'A Lasting Result',
    body:
      `The goal was to reflect the precision of her work. We built a professional digital home that highlights her experience in treating chronic pain and sports injuries. It is a reliable system designed to build trust and simplify the patient journey.`,
    metrics: null,
    columns: [
      {
        label: 'THE MISSION',
        items: ['Clinical Strategy', 'Expert Positioning', 'Patient Trust', 'Service Hierarchy'],
      },
      {
        label: 'THE BACKEND',
        items: ['Secure CMS', 'Booking Integration', 'Performance Speed', 'Mobile Stability'],
      },
      {
        label: 'THE FRONTEND',
        items: ['Clinical UI', 'Calm Aesthetics', 'Simple Navigation', 'Responsive Design'],
      },
      {
        label: 'THE TESTING',
        items: ['Security Protocols', 'Browser Loading', 'UX Flow', 'Device Compatibility'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      `Working with Meta Kreativ was a game-changer. They understood that my practice is built on 30 years of trust and precision. They didn’t just build a website; they created a digital home that truly reflects my expertise. Now, my online presence feels as high-quality as the care I provide. It’s clean, professional, and exactly what my patients need.`,
    author: 'Anniken Brinchmann',
    role: 'CEO',
  },
};
