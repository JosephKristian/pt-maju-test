import React from 'react';
import { motion } from 'framer-motion';
import MailIcon from '../Icons/MailIcon';

const TeamCard = ({ image, title, position, email }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start md:gap-0 w-full mb-[16px] md:mb-0"
        >

            {/* Gambar */}
            <motion.img
                src={image}
                alt={title}
                className="
                object-cover 
                rounded-md 
                w-full 
                aspect-[358/256] md:aspect-[429.33/413] 
                mt-[16px] md:mt-[40px]
            "
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />


            {/* Nama dan Posisi */}
            <div className='pt-[20px] md:pt-[28px] pb-[10px] md:pb-[24px] flex flex-col items-start gap-[6px]'>
                <h3 className="font-manrope font-medium text-[20px] md:text-[24px] leading-[120%] tracking-[0] text-[#0F172A] ">
                    {title}
                </h3>
                <span className="font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] uppercase text-[#3C6AD4]">
                    {position}
                </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
                <MailIcon className="max-w-4 max-h-4 text-[#334155]" />
                <span className="font-inter font-normal text-[16px] leading-[150%] tracking-[0] text-[#334155]">
                    {email}
                </span>
            </div>
        </motion.div>
    );
};

export default TeamCard;
