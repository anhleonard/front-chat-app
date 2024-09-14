"use client";
import React from "react";
import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface Props {
  title: string;
  icon: IconDefinition;
}

const ToolItem = ({ title, icon }: Props) => {
  return (
    <Tooltip title={title} placement="right">
      <div className="bg-primary-c50 rounded-lg hover:cursor-pointer hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10">
        <FontAwesomeIcon icon={icon} className="text-lg text-primary-c800" />
      </div>
    </Tooltip>
  );
};

export default ToolItem;
