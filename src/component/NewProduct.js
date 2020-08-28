import React from 'react'
import '../css/newproduct.css'
function NewProduct({ img, title, price }) {
  return (
    <div className='newproduct'>
      <img className='newproduct__image' src={img} alt="" />
      <div className='newproduct__title'>
        <p>{title}</p>
        <strong>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price)}</strong>
      </div>
    </div>
  )
}

export default NewProduct
