'use client';
import { Button, Divider, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const ContactSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col border-r-[1px] pr-3">
      <div className="py-3 flex items-center gap-2">
        <IconButton className="rounded-[10px] bg-grey-c50 p-1">
          <KeyboardArrowLeftRoundedIcon className="text-grey-c600 font-bold" />
        </IconButton>
        <div className="font-bold text-lg">Contacts</div>
      </div>
      <Divider />
      <div className="flex flex-col">
        <Button
          onClick={() => router.push('/contacts/friend-list')}
          className={`flex items-center justify-normal rounded-none gap-2  py-[18px] px-3 cursor-pointer ${
            pathname === '/contacts/friend-list'
              ? 'hover:bg-primary-c10 text-primary-c900 bg-primary-c50'
              : 'hover:bg-grey-c30 text-grey-c900'
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 24C20.1424 24 21.4777 23.4469 22.4623 22.4623C23.4469 21.4777 24 20.1424 24 18.75C24 17.3576 23.4469 16.0223 22.4623 15.0377C21.4777 14.0531 20.1424 13.5 18.75 13.5C17.3576 13.5 16.0223 14.0531 15.0377 15.0377C14.0531 16.0223 13.5 17.3576 13.5 18.75C13.5 20.1424 14.0531 21.4777 15.0377 22.4623C16.0223 23.4469 17.3576 24 18.75 24ZM21.2685 17.2605L19.266 20.5995C19.178 20.7462 19.0577 20.8709 18.9143 20.9641C18.7708 21.0573 18.608 21.1166 18.4382 21.1374C18.2684 21.1582 18.0961 21.1401 17.9344 21.0843C17.7727 21.0285 17.6258 20.9366 17.505 20.8155L16.344 19.656C16.2032 19.5152 16.1241 19.3242 16.1241 19.125C16.1241 18.9258 16.2032 18.7348 16.344 18.594C16.4848 18.4532 16.6758 18.3741 16.875 18.3741C17.0742 18.3741 17.2652 18.4532 17.406 18.594L18.2265 19.416L19.9815 16.4895C20.0321 16.405 20.0989 16.3313 20.178 16.2726C20.2571 16.2139 20.347 16.1713 20.4426 16.1474C20.5381 16.1234 20.6375 16.1185 20.7349 16.133C20.8323 16.1474 20.926 16.1809 21.0105 16.2315C21.095 16.2821 21.1687 16.3489 21.2274 16.428C21.2861 16.5071 21.3287 16.597 21.3526 16.6926C21.3766 16.7881 21.3815 16.8875 21.367 16.9849C21.3526 17.0823 21.3191 17.176 21.2685 17.2605ZM16.5 7.5C16.5 8.69347 16.0259 9.83807 15.182 10.682C14.3381 11.5259 13.1935 12 12 12C10.8065 12 9.66193 11.5259 8.81802 10.682C7.97411 9.83807 7.5 8.69347 7.5 7.5C7.5 6.30653 7.97411 5.16193 8.81802 4.31802C9.66193 3.47411 10.8065 3 12 3C13.1935 3 14.3381 3.47411 15.182 4.31802C16.0259 5.16193 16.5 6.30653 16.5 7.5ZM12 10.5C12.7956 10.5 13.5587 10.1839 14.1213 9.62132C14.6839 9.05871 15 8.29565 15 7.5C15 6.70435 14.6839 5.94129 14.1213 5.37868C13.5587 4.81607 12.7956 4.5 12 4.5C11.2044 4.5 10.4413 4.81607 9.87868 5.37868C9.31607 5.94129 9 6.70435 9 7.5C9 8.29565 9.31607 9.05871 9.87868 9.62132C10.4413 10.1839 11.2044 10.5 12 10.5Z"
              fill="currentColor"
            />
            <path
              d="M12.384 21C12.2122 20.5128 12.097 20.0075 12.0405 19.494H4.5C4.5015 19.125 4.731 18.015 5.748 16.998C6.726 16.02 8.5665 15 12 15C12.39 15 12.76 15.0125 13.11 15.0375C13.449 14.526 13.854 14.0625 14.316 13.6605C13.616 13.5555 12.844 13.502 12 13.5C4.5 13.5 3 18 3 19.5C3 21 4.5 21 4.5 21H12.384Z"
              fill="currentColor"
            />
          </svg>
          <Typography className="text-sm font-medium" textTransform={'initial'}>
            Friend list
          </Typography>
        </Button>
        <Button
          onClick={() => router.push('/contacts/joined-group')}
          className={`flex items-center justify-normal rounded-none gap-2  py-[18px] px-3 cursor-pointer ${
            pathname === '/contacts/joined-group'
              ? 'hover:bg-primary-c10 text-primary-c900 bg-primary-c50'
              : 'hover:bg-grey-c30 text-grey-c900'
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 19.9999C17 18.3429 14.761 16.9999 12 16.9999C9.239 16.9999 7 18.3429 7 19.9999M21 16.9999C21 15.7699 19.766 14.7129 18 14.2499M3 16.9999C3 15.7699 4.234 14.7129 6 14.2499M18 10.2359C18.2963 9.974 18.5378 9.6561 18.7108 9.3005C18.8838 8.9449 18.9847 8.55862 19.0079 8.16386C19.031 7.76911 18.9759 7.37367 18.8456 7.0003C18.7154 6.62693 18.5127 6.28298 18.249 5.98825C17.9854 5.69351 17.6661 5.45381 17.3095 5.28291C16.9529 5.11201 16.5661 5.0133 16.1712 4.99245C15.7763 4.97161 15.3812 5.02903 15.0086 5.16142C14.636 5.29382 14.2932 5.49857 14 5.76391M6 10.2359C5.4123 9.70405 5.05896 8.96123 5.01717 8.1697C4.97538 7.37818 5.24853 6.60228 5.77696 6.0115C6.30539 5.42071 7.04614 5.06306 7.83741 5.01667C8.62868 4.97028 9.40616 5.23892 10 5.76391M12 13.9999C11.606 13.9999 11.2159 13.9223 10.8519 13.7715C10.488 13.6208 10.1573 13.3998 9.87868 13.1212C9.6001 12.8427 9.37913 12.5119 9.22836 12.148C9.0776 11.784 9 11.3939 9 10.9999C9 10.6059 9.0776 10.2158 9.22836 9.85185C9.37913 9.48788 9.6001 9.15716 9.87868 8.87858C10.1573 8.60001 10.488 8.37903 10.8519 8.22827C11.2159 8.0775 11.606 7.99991 12 7.99991C12.7956 7.99991 13.5587 8.31598 14.1213 8.87858C14.6839 9.44119 15 10.2043 15 10.9999C15 11.7956 14.6839 12.5586 14.1213 13.1212C13.5587 13.6838 12.7956 13.9999 12 13.9999Z"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography className="text-sm font-medium" textTransform={'initial'}>
            Joined group and communities
          </Typography>
        </Button>
        <Button
          onClick={() => router.push('/contacts/friend-requests')}
          className={`flex items-center justify-normal rounded-none gap-2  py-[18px] px-3 cursor-pointer ${
            pathname === '/contacts/friend-requests'
              ? 'hover:bg-primary-c10 text-primary-c900 bg-primary-c50'
              : 'hover:bg-grey-c30 text-grey-c900'
          }`}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.875 18.375V17.5C0.875 15.8755 1.52031 14.3176 2.66897 13.169C3.81763 12.0203 5.37555 11.375 7 11.375C8.62445 11.375 10.1824 12.0203 11.331 13.169C12.4797 14.3176 13.125 15.8755 13.125 17.5V18.375"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path
              d="M11.375 13.125C11.375 11.9647 11.8359 10.8519 12.6564 10.0314C13.4769 9.21094 14.5897 8.75 15.75 8.75C16.3245 8.75 16.8934 8.86316 17.4242 9.08303C17.955 9.30289 18.4373 9.62515 18.8436 10.0314C19.2498 10.4377 19.5721 10.92 19.792 11.4508C20.0118 11.9816 20.125 12.5505 20.125 13.125V13.5625"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path
              d="M7 10.5C7.92826 10.5 8.8185 10.1313 9.47487 9.47487C10.1313 8.8185 10.5 7.92826 10.5 7C10.5 6.07174 10.1313 5.1815 9.47487 4.52513C8.8185 3.86875 7.92826 3.5 7 3.5C6.07174 3.5 5.1815 3.86875 4.52513 4.52513C3.86875 5.1815 3.5 6.07174 3.5 7C3.5 7.92826 3.86875 8.8185 4.52513 9.47487C5.1815 10.1313 6.07174 10.5 7 10.5ZM15.75 7.875C16.4462 7.875 17.1139 7.59844 17.6062 7.10616C18.0984 6.61387 18.375 5.94619 18.375 5.25C18.375 4.55381 18.0984 3.88613 17.6062 3.39384C17.1139 2.90156 16.4462 2.625 15.75 2.625C15.0538 2.625 14.3861 2.90156 13.8938 3.39384C13.4016 3.88613 13.125 4.55381 13.125 5.25C13.125 5.94619 13.4016 6.61387 13.8938 7.10616C14.3861 7.59844 15.0538 7.875 15.75 7.875Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography className="text-sm font-medium" textTransform={'initial'}>
            Friend requests
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default ContactSidebar;
