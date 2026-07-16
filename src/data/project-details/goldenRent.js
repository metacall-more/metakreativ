const IMAGE_BASE = '/assets/images/project-details/golden-rent';

const img = (n, ext = 'webp') => `${IMAGE_BASE}/golden-${n}.${ext}`;

/** Golden Rent a Car case study — copy from Figma screenshot, images golden-1 … 13. */
export const GOLDEN_RENT_OVERRIDES = {
  meta: {
    label: 'AUTOMOTIVE RENTAL & BOOKING SYSTEMS',
    title: 'Golden Rent a Car',
    subtitle:
      'A high-efficiency rental platform built for speed and seamless operation. Golden Rent a Car partnered with Meta Kreativ to develop a comprehensive booking ecosystem and a bold brand identity that redefines the modern car rental experience.',
    siteUrl: '#',
    heroImage: img(1),
  },
  stats: [
    { label: 'Services', value: 'UI UX Design, Development' },
    { label: 'Client', value: 'Golden Rent a Car' },
    { label: 'Timeline', value: '8 – 10 Weeks' },
    { label: 'Stack', value: 'Figma, Adobe' },
    { label: 'Category', value: 'Portfolio, E-commerce' },
    { label: 'Development', value: 'Meta Kreativ Studio' },
  ],
  intro:
  `Building a high-performance rental platform needs a strong system to manage bookings in real time. Golden Rent a Car worked with us to turn their service into a fully automated booking platform. By merging a premium user interface with a powerful backend for inventory and reservation management, we built a system that simplifies the journey from search to steering wheel.`,
  showcase: [
    { image: img(2), alt: 'Golden Rent a Car laptop on yellow car' },
    { image: img(3), alt: 'Golden Rent a Car website on yellow background' },
    { image: img(4), alt: 'Golden Rent a Car multi-device mockup' },
    { image: img(5), alt: 'Golden Rent a Car website showcase' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'BUILDING A SMARTER SYSTEM FOR INSTANT BOOKINGS.',
    bodyTitle: 'Designed for Speed',
    body: [
      `Golden Rent a Car came to us with a big goal: they wanted to make renting a car as fast and easy as possible.  The challenge was building a system from scratch that could handle all the hard work behind the scenes, like tracking which cars are available and managing bookings in real-time, while making it easy to use for the user.`,
      `They didn't just need a website; they needed a powerful engine to run their whole business. We had to build a custom system that handles the schedule and the cars automatically. The mission was to turn a slow, manual process into a clean, simple experience where a customer can book a car in seconds.`,
    ],
    images: [
      {
        image: img(6),
        alt: 'Golden Rent a Car in-car device mockup',
        className: 'md:col-span-1',
      },
      {
        image: img(7),
        alt: 'Golden Rent a Car laptop on car hood',
        className: 'md:col-span-2',
      },
    ],
  },
   idea: {
    title: 'The Idea:',
    headline:
      "MAKING IT EASY TO GET FROM THE SCREEN TO THE DRIVER'S SEAT.",
    mobiles: [img(8), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'BUILDING A FASTER WAY TO RENT CARS FOR THE MODERN DRIVER.',
    bodyTitle: 'A Lasting Result',
    body:
    `The goal was simple: make renting a car feel like it takes no effort at all. We wanted the technology to do all the hard work in the background so the user never has to deal with any clutter. By building the whole system from scratch,
we tied everything together, from tracking the cars to handling the paperwork, into one quick process. `,
    metrics: null,
    columns: [
      {
        label: 'The Mission',
        items: ['Fast Booking', 'Modern Look', 'Simple Choices', 'Easy Scaling'],
      },
      {
        label: 'The Backend',
        items: ['Custom System', 'Live Car Tracking', 'Fast Booking Logic', 'Reliable Data'],
      },
      {
        label: 'The Frontend',
        items: ['Clean Design', 'Easy Search', 'Smooth Steps', 'Works on Mobile'],
      },
      {
        label: 'The Testing',
        items: ['Checking Details', 'Speed Loading', 'Easy to Use', 'System Safety'],
      },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
    `Working with Meta Kreativ changed everything for us. We needed a better way to handle bookings and manage our cars, and they built a custom system from scratch that does it all. It’s fast, simple for our customers, and makes our daily work much easier. For the first time, our website actually matches the professional service we provide.`,
    author: 'rinor g.',
    role: 'founder & CEO',
  },
};
