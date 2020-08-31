import React from 'react'
import '../css/searchitem.css'
function SearchItem({ price, name, img }) {
  return (
    <div className='searchitem'>
      <div className="searchitem__info">
        <p className="searchitem__name">
          {name}
        </p>
        <p className="searchitem__price">
         {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(price)}
        </p>
      </div>
      <div className="searchitem__img">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default SearchItem
