import { Divider } from 'antd'
import  {
  ChangeEvent,
  FC,
  KeyboardEvent,
  ReactNode,
  useRef,
  useState,
} from 'react'

import './index.scss'

type DropdownMenuProps = {
  menu: ReactNode
  isEditMode: boolean
  addItem: (e: KeyboardEvent<HTMLInputElement>, itemName: string) => void
}

const DropdownMenu: FC<DropdownMenuProps> = ({ menu, isEditMode, addItem }) => {
  const [itemName, setItemName] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    setItemName(e.target.value)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation()

    if (e.key === 'Enter' && itemName.trim()) {
      addItem(e, itemName)
      setItemName('')

      inputRef.current?.focus()
    }
  }

  return (
    <>
      {isEditMode ? (
        <>
          {menu}

          <Divider style={{ margin: '8px 0' }} />

          <div className="dropdown-footer">
            <input
              className="dropdown-input"
              placeholder="Please enter item"
              ref={inputRef}
              value={itemName}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </>
      ) : (
        <>{menu}</>
      )}
    </>
  )
}

export default DropdownMenu
