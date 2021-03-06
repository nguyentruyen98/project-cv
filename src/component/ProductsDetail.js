import React, { useState, useEffect } from 'react'
import '../css/productdetail.css'
import { database } from './firebase';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import Message from './Message';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';


function ProductsDetail({ match }) {
  const [quantity, setQuantity] = useState(1);
  const [productDetail, setProductDetail] = useState([])
  const [size, setSizee] = useState('')
  const [color, setColor] = useState('')
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true)



  const dispatch = useDispatch();
  const dispatchAddToCart = (product, quantity, size, color) => { dispatch(addToCart(product, quantity, size, color)) }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const addQuantity = () => {
    setQuantity(quantity + 1)
  }
  const subQuanity = () => {
    setQuantity(quantity - 1)
    if (quantity == 1) {
      setQuantity(1)
    }
  }
  const handleChange = e => {
    setQuantity(parseInt(e.target.value))
  }

  const setSizeProducts = size => {
    setSizee(size)
  }
  const setColorProduct = color => {
    setColor(color)
  }


  useEffect(() => {
    database.collection('productDetail').onSnapshot((snapshot) => {
      setProductDetail(snapshot.docs.map(doc =>
        doc.data(),
        setLoading(prevenLoading => !prevenLoading)
      ))
    }
    )
  }, [])

  return (

    <div>
      {loading && <div className='productdetail__loading'>
        <Fade in={loading} unmountOnExit>
          <CircularProgress style={{ color: 'gray' }} />
        </Fade>
      </div>}
      {productDetail?.map((product, index) => {
        if (product.id == match.match.params.id)
          return (
            <div className='productdetail'>
              <div className='productParent'>
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="productdetail__img">
                      {product.img?.map((img) => {
                        return (
                          <img src={img} alt="" />
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="productdetail__info">
                      <div className='productdetail__name'>
                        <h3>{product.name}</h3>
                        {product.option ? (<div><p>{`${product.info}/${color}/${size}`}</p></div>) : (<div><p>{product.info}</p></div>)}
                        <div className="productdetail__price">
                          <p>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                        </div>
                        {
                          product.option ? (<div><div className="productdetail__color">
                            {
                              [{ label: 'Green', tag: 'green' }, { label: 'Blue', tag: 'blue' }, { label: 'Red', tag: 'red' }, { label: 'Black', tag: 'black' }].map(item => {
                                return (
                                  <label className={color == item.label ? (`selected ${item.tag}`) : (item.tag)} onClick={() => setColorProduct(item.label)}></label>
                                )
                              })
                            }
                          </div>
                            <div className="productdetail__size">
                              {
                                ['XS', 'S', 'M', 'XL'].map(item => {
                                  return (
                                    <label className={size == item ? ('isSelected') : ('')} onClick={() => setSizeProducts(item)}>{item}</label>
                                  )
                                })
                              }
                            </div></div>) : (<div></div>)
                        }

                        <div className="productdetail__quantity">
                          <button onClick={subQuanity}>-</button><input value={quantity} onChange={handleChange}></input><button onClick={addQuantity}>+</button>
                        </div>
                        <button onClick={() => { return (dispatchAddToCart(product, quantity, size, color), setOpen(true)) }}>THÊM VÀO GIỎ</button>
                        <div className="productdetail__description">
                          <p>
                            <strong>Mô tả:</strong>
                          </p>
                          <div className='description'>
                            <p>Chất liệu: 85% Polyester, 10% Linen, 5% Polyester</p>
                            <p>Giặt ở chế độ bình thường. Không sử dụng chất tẩy </p>
                            <p>Sấy ở nhiệt độ thấp</p>
                            <p>Không ủi</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Message state={open} handleClose={handleClose} mess={'Thêm vào giỏ hàng thành công ?'}></Message>
              </div>
            </div>
          )
      })}



    </div>
  )
}

export default ProductsDetail
