import React from 'react'
import './Shops.css'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/Card/Card'
import coffee from '../../Assets/shop/coffee2.jpg'
import biryani from '../../Assets/shop/biryani1.jpg'
import momo from '../../Assets/shop/momo1.webp'
import icecream from '../../Assets/shop/icecream2.jpg'
import roll from '../../Assets/shop/roll2.png'
import veg from '../../Assets/shop/veg3.jpg'
import nonveg from '../../Assets/shop/nonveg1.png'
import burger from '../../Assets/shop/burger3.jpg'
import pizza from '../../Assets/shop/pizza1.jpg'
import fastfood from '../../Assets/shop/fast1.jpg'

function Shops() {
  return (
    <>
        <div className='shops-heading-container'>
            <h1>Shops & Restarants</h1>
        </div>
        <div className='shops-items'>
          <Card image={biryani} name='shops/biryani' btnName='View'/>
          <Card image={fastfood} name='shops/fast-food' btnName='View'/>
          <Card image={icecream} name='shops/ice-creams' btnName='View'/>
          <Card image={roll} name='shops/wraps&rolls' btnName='View'/>
          <Card image={burger} name='shops/burger' btnName='View'/>
          <Card image={pizza} name='shops/pizza' btnName='View'/>
          <Card image={coffee} name='shops/coffee' btnName='View'/>
          <Card image={momo} name='shops/momos' btnName='View'/>
          <Card image={veg} name='shops/vegetarian' btnName='View'/>
          <Card image={nonveg} name='shops/non-vegetarian' btnName='View'/>
        </div>
        <Footer/>
    </>
  )
}

export default Shops