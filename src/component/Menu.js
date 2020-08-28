import React from 'react'
import '../css/menu.css'
import {
  Route,
  Link
} from "react-router-dom";
function Menu() {

  const menus = [
    {
      to: '/bosuutap',
      label: 'Bộ sưu tập',
      exact: true
    },
    {
      to: '/aosomi',
      label: 'Áo sơ mi ',
      exact: false
    },
    {
      to: '/aopolo',
      label: 'Áo Polo ',
      exact: false
    },
    {
      to: '/aothun',
      label: 'Áo thun',
      exact: false
    },
    {
      to: '/quan',
      label: 'Quần ',
      exact: false
    },
    {
      to: '/aokhoac',
      label: 'Áo khoác ',
      exact: false
    },
    {
      to: '/aovest',
      label: 'Áo Vest',
      exact: false
    },
    {
      to: '/aolen',
      label: 'Áo Len',
      exact: false
    },{
      to: '/giaydep',
      label: 'Giày dép',
      exact: false
    },{
      to: '/phukien',
      label: 'Phụ kiện',
      exact: false
    },
  ]

  const Menulink = ({ label, to, exact }) => {
    return (
      <Route
        path={to}
        exact={exact}
        children={(match) => {
          var active = match ? 'active' : '';
          return (
            <li>
              <Link className={active} to={to}>{label}</Link>
            </li>
          )
        }}
      ></Route>
    )
  }

  return (
    <div id='menu'>
      <ul>
        {menus?.map((menu,index)=>{
          return(
            <Menulink label={menu.label} to={menu.to} exact={menu.exact}></Menulink>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
