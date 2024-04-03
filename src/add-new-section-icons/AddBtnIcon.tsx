import React, { FC } from 'react';
import { IconProps } from './type';

const AddBtnIcon: FC<IconProps> = ({ width, height, className }) => {
  return (
    <svg
      width={width || '28'}
      height={height || '28'}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0.666687C14.7364 0.666687 15.3334 1.26364 15.3334 2.00002V12.6667H26C26.7364 12.6667 27.3334 13.2636 27.3334 14C27.3334 14.7364 26.7364 15.3334 26 15.3334H15.3334V26C15.3334 26.7364 14.7364 27.3334 14 27.3334C13.2636 27.3334 12.6667 26.7364 12.6667 26V15.3334H2.00002C1.26364 15.3334 0.666687 14.7364 0.666687 14C0.666687 13.2636 1.26364 12.6667 2.00002 12.6667H12.6667V2.00002C12.6667 1.26364 13.2636 0.666687 14 0.666687Z"
        fill="#633EA5"
        className={className}
      />
    </svg>
  );
};

export default AddBtnIcon;
