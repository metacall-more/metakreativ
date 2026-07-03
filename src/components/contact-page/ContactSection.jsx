import { CONTACT_CHANNELS } from '../../data/contactPage';

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

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M6.5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6.5a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
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
    <section className="border-t border-brand-ink/10 bg-brand-bg px-5 py-14 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-(--container-max)">
        <div className="text-center">
          <h2 className="m-0 font-caps text-[clamp(56px,12vw,180px)] leading-none tracking-[clamp(4px,1.5vw,8px)] text-brand-ink-2 uppercase">
            Let&rsquo;s talk together
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] font-body text-base leading-[1.75] text-[#4f5153] md:text-lg">
            Have a project in mind or just want to say hello? Reach out and our team will get back to
            you within one business day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:mt-20">
          {CONTACT_CHANNELS.map((channel) => (
            <div key={channel.id} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink-2">
                <ContactIcon type={channel.icon} />
              </div>
              <h3 className="m-0 font-display text-sm font-medium tracking-[1.4px] text-brand-ink-2 uppercase">
                {channel.label}
              </h3>
              <div className="mt-3 space-y-1 font-body text-base text-[#4f5153]">
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
          className="relative mx-auto mt-14 max-w-[900px] pb-16 md:mt-16 md:pb-12 lg:mt-20"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10">
            <label className="flex flex-col gap-3 font-display text-sm font-medium tracking-[1px] text-brand-ink-2 uppercase">
              Name
              <input
                type="text"
                name="name"
                className="border-0 border-b border-brand-ink/20 bg-transparent pb-3 font-body text-base font-normal normal-case tracking-normal text-brand-ink-2 outline-none transition-colors focus:border-brand-ink-2"
              />
            </label>
            <label className="flex flex-col gap-3 font-display text-sm font-medium tracking-[1px] text-brand-ink-2 uppercase">
              Email
              <input
                type="email"
                name="email"
                className="border-0 border-b border-brand-ink/20 bg-transparent pb-3 font-body text-base font-normal normal-case tracking-normal text-brand-ink-2 outline-none transition-colors focus:border-brand-ink-2"
              />
            </label>
            <label className="flex flex-col gap-3 font-display text-sm font-medium tracking-[1px] text-brand-ink-2 uppercase md:col-span-2">
              Subject
              <input
                type="text"
                name="subject"
                className="border-0 border-b border-brand-ink/20 bg-transparent pb-3 font-body text-base font-normal normal-case tracking-normal text-brand-ink-2 outline-none transition-colors focus:border-brand-ink-2"
              />
            </label>
            <label className="flex flex-col gap-3 font-display text-sm font-medium tracking-[1px] text-brand-ink-2 uppercase md:col-span-2">
              Your Message
              <textarea
                name="message"
                rows={5}
                className="resize-none border-0 border-b border-brand-ink/20 bg-transparent pb-3 font-body text-base font-normal normal-case tracking-normal text-brand-ink-2 outline-none transition-colors focus:border-brand-ink-2"
              />
            </label>
          </div>

          <button
            type="submit"
            className="absolute right-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink-2 text-white transition-opacity hover:opacity-80"
            aria-label="Send message"
          >
            <img className="h-4 w-4" src="/assets/icons/arrow-right-white.svg" alt="" />
          </button>
        </form>
      </div>
    </section>
  );
}
