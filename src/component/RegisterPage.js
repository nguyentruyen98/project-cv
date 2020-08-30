import React,{useState} from 'react'
import '../css/registerpage.css'
import { auth } from './firebase'
import {
     useHistory
  } from "react-router-dom";

function RegisterPage() {
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const history = useHistory();

    const register = e => {
        e.preventDefault(); //stop refresh
        auth.createUserWithEmailAndPassword(email, pass)
            .then(auth => {
                history.push('/login')

            })
            .catch(e => alert(e.message))
    }
    return (
        <div className='registerpage'>
            <div className="registerpage__container">
                <h2>Đăng kí</h2>
                <form action="">
                    <h5>Tên người dùng</h5>
                    <input type="text" placeholder='Nhập tên người dùng' />
                    <h5>Email</h5>
                    <input type="text" placeholder='Nhập Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Mật khẩu</h5>
                    <input type="password" placeholder='Nhập mật khẩu' value={pass} onChange={(e) => setPass(e.target.value)}/>
                    <button onClick={register}>Đăng kí</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
