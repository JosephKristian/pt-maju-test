import React from 'react';
import HeroBackground from './HeroBackground';
import HeroSection from './HeroSection';


const Hero = () => {
    return (
    <>
        <section className="relative h-[850px] w-full text-white overflow-hidden flex flex-col items-center justify-start" style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <HeroBackground />
            <HeroSection />
        </section>
    </>
    );
};

export default Hero;
