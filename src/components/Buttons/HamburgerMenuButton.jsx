import React from "react";

const HamburgerMenuButton = ({ menuOpen, setMenuOpen }) => {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
      className="md:hidden flex justify-center items-center w-[45px] h-[45px] rounded-full bg-[rgba(60,105,212,1)] z-[10000]"
      style={{ gap: "10px" }}
    >
      <svg
        width="45"
        height="46"
        viewBox="0 0 45 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 23C0 10.5736 10.0736 0.5 22.5 0.5C34.9264 0.5 45 10.5736 45 23C45 35.4264 34.9264 45.5 22.5 45.5C10.0736 45.5 0 35.4264 0 23Z"
          fill="#3C69D4"
        />
        <path
          d="M15 23H30M15 18H30M15 28H30"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default HamburgerMenuButton;
