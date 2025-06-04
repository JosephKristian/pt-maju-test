import React from 'react';
import PillButton from '../Buttons/PillButton';
import Badge from '../Badges/BadgesPrimary';
import aboutData from './data/aboutData';


const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start px-4 md:px-0">
      {/* Kolom Kiri */}
      <div className="w-full max-w-[358px] h-auto aspect-[358/283] md:max-w-[609px] md:aspect-[609/465]">
        <img
          src={aboutData.image}
          alt="About"
          className="w-full h-full rounded-md object-cover"
        />
      </div>

      {/* Kolom Kanan */}
      <div className="w-full md:max-w-[551px] mt-10 md:mt-0 md:ml-[112px] mb-10 md:mb-0">
        <div className="mt-10 md:mt-[19.5px]">
          <Badge
            text="ABOUT"
            bgColor="rgba(223, 235, 250, 1)"
            textColor="rgba(60, 106, 212, 1)"
          />
        </div>

        <h1 className="font-manrope font-semibold text-[28px] md:text-[40px] leading-[120%] tracking-normal mb-8 md:mb-[20px]">
          {aboutData.heading}
        </h1>

        <p className="font-inter text-[16px] leading-[150%] text-[#334155] mt-8 md:mt-[20px] mb-10 md:mb-[56px]">
          {aboutData.description}
        </p>

        <PillButton
          className="w-full max-w-[262px] h-[44px]"
          label="Discover our properties"
          bgColor="rgba(43, 63, 125, 1)"
          circleColor="rgba(114, 165, 232, 1)"
        />
      </div>
    </div>
  );
};

export default AboutSection;
