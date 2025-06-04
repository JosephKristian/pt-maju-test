import React from 'react';
import { motion } from 'framer-motion';
import TertiaryButton from '../Buttons/TertiaryButtons';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PropertiesList = ({ icon: Icon = null, text = "Default Text", onButtonClick }) => {
  return (
    <motion.div
      className="
        w-full max-w-[657px] h-[92px] md:h-[135px]
        rounded-md bg-[#F1F6FD] flex items-center
        px-4 md:px-8 gap-4 md:gap-5
        transition-shadow transition-colors duration-300
        hover:shadow-md hover:bg-[#E6F0FF]
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
    </motion.div>
  );
};

export default PropertiesList;
