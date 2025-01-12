import React from 'react'
import './ProductCart.css'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductCart:React.FC = ()=>{
  return (
    <Link to='/' className="productCart">
    <span className="productCart_favorite">
        <FaHeart/>
    </span>
    <img src="/assets/images/book1.png" alt="" className="productCart_img" />
    <p className="productCart_name">کتابخانه نیمه شب</p>
    <span className="productCart_price">150,000  تومان</span>
    <button className="productCart_addBasket btn_blue">افزودن به سبد خرید</button>
</Link>
  )
}

export default ProductCart