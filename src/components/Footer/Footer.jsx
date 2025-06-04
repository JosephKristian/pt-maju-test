import React from 'react';
import RoundedArrowButton from '../Buttons/RoundedArrowButton';
import LogoDwell from '../Logo/Dwell';
import PrivacyCheckbox from '../CheckBoxs/PrivacyCheckBox';
import LocationIcon from '../Icons/LocationIcon';
import PhoneIcon from '../Icons/PhoneIcon';
import MailIcon from '../Icons/MailIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedInIcon from '../Icons/LinkedInIcon.jsx';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-[56px] md:pt-[80px] px-0 md:px-[56px] overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-[24px] md:px-0 md:pl-[12px]">
        {/* Bagian Atas */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Kolom Kiri */}
          <div className="max-w-[468px]">
            <div className="flex justify-center md:justify-start">
              <LogoDwell />
            </div>
            <h1 className="font-manrope font-semibold text-[24px] leading-[120%] tracking-normal text-white pt-[56px] mb-[20px] md:text-[28px] text-center md:text-left">
              Stay informed about the{' '}
              <span className="text-[#679BF1]">
                latest property opportunities
              </span>
            </h1>

            {/* Form Email */}
            <div className="flex items-center gap-[1px] md:gap-[10px] w-full max-w-[374px] h-[40px] md:h-[48px] rounded-full bg-slate-50 mt-[20px] mb-[16px] p-[1px] md:p-[4px] mx-auto md:mx-0">
              <input
                type="email"
                placeholder="benolimack@car"
                className="flex-grow h-full px-4 text-sm text-slate-900 bg-transparent focus:outline-none placeholder:text-slate-400"
              />
              <RoundedArrowButton direction="right" />
            </div>

            <div className="text-center md:text-left">
              <PrivacyCheckbox />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[56px] md:gap-[162px] text-white/70 mt-[56px] md:mt-[80px] text-center md:text-left">
            {/* Menu ringkas */}
            <div className="order-1 md:order-2 space-y-[10px] text-white text-[14px] leading-[150%] font-medium tracking-[0%] font-inter mx-auto md:mx-0">
              <p><a href="#" className="hover:text-white transition">Services</a></p>
              <p><a href="#" className="hover:text-white transition">Properties</a></p>
              <p><a href="#" className="hover:text-white transition">Contact</a></p>
              <p><a href="#" className="hover:text-white transition">Blog</a></p>
            </div>

            {/* Kontak dengan ikon */}
            <div className="order-2 md:order-1 space-y-[10px] mx-auto md:mx-0">
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <div className="relative w-[20px] h-[20px]">
                  <LocationIcon className="absolute top-[5.67px] left-[2px]" />
                </div>
                <p className="font-medium text-[14px] leading-[150%] tracking-[0%] font-inter text-white">
                  118 Maréchal Street, 1000<br />
                  Brussels
                </p>
              </div>
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <div className="relative w-[20px] h-[20px]">
                  <PhoneIcon className="absolute top-[5.33px] left-[1.41px]" />
                </div>
                <p className="font-medium text-[14px] leading-[150%] tracking-[0%] font-inter text-white">
                  +3 24 60 25 52 01
                </p>
              </div>
              <div className="flex items-start gap-4 justify-center md:justify-start">
                <div className="relative w-[20px] h-[20px]">
                  <MailIcon className="absolute top-[7.67px] left-[1.33px]" />
                </div>
                <p className="font-medium text-[14px] leading-[150%] tracking-[0%] font-inter text-white">
                  contact@dwell.be
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="mt-[56px] mb-[24px] px-[24px] md:px-[56px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px]">
          <div className="order-2 md:order-1 flex items-center gap-2 text-white/70 text-sm">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-[14px] h-[14px] hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="w-[14px] h-[14px] hover:text-white transition" />
            </a>
            <span>Easyclick ©2024, all rights reserved</span>
          </div>
          <div className="order-1 md:order-2 flex flex-wrap gap-6 justify-center">
            <a href="#" className="text-white/70 hover:text-white text-sm transition">Terms & Conditions</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
