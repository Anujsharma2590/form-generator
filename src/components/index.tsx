import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import SectionFooter from './Footer'
import { FieldTypeEnum, SectionModeEnum, TField, TOption } from './types'
import { Flex, Switch, Tooltip } from 'antd'
import { useSectionStore } from '../store/sectionStore'
import DynamicFields from './DynamicFields'

function handleInitializeOptions(fieldType: FieldTypeEnum) {
  switch (fieldType) {
    case FieldTypeEnum.Checkbox:
    case FieldTypeEnum.Radio:
      return [initializeOption(), initializeOption()]

    default:
      return []
  }
}

function initializeOption(optionValue?: string): TOption {
  return { value: optionValue || '', checked: false, key: crypto.randomUUID() }
}

const CustomSection = () => {
  const { mode, addField, setMode } = useSectionStore()

  function handleSwitch(checked: boolean) {
    setMode(checked ? 'edit' : 'entry')
  }

  const isEditMode = mode === SectionModeEnum.Edit

  const handleAddField = useCallback((type: FieldTypeEnum) => {
    function intializeField(fieldType: FieldTypeEnum): TField {
      return {
        label: '',
        type: fieldType,
        value: '',
        options: handleInitializeOptions(fieldType),
        key: crypto.randomUUID(),
        selectedOptions: [],
      }
    }
    addField(intializeField(type))
  }, [])

  return (
    <div style={{ marginInline: '2vw'}}>
      <div>
        <span style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <h1>Custom component</h1>
          <div onClick={(e) => e.stopPropagation()}>
            <Tooltip
              placement="bottomRight"
              title={
                mode === SectionModeEnum.Edit
                  ? 'Switch to Entry Mode'
                  : 'Switch to Configure Mode'
              }
            >
              <Switch onChange={handleSwitch} checked={mode === 'edit'} />
            </Tooltip>
          </div>
            <span>please toggle this switch to change the mode </span>
        </span>
      </div>
      <>
        <DynamicFields isEditMode={isEditMode} />

        <SectionFooter isEditMode={isEditMode} addField={handleAddField} />
      </>
    </div>
  )
}

export default CustomSection
