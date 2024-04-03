import React, { FC } from 'react';
import { IconProps } from './type';

const RadioOnIcon: FC<IconProps> = ({ width, height, className }) => {
  return (
    <svg
      width={width || '32'}
      height={height || '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.8 16C24.8 20.8601 20.8601 24.8 16 24.8C11.1399 24.8 7.2 20.8601 7.2 16C7.2 11.1399 11.1399 7.2 16 7.2C20.8601 7.2 24.8 11.1399 24.8 16ZM26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16ZM16 21.5C19.0376 21.5 21.5 19.0376 21.5 16C21.5 12.9624 19.0376 10.5 16 10.5C12.9624 10.5 10.5 12.9624 10.5 16C10.5 19.0376 12.9624 21.5 16 21.5Z"
        fill="#633EA5"
        className={className}
      />
    </svg>
  );
};

export default RadioOnIcon;
