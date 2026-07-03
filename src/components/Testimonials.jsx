import { useReveal } from '../hooks/useReveal';
import { useTestimonialDeck } from '../hooks/useTestimonialDeck';
import PillButton from './PillButton';

// Only one real testimonial exists in the source design; duplicated across
// the deck slots purely to demo the click-cycling mechanics (user's call).
const TESTIMONIAL = {
  avatar: '/assets/images/testimonial-avatar.png',
  name: 'Anne Weying',
  role: 'Cloud Sales Executive, AMD',
  heading: 'They built the impossible.',
  quote:
    '“We came to Meta with a backend mess that others couldn\'t fix. Their team didn\'t just “redesign” it they reengineered the entire logic. The result is a seamless system that handles our scale without a single glitch. True architectural mastery.”',
};
const CARD_COUNT = 3;

export default function Testimonials() {
  const headingReveal = useReveal();
  const deckReveal = useReveal();
  const { setCardRef, next, prev } = useTestimonialDeck(CARD_COUNT);

  return (
    <section className="mx-auto my-16 max-w-(--container-max) overflow-hidden rounded-[20px] border border-brand-gray-300 p-6 md:my-20 md:p-10 lg:my-[110px] lg:p-[60px]">
      <div className="flex flex-col gap-2 text-xs tracking-[1.4px] text-brand-gray-600 uppercase sm:flex-row sm:justify-between sm:text-sm">
        <span>// Trusted by client worldwide</span>
        <span className="font-display font-medium tracking-normal normal-case">4.9 / 5.0 clients review</span>
      </div>

      <h2
        ref={headingReveal}
        className="reveal my-5 mb-8 text-center font-caps text-[clamp(40px,8.3vw,160px)] normal-case md:mb-10"
      >
        <span className="text-brand-ink-2">c</span>
        <span className="text-[#26282a]">l</span>
        <span className="text-[#5e6163]">i</span>
        <span className="text-brand-gray-400">ents say about us</span>
      </h2>

      <div ref={deckReveal} className="reveal reveal-delay relative min-h-[480px] md:min-h-[560px] lg:min-h-[620px]">
        {Array.from({ length: CARD_COUNT }).map((_, i) => (
          <article
            key={i}
            ref={setCardRef(i)}
            className="testimonial-card absolute top-1/2 left-1/2 flex min-h-[auto] w-full max-w-[430px] flex-col justify-between gap-8 rounded-[20px] bg-white p-6 sm:min-h-[560px] sm:gap-10 sm:p-10"
          >
            <div className="flex items-center gap-[23px]">
              <img
                className="h-14 w-14 rounded-lg object-cover sm:h-[66px] sm:w-[66px]"
                src={TESTIMONIAL.avatar}
                alt={TESTIMONIAL.name}
              />
              <div className="flex flex-col gap-1">
                <h3 className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
                  {TESTIMONIAL.name}
                </h3>
                <p className="m-0 text-sm text-brand-gray-600">{TESTIMONIAL.role}</p>
              </div>
            </div>

            <p className="m-0 mt-2 w-full text-[clamp(60px,14vw,95px)] leading-none text-brand-ink sm:mt-5">&ldquo;</p>

            <div className="flex flex-col gap-5 text-brand-ink-2 sm:gap-7">
              <h4 className="m-0 font-display text-[17px] font-medium uppercase">{TESTIMONIAL.heading}</h4>
              <p className="m-0 text-sm leading-[1.9] sm:text-base">{TESTIMONIAL.quote}</p>
            </div>
          </article>
        ))}

        <button
          onClick={prev}
          className="absolute top-1/2 left-0 z-[3] h-9 w-9 -translate-y-1/2 sm:left-2"
          aria-label="Previous testimonial"
        >
          <img className="h-full w-full rotate-180 scale-y-[-1]" src="/assets/icons/arrow-right-3.svg" alt="" />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-0 z-[3] h-9 w-9 -translate-y-1/2 sm:right-2"
          aria-label="Next testimonial"
        >
          <img className="h-full w-full" src="/assets/icons/arrow-right-2.svg" alt="" />
        </button>
      </div>

      <PillButton
        variant="outline"
        icon="/assets/icons/arrow-right-1.svg"
        href="#"
        className="mx-auto mt-10 md:mt-[60px]"
      >
        view all testimonials
      </PillButton>
    </section>
  );
}
