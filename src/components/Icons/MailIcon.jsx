import React from "react";

const MailIcon = ({ className = "" }) => {
  return (
    <svg
      width="13.33"
      height="10.67"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.6666 3.00008C14.6666 2.26675 14.0666 1.66675 13.3333 1.66675H2.66665C1.93331 1.66675 1.33331 2.26675 1.33331 3.00008M14.6666 3.00008V11.0001C14.6666 11.7334 14.0666 12.3334 13.3333 12.3334H2.66665C1.93331 12.3334 1.33331 11.7334 1.33331 11.0001V3.00008M14.6666 3.00008L7.99998 7.66675L1.33331 3.00008"
        stroke="#72A5E8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
