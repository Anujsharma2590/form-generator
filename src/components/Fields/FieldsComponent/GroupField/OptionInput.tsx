import React, { ChangeEvent, FC } from 'react';
import { TOption } from '../../../types';
import './index.scss'


type OptionInputProps = {
  option: TOption;
  inputType: 'radio' | 'checkbox';
  isEditMode: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>, optionKey: string) => void;
};

const OptionInput: FC<OptionInputProps> = ({
  option,
  inputType,
  isEditMode,
  onChange
}) => {
  return (
    <input
      key={`${option.checked}+${option.key}`}
      type={inputType}
      value={option.value}
      checked={option.checked}
      disabled={isEditMode}
      onChange={(e) => onChange(e, option.key)}
      style={{ cursor: !isEditMode ? 'pointer' : 'auto' }}
      className={!isEditMode ? "focus-input" : ""}
    />
  );
};

export default OptionInput;
