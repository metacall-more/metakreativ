import { PROJECT_SLUGS } from '../data/project-details';

const LAYOUT_CYCLE = [
  'short',
  'short',
  'tall',
  'wide',
  'short',
  'wide-right',
  'tall',
  'short',
  'short',
  'short',
  'short',
  'short',
];

const CATEGORY_CYCLE = [
  'brand-identity',
  'web-design',
  'web-design',
  'digital-marketing',
  'brand-identity',
  'web-design',
  'brand-identity',
  'mobile-app',
  'digital-marketing',
  'video-production',
  'brand-identity',
  'digital-marketing',
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'brand-identity', label: 'Brand Identity' },
  { id: 'web-design', label: 'Website Design' },
  { id: 'mobile-app', label: 'Mobile App' },
  { id: 'video-production', label: 'Video Production' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
];

export const PORTFOLIO_PROJECTS = [
  { slug: 'loni-dekor', title: 'Loni Dekor' },
  { slug: 'wynthorpe', title: 'Wynthorpe' },
  { slug: 'gorilla', title: 'Gorilla' },
  { slug: 'hiti-kamina', title: 'Hiti Kamina' },
  { slug: 'green-residence', title: 'Green Residence' },
  { slug: 'anniken', title: 'Anniken' },
  { slug: 'lissus', title: 'Lissus' },
  { slug: 'ed-remodeling', title: 'ED Remodeling' },
  { slug: 'golden-rent', title: 'Golden Rent' },
].map((project, index) => ({
  id: index + 1,
  ...project,
  image: `/assets/images/project-details/${project.slug}/hero.jpg`,
  category: CATEGORY_CYCLE[index % CATEGORY_CYCLE.length],
  layout: LAYOUT_CYCLE[index % LAYOUT_CYCLE.length],
}));

export { PROJECT_SLUGS };

const LAYOUT_CLASSES = {
  short: 'md:col-span-1 md:row-span-1',
  tall: 'md:col-span-1 md:row-span-2',
  wide: 'md:col-span-2 md:row-span-1',
  'wide-right': 'md:col-start-2 md:col-span-2 md:row-span-1',
};

export function getLayoutClass(layout) {
  return LAYOUT_CLASSES[layout] ?? LAYOUT_CLASSES.short;
}
