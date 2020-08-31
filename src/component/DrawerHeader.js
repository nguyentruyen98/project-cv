import React from 'react'
import '../css/drawerheader.css'
function DrawerHeader({ close }) {
  return (
    <div className='drawer'>
      <div className="drawer__header">
        <p>GIỎ HÀNG</p>
        <CloseIcon className='drawer__buttonclose' onClick={close()}></CloseIcon>
      </div>
    </div>
  )
}

export default DrawerHeader
