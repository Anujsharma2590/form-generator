import React, { ChangeEvent, FC, MouseEvent } from 'react';

import OptionInput from './OptionInput';
import OptionLabel from './OptionLabel';
import DeleteOptionBtn from './DeleteOptionBtn';
import { TOption } from '../../../types';

import './index.scss'

type OptionProps = {
  option: TOption;
  isEditMode: boolean;
  inputType: 'radio' | 'checkbox';
  optionIndex: number;

  onChange: (e: ChangeEvent<HTMLInputElement>, optionKey: string) => void;
  onBlur: (value: string, optionKey: string) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>, optionKey: string) => void;
};

const Option: FC<OptionProps> = ({
  option,
  isEditMode,
  inputType,
  optionIndex,
  onChange,
  onBlur,
  onClick
}) => {
  return (
    <div key={option.key} className="option-container">
      <OptionInput
        inputType={inputType}
        isEditMode={isEditMode}
        option={option}
        onChange={onChange}
      />

      <OptionLabel
        isEditMode={isEditMode}
        option={option}
        optionIndex={optionIndex}
        onBlur={onBlur}
      />

      <DeleteOptionBtn
        isEditMode={isEditMode}
        optionKey={option.key}
        onClick={onClick}
      />
    </div>
  );
};

export default Option;
