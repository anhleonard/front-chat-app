'use client';
import { Button, Divider, IconButton, Typography } from '@mui/material';
import React from 'react';
import BadgeAvatar from '../chat-list/badge-avatar';
import FileItem from './file-item';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import AccordionLib from '@/libs/accordion';

const ChatFile = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="py-3 flex items-center gap-2">
        <IconButton className="rounded-[10px] bg-grey-c50 p-1">
          <KeyboardArrowRightRoundedIcon className="text-grey-c600 font-bold" />
        </IconButton>
        <div className="font-bold text-lg">Share files</div>
      </div>
      <Divider />
      <div className="flex flex-col items-center gap-1 px-2 flex-1 overflow-auto">
        <div className="flex flex-col items-center py-8 gap-2">
          <BadgeAvatar />

          <div className="flex flex-row items-center gap-2">
            <div className="font-medium text-base text-grey-c900">
              Myra Tran
            </div>
            <IconButton className="bg-grey-c30 p-1 text-grey-c900 hover:text-primary-c900 hover:bg-primary-c10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99982 13.3333H13.9998M10.9172 2.41461C11.1825 2.14922 11.5425 2.00012 11.9178 2.00012C12.2931 2.00012 12.6531 2.14922 12.9185 2.41461C13.1839 2.68001 13.333 3.03996 13.333 3.41528C13.333 3.7906 13.1839 4.15055 12.9185 4.41595L4.91182 12.4233C4.75322 12.5819 4.55717 12.6979 4.34182 12.7606L2.42716 13.3193C2.36979 13.336 2.30898 13.337 2.25109 13.3222C2.19321 13.3074 2.14037 13.2772 2.09812 13.235C2.05587 13.1927 2.02575 13.1399 2.01092 13.082C1.99609 13.0241 1.99709 12.9633 2.01382 12.9059L2.57249 10.9913C2.6353 10.7762 2.75132 10.5804 2.90982 10.4219L10.9172 2.41461Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 w-full gap-4">
          <Button className="col-span-1 flex flex-col items-center justify-center gap-0.5 bg-grey-c30 hover:bg-primary-c10 text-grey-c900 hover:text-primary-c900 h-24 w-full rounded-2xl hover:cursor-pointer">
            <Typography textTransform={"initial"} className="font-medium">
              All files
            </Typography>
            <div className="flex items-center gap-1">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995 13.75 11.5815 13.75 11.25C13.75 10.9185 13.6183 10.6005 13.3839 10.3661C13.1495 10.1317 12.8315 10 12.5 10H11.25C10.9185 10 10.6005 10.1317 10.3661 10.3661C10.1317 10.6005 10 10.9185 10 11.25C10 11.5815 10.1317 11.8995 10.3661 12.1339C10.6005 12.3683 10.9185 12.5 11.25 12.5ZM11.25 15C10.9185 15 10.6005 15.1317 10.3661 15.3661C10.1317 15.6005 10 15.9185 10 16.25C10 16.5815 10.1317 16.8995 10.3661 17.1339C10.6005 17.3683 10.9185 17.5 11.25 17.5H18.75C19.0815 17.5 19.3995 17.3683 19.6339 17.1339C19.8683 16.8995 20 16.5815 20 16.25C20 15.9185 19.8683 15.6005 19.6339 15.3661C19.3995 15.1317 19.0815 15 18.75 15H11.25ZM25 11.175C24.9871 11.0602 24.9619 10.947 24.925 10.8375V10.725C24.8663 10.5957 24.786 10.4773 24.6875 10.375L17.1875 2.875C17.0852 2.77653 16.9668 2.69621 16.8375 2.6375C16.8002 2.63184 16.7623 2.63184 16.725 2.6375C16.5978 2.56528 16.4576 2.51857 16.3125 2.5H8.75C7.75544 2.5 6.80161 2.89509 6.09835 3.59835C5.39509 4.30161 5 5.25544 5 6.25V23.75C5 24.7446 5.39509 25.6984 6.09835 26.4017C6.80161 27.1049 7.75544 27.5 8.75 27.5H21.25C22.2446 27.5 23.1984 27.1049 23.9017 26.4017C24.6049 25.6984 25 24.7446 25 23.75V11.175ZM17.5 6.7625L20.7375 10H18.75C18.4185 10 18.1005 9.8683 17.8661 9.63388C17.6317 9.39946 17.5 9.08152 17.5 8.75V6.7625ZM22.5 23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H8.75C8.41848 25 8.10054 24.8683 7.86612 24.6339C7.6317 24.3995 7.5 24.0815 7.5 23.75V6.25C7.5 5.91848 7.6317 5.60054 7.86612 5.36612C8.10054 5.1317 8.41848 5 8.75 5H15V8.75C15 9.74456 15.3951 10.6984 16.0983 11.4017C16.8016 12.1049 17.7554 12.5 18.75 12.5H22.5V23.75ZM18.75 20H11.25C10.9185 20 10.6005 20.1317 10.3661 20.3661C10.1317 20.6005 10 20.9185 10 21.25C10 21.5815 10.1317 21.8995 10.3661 22.1339C10.6005 22.3683 10.9185 22.5 11.25 22.5H18.75C19.0815 22.5 19.3995 22.3683 19.6339 22.1339C19.8683 21.8995 20 21.5815 20 21.25C20 20.9185 19.8683 20.6005 19.6339 20.3661C19.3995 20.1317 19.0815 20 18.75 20Z"
                  fill="currentColor"
                />
              </svg>
              <div
                className="font-semibold text-2xl"
                style={{ color: "currentcolor" }}
              >
                512
              </div>
            </div>
          </Button>
          <Button className="col-span-1 flex flex-col items-center justify-center gap-1.5 bg-grey-c30 hover:bg-primary-c10 text-grey-c900 hover:text-primary-c900 h-24 w-full rounded-2xl hover:cursor-pointer">
            <Typography textTransform={"initial"} className="font-medium">
              All links
            </Typography>
            <div className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.22174 14.4025C7.43388 14.1909 7.72128 14.072 8.02091 14.072C8.32053 14.072 8.60793 14.1909 8.82007 14.4025C8.92488 14.5071 9.00802 14.6314 9.06475 14.7683C9.12147 14.9051 9.15067 15.0517 9.15067 15.1999C9.15067 15.348 9.12147 15.4947 9.06475 15.6315C9.00802 15.7683 8.92488 15.8926 8.82007 15.9973L6.42257 18.3913C6.21251 18.6005 6.04583 18.8491 5.9321 19.1229C5.81837 19.3967 5.75982 19.6902 5.75982 19.9867C5.75982 20.2832 5.81837 20.5767 5.9321 20.8505C6.04583 21.1243 6.21251 21.3729 6.42257 21.5821C6.84686 22.0053 7.42165 22.243 8.02091 22.243C8.62016 22.243 9.19495 22.0053 9.61924 21.5821L15.2122 15.9973C15.317 15.8926 15.4002 15.7683 15.4569 15.6315C15.5136 15.4947 15.5428 15.348 15.5428 15.1999C15.5428 15.0517 15.5136 14.9051 15.4569 14.7683C15.4002 14.6314 15.317 14.5071 15.2122 14.4025C15.1073 14.2978 15.024 14.1734 14.9671 14.0365C14.9103 13.8995 14.8811 13.7527 14.8811 13.6045C14.8811 13.4562 14.9103 13.3094 14.9671 13.1725C15.024 13.0355 15.1073 12.9111 15.2122 12.8065C15.4244 12.5949 15.7118 12.476 16.0114 12.476C16.311 12.476 16.5984 12.5949 16.8106 12.8065C17.1251 13.1207 17.3745 13.4938 17.5447 13.9044C17.715 14.3151 17.8026 14.7553 17.8026 15.1999C17.8026 15.6444 17.715 16.0846 17.5447 16.4953C17.3745 16.906 17.1251 17.2791 16.8106 17.5933L11.2164 23.1781C10.3678 24.0245 9.21825 24.4998 8.01974 24.4998C6.82124 24.4998 5.67165 24.0245 4.82307 23.1781C4.40351 22.7594 4.07064 22.262 3.84353 21.7145C3.61641 21.167 3.49951 20.58 3.49951 19.9873C3.49951 19.3945 3.61641 18.8076 3.84353 18.2601C4.07064 17.7125 4.40351 17.2152 4.82307 16.7965L7.22174 14.4013V14.4025ZM20.7784 13.5975C20.5663 13.809 20.2789 13.9279 19.9792 13.9279C19.6796 13.9279 19.3922 13.809 19.1801 13.5975C19.0753 13.4928 18.9921 13.3685 18.9354 13.2317C18.8787 13.0948 18.8495 12.9482 18.8495 12.8C18.8495 12.6519 18.8787 12.5052 18.9354 12.3684C18.9921 12.2316 19.0753 12.1073 19.1801 12.0026L21.5776 9.60862C21.7876 9.39942 21.9543 9.15079 22.068 8.877C22.1818 8.60322 22.2403 8.30967 22.2403 8.0132C22.2403 7.71674 22.1818 7.42319 22.068 7.1494C21.9543 6.87562 21.7876 6.62699 21.5776 6.41779C21.1533 5.9946 20.5785 5.75695 19.9792 5.75695C19.38 5.75695 18.8052 5.9946 18.3809 6.41779L12.7891 12.0026C12.6843 12.1073 12.6011 12.2316 12.5444 12.3684C12.4877 12.5052 12.4585 12.6519 12.4585 12.8C12.4585 12.9482 12.4877 13.0948 12.5444 13.2317C12.6011 13.3685 12.6843 13.4928 12.7891 13.5975C12.8941 13.7021 12.9773 13.8265 13.0342 13.9635C13.091 14.1004 13.1203 14.2472 13.1203 14.3955C13.1203 14.5437 13.091 14.6905 13.0342 14.8275C12.9773 14.9644 12.8941 15.0888 12.7891 15.1935C12.5769 15.405 12.2895 15.5239 11.9899 15.5239C11.6903 15.5239 11.4029 15.405 11.1907 15.1935C10.8763 14.8792 10.6268 14.5061 10.4566 14.0955C10.2864 13.6848 10.1987 13.2446 10.1987 12.8C10.1987 12.3555 10.2864 11.9153 10.4566 11.5046C10.6268 11.0939 10.8763 10.7208 11.1907 10.4066L16.7849 4.82179C17.6335 3.97542 18.7831 3.50012 19.9816 3.50012C21.1801 3.50012 22.3297 3.97542 23.1782 4.82179C23.5978 5.24051 23.9307 5.73787 24.1578 6.28539C24.3849 6.83292 24.5018 7.41986 24.5018 8.01262C24.5018 8.60538 24.3849 9.19232 24.1578 9.73985C23.9307 10.2874 23.5978 10.7847 23.1782 11.2035L20.7784 13.5986V13.5975Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
              </svg>
              <div
                className="font-semibold text-2xl"
                style={{ color: "currentcolor" }}
              >
                127
              </div>
            </div>
          </Button>
        </div> */}

        <div className="px-1.5 w-full">
          <Divider className="w-full bg-grey-c10" />
        </div>

        <AccordionLib />

        <div className="px-1.5 w-full">
          <Divider className="w-full bg-grey-c10" />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center py-1">
            <div className="font-medium text-sm text-grey-c900 pl-1.5">
              Shared files
            </div>
          </div>
          <div className="flex flex-col w-full">
            <FileItem
              title="Documents"
              subTitle="126 files, 196 MB"
              bgColor="bg-[#dfe1f9]"
              iconColor="#5a68df"
              hoverBgColor="hover:bg-[#dfe1f9]"
            />
            <FileItem
              title="Photos"
              subTitle="53 files, 321 MB"
              bgColor="bg-[#f4eacf]"
              iconColor="#c4b07a"
              hoverBgColor="hover:bg-[#f4eacf]"
            />
            <FileItem
              title="Videos"
              subTitle="3 files, 210 MB"
              bgColor="bg-[#e4f7f9]"
              iconColor="#50b0ba"
              hoverBgColor="hover:bg-[#e4f7f9]"
            />
            <FileItem
              title="Others"
              subTitle="49 files, 194 MB"
              bgColor="bg-[#ffe0da]"
              iconColor="#be6e5f"
              hoverBgColor="hover:bg-[#ffe0da]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFile;
