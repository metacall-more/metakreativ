const IMAGE_BASE = '/assets/images/project-details/golden-rent';

const img = (n, ext = 'webp') => `${IMAGE_BASE}/golden-${n}.${ext}`;

/** Golden Rent a Car case study — copy from Figma screenshot, images golden-1 … 13. */
export const GOLDEN_RENT_OVERRIDES = {
  meta: {
    label: 'Case Study',
    title: 'Golden Rent a Car',
    subtitle:
      'A modern digital booking experience that makes finding the perfect car simple, fast, and premium.',
    siteUrl: '#',
    ctaLabel: 'View Live',
    heroImage: img(1),
  },
  stats: [
    { label: 'Year', value: '2024' },
    { label: 'Role', value: 'UI/UX' },
    { label: 'Services', value: 'Web Design' },
    { label: 'Type', value: 'Portfolio' },
    { label: 'Collab', value: 'Meta Creative' },
    { label: 'Industry', value: 'Car Rental' },
  ],
  intro:
    'Golden Rent a Car needed a digital platform that matched the energy of the brand — clear, premium, and built for conversion. The project focused on creating a seamless booking journey, strong visual presence, and a website experience that helps customers find the right car with confidence.',
  showcase: [
    { image: img(2), alt: 'Golden Rent a Car laptop on yellow car' },
    { image: img(3), alt: 'Golden Rent a Car website on yellow background' },
    { image: img(4), alt: 'Golden Rent a Car multi-device mockup' },
    { image: img(5), alt: 'Golden Rent a Car website showcase' },
  ],
  challenge: {
    title: 'The Challenge:',
    headline: 'Build a rental platform that feels as premium as the fleet.',
    body: [
      'The challenge was to design a booking experience that feels fast and trustworthy — translating the brand’s bold yellow energy into a clear digital journey without sacrificing usability or conversion.',
      'We needed a system that showcases vehicles with impact while making search, compare, and reserve steps intuitive for every customer.',
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
    headline: 'A bold, conversion-focused digital experience built around discovery and booking.',
    mobiles: [img(8, 'png'), img(9), img(10), img(11), img(12)],
  },
  impact: {
    title: 'The Impact:',
    headline: 'A stronger digital presence that drives engagement and bookings.',
    body:
      'The new platform elevated brand perception and made the rental journey clearer end to end — improving engagement and creating a scalable foundation for growth.',
    columns: null,
    metrics: [
      { label: 'User Engagement', value: '+42%' },
      { label: 'Booking Rate', value: '+28%' },
      { label: 'Revenue Growth', value: '+35%' },
      { label: 'Mobile Traffic', value: '+50%' },
    ],
    image: img(13),
  },
  testimonial: {
    quote:
      'The new digital experience captures the energy of Golden Rent a Car — bold, clear, and built to convert. It gives customers confidence from the first click to the final booking.',
    author: 'Golden Rent a Car',
    role: 'Client',
  },
};
