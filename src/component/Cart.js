import React from 'react'
import '../css/cart.css'
import CloseIcon from '@material-ui/icons/Close';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
function Cart({ close }) {
    // const getCartTotal = cart => 
    //     cart?.reduce((item, amount) => item.products.product + amount, 0)
    // console.log(cart[0]?.products.product.price)
    // console.log(cart)

    const productList = useSelector((state) => state)
    const a = productList.rootReducer.reduce((amount, item) => item.products.product.price*item.quantity + amount, 0);
    console.log(a)
    return (
        <div>
            <div className='cart'>
                <div className="cart__header">
                    <p>GIỎ HÀNG</p>
                    <CloseIcon className='cart__buttonclose' onClick={close()}></CloseIcon>
                </div>
                <div className="cart__item">
                    <CartItem></CartItem>
                </div>
                <div>
                    <p className='cart__line'></p>
                </div>


                <div className="cart__footer">
                    <p>TỔNG TIỀN</p>
                    <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(a)}</p>
                </div>
                <div className="cart__button">
                    <button>XEM GIỎ HÀNG</button>
                    <button>THANH TOÁNTOÁN</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
