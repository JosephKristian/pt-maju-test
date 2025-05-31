import PillButton from "../Buttons/PillButton";

const Navbar = () => {
    const navLinks = ['ABOUT', 'OUR SERVICES', 'OUR PROPERTIES'];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full flex items-center justify-center h-[120px] px-[56px] z-20">
                <div className="font-inter font-semibold text-[37.2px] leading-[44.64px] tracking-[-0.03em] text-white">
                    Dwell
                </div>
                <div className="flex items-center w-full max-w-[1233px] mx-auto">
                    <div className="flex items-center justify-between flex-1 h-[52px] ml-[56px]">
                        <div className="flex gap-[32px]">
                            {navLinks.map((text, index) => (
                                <span
                                    key={index}
                                    className="font-manrope font-bold text-[14px] leading-[20px] tracking-[4%] uppercase align-middle text-white hover:text-[#679BF1] transition-colors duration-300 cursor-pointer"
                                >
                                    {text}
                                </span>
                            ))}
                        </div>
                        <PillButton label="Contact Us" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
