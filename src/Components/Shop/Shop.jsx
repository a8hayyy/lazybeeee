import React from 'react'
import {Link} from 'react-router-dom'
import './Shop.css'
import img from '../../Assets/shop/biryani1.jpg'

function Shop({shopNum}) {
  var add = '/shops/biryani/'+shopNum;
  return (
    <div className='shop-container'>
        <div className='shop-image-container'>
          <img src={img}/>
        </div>
        <div className='view-shop-btn'>
          <Link to={add}>
          <button>View Shop</button>
          </Link>
        </div>
    </div>
  )
}

export default Shop