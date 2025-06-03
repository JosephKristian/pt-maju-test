import React from 'react';
import aboutImage from '../../assets/about-image.png';
import PillButton from '../Buttons/PillButton';
import Badge from '../Badges/BadgesPrimary';

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start ">
        {/* Kolom Kiri */}
        <div className="w-[358px] h-[283px] md:w-[609px] md:h-[465px]">
          <img
            src={aboutImage}
            alt="About"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        {/* Kolom Kanan */}
        <div className="mb-[61px] md:mb-0 md:w-[551px] md:ml-[112px]">
          <div className="mt-[40px] md:mt-[19.5px]">
            <Badge
              text={'ABOUT'}
              bgColor='rgba(223, 235, 250, 1)'
              textColor='rgba(60, 106, 212, 1)'
            />
          </div>
          <h1 className="font-manrope font-semibold text-[32px] md:text-[40px] leading-[120%] tracking-normal mb-[32px] md:mb-[20px]">
            Let's bring your property projects to life with complete peace of mind
          </h1>

          <p className="font-inter font-normal text-[16px] leading-[150%] tracking-normal text-[#334155] mt-[32px] md:mt-[20px] mb-[32px] md:mb-[56px]">
            At Dwell, we understand that real estate is much more than a transaction; it's a commitment of trust.
            We do everything possible to ensure our clients have a smooth, secure, and satisfying experience.
            This is why you can trust us to successfully carry out your property project.
          </p>

          <PillButton
            className='w-[262px] h-[44px]'
            label={"Discover our properties"}
            bgColor='rgba(43, 63, 125, 1)'
            circleColor='rgba(114, 165, 232, 1)' />
        </div>
      </div>
    </>
  );
};

export default AboutSection;