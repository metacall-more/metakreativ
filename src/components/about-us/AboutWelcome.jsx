export default function AboutWelcome() {
  return (
    <section className="relative overflow-hidden bg-brand-bg pb-16 pt-10 md:pb-24 md:pt-14 lg:pb-28 lg:pt-16">
      <div className="mx-auto max-w-(--container-max) px-5 md:px-8 lg:px-0">
        <h2 className="m-0 text-center font-caps text-[clamp(56px,14vw,200px)] leading-none tracking-[clamp(4px,1.5vw,8px)] text-brand-red uppercase">
          welcome to meta kreativ
        </h2>

        <div className="mx-auto mt-10 max-w-[760px] border-t border-brand-gray-300 pt-10 text-center md:mt-14 md:pt-14">
          <p className="m-0 font-body text-lg leading-[1.65] text-[#4f5153] md:text-2xl md:leading-10">
            As a full-service creative agency, we work closely with brands to turn ideas into real
            experiences. We combine design, strategy, and technology to create work that feels right,
            connects with people, and brings lasting results.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1520px] overflow-hidden rounded-[clamp(48px,10vw,160px)] md:mt-14 lg:mt-16">
          <img
            className="h-[min(420px,55vw)] w-full object-cover object-bottom md:h-[min(520px,45vw)] lg:h-[570px]"
            src="/assets/images/about-us/about-welcome-team.png"
            alt="Meta Kreativ team"
          />
        </div>
      </div>
    </section>
  );
}
