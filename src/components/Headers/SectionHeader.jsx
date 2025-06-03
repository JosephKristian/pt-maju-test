import React from 'react';
import Badge from '../Badges/BadgesPrimary';
import PillButton from '../Buttons/PillButton';

const alignMap = {
  top: 'items-start',
  center: 'items-center',
  bottom: 'items-end',
};

const SectionHeader = ({
    textClassname = '',
    badgeText,
    badgeMinWidth = 'min-w-[138px]',
    headingText,
    showButton = false,          // apakah tampilkan PillButton
    buttonLabel = 'Discover all our properties',
    buttonBgColor = '',
    buttonCircleColor = 'rgba(51, 86, 194, 1)',
    buttonBorder = true,
    buttonBorderColor = 'rgba(198, 219, 247, 1)',
    buttonClassName = 'w-[262px] h-[44px]',
    buttonLabelColor = 'rgba(51, 86, 194, 1)',
    buttonAlign = 'center',
    className = '',
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <Badge
                text={badgeText}
                bgColor="rgba(223, 235, 250, 1)"
                textColor="rgba(60, 106, 212, 1)"
                className={`${badgeMinWidth} mb-4`}
            />
            <div className={`flex justify-between mb-4 ${alignMap[buttonAlign] || 'items-center'}`}>
                <h1 className={`font-manrope font-semibold text-[32px] leading-[120%] tracking-[0%] text-[#0F172A] md:text-[40px] ${textClassname}`}>
                    {headingText}
                </h1>
                {showButton && (
                    <PillButton
                        label={buttonLabel}
                        bgColor={buttonBgColor}
                        circleColor={buttonCircleColor}
                        border={buttonBorder}
                        borderColor={buttonBorderColor}
                        className={`hidden md:flex ${buttonClassName}`}
                        labelColor={buttonLabelColor}
                    />
                )}
            </div>
        </div>
    );
};

export default SectionHeader;
