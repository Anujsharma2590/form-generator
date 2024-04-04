import React, { FC, MouseEvent } from 'react'

import CrossIcon from '../../../Icons/CrossIcon'
import './index.scss'
type DeleteOptionBtnProps = {
  isEditMode: boolean
  optionKey: string
  onClick: (e: MouseEvent<HTMLButtonElement>, optionKey: string) => void
}

const DeleteOptionBtn: FC<DeleteOptionBtnProps> = ({
  isEditMode,
  optionKey,
  onClick,
}) => {
  return (
    <>
      {isEditMode && (
        <button onClick={(e) => onClick(e, optionKey)}  className="remove-opt-btn">
          <CrossIcon color="#D82E11" width="10" height="10" />
        </button>
      )}
    </>
  )
}
export default DeleteOptionBtn
