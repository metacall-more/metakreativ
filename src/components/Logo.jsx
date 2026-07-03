export default function Logo({ iconHeight = 40, metaWidth = 142, kreativWidth = 170, theme = 'dark' }) {
  const toneClass = theme === 'light' ? 'brightness-0' : '';

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-start gap-1.5">
        <img
          src="/assets/icons/logo-group2.svg"
          alt="META"
          className={toneClass}
          style={{ height: 30, width: metaWidth }}
        />
        <img
          src="/assets/icons/logo-group1.svg"
          alt="KREATIV"
          className={toneClass}
          style={{ height: 8, width: kreativWidth }}
        />
      </div>
      <img
        src="/assets/icons/logo-vector.svg"
        alt=""
        className={`shrink-0 ${toneClass}`}
        style={{ height: iconHeight, width: iconHeight }}
      />
    </div>
  );
}
