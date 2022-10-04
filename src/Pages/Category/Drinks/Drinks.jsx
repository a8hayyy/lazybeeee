import React from 'react'
import cocacola from '../../../Assets/drinks/coca2.jpeg'
import due from '../../../Assets/drinks/due1.png'
import fanta from '../../../Assets/drinks/fanta1.png'
import limca from '../../../Assets/drinks/limca1.webp'
import slice from '../../../Assets/drinks/slice1.jpg'
import sting from '../../../Assets/drinks/sting1.webp'
import sprite from '../../../Assets/drinks/sprite1.jpg'
import maaza from '../../../Assets/drinks/maaza1.png'
import thumsup from '../../../Assets/drinks/thumsup1.jpg'
import frooti from '../../../Assets/drinks/frooti1.jpg'
import Explore from '../../../Components/Explore/Explore'
import Footer from '../../../Components/Footer/Footer'
import Product from '../../../Components/Product/Product'

function Drinks() {
  return (
    <>
        <div className='fruit-container'>
      <div className='fruit-heading-container'>
        <h1>DRINKS</h1>
      </div>
      <div className='fruit-item-container'>
        <Product name="Coca Cola" price='20, ₹40, ₹60' image={cocacola}/>
        <Product name="Mountain Due" price='20, ₹40, ₹60' image={due}/>
        <Product name="Fanta" price='20, ₹40, ₹60' image={fanta}/>
        <Product name="Limca" price='20, ₹40, ₹60' image={limca}/>
        <Product name="SLice" price='20, ₹40, ₹60' image={slice}/>
        <Product name="Sting" price='20, ₹40, ₹60' image={sting}/>
        <Product name="Sprite" price='20, ₹40, ₹60' image={sprite}/>
        <Product name="Maaza" price='20, ₹40, ₹60' image={maaza}/>
        <Product name="Thums UP" price='20, ₹40, ₹60' image={thumsup}/>
        <Product name="Frooti" price='20, ₹40, ₹60' image={frooti}/>
      </div>
    </div>
      <Explore/>
      <Footer/>
    </>
  )
}

export default Drinks