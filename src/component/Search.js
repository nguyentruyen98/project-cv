import React, { useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import '../css/search.css'
import SearchItem from './SearchItem';
import { database } from './firebase';
import {
  Link
} from "react-router-dom";
function Search({ close }) {
  const [search, setSearch] = useState([])
  const [searchitem, setSearchItem] = useState([])
  useEffect(() => {
    database.collection('productDetail').onSnapshot((snapshot) => {
      setSearchItem(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  const searchItem = () => {
    // database.collection('productDetail').onSnapshot((snapshot) => {
    //   setSearchItem(snapshot.docs.map(doc => doc.data()))
    // })

  }
  return (
    <div className='search'>
      <div className="search__header">
        <p>TÌM KIẾM</p>
        <CloseIcon className='search__buttonclose' onClick={close()}></CloseIcon>
      </div>
      <div className="search__input">
        <input type="text" placeholder='Tìm kiếm' value={search} onChange={(e) => setSearch(e.target.value)} />
        <SearchIcon className='search__buttonsearch' onClick={searchItem}></SearchIcon>
      </div>
      {search == '' ? (<div>Nhập từ khóa tìm kiếm</div>) : (<div>{searchitem?.map((item, index) => {
        if (item.name.toLowerCase().search(search) >= 0 && search != '') {
          return (
            <Link to={`/searchproduct/${item.id}`} style={{ textDecoration: 'none' }, { color: 'black' }}><SearchItem price={item.price} img={item.img[0]} name={item.name} /></Link>
          )
        }
      })}</div>)}
    </div>
  )
}

export default Search
