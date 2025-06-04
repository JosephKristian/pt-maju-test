import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PillButton from "../Buttons/PillButton";
import LogoDwell from "../Logo/Dwell";
import HamburgerMenuButton from "../Buttons/HamburgerMenuButton";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["ABOUT", "OUR SERVICES", "OUR PROPERTIES"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animasi varians
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const menuVariants = {
        hidden: { 
            opacity: 0, 
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: { 
            opacity: 1, 
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed top-0 left-0 w-full flex items-center justify-center h-[120px] px-[24px] md:px-[56px] z-[9999] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled 
                    ? "bg-[#0F172A]/90 backdrop-blur-md shadow-lg" 
                    : "bg-transparent"
            }`}
        >
            <LogoDwell />
            
            <div className="flex items-center w-full m-auto">
                <div className="flex items-center justify-between flex-1 h-[52px] ml-[24px] md:ml-[56px]">
                    {/* Desktop nav links */}
                    <motion.div 
                        className="hidden md:flex gap-[32px]"
                        initial="hidden"
                        animate="visible"
                    >
                        {navLinks.map((text, index) => (
                            <motion.span
                                key={index}
                                variants={linkVariants}
                                className="font-manrope font-bold text-[14px] leading-[20px] tracking-[4%] uppercase align-middle text-white hover:text-[#679BF1] transition-colors duration-300 cursor-pointer relative group"
                            >
                                {text}
                                <motion.span 
                                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#679BF1]"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            </motion.span>
                        ))}
                    </motion.div>
                    
                    {/* Desktop button */}
                    <motion.div 
                        className="hidden md:block mt-auto flex justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <PillButton
                            label="Contact Us"
                            bgColor="rgba(255, 255, 255, 0.1)"
                            circleColor="rgba(114, 165, 232, 1)"
                            href="https://wa.me/1234567890?text=Hello%20there"
                        />
                    </motion.div>

                    {/* Mobile hamburger */}
                    <motion.div 
                        className="block md:hidden ml-auto"
                        whileTap={{ scale: 0.95 }}
                    >
                        <HamburgerMenuButton
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen(prev => !prev)}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className={`
                            absolute top-full left-0 w-full 
                            md:hidden flex flex-col items-center gap-4 px-[24px] py-6 z-[9998] overflow-hidden
                            ${scrolled ? "bg-[#0F172A] backdrop-blur-md" : "bg-[#0F172A]"}
                        `}
                    >
                        {navLinks.map((text, index) => (
                            <motion.span
                                key={index}
                                variants={linkVariants}
                                className="font-manrope font-bold text-[14px] leading-[20px] tracking-[4%] uppercase text-white hover:text-[#679BF1] text-center cursor-pointer py-2 w-full"
                                whileHover={{ 
                                    x: 5,
                                    transition: { duration: 0.2 } 
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {text}
                            </motion.span>
                        ))}
                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="mt-2"
                        >
                            <PillButton 
                                label="Contact Us" 
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;