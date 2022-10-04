import React from 'react'
import apple from '../../../Assets/fruit/apple1.jpg'
import Explore from '../../../Components/Explore/Explore'
import Footer from '../../../Components/Footer/Footer'
import Product from '../../../Components/Product/Product'

function Cigarette() {
  return (
    <>
        <div className='fruit-container'>
      <div className='fruit-heading-container'>
        <h1>CIGARETTE</h1>
      </div>
      <div className='fruit-item-container'>
        <Product name="Apple" price='100/Kg' image={apple}/>
      </div>
    </div>
      <Explore/>
      <Footer/>
    </>
  )
}

export default Cigarette