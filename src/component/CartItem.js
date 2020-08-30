import React, { useState } from 'react'
import '../css/cartitem.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeToCard } from '../redux/actions';
import Message from './Message';

function CartItem() {
    const productList = useSelector((state) => state)
    const dispatch = useDispatch();
    const dispatchRemoveToCard = id => { dispatch(removeToCard(id)) }
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    return (
        <div>
            {productList.rootReducer.length === 0 ? (<div>Hiện chưa có sản phẩm</div>) : (<div>{productList.rootReducer?.map((item, index) => {
                return (
                    <div className='cartitem'>
                        <div className="cartitem__img" alt='Hinh'>
                            <img src={item.products.product.img[0]} />
                        </div>
                        <div className="cartitem__info">
                            <div className="cartitem__name">{item.products.product.name}</div>
                            {/* <div className="cartitem__size">{`${item.products.product.info}/${item.color}/${item.size}`}</div> */}
                            {
                                item.color ? (<div>{`${item.products.product.info}/${item.color}/${item.size}`}</div>) : (<div>{item.products.product.info}</div>)
                            }
                            <div className='cartitem__pay'>
                                <div className="cartitem__quantity">{item.quantity}</div>
                                <div className="cartitem__price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(item.products.product.price * item.quantity)}</div>
                            </div>
                        </div>
                        <div className="cartitem__button">
                            <button onClick={() => {return(
                                dispatchRemoveToCard(item.products.product.id),
                                setOpen(true)
                            )}}>X</button>
                        </div>
                    </div>
                )
            })}</div>)}
            <Message state={open} handleClose={handleClose} mess={'Xóa khỏi giỏ hàng thành công !'}></Message>

        </div>
    )
}

export default CartItem
