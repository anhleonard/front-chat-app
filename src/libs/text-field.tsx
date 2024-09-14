import React, { ReactNode } from "react";

interface Props {
  placeholder: string;
  startIcon: ReactNode;
  className?: string;
}

const TextField = ({ placeholder, startIcon, className = "w-full" }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        {startIcon}
      </span>
      <input
        type="text"
        className="w-full text-sm border-[1.5px] border-grey-c100 focus:border-primary-c600 hover:border-primary-c100 ring-0 outline-none rounded-2xl px-12 py-3"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
