import React from "react";

const Button = ({
  label,
  icon,
  className = "",
  color = "primary",
  variant = "contained",
  onClick,
  disabled = false,
}) => {
  // Define styles based on the variant and color
  const baseStyle =
    "px-4 py-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out";

  const colorStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const outlinedStyles = {
    primary: "border border-blue-500 text-blue-500 hover:bg-blue-100",
    secondary: "border border-gray-500 text-gray-500 hover:bg-gray-100",
    success: "border border-green-500 text-green-500 hover:bg-green-100",
    warning: "border border-yellow-500 text-yellow-500 hover:bg-yellow-100",
    danger: "border border-red-500 text-red-500 hover:bg-red-100",
  };

  const appliedStyles =
    variant === "contained"
      ? colorStyles[color]
      : outlinedStyles[color];

  return (
    <button
      className={`${baseStyle} ${appliedStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
