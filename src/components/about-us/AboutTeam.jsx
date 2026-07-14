import PillButton from '../PillButton';

const TEAM = [
  { name: 'Besart', role: 'developer', image: '/assets/images/about-us/team-besart.png', offset: 'none' },
  { name: 'sinan', role: 'Head of design', image: '/assets/images/about-us/team-sinan.png', offset: 'none' },
  { name: 'Megzon', role: 'CEO', image: '/assets/images/about-us/team-megzon.png', offset: 'lg' },
  { name: 'Mirjeta', role: 'Project manager', image: '/assets/images/about-us/team-mirjeta.png', offset: 'lg' },
  { name: 'sinan', role: 'Head of design', image: '/assets/images/about-us/team-altin.png', offset: 'md' },
  { name: 'Larton', role: 'developer', image: '/assets/images/about-us/team-larton.png', offset: 'md' },
];

const PHOTO_OFFSET = {
  none: 'object-[center_38%]',
  md: 'object-[center_42%]',
  lg: 'object-[center_45%]',
};

function TeamCard({ member }) {
  return (
    <article className="relative h-[min(410px,70vw)] overflow-hidden rounded-lg">
      <img className="absolute inset-0 h-full w-full object-cover" src="/assets/images/about-us/about-team-bg.png" alt="" />
      <img
        className={`absolute inset-0 h-full w-full object-cover ${PHOTO_OFFSET[member.offset]}`}
        src={member.image}
        alt={member.name}
      />
      <div className="absolute bottom-0 left-1/2 flex h-[60px] w-[min(310px,90%)] -translate-x-1/2 items-center justify-center gap-3 bg-brand-bg px-5">
        <span className="font-display text-sm font-medium tracking-[1.4px] text-brand-ink uppercase">{member.name}</span>
        <span className="h-1 w-1 rounded bg-brand-ink" aria-hidden="true" />
        <span className="font-display text-xs tracking-[1px] text-[#666] uppercase">{member.role}</span>
      </div>
    </article>
  );
}

export default function AboutTeam() {
  return (
    <section className="bg-brand-bg px-5 py-16 md:px-8 md:py-20 lg:px-0 lg:py-24">
      <div className="mx-auto max-w-(--container-max)">
        <div className="flex flex-col gap-4 font-display text-sm font-medium tracking-[1.4px] uppercase md:flex-row md:items-center md:justify-between">
          <span className="text-brand-ink-2">professional. dedicated. creative</span>
          <span className="text-brand-red">// Meet The teams</span>
          <a href="#" className="inline-flex items-center gap-4 text-brand-ink-2 transition-opacity hover:opacity-70 md:justify-end">
            join our team
            <img className="h-4 w-4" src="/assets/icons/arrow-right-1.svg" alt="" />
          </a>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1200px] text-center font-display text-[clamp(24px,3.2vw,35px)] leading-[1.2] font-semibold tracking-[0.5px] text-brand-dark uppercase md:mt-14">
          At our creative agency, our team is the driving force. With innovative designers, strategic
          thinkers, and passionate storytellers, we craft unique experiences that inspire.
        </h2>

        <PillButton
          variant="outline"
          icon="/assets/icons/arrow-right-1.svg"
          href="#"
          className="mx-auto mt-8 h-12 w-full max-w-[300px] rounded-[27px] px-6 py-3 md:mt-10"
        >
          view all the teams
        </PillButton>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-[120px]">
          <div className="flex flex-col gap-8 lg:gap-[120px]">
            <TeamCard member={TEAM[0]} />
            <TeamCard member={TEAM[1]} />
          </div>
          <div className="flex flex-col gap-8 lg:gap-[120px] lg:pt-[330px]">
            <TeamCard member={TEAM[2]} />
            <TeamCard member={TEAM[3]} />
          </div>
          <div className="flex flex-col gap-8 sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-1 lg:flex lg:flex-col lg:gap-[120px] lg:pt-[100px]">
            <TeamCard member={TEAM[4]} />
            <TeamCard member={TEAM[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
