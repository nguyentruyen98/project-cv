import React, { useState, useEffect } from 'react'
import NewProduct from './NewProduct'
import '../css/newproducts.css'
import database from './firebase';

import {
  Link
} from "react-router-dom";
function NewProducts({ type }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    database.collection(type).onSnapshot((snapshot) => {
      setProducts(snapshot.docs.map(doc =>
        doc.data()
      ))
    }
    )
  }, [])
  return (
    <div className='newproducts'>
      {products?.map(product =>
        <Link style={{ textDecoration: 'none' }} to={`/${type}/${product.id}`}>
          <NewProduct
            img={product.img}
            title={product.title}
            price={product.price}
          ></NewProduct>
        </Link>
      )
      }
    </div >
  )
}

export default NewProducts
