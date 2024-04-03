import React, { FC, KeyboardEvent } from 'react';
import { Select } from 'antd';
import { FieldTypeEnum, TField } from '../../../types';
import DropdownMenu from './DropDownMenu';
import DropdownOption from './DropDownOption';

import './index.scss'
import { useSectionStore } from '../../../../store/sectionStore';

const { Option } = Select;

type DropDownFieldProps = {
  field: TField;
  isEditMode: boolean;
};

const DropdownField: FC<DropDownFieldProps> = ({
  field,
  isEditMode
}) => {
  const {  updateField , deleteOption , updateOption ,addOption } = useSectionStore();

  const { options, key: fieldKey, label, selectedOptions,  } = field;

  function handleAddItem(e: KeyboardEvent<HTMLInputElement>, itemName: string) {
    e.preventDefault();
    addOption(fieldKey, itemName);
    console.log( fieldKey, itemName);

  }

  function handleEditOption(itemKey: string, value: string) {
    if (value.trim()) {
      console.log( fieldKey, itemKey, FieldTypeEnum.Dropdown, {
        value
      });

      updateOption( fieldKey, itemKey, FieldTypeEnum.Dropdown, { value } );
    }
  }

  function removeOption(
    e: React.MouseEvent<HTMLSpanElement>,
    optionKey: string
  ) {
    e.stopPropagation();
    console.log( fieldKey, optionKey);
    deleteOption( fieldKey, optionKey );
  }

  function onOptionClick(selectedOptions: Array<string>) {
    console.log( fieldKey, { selectedOptions });
    updateField( fieldKey, { selectedOptions })
  }

  return (
    <div className= "dropdown-container" >
      <Select
        defaultValue={selectedOptions}
        style={{ width: '100%' }}
        mode="multiple"
        optionLabelProp="label"
        placeholder={label ? `Enter ${label}` : ''}
        popupClassName= "dropdown-popup"
        removeIcon={null}
        onChange={onOptionClick}
        dropdownRender={(menu) => (
          <DropdownMenu
            menu={menu}
            isEditMode={isEditMode}
            addItem={handleAddItem}
          />
        )}
      >
        {options.map((option) => (
          <Option key={option.key} value={option.value} label={option.value}>
            <DropdownOption
              option={option}
              isEditMode={isEditMode}
              removeOption={removeOption}
              editOption={handleEditOption}
            />
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default DropdownField;
