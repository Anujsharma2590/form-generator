import React, { FC, useState } from 'react';


import { CloseOutlined } from '@ant-design/icons';
import { TOption } from '../../../types';
import './index.scss'
type DropdownOptionProps = {
  option: TOption;
  isEditMode: boolean;
  removeOption: (
    e: React.MouseEvent<HTMLSpanElement>,
    optionKey: string
  ) => void;
  editOption: (optionKey: string, value: string) => void;
};

const DropdownOption: FC<DropdownOptionProps> = ({
  option,
  isEditMode,
  removeOption,
  editOption
}) => {
  const [isEdittingDropdown, setIsEdittingDropdown] = useState<boolean>(false);

  const { key } = option;

  function onOptionClick(e: React.MouseEvent<HTMLDivElement>) {
    if (isEditMode) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  function onDoubleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (isEditMode) {
      e.stopPropagation();
      e.preventDefault();

      setIsEdittingDropdown(true);
    }
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    editOption(key, e.currentTarget.value);
    setIsEdittingDropdown(false);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation();

    if (e.key === 'Enter') {
      editOption(key, e.currentTarget.value);
      setIsEdittingDropdown(false);
    }
  }

  return (
    <div
    className="option-container"
      onClick={onOptionClick}
      onDoubleClick={onDoubleClick}
    >
      {isEdittingDropdown ? (
        <input
        className="option-input"
          type="text"
          defaultValue={option.value}
          placeholder="Enter item name"
          autoFocus
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      ) : (
        <span>{option.value}</span>
      )}

      {isEditMode && (
        <button
          onClick={(e) => removeOption(e, option.key)}
          disabled={isEdittingDropdown}
          className='close-btn'
        >
          <CloseOutlined />
        </button>
      )}
    </div>
  );
};

export default DropdownOption;
