import React, { useState } from 'react'
import '../css/header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShopIcon from '@material-ui/icons/Shop';
import Drawer from '@material-ui/core/Drawer';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import Cart from './Cart'
import {
  Link, useHistory
} from "react-router-dom";
import Search from './Search';
function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const productList = useSelector((state) => state)
  const [status, setStatus] = useState([]);
  const login = () => {
    if (productList.userReducer.user) {
      auth.signOut();
    }
  }
  const history = useHistory();
  const signIn = () => {
    history.push('/login')
  }

  const toggleDrawer = (anchor, open, name) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setStatus(name)
    console.log(name)
  };

  const right = 'right'
  return (
    <div className='header'>
      <p className='left'></p>
      <div className="header__logo">
        <Link to='/'><img className='header__logo__img' src='http://theme.hstatic.net/1000341789/1000533258/14/logo.png?v=259'></img></Link>
      </div>
      <div className='header__icon'>
        <div>
          <Link style={{ color: 'black' }} to='/login'> <AccountCircleIcon style={{ fontSize: 30 }}></AccountCircleIcon></Link>
          <div className="header__option">
            <p className='header__optionOne'>{productList.userReducer.user?.email ? (<div>{productList.userReducer.user?.email.slice(0, productList.userReducer.user?.email.search('@'))}</div>) : (<div>Hello</div>)}</p>
            <p className='header__optionTwo'>{productList.userReducer.user?.email ? (<div onClick={login}>Sign Out</div>) : (<div onClick={signIn}>Sign In</div>)}</p>
          </div>
        </div>
        <SearchIcon style={{ fontSize: 30 }} onClick={toggleDrawer(right, true, 'search')}></SearchIcon>
        <ShopIcon style={{ fontSize: 30 }} onClick={toggleDrawer(right, true, 'shop')}></ShopIcon>
        {productList.rootReducer.length ? (<p className='header__quantity'>{productList.rootReducer.length}</p>) : (<div></div>)}
        <Drawer anchor={right} open={state[right]} onClose={toggleDrawer(right, false)}>
          {status == 'shop' ? (<Cart close={() => toggleDrawer(right, false)}></Cart>) : (<Search close={() => toggleDrawer(right, false)}></Search>)}
        </Drawer>
      </div>
    </div>
  )
}

export default Header
