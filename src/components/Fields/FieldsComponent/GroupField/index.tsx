import React, { ChangeEvent, FC, MouseEvent } from 'react';


import Option from './Option';
import AddOptionBtn from './AddOptionBtn';
import { FieldTypeEnum, TField } from '../../../types';
import './index.scss'
import { useSectionStore } from '../../../../store/sectionStore';


type GroupFieldProps = {
  field: TField;
  isEditMode: boolean;
};

const GroupField: FC<GroupFieldProps> = ({ field, isEditMode }) => {
  const { options, key: fieldKey, type } = field;

  const {    deleteOption , updateOption ,addOption } = useSectionStore();

  const inputType = type === FieldTypeEnum.Checkbox ? 'checkbox' : 'radio';



  function onClickOption(e: ChangeEvent<HTMLInputElement>, optionKey: string) {
   console.log(fieldKey, optionKey, type, {
      checked: e.target.checked
    });

    updateOption( fieldKey, optionKey, type, { checked: e.target.checked });
  }

  function onLabelChange(label: string, optionKey: string) {
    console.log( fieldKey, optionKey, type, {
      value: label
    });

    updateOption( fieldKey, optionKey, type, { value: label });
  }

  function handleAddOption(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addOption( fieldKey);
    console.log( fieldKey);
  }

  function handleDeleteOption(
    e: MouseEvent<HTMLButtonElement>,
    optionKey: string
  ) {
    e.preventDefault();
    console.log( fieldKey, optionKey);
    deleteOption( fieldKey, optionKey);
  }

  return (
    <div  onClick={(e) => e.preventDefault()} className="group-container">
      {options.map((option, index) => {
        return (
          <Option
            key={option.key}
            option={option}
            optionIndex={index}
            inputType={inputType}
            isEditMode={isEditMode}
            onBlur={onLabelChange}
            onChange={onClickOption}
            onClick={handleDeleteOption}
          />
        );
      })}

      <AddOptionBtn isEditMode={isEditMode} onClick={handleAddOption} />
    </div>
  );
};

export default GroupField;
