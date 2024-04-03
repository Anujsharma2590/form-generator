import React, { FC, MouseEvent } from 'react'

import AddBtnIcon from '../../../Icons/AddBtnIcon'
import './index.scss'
type AddOptionBtnProps = {
  isEditMode: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const AddOptionBtn: FC<AddOptionBtnProps> = ({ isEditMode, onClick }) => {
  return (
    <>
      {isEditMode ? (
        <button onClick={onClick} title="Add option" className="add-opt-btn">
          <AddBtnIcon width="15" height="13" className="plus-icon-btn" />
          <span>Add option</span>
        </button>
      ) : (
        <></>
      )}
    </>
  )
}

export default AddOptionBtn
