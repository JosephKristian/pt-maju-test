const PillButton = ({ label }) => {
  return (
    <button
      className="flex items-center justify-center gap-[14px] h-[52px] w-[161px] rounded-full bg-white bg-opacity-10 backdrop-blur-[20px]"
    >
      <div className="w-[10px] h-[10px] rounded-full bg-[rgba(114,165,232,1)]" />
      <span className="font-manrope font-semibold text-[16px] leading-[20px] text-white">
        {label}
      </span>
    </button>
  );
};

export default PillButton;