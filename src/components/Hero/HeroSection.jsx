import React from 'react';
import ScrollIndicator from './ScrollIndicactor';

const HeroSection = () => {
    const features = [
        {
            title: "Transparency",
            desc: "We keep you informed at every stage of \nyour project and about all the options available to you, so you can make informed decisions.",
        },
        {
            title: "Integrity",
            desc: "Integrity is at the heart of our business. We always act with honesty and fairness, \nwhether in our assessments, negotiations, \nor advice.",
        },
        {
            title: "Proximity",
            desc: "Being close to our clients, understanding \ntheir needs, and supporting them \nattentively is essential for the success of \ntheir projects.",
        },
    ];

    return (
        <>
            <div className="relative w-full z-[20] flex flex-col pt-[120px]">
                <div className="w-full flex flex-col items-start pt-[217px] relative">
                    {/* Konten utama */}
                    <h1 className="font-manrope font-bold text-[48px] leading-[120%] tracking-[0em] text-white md:text-[80px] md:leading-[110%] md:tracking-[-0.02em]">
                        Find your next<br />
                        property <span className="text-[#679BF1]">with us</span>
                    </h1>

                    <ScrollIndicator />

                </div>

                <div className="w-full mt-[100px] pt-[36px] mb-[56px]">
                    <div className="overflow-x-auto relative -ml-[24px] w-[calc(100%+48px)] md:-ml-[56px] md:w-[calc(100%+112px)]">
                        <div className="flex space-x-4 md:grid md:grid-cols-3 md:gap-x-6 md:max-w-6xl md:mx-auto md:space-x-0 pl-[24px] md:pl-[230px]">
                            {features.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 border-t border-[rgba(255,255,255,0.2)] pt-[20px] w-[280px] md:w-auto min-h-[120px] transition-colors duration-300 hover:border-[#679BF1] hover:cursor-pointer"
                                >
                                    <h3 className="font-manrope font-medium text-[24px] leading-[120%] text-white mb-2 transition-colors duration-300 hover:text-[#679BF1]">
                                        {item.title}
                                    </h3>
                                    <p className="font-inter font-normal text-[14px] max-w-[288px] min-h-[84px] leading-[150%] tracking-normal text-white whitespace-pre-line transition-colors duration-300 hover:text-[#A3BFFA]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroSection;
