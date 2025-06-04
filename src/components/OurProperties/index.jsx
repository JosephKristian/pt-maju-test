import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Badge from '../Badges/BadgesPrimary';
import PropertiesList from './PropertiesList';
import HomeIcon from '../Icons/HomeIcon';
import ComStoreIcon from '../Icons/ComStoreIcon';
import ApartementIcon from '../Icons/ApartementIcon';
import HomeStudentIcon from '../Icons/HomeStudentIcon';
import SectionHeader from '../Headers/SectionHeader';
import { toast } from 'react-toastify';

gsap.registerPlugin(ScrollTrigger);

const OurPropertiesSection = () => {
  const itemsRef = useRef([]);

  const handleClick = (text) => {
    toast.info(`You clicked the button for ${text}`);
  };

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);

  // Helper function untuk assign ref ke setiap item
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <>
      <div className="mb-16">
        <SectionHeader
          badgeText="OUR PROPERTIES"
          badgeMinWidth="min-w-[138px]"
          headingText="Types of properties"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[14px]">
        <div ref={addToRefs}>
          <PropertiesList
            text="House"
            icon={HomeIcon}
            onButtonClick={() => handleClick('House')}
          />
        </div>
        <div ref={addToRefs}>
          <PropertiesList
            text="Commercial"
            icon={ComStoreIcon}
            onButtonClick={() => handleClick('Commercial')}
          />
        </div>
        <div ref={addToRefs}>
          <PropertiesList
            text="Apartement"
            icon={ApartementIcon}
            onButtonClick={() => handleClick('Apartement')}
          />
        </div>
        <div ref={addToRefs}>
          <PropertiesList
            text="Student Housing"
            icon={HomeStudentIcon}
            onButtonClick={() => handleClick('Student Housing')}
          />
        </div>
      </div>
    </>
  );
};

export default OurPropertiesSection;
