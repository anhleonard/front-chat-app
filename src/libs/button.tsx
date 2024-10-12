import React, { useMemo } from 'react';

interface Props {
  label: string;
  className?: string;
  handlePressButton?: () => void;
  color?: 'primary' | 'grey';
}

const ButtonField = ({
  label,
  className = 'w-full',
  handlePressButton,
  color = 'primary',
}: Props) => {
  const colorAttitude = useMemo(() => {
    return {
      grey: `!bg-grey-c100 !text-grey-c900 !font-normal hover:!opacity-80`,
      primary: `!bg-primary-c900 !text-white !font-normal hover:!opacity-80`,
    };
  }, []);

  return (
    <button
      className={`text-sm text-white bg-primary-c800 hover:bg-primary-c600 rounded-2xl px-12 py-3.5 active:bg-primary-c900 active:scale-95 ${className} transition-transform duration-400 ${colorAttitude[color]}`}
      onClick={() => {
        handlePressButton && handlePressButton();
      }}
    >
      {label}
    </button>
  );
};

export default ButtonField;
