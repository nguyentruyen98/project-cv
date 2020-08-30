import React,{useState} from 'react'
import '../css/register.css'
import {
  useHistory
} from "react-router-dom";
function Register() {
  
  const history = useHistory();
  const goBack = () => {
    history.push('/register')
  }
  return (
    <div className='register'>
      <input type="text" placeholder='Đăng kí để nhận thông tin' />
      <button onClick={(goBack)}>ĐĂNG KÍ</button>
    </div>
  )
}

export default Register
