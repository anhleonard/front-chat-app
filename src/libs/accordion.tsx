import React, { ReactNode } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

type Props = {
  header?: ReactNode;
  body?: ReactNode;
};

const AccordionLib = ({
  header = (
    <div className="font-medium text-sm text-grey-c900 pl-1.5">Group chats</div>
  ),
  body = (
    <div className="flex items-center gap-2 pl-1.5">
      <PeopleAltOutlinedIcon className={`text-xl text-grey-c700`} />
      <div className="font-normal text-sm text-grey-c900">3 members</div>
    </div>
  ),
}: Props) => {
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
        expandIcon={<ExpandMoreIcon className={`text-xl text-grey-c600`} />}
      >
        {header}
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
        {body}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionLib;
