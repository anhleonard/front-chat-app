import ChatBox from '@/components/chat-box/chat-box';
import ChatFile from '@/components/chat-files/chat-file';
import ChatList from '@/components/chat-list/chat-list';
import React from 'react';

const ChatPage = () => {
  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="col-span-2">
        <ChatList />
      </div>
      <div className="col-span-3">
        <ChatBox />
      </div>
      <div className="col-span-2">
        <ChatFile />
      </div>
    </div>
  );
};

export default ChatPage;
