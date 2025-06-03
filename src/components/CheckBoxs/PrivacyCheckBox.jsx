import React from 'react';

const PrivacyCheckbox = ({ id = "privacy", label = "I accept the privacy policy*.", checked, onChange }) => {
  return (
    <div className="flex items-start gap-[10px] my-[16px]">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-[16px] h-[16px] border border-white rounded-sm bg-transparent p-[2px] appearance-none checked:bg-white checked:border-white focus:ring-0 focus:outline-none  mt-[2px] mb-[3px]"
      />
      <label
        htmlFor={id}
        className="text-[rgba(226, 232, 240, 1)] font-inter font-normal text-[14px] leading-[150%]"
      >
        {label}
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
