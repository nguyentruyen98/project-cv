import React from 'react'
import '../css/header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './Cart'
import {
  Route,
  Link
} from "react-router-dom";
function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const productList = useSelector((state) => state)
  console.log(productList.length)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const right = 'right'
  return (
    <div className='header'>
      <p className='left'></p>
      <Link to='/'><img className='header__logo' src='http://theme.hstatic.net/1000341789/1000533258/14/logo.png?v=259'></img></Link>
      <div className='header__icon'>
        <AccountCircleIcon style={{ fontSize: 30 }}></AccountCircleIcon>
        <SearchIcon style={{ fontSize: 30 }}></SearchIcon>
        <ShopIcon style={{ fontSize: 30 }} onClick={toggleDrawer(right, true)}></ShopIcon>
        {productList.length ? (<p className='header__quantity'>{productList.length}</p>) : (<div></div>)}
        <Drawer anchor={right} open={state[right]} onClose={toggleDrawer(right, false)}>
          <Cart close={() => toggleDrawer(right, false)}></Cart>
        </Drawer>
      </div>
    </div>
  )
}

export default Header
