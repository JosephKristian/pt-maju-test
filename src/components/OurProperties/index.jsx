import React, { useState } from 'react';
import Badge from '../Badges/BadgesPrimary';
import PropertiesList from './PropertiesList';
import HomeIcon from '../Icons/HomeIcon';
import ComStoreIcon from '../Icons/ComStoreIcon';
import ApartementIcon from '../Icons/ApartementIcon';
import HomeStudentIcon from '../Icons/HomeStudentIcon';
import SectionHeader from '../Headers/SectionHeader';
import { toast } from 'react-toastify';


const OurPropertiesSection = () => {
  const handleClick = (text) => {
    toast.info(`You clicked the button for ${text}`);
  }

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
        <PropertiesList
          text="House"
          icon={HomeIcon}
          onButtonClick={() => handleClick('House')}
        />
        <PropertiesList
          text="Commercial"
          icon={ComStoreIcon}
          onButtonClick={() => handleClick('Commercial')}
        />
        <PropertiesList
          text="Apartement"
          icon={ApartementIcon}
          onButtonClick={() => handleClick('Apartement')}
        />
        <PropertiesList
          text="Student Housing"
          icon={HomeStudentIcon}
          onButtonClick={() => handleClick('Student Housing')}
        />
      </div>
    </>
  );
};

export default OurPropertiesSection;