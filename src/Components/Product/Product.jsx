import React from 'react'
import './Product.css'

function Product({image, name, price}) {
  return (
    <div className='product-container'>
        <div className='product-image-container'>
            <img src={image}/>
        </div>
        <div className='product-detail-container'>
            <h4>{name}</h4>
            <p>₹{price}</p>
        </div>
    </div>
  )
}

export default Product