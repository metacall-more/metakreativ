const LOGOS = [
  {
    name: 'Golden Rent',
    width: 130,
    height: 36,
    fragments: [{ src: '/assets/icons/clients/golden-rent.svg', style: { inset: 0, width: '100%', height: '100%' } }],
  },
  {
    name: 'clickus',
    width: 110,
    height: 40,
    fragments: [
      { src: '/assets/icons/clients/clickus-main.svg', style: { left: '5%', top: '9%', width: '90%', height: '53%' } },
      { src: '/assets/icons/clients/clickus-tagline.svg', style: { left: '13.7%', top: '79%', width: '72.5%', height: '8%' } },
    ],
  },
  {
    name: 'Loni Dekor',
    width: 220,
    height: 30,
    fragments: [
      { src: '/assets/icons/clients/lonidekor-main.svg', style: { left: '1.1%', top: '7%', width: '75%', height: '86%' } },
      { src: '/assets/icons/clients/lonidekor-vector1.svg', style: { left: '82%', top: '8%', width: '7.9%', height: '85%' } },
      { src: '/assets/icons/clients/lonidekor-vector2.svg', style: { left: '91%', top: '8%', width: '7.9%', height: '85%' } },
      { src: '/assets/icons/clients/lonidekor-icon.svg', style: { left: '81.8%', top: '8%', width: '8.9%', height: '85%' } },
      { src: '/assets/icons/clients/lonidekor-dot.svg', style: { left: '96.7%', top: '8%', width: '2.2%', height: '8.7%' } },
    ],
  },
  {
    name: 'Gorilla',
    width: 162,
    height: 30,
    fragments: [{ src: '/assets/icons/clients/gorilla.svg', style: { inset: 0, width: '100%', height: '100%' } }],
  },
  {
    name: 'Lissus',
    width: 158,
    height: 30,
    fragments: [
      { src: '/assets/icons/clients/lissus-main.svg', style: { left: '26.6%', top: '16.7%', width: '72.1%', height: '66.6%' } },
      { src: '/assets/icons/clients/lissus-icon.svg', style: { left: '1.3%', top: '6.7%', width: '19%', height: '86.6%' } },
    ],
  },
  {
    name: 'Gymnific',
    width: 130,
    height: 30,
    fragments: [{ src: '/assets/icons/clients/gymnific.svg', style: { inset: 0, width: '100%', height: '100%' } }],
  },
  {
    name: 'Wynthorpe',
    width: 214,
    height: 30,
    fragments: [
      { src: '/assets/icons/clients/wynthorpe-main.svg', style: { left: '22.75%', top: '6.7%', width: '76.6%', height: '53.1%' } },
      { src: '/assets/icons/clients/wynthorpe-tagline.svg', style: { left: '49.98%', top: '76%', width: '48.6%', height: '20.4%' } },
      { src: '/assets/icons/clients/wynthorpe-icon.svg', style: { left: '0.63%', top: '3.6%', width: '17.5%', height: '87%' } },
    ],
  },
];

function ClientLogo({ logo }) {
  return (
    <span
      className="relative block shrink-0 [&_img]:block"
      style={{ width: logo.width, height: logo.height }}
    >
      {logo.fragments.map((frag, i) => (
        <img key={i} src={frag.src} alt={i === 0 ? logo.name : ''} className="absolute" style={frag.style} />
      ))}
    </span>
  );
}

export default function Clients() {
  return (
    <section className="mx-auto max-w-(--container-max) px-5 py-10 text-center md:px-8 md:py-12 lg:px-[100px] lg:py-[60px]">
      <p className="m-0 mb-8 font-display text-base font-medium tracking-[0.8px] text-brand-ink-2 uppercase md:mb-10 md:text-xl">
        Trusted by 1900+ Companies
      </p>
      <div className="clients-marquee relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-8 md:py-10">
        <div className="clients-marquee__track flex w-max items-center">
          {[0, 1].map((set) =>
            LOGOS.map((logo) => (
              <div key={`${logo.name}-${set}`} className="clients-marquee__item flex shrink-0 items-center justify-center px-8 md:px-12">
                <ClientLogo logo={logo} />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
