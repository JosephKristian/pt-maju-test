import React from 'react';
import HeroImage from '../../assets/hero-image.png'

const HeroBackground = () => {
    return (
        <>
            <div
                className="absolute inset-0 bg-cover bg-center z-[-10]"
                style={{ backgroundImage: `url(${HeroImage})` }}
            />
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `linear-gradient(188.58deg, rgba(30, 40, 77, 0), rgba(30, 40, 77, 0.75)), rgba(0, 0, 0, 0.5)`,
                }}
            />
        </>
    );
};

export default HeroBackground;
