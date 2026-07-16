const IMAGE_BASE = '/assets/images/project-details/wynthorpe';

const img = (n) => `${IMAGE_BASE}/wynthorpe-${n}.webp`;

/** Wynthorpe Technology case study — copy from Figma, images wynthorpe-1 … 13. */
export const WYNTHORPE_OVERRIDES = {
  meta: {
    label: 'Full-Service Digital Agency',
    title: 'Wynthorpe Technology',
    subtitle:
      'In 2023, Wynthorpe Technology, a full-service digital agency with global ambitions, partnered with Meta Kreativ to build its brand identity and digital presence from the ground up.',
    siteUrl: 'https://www.wynthorpetech.com/',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'Branding, WebDevelopment' },
    { label: 'Client', value: 'Wynthorpe Technology' },
    { label: 'Timeline', value: '6 - 8 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe, Full stack' },
    { label: 'Category', value: 'Portfolio website' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
    "When a fellow full-service agency needs a reboot, the stakes are high. Wynthorpe Technology partnered with us to completely re-think their brand identity and digital presence. Our goal was to build a system that proves their authority in the tech space merging a sharp, modern look with a backend that delivers native-level speed. We didn't just give them a new site we gave them a high-performance tool that reflects their role as a leader in technical solutions.",
  showcase: [
    { image: img(2), alt: 'Wynthorpe laptop mockup on sofa' },
    { image: img(3), alt: 'Wynthorpe laptop in red-lit room' },
    { image: img(4), alt: 'Wynthorpe tablet on red fabric' },
    { image: img(5), alt: 'Wynthorpe laptop brand mockup' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'BUILDING A BRAND THAT MATCHES THE POWER OF THE VIKING.',
    bodyTitle: 'A fresh start for a Partner Agency',
    body: [
      'but they were starting with a completely blank slate. They had no brand and no visual identity to show the world the high-level work they are capable of. Having worked directly within their team, I saw that their technical skill was already there, but they had no look to match it.',
      'We built everything from scratch, creating a brand from zero that captures the strength and boldness of a Viking. The goal was to give them a face that finally reflects the power of the solutions they deliver.',
    ],
    images: [
      {
        image: img(6),
        alt: 'Wynthorpe monitor with Viking brand mark',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Wynthorpe brand collateral flat lay',
        className: 'md:col-span-2',
      },
    ],
  },
  idea: {
    title: 'The Idea:',
    headline:
      'was to create a distinct brand, establish a Viking-inspired visual identity, and build a modern website.',
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'THE MISSION',
    headline: 'BY BUILDING ON REAL QUALITY, THE SYSTEM IS READY TO GROW WITH THE COMPANY FOR YEARS.',
    bodyTitle: 'A Lasting Result',
    body:
      "The final product is a digital workhorse that acts as much more than a portfolio. We engineered a custom WordPress foundation that delivers native-level speed and total stability. This means the Wynthorpe team can now manage complex case studies and high-scale data without the system ever slowing down. We didn't just give them a website; we built a long-term technical asset that is tough, fast, and ready to scale as their agency takes on bigger challenges.",
    metrics: null,
    columns: [
      {
        label: 'Strategy',
        items: ['Brand Evolution', 'Strategic Growth', 'Identity Mapping', 'Market Positioning'],
      },
      {
        label: 'THE BACKEND',
        items: ['Custom CMS Logic', 'Performance Tuning', 'Database Cleanup', 'Speed Optimization'],
      },
      {
        label: 'THE FRONTEND',
        items: ['Bold Interface', 'Fluid Navigation', 'Precision Layouts', 'Mobile Excellence'],
      },
      {
        label: 'THE TESTING',
        items: ['Quality Assurance', 'Cross-Device QA', 'System Stability', 'User Feedback'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'As an agency ourselves, it’s always a challenge to find a partner that actually meets our standards. Meta stepped in and took our brand to a next level. They understood that we needed a look that was bold, and a website that actually performed under pressure. The result is a clean, minimal system that our team is proud of. It was a smooth, professional collaboration from start to finish.',
    author: 'Torstein Johnsen',
    role: 'Chairman / CEO',
  },
};
