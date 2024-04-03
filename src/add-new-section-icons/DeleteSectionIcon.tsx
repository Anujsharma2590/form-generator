import React, { FC } from 'react';
import { IconProps } from './type';

const DeleteSectionIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width || '32'}
      height={height || '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33594 10.1016H24.6693"
        stroke="#CE4436"
        strokeWidth="1.625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8178 25.5086H11.1869C10.6766 25.5077 10.1874 25.3046 9.82652 24.9438C9.46565 24.5829 9.26255 24.0937 9.26172 23.5833V10.102H12.1511V8.17523C12.152 7.66488 12.3551 7.17567 12.7159 6.8148C13.0768 6.45393 13.566 6.25083 14.0764 6.25H17.9284C18.4387 6.25083 18.9279 6.45393 19.2888 6.8148C19.6497 7.17567 19.8528 7.66488 19.8536 8.17523V10.102H22.743V23.5833C22.7422 24.0937 22.5391 24.5829 22.1782 24.9438C21.8174 25.3046 21.3281 25.5077 20.8178 25.5086V25.5086Z"
        stroke="#CE4436"
        strokeWidth="1.625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0742 14.918V20.6952"
        stroke="#CE4436"
        strokeWidth="1.625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9336 14.918V20.6952"
        stroke="#CE4436"
        strokeWidth="1.625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteSectionIcon;
