import { createProjectDetail, withMoreProjects } from './createProjectDetail';
import { LONI_DEKOR_OVERRIDES } from './loniDekor';
import { WYNTHORPE_OVERRIDES } from './wynthorpe';
import { GORILLA_OVERRIDES } from './gorilla';
import { HITI_KAMINA_OVERRIDES } from './hitiKamina';
import { GREEN_RESIDENCE_OVERRIDES } from './greenResidence';
import { ANNIKEN_OVERRIDES } from './anniken';
import { LISSUS_OVERRIDES } from './lissus';
import { ED_REMODELING_OVERRIDES } from './edRemodeling';
import { GOLDEN_RENT_OVERRIDES } from './goldenRent';

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
  { slug: 'wynthorpe', name: 'Wynthorpe Technology' },
  { slug: 'gorilla', name: 'Gorilla' },
  { slug: 'hiti-kamina', name: 'Hiti Kamina' },
  { slug: 'green-residence', name: 'Green Residence' },
  { slug: 'anniken', name: 'Anniken Brinchmann' },
  { slug: 'lissus', name: 'Lissus' },
  { slug: 'ed-remodeling', name: 'E&D Remodeling' },
  { slug: 'golden-rent', name: 'Golden Rent a Car' },
];

const PROJECT_OVERRIDES = {
  'loni-dekor': LONI_DEKOR_OVERRIDES,
  wynthorpe: WYNTHORPE_OVERRIDES,
  gorilla: GORILLA_OVERRIDES,
  'hiti-kamina': HITI_KAMINA_OVERRIDES,
  'green-residence': GREEN_RESIDENCE_OVERRIDES,
  anniken: ANNIKEN_OVERRIDES,
  lissus: LISSUS_OVERRIDES,
  'ed-remodeling': ED_REMODELING_OVERRIDES,
  'golden-rent': GOLDEN_RENT_OVERRIDES,
};

const baseRegistry = Object.fromEntries(
  DEFINITIONS.map(({ slug, name }) => {
    const siblings = PROJECT_SLUGS.filter((s) => s !== slug).slice(0, 5);
    const base = createProjectDetail(name, slug, { moreProjectSlugs: siblings });
    const overrides = PROJECT_OVERRIDES[slug];
    return [slug, overrides ? deepMerge(base, overrides) : base];
  })
);

function deepMerge(base, overrides) {
  return {
    ...base,
    ...overrides,
    meta: { ...base.meta, ...overrides.meta },
    challenge: overrides.challenge
      ? { ...base.challenge, ...overrides.challenge }
      : base.challenge,
    idea: overrides.idea ? { ...base.idea, ...overrides.idea } : base.idea,
    impact: overrides.impact ? { ...base.impact, ...overrides.impact } : base.impact,
    testimonial: overrides.testimonial
      ? { ...base.testimonial, ...overrides.testimonial }
      : base.testimonial,
  };
}

export const PROJECT_DETAILS = Object.fromEntries(
  Object.entries(baseRegistry).map(([slug, project]) => [
    slug,
    withMoreProjects(project, baseRegistry),
  ])
);

export function getProjectBySlug(slug) {
  return PROJECT_DETAILS[slug] ?? null;
}
