import React, { FC } from 'react';
import { TOption } from '../../../types';
import Editable from '../../../../UI/Editable'; // Import the Editable component
import './index.scss';

type OptionLabelProps = {
  option: TOption;
  isEditMode: boolean;
  optionIndex: number;
  onBlur: (value: string, key: string) => void;
};

const OptionLabel: FC<OptionLabelProps> = ({
  option,
  isEditMode,
  optionIndex,
  onBlur
}) => {
  return (
    <>
      {isEditMode ? (
        <Editable
          placeholder="Option name"
          value={option.value}
          onBlur={(label) => onBlur(label, option.key)}
          className={`${"label-text"} ${isEditMode ? "focus-lable" : ''}`}
        />
      ) : (
        // in entry mode
        <span className="group-label">
          {option.value || `Option ${optionIndex + 1}`}
        </span>
      )}
    </>
  );
};

export default OptionLabel;
