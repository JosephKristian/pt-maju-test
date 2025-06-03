import DirectionalButton from "../Buttons/DirectionalButton";

const AccordionItem = ({ title, image, content, index, isOpen, onClick }) => {
    return (
        <div
            className={`
            pt-[32px] pb-[36px] md:p-[40px] border-b transition-colors duration-300 group
            ${isOpen ? "border-[#72A5E8]" : "border-[#DFEBFA]"}
            hover:bg-[#F1F5F9]"
        `}
        >
            <button
                onClick={() => onClick(index)}
                className="w-full flex flex-row items-center justify-center text-center 
                    md:flex-row md:items-start md:justify-between md:text-left gap-4 md:gap-6 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${index}`}
                id={`accordion-header-${index}`}
            >
                {/* Kiri: Index + Title */}
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
                        `}>
                            {title}
                        </div>
                    </div>
                </div>

                {/* Kanan: Konten & Panah */}
                <div className="flex items-start gap-6 ml-auto transition-all duration-300 ease-in-out">
                    {/* Konten selalu dirender, dikendalikan tampilannya via style */}
                    <div
                        id={`accordion-content-${index}`}
                        role="region"
                        aria-labelledby={`accordion-header-${index}`}
                        className="hidden md:flex overflow-hidden flex flex-col md:flex-row gap-6 items-start transition-[max-height,opacity] duration-500 ease-in-out"
                        style={{
                            maxHeight: isOpen ? 500 : 0,
                            opacity: isOpen ? 1 : 0,
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="object-cover rounded-md"
                            style={{
                                width: 216,
                                height: 230,
                                transition: "opacity 0.3s ease-in-out",
                                opacity: isOpen ? 1 : 0,
                            }}
                        />
                        <p className="text-[#334155] text-[16px] leading-[160%] max-w-[434px]">
                            {content}
                        </p>
                    </div>

                    {/* Panah */}
                    <div className={`transition-transform duration-300 ${isOpen ? "md:rotate-180" : ""}`}>
                        <DirectionalButton direction="up" className="text-white w-4 h-4" />
                    </div>
                </div>
            </button>

            {/* Konten di luar button */}
            <div
                id={`accordion-content-${index}`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
                className={`
                block md:hidden
                overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
                ${isOpen ? "mt-6" : ""}
                `}
                style={{
                    maxHeight: isOpen ? 600 : 0,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                }}
            >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover rounded-md transition-opacity duration-300"
                        style={{
                            width: "358px",
                            height: "200px",
                            opacity: isOpen ? 1 : 0,
                        }}
                    />
                    <p className="text-[#334155] text-[14px] leading-[150%] max-w-[358px]">
                        {content}
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AccordionItem;
