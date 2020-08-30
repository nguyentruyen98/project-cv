import React, { useState } from 'react'
import '../css/login.css'
import Message from './Message'
import { useSelector } from 'react-redux';
import {
  Link, useHistory
} from "react-router-dom";
import { auth } from './firebase'
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState([]);
  const [pass, setPass] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const productList = useSelector((state) => state)
  console.log(productList.userReducer.user?.email)

  const login = e => {
    e.preventDefault(); //stop refresh

    auth.signInWithEmailAndPassword(email, pass)
      .then(auth => {
        return (
          setOpen(true),
          setTimeout(() => { history.push('/') }, 1000)
        )

      })
      .catch(e => alert(e.message));
  }
  return (
    <div className='login'>
      <div className="login__container">
        <h2>Đăng nhập</h2>
        <form action="">
          <h5>Email</h5>
          <input type="email" placeholder='Nhập Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Mật khẩu</h5>
          <input type="password" placeholder='Nhập Mật khẩu' value={pass} onChange={(e) => setPass(e.target.value)} />
          <button type='submit' onClick={login}>Đăng nhập</button>
          <p>Bằng việc kích vào Đăng kí, đồng nghĩa với việc bạn đã chấp nhận điều khoản sử dụng của Routine.</p>
        </form>
        <div className="login__line">
        </div>
        <Link to='/register'><button className="login__register">
          Đăng kí
        </button></Link>
        <Message state={open} handleClose={handleClose} mess={'Đăng nhập thành công !'}></Message>

      </div>
    </div>
  )
}

export default Login
