import React, { FC } from 'react';
type CrossIconType = {
  width?: string;
  height?: string;
  color: string;
};

const CrossIcon: FC<CrossIconType> = ({ color, width, height }) => {
  return (
    <svg
      width={width || '12'}
      height={height || '12'}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1 11"
        stroke={color}
        strokeWidth="2"
        // strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1L11 11"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
