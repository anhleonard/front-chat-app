"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Divider } from "@mui/material";
import ChatIcons from "./chat-icons";
import MessageBox from "@/libs/message-box";
import IncommingMessage from "./incomming-message";
import CurrentMessage from "./current-message";

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [text, setText] = useState("");

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center gap-2 justify-between p-3">
        <div className="font-bold text-lg leading-8">Group Chat</div>
        <ChatIcons />
      </div>
      <Divider />
      <div className="flex-1 bg-[#edf0f5] rounded-b-lg px-3 pb-3 flex flex-col overflow-y-auto">
        <div className="flex-1 flex flex-col gap-8 overflow-auto py-8 pr-1">
          <IncommingMessage />
          <CurrentMessage />
          <IncommingMessage />
          <IncommingMessage />
          <CurrentMessage />
          <CurrentMessage />
          <CurrentMessage />
          <CurrentMessage />
        </div>
        <MessageBox
          onChange={(e) => setText(e.target.value)}
          handleKeyDown={() => {
            if (text) {
              messages.push(text);
              setMessages(messages);
            }
          }}
        />
      </div>
      <div className="h-3 bg-white w-full"></div>
    </div>
  );
};

export default ChatBox;
