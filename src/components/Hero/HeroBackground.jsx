import React from 'react';
import HeroImage from '../../assets/hero-image.png';

const HeroBackground = () => {
    return (
        <>
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-[-10]"
                style={{ backgroundImage: `url(${HeroImage})` }}
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 w-full h-full z-[-5] bg-black bg-opacity-50"
                style={{
                    background: `linear-gradient(188.58deg, rgba(30, 40, 77, 0) 0%, rgba(30, 40, 77, 0.75) 100%), rgba(0, 0, 0, 0.5)`,
                }}
            />
        </>
    );
};

export default HeroBackground;
