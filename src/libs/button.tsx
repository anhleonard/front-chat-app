import React from "react";

interface Props {
  label: string;
  className?: string;
}

const ButtonField = ({ label, className = "w-full" }: Props) => {
  return (
    <button
      className={`text-sm text-white bg-primary-c800 hover:bg-primary-c600 rounded-2xl px-12 py-3 active:bg-primary-c900 active:scale-95 ${className} transition-transform duration-400`}
    >
      {label}
    </button>
  );
};

export default ButtonField;
