import React from 'react';
import { Colors } from '@/constants/constants';
import { Divider } from '@mui/material';
import CardRequest from '@/components/contacts/friend-requests/card-request';
import ButtonField from '@/libs/button';
import CardSent from '@/components/contacts/friend-requests/card-sent';

const FriendRequests = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center gap-3 p-3">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.875 18.375V17.5C0.875 15.8755 1.52031 14.3176 2.66897 13.169C3.81763 12.0203 5.37555 11.375 7 11.375C8.62445 11.375 10.1824 12.0203 11.331 13.169C12.4797 14.3176 13.125 15.8755 13.125 17.5V18.375"
            stroke={Colors.grey.c900}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M11.375 13.125C11.375 11.9647 11.8359 10.8519 12.6564 10.0314C13.4769 9.21094 14.5897 8.75 15.75 8.75C16.3245 8.75 16.8934 8.86316 17.4242 9.08303C17.955 9.30289 18.4373 9.62515 18.8436 10.0314C19.2498 10.4377 19.5721 10.92 19.792 11.4508C20.0118 11.9816 20.125 12.5505 20.125 13.125V13.5625"
            stroke={Colors.grey.c900}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M7 10.5C7.92826 10.5 8.8185 10.1313 9.47487 9.47487C10.1313 8.8185 10.5 7.92826 10.5 7C10.5 6.07174 10.1313 5.1815 9.47487 4.52513C8.8185 3.86875 7.92826 3.5 7 3.5C6.07174 3.5 5.1815 3.86875 4.52513 4.52513C3.86875 5.1815 3.5 6.07174 3.5 7C3.5 7.92826 3.86875 8.8185 4.52513 9.47487C5.1815 10.1313 6.07174 10.5 7 10.5ZM15.75 7.875C16.4462 7.875 17.1139 7.59844 17.6062 7.10616C18.0984 6.61387 18.375 5.94619 18.375 5.25C18.375 4.55381 18.0984 3.88613 17.6062 3.39384C17.1139 2.90156 16.4462 2.625 15.75 2.625C15.0538 2.625 14.3861 2.90156 13.8938 3.39384C13.4016 3.88613 13.125 4.55381 13.125 5.25C13.125 5.94619 13.4016 6.61387 13.8938 7.10616C14.3861 7.59844 15.0538 7.875 15.75 7.875Z"
            stroke={Colors.grey.c900}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="font-medium text-base leading-8 text-grey-c900">
          Friend requests
        </div>
      </div>
      <Divider />
      <div className="flex-1 text-sm py-4 text-grey-c900 overflow-auto">
        <div className="flex flex-col gap-6">
          <div className="font-medium">Requests received (102)</div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-2">
            <CardRequest />
            <CardRequest />
          </div>
          <div className="w-[150px] mx-auto">
            <ButtonField
              label="View more"
              className="w-full !py-[8px] rounded-xl !px-0"
              color="primary"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <div className="font-medium">Requests sent (304)</div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-2">
            <CardSent />
            <CardSent />
          </div>
          <div className="w-[150px] mx-auto">
            <ButtonField
              label="View more"
              className="w-full !py-[8px] rounded-xl !px-0"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
