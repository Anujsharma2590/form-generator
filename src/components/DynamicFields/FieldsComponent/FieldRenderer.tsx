import React, { FC } from 'react';
import { FieldTypeEnum, TField } from '../../types';
import InputField from './InputField';
import TextareaField from './TextAreaField';
import GroupField from './GroupField';
import DropdownField from './DropDownField';



type FieldRendererProps = {
  field: TField;
  isEditMode: boolean;
};

const FieldRenderer: FC<FieldRendererProps> = ({
  field,
  isEditMode
}) => {
  switch (field.type) {
    case FieldTypeEnum.ShortText:
    case FieldTypeEnum.Number: {
      return (
        <InputField
          field={field}
          isEditMode={isEditMode}
        />
      );
    }

    case FieldTypeEnum.LongText: {
      return (
        <TextareaField
          field={field}
          isEditMode={isEditMode}
        />
      );
    }

    case FieldTypeEnum.Radio:
    case FieldTypeEnum.Checkbox: {
      return (
        <GroupField
          field={field}
          isEditMode={isEditMode}
        />
      );
    }

    case FieldTypeEnum.Dropdown: {
      return (
        <DropdownField  
          field={field}
          isEditMode={isEditMode}
        />
      );
    }

    default:
      return <></>;
  }
};

export default FieldRenderer;
