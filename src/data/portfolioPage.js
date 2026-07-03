import { PROJECT_SLUGS } from '../data/project-details';

const LAYOUT_CYCLE = ['tall', 'short', 'tall', 'wide', 'square', 'wide-right', 'large', 'stack', 'stack-right'];

const CATEGORY_CYCLE = [
  'brand-identity',
  'web-design',
  'graphic-design',
  'digital-marketing',
  'app-development',
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'brand-identity', label: 'Brand Identity' },
  { id: 'web-design', label: 'Web Design' },
  { id: 'app-development', label: 'App Development' },
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
  tall: 'md:col-span-1 md:row-span-2',
  short: 'md:col-span-1 md:row-span-1',
  wide: 'md:col-span-2 md:row-span-1',
  'wide-right': 'md:col-span-2 md:row-span-1',
  square: 'md:col-span-1 md:row-span-1',
  large: 'md:col-span-1 md:row-span-2',
  stack: 'md:col-span-1 md:row-span-1',
  'stack-right': 'md:col-span-1 md:row-span-1',
};

export function getLayoutClass(layout) {
  return LAYOUT_CLASSES[layout] ?? '';
}
