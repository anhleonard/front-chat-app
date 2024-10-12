import { Avatar, Button, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import ButtonField from '@/libs/button';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

type Props = {
  onClose?: () => void;
};

const UserInforModal = ({ onClose }: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-1 py-3 px-1">
        <IconButton className="!p-1" onClick={() => onClose && onClose()}>
          <KeyboardArrowLeftRoundedIcon className="text-grey-c900" />
        </IconButton>
        <div className="font-semibold">Profile</div>
      </div>
      <Divider />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="relative">
          <div className="w-[400px] h-[150px] overflow-hidden">
            <img
              src={'/images/background.jpg'}
              alt="user-bg-image"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-60px] left-[16px] flex items-center gap-3">
            <Avatar
              src="/images/cute-avatar.jpeg"
              alt="user-avatar"
              style={{ width: '75px', height: '75px' }}
              className=" border-white border-[3px]"
            />
            <div className="font-semibold text-base">Anh Leonard</div>
          </div>
        </div>
        <div className="px-4 pt-[75px] pb-5 flex items-center gap-3">
          <ButtonField
            label="Add friend"
            className="py-[8px] rounded-xl flex-1"
            color="grey"
          />
          <ButtonField
            label="Chat"
            className="py-[8px] rounded-xl flex-1"
            color="primary"
          />
        </div>
        <Divider />
        <div className="p-4 text-sm flex flex-col gap-3">
          <div className="font-medium">Personal information</div>
          <div className="grid grid-cols-3">
            <div className="text-grey-c500">Gender</div>
            <div className="col-span-2">Female</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="text-grey-c500">Birthday</div>
            <div className="col-span-2">20/02/2002</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="text-grey-c500">Phone number</div>
            <div className="col-span-2">0394356433</div>
          </div>
        </div>
        <Divider />
        <div className="text-sm pt-2 pb-4">
          <Button className="flex items-center justify-normal gap-2 hover:bg-grey-c30 hover:cursor-pointer py-3 px-4 w-full">
            <BlockRoundedIcon className="text-grey-c500 text-xl" />
            <Typography
              textTransform="initial"
              className="text-grey-c900 text-sm"
            >
              Block messages and calls
            </Typography>
          </Button>
          <Button className="flex items-center justify-normal gap-2 hover:bg-grey-c30 hover:cursor-pointer py-3 px-4 w-full">
            <WarningAmberRoundedIcon className="text-grey-c500 text-xl" />
            <Typography
              textTransform="initial"
              className="text-grey-c900 text-sm"
            >
              Report
            </Typography>
          </Button>
          <Button className="flex items-center justify-normal gap-2 hover:bg-grey-c30 hover:cursor-pointer py-3 px-4 w-full">
            <DeleteOutlineRoundedIcon className="text-grey-c500 text-xl" />
            <Typography
              textTransform="initial"
              className="text-grey-c900 text-sm"
            >
              Remove friend
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInforModal;
