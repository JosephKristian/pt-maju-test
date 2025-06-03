const PillButton = ({
  label,
  bgColor = "bg-white/10",          // bisa tailwind class atau css color string
  circleColor = "bg-[#72A5E8]",     // sama
  border = false,                   // apakah pakai border
  borderColor = "border-white/30", // warna border, default Tailwind class
  labelColor = "text-white",        // warna teks label, default putih
  href,
  LinkComponent,
  onClick,
  className = "",                   // kelas tambahan opsional
}) => {
  // Fungsi untuk cek apakah string adalah class tailwind (misal mulai dengan "bg-" atau text-)
  const isTailwindClass = (color) => /^bg-/.test(color);
  const isBorderTailwindClass = (color) => /^border-/.test(color);
  const isTextTailwindClass = (color) => /^text-/.test(color);

  const buttonStyle = isTailwindClass(bgColor) ? {} : { backgroundColor: bgColor };
  const circleStyle = isTailwindClass(circleColor) ? {} : { backgroundColor: circleColor };

  // Bangun kelas border jika aktif
  const borderClass = border
    ? isBorderTailwindClass(borderColor)
      ? borderColor
      : "" // kalau borderColor bukan tailwind, kita apply via style nanti
    : "";

  // Jika borderColor bukan tailwind class dan border aktif, tambahkan style borderColor
  const borderStyle = border && !isBorderTailwindClass(borderColor)
    ? { borderWidth: "1.5px", borderStyle: "solid", borderColor: borderColor }
    : {};

  // Tentukan kelas atau style untuk label color
  const labelClass = isTextTailwindClass(labelColor) ? labelColor : "";
  const labelStyle = !isTextTailwindClass(labelColor) ? { color: labelColor } : {};

  const buttonClasses = `group flex items-center justify-center gap-[14px] h-[52px] min-w-[161px] rounded-full backdrop-blur-[20px] transition-all duration-300 hover:bg-white/20 ${
    isTailwindClass(bgColor) ? bgColor : ""
  } ${border ? "border-[1.5px]" : ""} ${borderClass} ${className}`.trim();

  const buttonCombinedStyle = { ...buttonStyle, ...borderStyle };

  const circleClasses = `w-[10px] h-[10px] rounded-full transition-transform duration-300 group-hover:scale-110 ${
    isTailwindClass(circleColor) ? circleColor : ""
  }`;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const ButtonContent = (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClasses}
      style={buttonCombinedStyle}
    >
      <div className={circleClasses} style={circleStyle} />
      <span
        className={`font-manrope font-semibold text-[16px] leading-[20px] transition-colors duration-300 ${labelClass}`}
        style={labelStyle}
      >
        {label}
      </span>
    </button>
  );

  if (LinkComponent && href) {
    return <LinkComponent href={href}>{ButtonContent}</LinkComponent>;
  }

  return ButtonContent;
};

export default PillButton;
