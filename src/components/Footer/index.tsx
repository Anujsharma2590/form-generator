import React, { FC, ReactNode } from 'react'
import { FieldTypeEnum } from '../types'
import FooterItem from './FooterItem'
import './index.scss'
import { CheckboxIcon, DropdownIcon, LongTextIcon, NumericFieldIcon, RadioOnIcon, ShortTextIcon } from '../../add-new-section-icons'

type SectionFooterProps = {
  isEditMode: boolean
  addField: (fieldType: FieldTypeEnum) => void
}

export type TFooterItem = {
  icon: ReactNode
  label: string
  fieldType: FieldTypeEnum
}

const SectionFooter: FC<SectionFooterProps> = ({
  isEditMode,
  addField,
}) => {
  const iconProps = {
    width: '34',
    height: '34'
  };
  
  const footerItems: TFooterItem[] =  [
    {
      icon: <ShortTextIcon {...iconProps} />,
      label: 'Short Text',
      fieldType: FieldTypeEnum.ShortText
    },
    {
      icon: <LongTextIcon {...iconProps} />,
      label: 'Long Text',
      fieldType: FieldTypeEnum.LongText
    },
    {
      icon: <NumericFieldIcon {...iconProps} />,
      label: 'Numeric',
      fieldType: FieldTypeEnum.Number
    },
    {
      icon: <RadioOnIcon {...iconProps} />,
      label: 'Radio Button',
      fieldType: FieldTypeEnum.Radio
    },
    {
      icon: <CheckboxIcon {...iconProps} />,
      label: 'Checkbox',
      fieldType: FieldTypeEnum.Checkbox
    },
    {
      icon: <DropdownIcon {...iconProps} />,
      label: 'Dropdown',
      fieldType: FieldTypeEnum.Dropdown
    }
  ]
 
  // show nothing in entry mode.
  if (!isEditMode) {
    return <></>
  }

  return (
    <div className="field-types-container">
      <span className="field-title"> Choose field type to add:</span>

      {footerItems.map((item, ind) => (
        <FooterItem key={ind} {...item} onItemClick={addField} />
      ))}
    </div>
  )
}

export default React.memo(SectionFooter)
