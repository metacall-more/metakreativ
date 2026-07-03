import { MAP_LAT, MAP_LON } from '../../data/contactPage';

const BBOX_PADDING = 0.02;
const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LON - BBOX_PADDING}%2C${MAP_LAT - BBOX_PADDING}%2C${MAP_LON + BBOX_PADDING}%2C${MAP_LAT + BBOX_PADDING}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LON}`;
const openSrc = `https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LON}#map=16/${MAP_LAT}/${MAP_LON}`;

export default function ContactMap() {
  return (
    <section className="mx-auto max-w-[calc(var(--container-max)+80px)] px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
      <div className="overflow-hidden rounded-[20px] border border-brand-ink/10 bg-white">
        <iframe
          title="Meta Kreativ office location"
          src={embedSrc}
          className="block h-[min(360px,55vw)] w-full border-0 md:h-[420px] lg:h-[480px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-1 border-t border-brand-ink/10 px-5 py-4 text-sm text-brand-gray-600 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p className="m-0 font-body">
            Ali Vitia 4, Pristina, Kosovo &mdash; Lat {MAP_LAT}, Lon {MAP_LON}
          </p>
          <a
            href={openSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-medium tracking-[1px] text-brand-ink-2 uppercase transition-opacity hover:opacity-70"
          >
            Open in maps
          </a>
        </div>
      </div>
    </section>
  );
}
