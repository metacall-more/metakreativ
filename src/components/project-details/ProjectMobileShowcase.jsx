import { useEffect, useState } from 'react';
import ProjectShowcaseCarousel from './ProjectShowcaseCarousel';

export default function ProjectMobileShowcase({ title, headline, mobiles }) {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setVisible(mq.matches ? 4 : 2);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const images = (mobiles ?? []).map((src, index) => ({
    image: src,
    alt: `Project screen ${index + 1}`,
  }));

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-(--container-max) px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
        <p className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">{title}</p>
        <h2 className="m-0 mt-4 max-w-[1100px] font-display text-[clamp(24px,3.5vw,42px)] leading-[1.25] font-semibold tracking-[0.5px] text-brand-ink-2 uppercase">
          {headline}
        </h2>

        <ProjectShowcaseCarousel
          images={images}
          visible={visible}
          className="mt-10 md:mt-14"
          imageClassName="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
