import { Avatar } from "@mui/material";
import React from "react";

const IncommingMessage = () => {
  return (
    <div className="flex items-end gap-2">
      <Avatar
        alt="Remy Sharp"
        src="/images/example-avatar.jpg"
        sx={{ width: 32, height: 32 }}
        className="border border-white"
      />
      <div className="flex flex-col gap-1">
        <div className="max-w-[70%] py-3 px-3 bg-[#ffffff] text-sm w-fit rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          Let us create a React project and then we will create a U
        </div>
        <div className="max-w-[70%] py-3 px-3 bg-[#ffffff] text-sm w-fit rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          Hello guys
        </div>
      </div>
    </div>
  );
};

export default IncommingMessage;
