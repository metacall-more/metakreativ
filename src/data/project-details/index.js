import { createProjectDetail, withMoreProjects } from './createProjectDetail';

export const PROJECT_SLUGS = [
  'loni-dekor',
  'wynthorpe',
  'gorilla',
  'hiti-kamina',
  'green-residence',
  'anniken',
  'lissus',
  'ed-remodeling',
  'golden-rent',
];

const DEFINITIONS = [
  { slug: 'loni-dekor', name: 'Loni Dekor' },
  { slug: 'wynthorpe', name: 'Wynthorpe' },
  { slug: 'gorilla', name: 'Gorilla' },
  { slug: 'hiti-kamina', name: 'Hiti Kamina' },
  { slug: 'green-residence', name: 'Green Residence' },
  { slug: 'anniken', name: 'Anniken' },
  { slug: 'lissus', name: 'Lissus' },
  { slug: 'ed-remodeling', name: 'ED Remodeling' },
  { slug: 'golden-rent', name: 'Golden Rent' },
];

const baseRegistry = Object.fromEntries(
  DEFINITIONS.map(({ slug, name }) => {
    const siblings = PROJECT_SLUGS.filter((s) => s !== slug).slice(0, 4);
    return [slug, createProjectDetail(name, slug, { moreProjectSlugs: siblings })];
  })
);

export const PROJECT_DETAILS = Object.fromEntries(
  Object.entries(baseRegistry).map(([slug, project]) => [
    slug,
    withMoreProjects(project, baseRegistry),
  ])
);

export function getProjectBySlug(slug) {
  return PROJECT_DETAILS[slug] ?? null;
}
