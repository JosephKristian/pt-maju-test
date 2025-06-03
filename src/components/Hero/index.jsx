import React from 'react';
import HeroBackground from './HeroBackground';
import HeroSection from './HeroSection';

const Hero = () => {
    return (
        <>
            {/* Background */}
            <HeroBackground />

            {/* Container */}
            <div className="relative flex flex-col items-center justify-start h-[850px] px-[16px] md:px-[56px] mx-auto w-full max-w-[1440px]">
                <HeroSection />
            </div>
        </>
    );
};

export default Hero;
