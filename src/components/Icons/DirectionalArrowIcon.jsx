import React from 'react';

const rotationDegrees = {
  left: '0deg',
  right: '180deg',
  down: '-90deg',
  up: '90deg',
};

const DirectionalArrow = ({ direction = 'right' }) => {
  const rotate = rotationDegrees[direction] || '0deg';

  return (
    <svg
      width="31"
      height="33"
      viewBox="0 0 31 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate})` }}
    >
      <path
        d="M19.25 8.5L11.75 16.5L19.25 24.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DirectionalArrow;
