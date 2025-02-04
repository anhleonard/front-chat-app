import { IconButton } from "@mui/material";
import React, { FormEventHandler, ReactNode } from "react";

interface Props {
  placeholder?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement & HTMLInputElement>;
  handleKeyDown?: () => void;
}

const MessageBox = ({
  placeholder = "Write your message ...",
  startIcon,
  className = "w-full",
  endIcon,
  onChange,
  handleKeyDown,
}: Props) => {
  return (
    <div className={`relative ${className}`}>
      {startIcon ? (
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          {startIcon}
        </span>
      ) : null}
      <input
        type="text"
        className={`font-normal text-grey-c900 w-full text-xs ring-0 outline-none rounded-xl py-3 bg-white ${
          startIcon && "pl-12 pr-4"
        } ${endIcon && "pr-12 pl-4"} ${!startIcon && !endIcon && "px-4"}`}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && handleKeyDown) {
            handleKeyDown();
          }
        }}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-4">
        <div className="flex items-center gap-1">
          <IconButton className="rounded-lg p-1 text-grey-c900 hover:text-primary-c900 hover:bg-primary-c10 transition duration-300 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1213 10.1213C9.84276 10.3999 9.51204 10.6209 9.14806 10.7717C8.78408 10.9224 8.39397 11 8 11C7.60603 11 7.21592 10.9224 6.85194 10.7717C6.48796 10.6209 6.15724 10.3999 5.87867 10.1213M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8ZM6.5 6.5C6.5 6.776 6.388 7 6.25 7C6.112 7 6 6.776 6 6.5C6 6.224 6.112 6 6.25 6C6.388 6 6.5 6.224 6.5 6.5ZM6.25 6.5H6.25533V6.51H6.25V6.5ZM10 6.5C10 6.776 9.888 7 9.75 7C9.612 7 9.5 6.776 9.5 6.5C9.5 6.224 9.612 6 9.75 6C9.888 6 10 6.224 10 6.5ZM9.75 6.5H9.75533V6.51H9.75V6.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
          <IconButton className="rounded-lg p-1 text-grey-c900 hover:text-primary-c900 hover:bg-primary-c10 transition duration-300 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.2832 7.97506C2.28303 8.07408 2.31226 8.17092 2.36718 8.25331C2.42211 8.3357 2.50027 8.39992 2.59174 8.43784C2.68321 8.47576 2.78389 8.48566 2.88099 8.46629C2.9781 8.44693 3.06727 8.39916 3.1372 8.32906L7.7322 3.73206C8.20111 3.26315 8.83708 2.99973 9.5002 2.99973C9.82855 2.99973 10.1537 3.0644 10.457 3.19005C10.7604 3.31571 11.036 3.49988 11.2682 3.73206C11.5004 3.96423 11.6846 4.23987 11.8102 4.54322C11.9359 4.84658 12.0005 5.17171 12.0005 5.50006C12.0005 5.8284 11.9359 6.15354 11.8102 6.45689C11.6846 6.76025 11.5004 7.03588 11.2682 7.26806L5.9652 12.5711C5.7766 12.7532 5.524 12.854 5.2618 12.8517C4.99961 12.8495 4.74879 12.7443 4.56339 12.5589C4.37798 12.3735 4.27281 12.1227 4.27053 11.8605C4.26825 11.5983 4.36905 11.3457 4.5512 11.1571L9.8542 5.85406C9.90069 5.80757 9.93757 5.75238 9.96273 5.69164C9.98789 5.6309 10.0008 5.5658 10.0008 5.50006C10.0008 5.43431 9.98789 5.36921 9.96273 5.30847C9.93757 5.24773 9.90069 5.19254 9.8542 5.14606C9.80772 5.09957 9.75253 5.06269 9.69179 5.03753C9.63105 5.01237 9.56595 4.99942 9.5002 4.99942C9.43446 4.99942 9.36936 5.01237 9.30862 5.03753C9.24788 5.06269 9.19269 5.09957 9.1462 5.14606L3.8432 10.4501C3.65218 10.6345 3.49982 10.8552 3.395 11.0992C3.29018 11.3433 3.23501 11.6057 3.2327 11.8713C3.2304 12.1368 3.281 12.4002 3.38156 12.646C3.48212 12.8918 3.63063 13.1151 3.81841 13.3028C4.0062 13.4906 4.2295 13.6391 4.4753 13.7397C4.72109 13.8403 4.98445 13.8909 5.25001 13.8886C5.51557 13.8862 5.778 13.8311 6.02201 13.7263C6.26602 13.6214 6.48671 13.4691 6.6712 13.2781L11.9742 7.97506C12.6306 7.31865 12.9994 6.42836 12.9994 5.50006C12.9994 4.57175 12.6306 3.68147 11.9742 3.02506C11.3178 2.36865 10.4275 1.99988 9.4992 1.99988C8.5709 1.99988 7.68062 2.36865 7.0242 3.02506L2.4302 7.62106C2.3838 7.66758 2.34702 7.72278 2.32197 7.78353C2.29692 7.84427 2.28309 7.90935 2.2832 7.97506Z"
                fill="currentColor"
              />
            </svg>
          </IconButton>
        </div>
      </span>
    </div>
  );
};

export default MessageBox;
