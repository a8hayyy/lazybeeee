import React from 'react'
import Product from '../../Components/Product/Product'

function Food() {
  return (
    <>
    <div className='food-heading-container'>
        <h1>FOOD</h1>
    </div>
    <div className='fruit-item-container'>
        <Product name="Apple" price='100/Kg'/>
        <Product name="Mango" price='80/Kg'/>
        <Product name="Papaya" price='40/Kg'/>
        <Product name="Orange" price='50/Kg'/>
        <Product name="Watermellon" price='80/Kg'/>
        <Product name="Grapes" price='90/Kg'/>
        <Product name="Apple" price='100/Kg'/>
        <Product name="Mango" price='80/Kg'/>
        <Product name="Papaya" price='40/Kg'/>
        <Product name="Orange" price='50/Kg'/>
        <Product name="Watermellon" price='80/Kg'/>
      </div>
    </>
  )
}

export default Food