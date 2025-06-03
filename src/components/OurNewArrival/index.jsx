import React, { useRef, useState } from 'react';
import SectionHeader from '../Headers/SectionHeader';
import DirectionalButton from '../Buttons/DirectionalButton';
import PropertyCard from './PropertyCard';
import PillButton from '../Buttons/PillButton';
import properties from './data/propertiesData';

const OurNewArrivalSection = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollAmount = 640;

  const handleScroll = (direction) => {
    if (sliderRef.current && !isAnimating) {
      setIsAnimating(true);
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      // Set cooldown agar animasi tidak spam
      setTimeout(() => setIsAnimating(false), 400); // 400ms sesuai waktu scroll
    }
  };

  return (
    <>
      <div className='py-[56px] h-max relative'>
        <div className="mx-[16px] md:mx-[56px]">
          <SectionHeader
            badgeText="OUR NEW ARRIVALS"
            badgeMinWidth="min-w-[153px]"
            headingText="Discover our new arrivals"
            showButton={true}
          />
        </div>

        {/* Full-width overflow area */}
        <div className="relative w-screen left-1/2 -translate-x-1/2">
          <div
            ref={sliderRef}
            className="overflow-x-auto scroll-smooth transition-transform duration-300 will-change-transform"
          >
            <div
              id="property-list"
              className="flex w-max gap-[20px] py-[32px] pb-[56px] px-[16px] md:py-[56px] md:px-[56px]"
            >
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
          <div className="flex justify-center md:hidden">
            <PillButton
              label="Discover all our properties"
              circleColor="rgba(51, 86, 194, 1)"
              border={true}
              borderColor="rgba(198, 219, 247, 1)"
              className="w-[262px] h-[44px]"
              labelColor="rgba(51, 86, 194, 1)"
            />
          </div>
          {/* Slider Buttons */}
          <button
            className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 mx-[28px] z-10 hover:bg-gray-200/40 transition-all duration-300 ease-in-out rounded-full p-2 shadow-lg"
            onClick={() => handleScroll('left')}
          >
            <DirectionalButton direction="left" />
          </button>

          <button
            className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 mx-[28px] z-10 hover:bg-gray-200/40 transition-all duration-300 ease-in-out rounded-full p-2 shadow-lg"
            onClick={() => handleScroll('right')}
          >
            <DirectionalButton direction="right" />
          </button>

        </div>
      </div>
    </>
  );
};

export default OurNewArrivalSection;
