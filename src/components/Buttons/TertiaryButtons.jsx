import React from 'react';
import ArrowIcon from '../Icons/ArrowIcon';

const TertiaryButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:bg-gray-200 transition"
    >
      <ArrowIcon />
    </button>
  );
};

export default TertiaryButton;
