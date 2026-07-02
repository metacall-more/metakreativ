export default function Logo({ iconHeight = 40, metaWidth = 142, kreativWidth = 170 }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-start gap-1.5">
        <img
          src="/assets/icons/logo-group2.svg"
          alt="META"
          style={{ height: 30, width: metaWidth }}
        />
        <img
          src="/assets/icons/logo-group1.svg"
          alt="KREATIV"
          style={{ height: 8, width: kreativWidth }}
        />
      </div>
      <img
        src="/assets/icons/logo-vector.svg"
        alt=""
        className="shrink-0"
        style={{ height: iconHeight, width: iconHeight }}
      />
    </div>
  );
}
