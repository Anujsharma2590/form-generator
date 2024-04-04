import React, { FC, useState } from 'react';
import { TField } from '../../types';
import { useSectionStore } from '../../../store/sectionStore';

type TextareaFieldProps = {
  field: TField;
  isEditMode: boolean;
};

const TextareaField: FC<TextareaFieldProps> = ({
  field,
  isEditMode
}) => {
  const { value, key: fieldKey, label } = field;

  const {  updateField } = useSectionStore();

  const [fieldValue, setFieldValue] = useState<string>(value);

  function onBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    updateField(fieldKey, { value: e.target.value });
  }

  return (
    <textarea
      className="textarea"
      value={fieldValue}
      rows={1}
      disabled={isEditMode}
      placeholder={label ? `Enter ${label}` : ''}
      onChange={(e) => setFieldValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default TextareaField;
