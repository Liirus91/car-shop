'use client';

import { MouseEventHandler } from 'react';

interface CustomButtonProps {
  title: string;
  containerStiles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  containerStiles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${containerStiles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
