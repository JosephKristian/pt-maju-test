import React from 'react';
import TertiaryButton from '../Buttons/TertiaryButtons';

const PropertiesList = ({ icon: Icon = null, text = "Default Text", onButtonClick }) => {
  return (
    <div
      className="
      w-full max-w-[657px] h-[92px] md:h-[135px]
      rounded-md bg-[#F1F6FD] flex items-center
      px-4 md:px-8 gap-4 md:gap-5
      transition-shadow transition-colors duration-300
      hover:shadow-md hover:bg-[#E6F0FF]
  "
    >

      <div className="w-[52px] h-[52px] md:w-[71px] md:h-[71px] rounded-full bg-[#DFEBFA] p-2.5 flex items-center justify-center">
        {Icon && <Icon />}
      </div>
      <span className="font-manrope font-semibold text-[24px] md:text-[28px] leading-[120%] align-middle text-[#3356C2]">
        {text}
      </span>
      <div className="ml-auto">
        <TertiaryButton onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default PropertiesList