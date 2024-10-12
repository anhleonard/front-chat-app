import { Avatar } from "@mui/material";
import React from "react";

const ChatItem = () => {
  return (
    <div className="flex items-start justify-between hover:bg-grey-c30 cursor-pointer rounded-xl px-3 py-3">
      <div className="flex items-start">
        <Avatar
          alt="Remy Sharp"
          src="/images/example-avatar.jpg"
          sx={{ width: 36, height: 36 }}
          className="mr-2"
        />
        <div className="flex flex-col gap-1">
          <div className="font-medium leading-[16px] text-sm">
            Real estate deals
          </div>
          <div className="font-normal text-[11px] text-grey-c500 max-w-[160px] overflow-hidden whitespace-nowrap text-ellipsis">
            This method allows you to easily style scrollbars inside a box
          </div>
        </div>
      </div>
      <div className="font-medium text-xs text-grey-c500">11:15</div>
    </div>
  );
};

export default ChatItem;
