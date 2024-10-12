import React, { ReactNode } from 'react';

interface Props {
  placeholder: string;
  className?: string;
  inputClassName?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement & HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLTextAreaElement & HTMLInputElement>;
}

const TextField = ({
  placeholder,
  startIcon,
  className = 'w-full',
  inputClassName = '',
  endIcon,
  value,
  onChange,
  onClick,
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
        className={`w-full text-sm border-[1.5px] border-grey-c100 focus:border-primary-c600 hover:border-primary-c100 ring-0 outline-none rounded-2xl py-3.5 ${inputClassName} ${
          startIcon && 'pl-12 pr-4'
        } ${endIcon && 'pr-12 pl-4'} ${!startIcon && !endIcon && 'px-4'}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      {endIcon ? (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          {endIcon}
        </span>
      ) : null}
    </div>
  );
};

export default TextField;
