import { useEffect, useState } from "react";
import PillButton from "../Buttons/PillButton";
import LogoDwell from "../Logo/Dwell";
import HamburgerMenuButton from "../Buttons/HamburgerMenuButton";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["ABOUT", "OUR SERVICES", "OUR PROPERTIES"];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-center h-[120px] px-[24px] md:px-[56px] z-[9999] transition-colors duration-300 ${scrolled ? "bg-[#0F172A]/90 backdrop-blur-md" : "bg-transparent"}`}
        >
            <LogoDwell />
            <div className="flex items-center w-full m-auto">
                <div className="flex items-center justify-between flex-1 h-[52px] ml-[24px] md:ml-[56px]">
                    {/* Desktop nav links */}
                    <div className="hidden md:flex gap-[32px]">
                        {navLinks.map((text, index) => (
                            <span
                                key={index}
                                className="font-manrope font-bold text-[14px] leading-[20px] tracking-[4%] uppercase align-middle text-white hover:text-[#679BF1] transition-colors duration-300 cursor-pointer"
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                    {/* Desktop button */}
                    <div className="hidden md:block mt- auto flex justify-end">
                        <PillButton
                            label="Contact Us"
                            bgColor="rgba(255, 255, 255, 0.1)"
                            circleColor="rgba(114, 165, 232, 1)"
                            href="https://wa.me/1234567890?text=Hello%20there"
                        />
                    </div>

                    {/* Mobile hamburger */}
                    <div className="block md:hidden ml-auto pr-[24px]">
                        <HamburgerMenuButton
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen(prev => !prev)}
                        />
                    </div>
                </div>
            </div>

            {/* Optional: Mobile dropdown menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0F172A] backdrop-blur-md md:hidden flex flex-col items-start gap-4 px-[24px] py-6 z-[9998]">
                    {navLinks.map((text, index) => (
                        <span
                            key={index}
                            className="font-manrope font-bold text-[14px] leading-[20px] tracking-[4%] uppercase text-white hover:text-[#679BF1] cursor-pointer"
                        >
                            {text}
                        </span>
                    ))}
                    <PillButton label="Contact Us" />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
