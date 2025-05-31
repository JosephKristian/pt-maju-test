import React from 'react';

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
            <div className="relative w-full z-[20] flex flex-col justify-center pt-[120px]">
                <div className="w-full px-[56px] flex flex-col items-start pt-[217px] relative">
                    {/* Konten utama */}
                    <h1 className="font-manrope font-bold text-[80px] leading-[110%] tracking-[-0.02em] text-white">
                        Find your next<br />
                        property <span className="text-[#679BF1]">with us</span>
                    </h1>

                    {/* Scroll Indicator di kanan bawah */}
                    <div className="absolute flex flex-col items-center max-h-[128px] max-w-[22px] space-y-[10px] right-[56px] bottom-0 top-[253px] z-20">
                        {/* Garis vertikal */}
                        <div className="relative h-[100px] w-px mb-[6px]">
                            {/* Garis atas (80px, abu) */}
                            <div className="absolute top-0 left-0 h-[80px] w-px bg-[rgba(203,213,225,0.3)]"></div>

                            {/* Garis bawah (20px, putih) */}
                            <div className="absolute bottom-0 left-0 h-[20px] w-px bg-[rgba(241,246,253,1)]"></div>
                        </div>

                        {/* Tulisan SCROLL */}
                        <span className="font-['Inter'] font-medium text-[10px] leading-[1.22] tracking-[0.05em] uppercase 
    text-[rgba(241,246,253,0.8)] -rotate-90 py-1 pr-[6px] rounded-[2px]">
                            SCROLL
                        </span>
                    </div>

                </div>

                <div className="w-auto mt-[100px] ml-[56px] mr-[56px] mb-[56px] pt-[36px] pl-[320px] ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto ">
                        {features.map((item, i) => (
                            <div key={i} className="border-t border-[rgba(255,255,255,0.2)] pt-[20px] w-[320px] min-h-[120px]">
                                <h3 className="font-manrope font-medium text-[24px] leading-[120%] text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-inter font-normal text-[14px] max-w-[288px] min-h-[84px] leading-[150%] tracking-normal text-white  whitespace-pre-line">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
