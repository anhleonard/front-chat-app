'use client';
import { Avatar, Divider, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import TextField from '@/libs/text-field';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ChatItem from './chat-item';
import { useDispatch } from 'react-redux';
import { openChatModal } from '@/redux/slices/chatModalSlice';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { openGroupModal } from '@/redux/slices/groupModalSlice';
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const ChatList = () => {
  const dispatch = useDispatch();
  const [openSearchUser, setOpenSearchUser] = useState(false);
  const [searchContent, setSearchContent] = useState('');

  const handleAddChat = () => {
    let modal = {
      isOpen: true,
      className: 'h-dvh w-[400px]',
    };
    dispatch(openChatModal(modal));
  };

  const handleAddGroup = () => {
    let modal = {
      isOpen: true,
      className: 'h-dvh w-[600px]',
    };
    dispatch(openGroupModal(modal));
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="py-3 flex items-center gap-2">
        <IconButton className="rounded-[10px] bg-grey-c50 p-1">
          <KeyboardArrowLeftRoundedIcon className="text-grey-c600 font-bold" />
        </IconButton>
        <div className="font-bold text-lg">Chat</div>
      </div>
      <Divider />

      <div className="flex items-center gap-2 mt-3">
        {/* select here */}
        {/* <BadgeAvatar />
        <div className="font-medium text-base text-grey-c900"></div>
        <SelectField /> */}
        <TextField
          placeholder="Search"
          endIcon={
            <SearchRoundedIcon className="text-lg text-grey-c200 font-medium" />
          }
          inputClassName="py-1"
          onClick={(e) => setOpenSearchUser(true)}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        {openSearchUser ? (
          <IconButton
            onClick={(e) => {
              setSearchContent('');
              setOpenSearchUser(false);
            }}
          >
            <CloseRoundedIcon className="text-grey-c700 text-lg" />
          </IconButton>
        ) : null}
      </div>

      {openSearchUser ? (
        searchContent !== '' ? (
          <div className="bg-white flex-1 flex flex-col gap-2 py-3">
            <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-grey-c30 py-2 px-3 rounded-lg">
              <Avatar
                src="/images/cute-avatar.jpeg"
                alt="user-avatar"
                className="w-[50px] h-[50px]"
              />
              <Typography
                textTransform={'initial'}
                className="font-normal text-sm text-grey-c900"
              >
                Anh Leonard
              </Typography>
            </div>
            <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-grey-c30 py-2 px-3 rounded-lg">
              <Avatar
                src="/images/cute-avatar.jpeg"
                alt="user-avatar"
                className="w-[50px] h-[50px]"
              />
              <Typography
                textTransform={'initial'}
                className="font-normal text-sm text-grey-c900"
              >
                Ngô Thành Nam
              </Typography>
            </div>
          </div>
        ) : (
          <div className="bg-white flex-1 flex items-center mt-16 flex-col gap-2">
            <ErrorOutlineRoundedIcon className="text-grey-c100 text-[50px]" />
            <div className="text-sm font-medium text-grey-c500">
              No user found
            </div>
          </div>
        )
      ) : (
        <div className="overflow-y-auto flex flex-col">
          <div className="flex items-center justify-between py-3">
            <div className="font-medium text-sm text-grey-c900 pl-1.5">
              Last chats
            </div>
            <div className="flex gap-2 items-center">
              <IconButton
                className="p-2 bg-primary-c10 rounded-[10px] transition duration-200"
                onClick={() => handleAddChat()}
              >
                <PersonAddAltOutlinedIcon className="text-primary-c800 font-bold text-sm" />
              </IconButton>
              <IconButton
                className="p-2 bg-primary-c10 rounded-[10px] transition duration-200"
                onClick={() => handleAddGroup()}
              >
                <GroupAddOutlinedIcon className="text-primary-c800 font-bold text-sm" />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1 overflow-auto pt-2 pb-3">
            <div className="flex flex-col gap-1">
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
      )}
    </div>
  );
};

export default ChatList;
