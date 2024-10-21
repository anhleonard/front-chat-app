import { Colors } from '@/constants/constants';
import ButtonField from '@/libs/button';
import { Avatar, Divider, IconButton } from '@mui/material';
import React from 'react';

const CardSent = () => {
  return (
    <div className="col-span-1 p-4 bg-white rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_8px]">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Avatar
            alt="user-request"
            src="/images/cute-avatar.jpeg"
            sx={{ width: 42, height: 42 }}
            className="border border-white"
          />
          <div className="flex flex-col gap-1">
            <div className="font-medium text-sm">Anh Leonard</div>
            <div className="text-xs">Sent date: 16/10/2024</div>
          </div>
        </div>
        <IconButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49973 14.5004H15.4997M8.49973 9.50042H11.9997M14.1697 20.8904C18.3537 20.6134 21.6857 17.2334 21.9597 12.9904C22.0127 12.1604 22.0127 11.3004 21.9597 10.4704C21.6857 6.22842 18.3537 2.85042 14.1697 2.57142C12.7246 2.47619 11.2748 2.47619 9.82973 2.57142C5.64573 2.84942 2.31373 6.22842 2.03973 10.4714C1.98676 11.3106 1.98676 12.1523 2.03973 12.9914C2.13973 14.5364 2.82273 15.9674 3.62773 17.1754C4.09473 18.0204 3.78673 19.0754 3.29973 19.9984C2.94973 20.6634 2.77373 20.9954 2.91473 21.2354C3.05473 21.4754 3.36973 21.4834 3.99873 21.4984C5.24373 21.5284 6.08273 21.1764 6.74873 20.6854C7.12573 20.4064 7.31473 20.2674 7.44473 20.2514C7.57473 20.2354 7.83173 20.3414 8.34373 20.5514C8.80373 20.7414 9.33873 20.8584 9.82873 20.8914C11.2537 20.9854 12.7427 20.9854 14.1707 20.8914"
              stroke={Colors.grey.c700}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </div>
      <Divider sx={{ bgcolor: Colors.grey.c10, opacity: '0.5' }} />
      <div className="py-2">
        Hello, my name is Anh Leonard. This is my message to connect with you.
        Pls accept my request.
      </div>
      <Divider sx={{ bgcolor: Colors.grey.c10, opacity: '0.5' }} />
      <div className="flex items-center gap-3 pt-5 pb-1 w-full">
        <ButtonField
          label="Cancel request"
          className="w-full !py-[8px] rounded-xl !px-0"
          color="grey"
        />
      </div>
    </div>
  );
};

export default CardSent;
