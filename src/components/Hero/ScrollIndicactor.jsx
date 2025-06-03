// src/components/ScrollIndicator.jsx
import React from "react";

const ScrollIndicator = () => {
  return (
    <div className="absolute hidden flex flex-col items-center max-h-[128px] max-w-[22px] space-y-[10px] right-[0px] bottom-0 top-[253px] z-20">
      {/* Garis vertikal */}
      <div className="relative h-[100px] w-px mb-[6px]">
        {/* Garis atas (80px, abu) */}
        <div className="absolute top-0 left-0 h-[80px] w-px bg-[rgba(203,213,225,0.3)]" />
        {/* Garis bawah (20px, putih) */}
        <div className="absolute bottom-0 left-0 h-[20px] w-px bg-[rgba(241,246,253,1)]" />
      </div>

      {/* Tulisan SCROLL */}
      <span className="font-['Inter'] font-medium text-[10px] leading-[1.22] tracking-[0.05em] uppercase text-[rgba(241,246,253,0.8)] -rotate-90 py-1 pr-[6px] rounded-[2px]">
        SCROLL
      </span>
    </div>
  );
};

export default ScrollIndicator;
