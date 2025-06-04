import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroBackground from './HeroBackground';
import HeroSection from './HeroSection';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power2.out'
            }
        );
    }, []);

    return (
        <>
            {/* Background */}
            <HeroBackground />

            {/* Container */}
            <div
                ref={containerRef}
                className="relative flex flex-col items-center justify-start h-[850px] px-[16px] md:px-[56px] mx-auto w-full max-w-[1440px]"
            >
                <HeroSection />
            </div>
        </>
    );
};

export default Hero;
