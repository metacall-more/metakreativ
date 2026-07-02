const VARIANT_CLASSES = {
  solid: 'pill-button--solid',
  outline: 'pill-button--outline',
  'outline-light': 'pill-button--outline-light',
};

export default function PillButton({ variant = 'solid', icon, children, className = '', ...props }) {
  return (
    <a className={`pill-button ${VARIANT_CLASSES[variant]} ${className}`} {...props}>
      {children}
      {icon && <img src={icon} alt="" />}
    </a>
  );
}
