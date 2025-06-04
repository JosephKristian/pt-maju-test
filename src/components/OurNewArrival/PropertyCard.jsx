import React from 'react';
import { motion } from 'framer-motion';
import LocationIcon from '../Icons/LocationIcon';
import Rating from '../../assets/peb-a.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const PropertyCard = ({
  title,
  price,
  area,
  bedrooms,
  bathrooms,
  address,
  image,
  status,
  alt = 'Property Image',
}) => {
  return (
    <motion.div
      className="md:min-w-[617px] rounded-md overflow-hidden bg-white cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
      // sementara whileTap kalau mau tekan card bisa di tambah:
      // whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-[344px] h-[361px] md:w-full md:h-[392px] rounded-md overflow-hidden">
        {/* Gambar utama */}
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,40,77,0)] via-transparent to-[rgba(30,40,77,0.9)] z-10" />

        {/* Content di atas gambar */}
        <div className="relative z-20 flex justify-between items-start p-6">
          <div className="bg-white text-xs px-3 py-1 rounded-full font-semibold">
            {status}
          </div>

          <img
            src={Rating}
            alt="Rating"
            className="w-[92.7px] h-[26px] object-contain"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-[auto_1fr] md:gap-x-[140px] text-xs md:text-sm">
            {/* PRICE */}
            <div className="flex flex-col items-start">
              <div className="font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] text-left uppercase text-[#C6DBF7] mb-[6px] md:mb-[10px]">
                PRICE
              </div>
              <div className="font-inter font-semibold text-[24px] leading-[90%] tracking-normal">
                €{price.toLocaleString()}
              </div>
            </div>

            {/* AREA, BEDROOMS, BATHROOMS */}
            <div className="grid grid-cols-3 gap-x-4 items-start">
              {/* AREA */}
              <div>
                <div className="font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] text-left uppercase text-[#C6DBF7] mb-[6px] md:mb-[10px]">
                  AREA
                </div>
                <div className="font-inter font-medium text-base leading-[150%] tracking-normal">
                  {area}m²
                </div>
              </div>

              {/* BEDROOMS - border left */}
              <div className="border-l border-white/20 pl-4">
                <div className="font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] text-left uppercase text-[#C6DBF7] mb-[6px] md:mb-[10px]">
                  BEDROOMS
                </div>
                <div className="font-inter font-medium text-base leading-[150%] tracking-normal">
                  {bedrooms}
                </div>
              </div>

              {/* BATHROOMS - border left */}
              <div className="border-l border-white/20 pl-4">
                <div className="font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] text-left uppercase text-[#C6DBF7] mb-[6px] md:mb-[10px]">
                  BATHROOMS
                </div>
                <div className="font-inter font-medium text-base leading-[150%] tracking-normal">
                  {bathrooms}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-[24px]">
        <div className="p-[24px] md:p-0 pb-[12px] md:h-[49px] md:mb-[12px]">
          <div
            className="font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] uppercase md:mb-[2px]"
            style={{ color: 'rgba(60, 106, 212, 1)' }}
          >
            {status}
          </div>
          <div
            className="font-manrope font-medium text-[20px] leading-[120%] tracking-[0em] md:text-[24px]"
            style={{ color: 'rgba(15, 23, 42, 1)' }}
          >
            {title}
          </div>
        </div>
        <div
          className="flex items-center mx-[24px] md:mx-0 md:mt-1 font-inter font-medium text-[16px] leading-[150%] tracking-[0em]"
          style={{ color: 'rgba(51, 86, 194, 1)' }}
        >
          <LocationIcon className="w-4 h-4 mr-[8px] md:mr-[10.5px]" />
          {address}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
