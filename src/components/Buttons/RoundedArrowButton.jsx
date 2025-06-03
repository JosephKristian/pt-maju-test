const ArrowIcon = ({ direction = "right" }) => {
    const rotationMap = {
        right: "rotate-0",
        left: "rotate-180",
        up: "-rotate-90",
        down: "rotate-90",
    };

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform ${rotationMap[direction]}`}
        >
            <path
                d="M4.16666 10.0001H15.8333M15.8333 10.0001L10 4.16675M15.8333 10.0001L10 15.8334"
                stroke="#0F172A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


const RoundedArrowButton = ({ direction = "right" }) => {
    return (
        <button className="w-10 h-10 rounded-full bg-[rgba(198,219,247,1)] flex items-center justify-center">
            <div className="w-5 h-5 relative">
                {/* Container 20x20 untuk icon */}
                <ArrowIcon direction={direction} />
            </div>
        </button>
    );
};

export default RoundedArrowButton;
