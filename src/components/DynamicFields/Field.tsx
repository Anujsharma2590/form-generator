import React, { FC } from 'react'



import { TField } from '../types'


import './index.scss'
import { RemoveIcon } from '../../add-new-section-icons'
import { useSectionStore } from '../../store/sectionStore'
import Label from './Label'
import FieldRenderer from './FieldsComponent/FieldRenderer'

type FieldProps = {
  field: TField
  isEditMode: boolean
  fieldIndex: number
}

const Field: FC<FieldProps> = ({ field, isEditMode, fieldIndex }) => {
  const { label, key: fieldKey } = field
  const { removeField , updateField} = useSectionStore();

  function setLabel(label: string) {
    console.log(fieldKey, label )
    updateField( fieldKey, {label} );
  }

  function handleRemoveField(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    removeField(fieldKey);
  }

  return (
    <div
      className={`${'field-container'} ${
        isEditMode ? 'edit-field-container' : null
      }`}
    >
      <Label
        fieldIndex={fieldIndex}
        isEditMode={isEditMode}
        label={label}
        setLabel={setLabel}
      />

      <FieldRenderer field={field} isEditMode={isEditMode} />

      {isEditMode && (
        <button onClick={handleRemoveField} className="field-cross-icon">
          <RemoveIcon />
        </button>
      )}
    </div>
  )
}

export default Field
