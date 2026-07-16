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
      <div className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8 md:pt-20 lg:px-0 lg:pt-24">
        <p className="m-0 font-display text-[clamp(28px,4vw,48px)] leading-none font-semibold tracking-[0.5px] text-brand-ink-2 uppercase">
          {title}
        </p>
        <h2 className="m-0 mt-5 max-w-[920px] font-display text-[clamp(18px,2.4vw,28px)] leading-[1.35] font-medium tracking-[0.4px] text-brand-ink-2 uppercase">
          {headline}
        </h2>
      </div>

      <ProjectShowcaseCarousel
        images={images}
        visible={visible}
        className="mt-10 pb-14 md:mt-14 md:pb-20 lg:pb-24"
        imageClassName="aspect-[3/4] h-auto w-full object-cover"
        gapClass="gap-px"
        rounded={false}
        fullBleed
        infinite
      />
    </section>
  );
}
