'use client';
import { Colors } from '@/constants/constants';
import TextField from '@/libs/text-field';
import { Divider } from '@mui/material';
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SelectField from '@/libs/select';
import FriendItem from '@/components/contacts/friend-list/friend-item';

const FriendList = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center gap-3 p-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 24C20.1424 24 21.4777 23.4469 22.4623 22.4623C23.4469 21.4777 24 20.1424 24 18.75C24 17.3576 23.4469 16.0223 22.4623 15.0377C21.4777 14.0531 20.1424 13.5 18.75 13.5C17.3576 13.5 16.0223 14.0531 15.0377 15.0377C14.0531 16.0223 13.5 17.3576 13.5 18.75C13.5 20.1424 14.0531 21.4777 15.0377 22.4623C16.0223 23.4469 17.3576 24 18.75 24ZM21.2685 17.2605L19.266 20.5995C19.178 20.7462 19.0577 20.8709 18.9143 20.9641C18.7708 21.0573 18.608 21.1166 18.4382 21.1374C18.2684 21.1582 18.0961 21.1401 17.9344 21.0843C17.7727 21.0285 17.6258 20.9366 17.505 20.8155L16.344 19.656C16.2032 19.5152 16.1241 19.3242 16.1241 19.125C16.1241 18.9258 16.2032 18.7348 16.344 18.594C16.4848 18.4532 16.6758 18.3741 16.875 18.3741C17.0742 18.3741 17.2652 18.4532 17.406 18.594L18.2265 19.416L19.9815 16.4895C20.0321 16.405 20.0989 16.3313 20.178 16.2726C20.2571 16.2139 20.347 16.1713 20.4426 16.1474C20.5381 16.1234 20.6375 16.1185 20.7349 16.133C20.8323 16.1474 20.926 16.1809 21.0105 16.2315C21.095 16.2821 21.1687 16.3489 21.2274 16.428C21.2861 16.5071 21.3287 16.597 21.3526 16.6926C21.3766 16.7881 21.3815 16.8875 21.367 16.9849C21.3526 17.0823 21.3191 17.176 21.2685 17.2605ZM16.5 7.5C16.5 8.69347 16.0259 9.83807 15.182 10.682C14.3381 11.5259 13.1935 12 12 12C10.8065 12 9.66193 11.5259 8.81802 10.682C7.97411 9.83807 7.5 8.69347 7.5 7.5C7.5 6.30653 7.97411 5.16193 8.81802 4.31802C9.66193 3.47411 10.8065 3 12 3C13.1935 3 14.3381 3.47411 15.182 4.31802C16.0259 5.16193 16.5 6.30653 16.5 7.5ZM12 10.5C12.7956 10.5 13.5587 10.1839 14.1213 9.62132C14.6839 9.05871 15 8.29565 15 7.5C15 6.70435 14.6839 5.94129 14.1213 5.37868C13.5587 4.81607 12.7956 4.5 12 4.5C11.2044 4.5 10.4413 4.81607 9.87868 5.37868C9.31607 5.94129 9 6.70435 9 7.5C9 8.29565 9.31607 9.05871 9.87868 9.62132C10.4413 10.1839 11.2044 10.5 12 10.5Z"
            fill={Colors.grey.c900}
          />
          <path
            d="M12.384 21C12.2122 20.5128 12.097 20.0075 12.0405 19.494H4.5C4.5015 19.125 4.731 18.015 5.748 16.998C6.726 16.02 8.5665 15 12 15C12.39 15 12.76 15.0125 13.11 15.0375C13.449 14.526 13.854 14.0625 14.316 13.6605C13.616 13.5555 12.844 13.502 12 13.5C4.5 13.5 3 18 3 19.5C3 21 4.5 21 4.5 21H12.384Z"
            fill={Colors.grey.c900}
          />
        </svg>
        <div className="font-medium text-base leading-8 text-grey-c900">
          Friend list
        </div>
      </div>
      <Divider />
      <div className="flex-1 text-sm pt-4 text-grey-c900 flex flex-col gap-4 overflow-auto">
        <div className="font-medium">Contact (123)</div>
        <div className="items-center gap-3 grid grid-cols-3">
          <div className="col-span-2">
            <TextField
              placeholder="Search"
              endIcon={
                <SearchRoundedIcon className="text-lg text-grey-c200 font-medium" />
              }
              inputClassName="!py-2"
            />
          </div>
          <div className="col-span-1 w-full">
            <SelectField />
          </div>
        </div>
        <div className="flex flex-col divide-y-[1px]">
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />
        </div>
      </div>
    </div>
  );
};

export default FriendList;
