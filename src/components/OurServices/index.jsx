import React, { useState } from 'react';
import SectionHeader from '../Headers/SectionHeader';
import AccordionItem from './AccordionItem';
import servicesData from './data/ServicesData';



const OurServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="py-16">
      <SectionHeader
        badgeText="OUR SERVICES"
        badgeMinWidth="min-w-[153px]"
        headingText="Real estate services tailored to every need"
        showButton={true}
        buttonBgColor="#2B3F7D"
        buttonBorder={false}
        buttonLabelColor="#ffffff"
        buttonCircleColor="#72A5E8"
        textClassname="max-w-[534px]"
        buttonAlign="bottom"
      />

      <div className="mt-12">
        {servicesData.map((item, index) => (
          <AccordionItem
            key={index}
            {...item}
            index={index}
            isOpen={openIndex === index}
            onClick={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
