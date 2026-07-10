import { CONTACT_CHANNELS, CONTACT_NEEDS_OPTIONS } from '../../data/contactPage';

const fieldClass =
  'w-full rounded-lg border border-brand-ink/10 px-4 py-3.5 font-body text-base text-brand-ink-2 outline-none transition-colors placeholder:text-brand-gray-400 focus:border-brand-ink/25';

function ContactIcon({ type }) {
  if (type === 'location') {
    return (
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.03906 14.707C0.761719 8.55469 0 7.91016 0 5.625C0 2.51953 2.49023 0 5.625 0C8.73047 0 11.25 2.51953 11.25 5.625C11.25 7.91016 10.459 8.55469 6.18164 14.707C5.91797 15.1172 5.30273 15.1172 5.03906 14.707Z" fill="#DFE4E8"/>
</svg>

    );
  }

  if (type === 'clock') {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.5C15 8.86667 14.6667 10.125 14 11.275C13.3333 12.425 12.425 13.3333 11.275 14C10.125 14.6667 8.86667 15 7.5 15C6.13333 15 4.875 14.6667 3.725 14C2.575 13.3333 1.66667 12.425 1 11.275C0.333333 10.125 0 8.86667 0 7.5C0 6.13333 0.333333 4.875 1 3.725C1.66667 2.575 2.575 1.66667 3.725 1C4.875 0.333333 6.13333 0 7.5 0C8.86667 0 10.125 0.333333 11.275 1C12.425 1.66667 13.3333 2.575 14 3.725C14.6667 4.875 15 6.13333 15 7.5ZM7.5 3.3C7.5 3.16667 7.45833 3.05 7.375 2.95C7.29167 2.85 7.18333 2.8 7.05 2.8C6.91667 2.8 6.8 2.85 6.7 2.95C6.6 3.05 6.55 3.16667 6.55 3.3V8.45C6.55 8.61667 6.63333 8.75 6.8 8.85L10.1 10.7C10.2 10.7667 10.3083 10.7833 10.425 10.75C10.5417 10.7167 10.6333 10.6417 10.7 10.525C10.7667 10.4083 10.7833 10.2917 10.75 10.175C10.7167 10.0583 10.65 9.96667 10.55 9.9L7.5 8.15V3.3Z" fill="#DFE4E8"/>
</svg>

    );
  }

  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 14.0502C8.86667 14.0502 10.125 13.7585 11.275 13.1752C12.425 12.5919 13.3333 11.8002 14 10.8002C14.6667 9.8002 15 8.7002 15 7.5002C15 6.30019 14.6667 5.2002 14 4.2002C13.3333 3.2002 12.425 2.40853 11.275 1.8252C10.125 1.24186 8.86667 0.950195 7.5 0.950195C6.13333 0.950195 4.875 1.24186 3.725 1.8252C2.575 2.40853 1.66667 3.2002 1 4.2002C0.333333 5.2002 0 6.30019 0 7.5002C0 8.3002 0.158333 9.0752 0.475 9.8252C0.791667 10.5752 1.25 11.2335 1.85 11.8002C1.75 12.7335 1.5 13.6669 1.1 14.6002C1.06667 14.6669 1.08333 14.7419 1.15 14.8252C1.21667 14.9085 1.3 14.9502 1.4 14.9502C3 14.6835 4.3 14.3002 5.3 13.8002C6.03333 13.9669 6.76667 14.0502 7.5 14.0502Z" fill="#DFE4E8"/>
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
                <img className="h-4 w-4" src="/assets/icons/message-icon.svg" alt="" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
