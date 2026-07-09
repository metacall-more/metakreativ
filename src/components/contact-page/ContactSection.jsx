import { CONTACT_CHANNELS, CONTACT_NEEDS_OPTIONS } from '../../data/contactPage';

const fieldClass =
  'w-full rounded-lg border border-brand-ink/10 px-4 py-3.5 font-body text-base text-brand-ink-2 outline-none transition-colors placeholder:text-brand-gray-400 focus:border-brand-ink/25';

function ContactIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === 'clock') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 8 8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="bg-brand-bg px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-(--container-max)">
        <div className="text-center">
          <h2 className="m-0 font-caps text-[clamp(56px,12vw,180px)] leading-none tracking-[clamp(4px,1.5vw,8px)] text-brand-ink-2 uppercase">
            Let&rsquo;s talk together
          </h2>
          <div className="mx-auto mt-6 h-px w-full max-w-[1720px] bg-brand-ink/10" />
          <p className="mx-auto mt-6 max-w-[900px] font-display text-xs leading-[1.7] tracking-[1.2px] text-brand-ink-2 uppercase md:text-sm md:tracking-[1.4px]">
            Do you have a branding and communications project in mind? Contact us today and we will make
            your plan a reality.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-3 md:gap-8 lg:mt-20">
          {CONTACT_CHANNELS.map((channel) => (
            <div key={channel.id} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink-2 text-white">
                <ContactIcon type={channel.icon} />
              </div>
              <h3 className="m-0 font-display text-sm font-semibold tracking-[1.4px] text-brand-ink-2 uppercase">
                {channel.label}
              </h3>
              <div className="mt-3 space-y-1 font-body text-sm leading-[1.7] text-[#4f5153] md:text-base">
                {channel.lines.map((line) => (
                  <p key={line} className="m-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <form
          className="mx-auto mt-14 max-w-[900px] rounded-2xl p-5 md:mt-16 md:p-8 lg:mt-20 lg:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <input type="text" name="name" required placeholder="Name*" className={fieldClass} />
            <input type="email" name="email" required placeholder="Email*" className={fieldClass} />
            <input type="tel" name="phone" required placeholder="Phone Number*" className={fieldClass} />
            <div className="relative">
              <select name="needs" defaultValue="" required className={`${fieldClass} appearance-none pr-10`}>
                <option value="" disabled>
                  What are your needs?
                </option>
                {CONTACT_NEEDS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <img
                className="pointer-events-none absolute top-1/2 right-4 h-3 w-3 -translate-y-1/2 opacity-60"
                src="/assets/icons/angle-down.svg"
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="relative md:col-span-2">
              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                className={`${fieldClass} min-h-[180px] resize-none pb-16`}
              />
              <button
                type="submit"
                className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink-2 text-white transition-opacity hover:opacity-80"
                aria-label="Send message"
              >
                <img className="h-4 w-4" src="/assets/icons/arrow-right-white.svg" alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
