import React, { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

type Props = {
  title: string;
  subTitle: string;
  bgColor: string;
  hoverBgColor: string;
  iconColor: string;
};

const FileItem = ({
  title,
  subTitle,
  bgColor,
  iconColor,
  hoverBgColor,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion
      defaultExpanded
      elevation={0}
      square
      className="w-full !my-0"
      sx={{
        "::before": {
          display: "none",
        },
        paddingY: "8px",
      }}
    >
      <AccordionSummary
        sx={{
          padding: "0",
          margin: "0",
          minHeight: "unset",
          "& .MuiAccordionSummary-content": {
            margin: "0 !important",
          },
          "&.Mui-expanded": {
            margin: "0",
            minHeight: "unset",
            marginBottom: "8px !important",
          },
        }}
        // expandIcon={
        //   <KeyboardArrowRightRoundedIcon className={`text-xl text-grey-c600`} />
        // }
      >
        <div
          className={`flex flex-row gap-3 items-center w-full rounded-xl px-3 py-2 duration-75 transition hover:cursor-pointer ${hoverBgColor}`}
          onClick={toggleDropdown}
        >
          <div className={`${bgColor} p-2.5 rounded-xl bg`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.74 7.33006L15.3 2.33006C15.2065 2.22647 15.0924 2.14359 14.9649 2.08675C14.8375 2.02992 14.6995 2.00039 14.56 2.00006H6.56C6.22775 1.99609 5.89797 2.05762 5.5895 2.18111C5.28103 2.30461 4.9999 2.48766 4.76218 2.71981C4.52446 2.95196 4.33479 3.22867 4.20402 3.53412C4.07324 3.83958 4.00392 4.16781 4 4.50006V19.5001C4.00392 19.8323 4.07324 20.1605 4.20402 20.466C4.33479 20.7714 4.52446 21.0482 4.76218 21.2803C4.9999 21.5125 5.28103 21.6955 5.5895 21.819C5.89797 21.9425 6.22775 22.004 6.56 22.0001H17.44C17.7723 22.004 18.102 21.9425 18.4105 21.819C18.719 21.6955 19.0001 21.5125 19.2378 21.2803C19.4755 21.0482 19.6652 20.7714 19.796 20.466C19.9268 20.1605 19.9961 19.8323 20 19.5001V8.00006C19.9994 7.75222 19.9067 7.51346 19.74 7.33006ZM14 4.00006L17.74 8.00006H14.74C14.6353 7.99374 14.5329 7.96662 14.4387 7.92029C14.3446 7.87396 14.2607 7.80935 14.1918 7.73022C14.1229 7.6511 14.0704 7.55904 14.0375 7.45943C14.0046 7.35982 13.9918 7.25465 14 7.15006V4.00006Z"
                fill={iconColor}
              />
            </svg>
          </div>
          <div className="flex-1 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-sm text-grey-c900">
                {title}
              </div>
              <div className="font-normal text-xs text-grey-c900">
                {subTitle}
              </div>
            </div>
            <KeyboardArrowRightRoundedIcon
              className={`${
                isOpen ? "rotate-90" : ""
              } transform transition-transform text-xl text-grey-c600`}
            />
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: "0",
          margin: "0",
          "&.Mui-expanded": {
            padding: "0",
            margin: "0",
          },
        }}
      >
        <div className="pl-3.5 text-xs flex flex-col items-center">
          <div>No files shared</div>
          <div>in this conversation</div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default FileItem;
