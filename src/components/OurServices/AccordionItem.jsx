import { motion, AnimatePresence } from "framer-motion";
import DirectionalButton from "../Buttons/DirectionalButton";

const AccordionItem = ({ title, image, content, index, isOpen, onClick }) => {
    return (
        <motion.div
            className={`
            pt-[32px] pb-[36px] md:p-[40px] border-b transition-colors duration-300 group
            ${isOpen ? "border-[#72A5E8]" : "border-[#DFEBFA]"}
            hover:bg-[#F1F5F9]`}
            layout
            initial={false}
            animate={{ backgroundColor: isOpen ? "#F1F5F9" : "transparent" }}
        >
            <button
                onClick={() => onClick(index)}
                className="w-full flex flex-row items-center justify-center text-center 
                    md:flex-row md:items-start md:justify-between md:text-left gap-4 md:gap-6 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
                id={`accordion-header-${index}`}
            >
                <div className="flex-1">
                    <div className="flex items-center md:items-start">
                        <span className={`
                        font-manrope font-extrabold text-[12px] leading-[150%] tracking-[0.05em] uppercase 
                        ${isOpen ? "text-[#475569]" : "text-[#CBD5E1]"}
                        transition-colors duration-300
                        `}>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className={`
                        font-manrope font-medium text-[24px] leading-[120%] tracking-[0] ml-[21px] md:ml-[106px] mt-[4px]
                        ${isOpen ? "text-[#3356C2]" : "text-[#94A3B8]"}
                        transition-colors duration-300 max-w-[300px]
                        `}
                        style={{ textAlign: 'left' }}
                        >
                            {title}
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-6 ml-auto transition-all duration-300 ease-in-out">
                    <motion.div
                        id={`accordion-content-${index}`}
                        role="region"
                        aria-labelledby={`accordion-header-${index}`}
                        className="hidden md:flex overflow-hidden flex-col md:flex-row gap-6 items-start"
                        initial={false}
                        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                        <motion.img
                            src={image}
                            alt={title}
                            className="object-cover rounded-md"
                            width={216}
                            height={230}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isOpen ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <p className="text-[#334155] text-[16px] leading-[160%] max-w-[434px]">
                            {content}
                        </p>
                    </motion.div>

                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:block"
                    >
                        <DirectionalButton direction="up" className="text-white w-4 h-4" />
                    </motion.div>

                    {/* Panah versi mobile, tidak rotate */}
                    <div className="block md:hidden">
                        <DirectionalButton direction="up" className="text-white w-4 h-4" />
                    </div>

                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`accordion-content-${index}`}
                        role="region"
                        aria-labelledby={`accordion-header-${index}`}
                        className="block md:hidden overflow-hidden mt-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <motion.img
                                src={image}
                                alt={title}
                                className="object-cover rounded-md"
                                width={358}
                                height={200}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <p className="text-[#334155] text-[14px] leading-[150%] max-w-[358px]">
                                {content}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AccordionItem;
