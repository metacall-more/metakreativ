import { useReveal } from '../hooks/useReveal';
import { useTestimonialDeck } from '../hooks/useTestimonialDeck';

const TESTIMONIALS = [
  {
    avatar: '/assets/images/testimonial-avatar.png',
    name: 'Anne Weying',
    role: 'Cloud Sales Executive, AMD',
    heading: 'They built the impossible.',
    quote:
      '“We came to Meta with a backend mess that others couldn\'t fix. Their team didn\'t just “redesign” it they reengineered the entire logic. The result is a seamless system that handles our scale without a single glitch. True architectural mastery.”',
  },
  {
    avatar: '/assets/images/testimonial-avatar-2.jpg',
    name: 'Marcus Hale',
    role: 'Founder, Wynthorpe Technology',
    heading: 'A brand that finally feels premium.',
    quote:
      '“Meta Kreativ translated our vision into a bold, cohesive identity and a website that actually converts. From strategy to launch, every detail felt intentional — and the results showed up in both brand recognition and leads.”',
  },
  {
    avatar: '/assets/images/testimonial-avatar-3.jpg',
    name: 'Elena Rossi',
    role: 'Marketing Director, Green Residence',
    heading: 'Clear process. Stunning delivery.',
    quote:
      '“Working with Meta Kreativ was seamless end to end. They understood our audience, elevated our visual language, and delivered a digital experience that feels as refined as the product itself. We recommend them without hesitation.”',
  },
];

export default function Testimonials() {
  const headingReveal = useReveal();
  const deckReveal = useReveal();
  const { setCardRef, next, prev } = useTestimonialDeck(TESTIMONIALS.length);

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
        {TESTIMONIALS.map((testimonial, i) => (
          <article
            key={testimonial.name}
            ref={setCardRef(i)}
            className="testimonial-card absolute top-1/2 left-1/2 flex min-h-[auto] w-full max-w-[430px] flex-col justify-between gap-8 rounded-[20px] bg-white p-6 sm:min-h-[560px] sm:gap-10 sm:p-10"
          >
            <div className="flex items-center gap-[23px]">
              <img
                className="h-14 w-14 rounded-lg object-cover sm:h-[66px] sm:w-[66px]"
                src={testimonial.avatar}
                alt={testimonial.name}
              />
              <div className="flex flex-col gap-1">
                <h3 className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
                  {testimonial.name}
                </h3>
                <p className="m-0 text-sm text-brand-gray-600">{testimonial.role}</p>
              </div>
            </div>

            <p className="m-0 mt-2 w-full text-[clamp(60px,14vw,95px)] leading-none text-brand-ink sm:mt-5">&ldquo;</p>

            <div className="flex flex-col gap-5 text-brand-ink-2 sm:gap-7">
              <h4 className="m-0 font-display text-[17px] font-medium uppercase">{testimonial.heading}</h4>
              <p className="m-0 text-sm leading-[1.9] sm:text-base">{testimonial.quote}</p>
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
    </section>
  );
}
