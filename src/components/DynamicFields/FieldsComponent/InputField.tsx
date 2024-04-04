import React, { FC, useState } from 'react';
import { FieldTypeEnum, TField } from '../../types';
import { useSectionStore } from '../../../store/sectionStore';
import './index.scss'

type InputFieldProps = {
  field: TField;
  isEditMode: boolean;
};

const InputField: FC<InputFieldProps> = ({  field, isEditMode }) => {
  console.log({
    field
  })
  const {  updateField } = useSectionStore();


  const { value, type, key: fieldKey, label } = field;
  const inputType = type === FieldTypeEnum.ShortText ? 'text' : 'number';

  const [fieldValue, setFieldValue] = useState<string>(value);

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    console.log( fieldKey, { value: e.target.value });
    updateField( fieldKey, { value: e.target.value })
  }

  return (
    <input
      className='input'
      type={inputType}
      value={fieldValue}
      disabled={isEditMode}
      placeholder={label ? `Enter ${label}` : ''}
      onChange={(e) => setFieldValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default InputField;
