import React from 'react';
import DirectionalArrow from '../Icons/DirectionalArrowIcon';

const DirectionalButton = ({ direction = 'right', onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[48px] h-[48px] rounded-full bg-[rgba(81,133,224,1)] flex items-center justify-center p-[8px]"
      type="button"
    >
      <DirectionalArrow direction={direction} />
    </button>
  );
};

export default DirectionalButton;
