import { Avatar, Divider, IconButton } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import BadgeAvatar from "./badge-avatar";
import SelectField from "@/libs/select";
import TextField from "@/libs/text-field";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatItem from "./chat-item";

const ChatList = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="py-3 flex items-center gap-2">
        <IconButton className="rounded-[10px] bg-grey-c50 p-1">
          <KeyboardArrowLeftRoundedIcon className="text-grey-c600 font-bold" />
        </IconButton>
        <div className="font-bold text-lg">Chat</div>
      </div>
      <Divider />

      <div className="flex flex-col items-center gap-4 mt-3">
        {/* select here */}
        {/* <BadgeAvatar />
        <div className="font-medium text-base text-grey-c900"></div>
        <SelectField /> */}
        <TextField
          placeholder="Seach"
          endIcon={
            <SearchRoundedIcon className="text-sm text-grey-c200 font-medium" />
          }
          inputClassName="py-2.5"
        />
      </div>

      <div className="flex justify-between items-center py-3">
        <div className="font-medium text-sm text-grey-c900 pl-1.5">
          Last chats
        </div>
        <div className="flex gap-1 items-center">
          <IconButton className="p-2 bg-primary-c10 rounded-[10px] transition duration-200">
            <AddRoundedIcon className="text-primary-c800 font-bold text-sm" />
          </IconButton>
          <MoreVertIcon className="text-grey-c600 font-bold text-base hover:cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-1 overflow-auto pb-6">
        <div className="flex flex-col gap-1 ">
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
