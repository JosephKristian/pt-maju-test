import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AccordionItem = ({ title, content, index, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.out',
          paddingTop: '16px',
          paddingBottom: '16px',
          opacity: 1,
          pointerEvents: 'auto',
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.4,
          ease: 'power2.in',
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
          pointerEvents: 'none',
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 last:border-none">
      <button
        onClick={() => onClick(index)}
        className="w-full text-left py-4 font-semibold flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      <div
        ref={contentRef}
        style={{ height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}
      >
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
