const Badge = ({
  text,
  bgColor = "rgba(60, 106, 212, 1)",
  textColor = "white",
  width = 72,
  height = 26,
  gap = 2,
  className = "",
}) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    borderRadius: "9999px", // rounded-full
    fontFamily: "Manrope, sans-serif",
    fontWeight: 800,
    fontSize: "12px",
    lineHeight: "150%",
    letterSpacing: "0.05em", // 5%
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    padding: "0 10px", // agar teks gak nempel banget ke pinggir
    whiteSpace: "nowrap",
  };

  return (
    <div className={className} style={style}>
      {text}
    </div>
  );
};

export default Badge;
