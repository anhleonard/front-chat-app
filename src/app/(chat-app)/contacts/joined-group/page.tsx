'use client';
import { Colors } from '@/constants/constants';
import TextField from '@/libs/text-field';
import { Divider } from '@mui/material';
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SelectField from '@/libs/select';
import GroupItem from '@/components/contacts/joined-group/joined-group';

const JoinedGroup = () => {
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
            d="M17 19.9999C17 18.3429 14.761 16.9999 12 16.9999C9.239 16.9999 7 18.3429 7 19.9999M21 16.9999C21 15.7699 19.766 14.7129 18 14.2499M3 16.9999C3 15.7699 4.234 14.7129 6 14.2499M18 10.2359C18.2963 9.974 18.5378 9.6561 18.7108 9.3005C18.8838 8.9449 18.9847 8.55862 19.0079 8.16386C19.031 7.76911 18.9759 7.37367 18.8456 7.0003C18.7154 6.62693 18.5127 6.28298 18.249 5.98825C17.9854 5.69351 17.6661 5.45381 17.3095 5.28291C16.9529 5.11201 16.5661 5.0133 16.1712 4.99245C15.7763 4.97161 15.3812 5.02903 15.0086 5.16142C14.636 5.29382 14.2932 5.49857 14 5.76391M6 10.2359C5.4123 9.70405 5.05896 8.96123 5.01717 8.1697C4.97538 7.37818 5.24853 6.60228 5.77696 6.0115C6.30539 5.42071 7.04614 5.06306 7.83741 5.01667C8.62868 4.97028 9.40616 5.23892 10 5.76391M12 13.9999C11.606 13.9999 11.2159 13.9223 10.8519 13.7715C10.488 13.6208 10.1573 13.3998 9.87868 13.1212C9.6001 12.8427 9.37913 12.5119 9.22836 12.148C9.0776 11.784 9 11.3939 9 10.9999C9 10.6059 9.0776 10.2158 9.22836 9.85185C9.37913 9.48788 9.6001 9.15716 9.87868 8.87858C10.1573 8.60001 10.488 8.37903 10.8519 8.22827C11.2159 8.0775 11.606 7.99991 12 7.99991C12.7956 7.99991 13.5587 8.31598 14.1213 8.87858C14.6839 9.44119 15 10.2043 15 10.9999C15 11.7956 14.6839 12.5586 14.1213 13.1212C13.5587 13.6838 12.7956 13.9999 12 13.9999Z"
            stroke={Colors.grey.c900}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="font-medium text-base leading-8 text-grey-c900">
          Joined group and communities
        </div>
      </div>
      <Divider />
      <div className="flex-1 text-sm pt-4 text-grey-c900 flex flex-col gap-4 overflow-auto">
        <div className="font-medium">Group and communities (456)</div>
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
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
        </div>
      </div>
    </div>
  );
};

export default JoinedGroup;
