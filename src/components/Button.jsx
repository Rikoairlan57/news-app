import React from "react";

const Button = ({
  className,
  onClick,
  children,
  ariaLabel,
  tabIndex = "0",
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      arial-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};

export default Button;
