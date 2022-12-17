import React from "react";

export default function Button({
  className,
  onClick,
  children,
  ariaLabel,
  tabIndex = "0",
}) {
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
}
