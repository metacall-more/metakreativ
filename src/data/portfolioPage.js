import { PROJECT_SLUGS } from '../data/project-details';

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'brand-identity', label: 'Brand Identity' },
  { id: 'web-design', label: 'Website Design' },
  { id: 'mobile-app', label: 'Mobile App' },
  { id: 'video-production', label: 'Video Production' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
];

/**
 * Mosaic order matches the portfolio page reference:
 * [short][short][tall]
 * [wide······][tall]
 * [short][wide-right····]
 * [tall][short][short]
 * [tall][short][short]
 */
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    slug: 'gorilla',
    title: 'Gorilla',
    image: '/assets/images/portfolio-page/gorilla-img.webp',
    category: 'web-design',
    layout: 'short',
  },
  {
    id: 2,
    slug: 'golden-rent',
    title: 'Golden Rent',
    image: '/assets/images/portfolio-page/goldenrentacar-img.webp',
    category: 'web-design',
    layout: 'short',
  },
  {
    id: 3,
    slug: 'loni-dekor',
    title: 'Loni Dekor',
    image: '/assets/images/portfolio-page/lonidekor-img.webp',
    category: 'web-design',
    layout: 'tall',
  },
  {
    id: 4,
    slug: 'wynthorpe',
    title: 'Wynthorpe',
    image: '/assets/images/portfolio-page/wynthorpe-img.webp',
    category: 'digital-marketing',
    layout: 'wide',
  },
  {
    id: 5,
    slug: 'anniken',
    title: 'Anniken Brinchmann',
    image: '/assets/images/portfolio-page/annikenbrinchmann-img.webp',
    category: 'brand-identity',
    layout: 'short',
  },
  {
    id: 6,
    slug: 'lissus',
    title: 'Lissus',
    image: '/assets/images/portfolio-page/lonidekor-img.png',
    category: 'brand-identity',
    layout: 'wide-right',
  },
  {
    id: 7,
    slug: 'ed-remodeling',
    title: 'ED Remodeling',
    image: '/assets/images/portfolio-page/erremodeling-img.png',
    category: 'web-design',
    layout: 'tall',
  },
  {
    id: 8,
    slug: 'hiti-kamina',
    title: 'Hiti Kamina',
    image: '/assets/images/portfolio-page/hitikamina-img.webp',
    category: 'web-design',
    layout: 'short',
  },
  {
    id: 9,
    slug: null,
    title: 'Dress by Dree',
    image: '/assets/images/portfolio-page/image-7.webp',
    category: 'brand-identity',
    layout: 'short',
  },
  {
    id: 10,
    slug: 'green-residence',
    title: 'Green Residence',
    image: '/assets/images/portfolio-page/GreenResidence-img.webp',
    category: 'brand-identity',
    layout: 'short',
  },
  {
    id: 11,
    slug: null,
    title: 'Dress by Dree',
    image: '/assets/images/portfolio-page/Dress-by-Dree-img.webp',
    category: 'brand-identity',
    layout: 'short',
  },
];

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
