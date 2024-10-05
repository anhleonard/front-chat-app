"use client";
import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const SelectField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select car:");

  const options = ["available", "offline", "lock"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-52 text-xs font-medium max-w-[120px]">
      <div
        className="select-selected bg-primary-c50 hover:opacity-70 text-primary-c800 px-3 py-2 rounded-xl cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <KeyboardArrowDownRoundedIcon
          className={`${
            isOpen ? "rotate-180" : ""
          } transform transition-transform text-base`}
        />
      </div>
      {isOpen && (
        <div className="select-items absolute w-full bg-primary-c50 text-primary-c800 mt-1 rounded-xl z-10 overflow-hidden">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-2  hover:bg-primary-c800 hover:bg-opacity-10 cursor-pointer ${
                selectedOption === option ? "bg-primary-c800 bg-opacity-30" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectField;
