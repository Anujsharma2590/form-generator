import  { FC, useEffect, useRef } from 'react'
import Editable from '../../UI/Editable'
import './index.scss'

const useAutoFocusLabel = (label: string) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current && !label.trim()) {
      ref.current.focus()
    }
  }, [label])

  return [ref]
}

type LabelProps = {
  isEditMode: boolean
  label: string
  fieldIndex: number
  setLabel: (label: string) => void
}

const Label: FC<LabelProps> = ({ isEditMode, label, fieldIndex, setLabel }) => {
  const [ref] = useAutoFocusLabel(label)

  return (
    <>
      {isEditMode ? (
        <Editable
          className={`${'label-text'} ${isEditMode ? 'focus-lable' : ''}`}
          placeholder="Label name"
          value={label}
          inputRef={ref}
          onBlur={setLabel}
        />
      ) : (
        // this is in entry mode
        <span className="label-text">{label || `Label ${fieldIndex + 1}`}</span>
      )}
    </>
  )
}

export default Label
