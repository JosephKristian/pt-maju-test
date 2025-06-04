import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SectionHeader from '../Headers/SectionHeader';
import DirectionalButton from '../Buttons/DirectionalButton';
import PropertyCard from './PropertyCard';
import PillButton from '../Buttons/PillButton';
import properties from './data/propertiesData';

gsap.registerPlugin(ScrollTrigger);

const OurNewArrivalSection = () => {
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollAmount = 640;

  const handleScroll = (direction) => {
    if (sliderRef.current && !isAnimating) {
      setIsAnimating(true);
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  // Tambahkan refs ke array cardsRef
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
          stagger: 0.1,
        }
      );
    });
  }, []);

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
            className="overflow-x-auto scrollbar-hide transition-transform duration-300 will-change-transform"
          >
            <div
              id="property-list"
              className="flex w-max gap-[20px] py-[32px] pb-[56px] px-[16px] md:py-[56px] md:px-[56px]"
            >
              {properties.map((property, index) => (
                <div key={index} ref={addToRefs}>
                  <PropertyCard {...property} />
                </div>
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
