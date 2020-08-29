import React from 'react'
import '../css/login.css'

function Login() {
  return (
    <div className='login'>
      <div className="login__container">
        <h2>Đăng nhập</h2>
        <form action="">
          <h5>Email</h5>
          <input type="email" placeholder='Nhập Email' />
          <h5>Mật khẩu</h5>
          <input type="password" placeholder='Nhập Mật khẩu' />
          <button type='submit'>Đăng nhập</button>
          <p>Bằng việc kích vào Đăng kí, đồng nghĩa với việc bạn đã chấp nhận điều khoản sử dụng của Routine.</p>
        </form>
        <div className="login__line">
        </div>
        <button className="login__register">
          Đăng kí.
        </button>
      </div>
    </div>
  )
}

export default Login
