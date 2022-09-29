import React from 'react'
import Product from '../../Components/Product/Product'
import Footer from '../../Components/Footer/Footer'
import './Fruit.css'
import apple from '../../Assets/fruit/apple1.jpg'
import banana from '../../Assets/fruit/banana1.jpg'
import mango from '../../Assets/fruit/mango1.jpg'
import papaya from '../../Assets/fruit/papaya1.jpg'
import orange from '../../Assets/fruit/orange1.jpg'
import watermellon from '../../Assets/fruit/watermelon1.jpg'
import cherry from '../../Assets/fruit/cherry1.jpg'
import pineapple from '../../Assets/fruit/pineapple2.jpg'
import grapes from '../../Assets/fruit/grapes1.jpg'
import elderberry from '../../Assets/fruit/elderberry1.jpg'
import melon from '../../Assets/fruit/melon1.jpg'
import sapodilla from '../../Assets/fruit/sepodilla1.jpg'
import carrot from '../../Assets/fruit/carrot2.webp'
import cucu from '../../Assets/fruit/cucu1.jpg'
import pome from '../../Assets/fruit/pome2.jpg'
import corn from '../../Assets/fruit/corn2.jpg'
import Explore from '../../Components/Explore/Explore'

function Fruit() {
  return (
    <>
      <div className='fruit-heading-container'>
        <h1>FRUITS</h1>
      </div>
      <div className='fruit-item-container'>
        <Product name="Apple" price='100/Kg' image={apple}/>
        <Product name="Banana" price='50/Dzn' image={banana}/>
        <Product name="Mango" price='80/Kg' image={mango}/>
        <Product name="Carrot" price='60/Kg' image={carrot}/>
        <Product name="Orange" price='50/Kg' image={orange}/>
        <Product name="Watermellon" price='80/Kg' image={watermellon}/>
        <Product name="Cherry" price='150/Box' image={cherry}/>
        <Product name="Pineapple" price='80/Kg' image={pineapple}/>
        <Product name="Grapes" price='90/Kg' image={grapes}/>
        <Product name="Jamun" price='140/Kg' image={elderberry}/>
        <Product name="Melon" price='60/Kg' image={melon}/>
        <Product name="Chiku" price='60/Kg' image={sapodilla}/>
        <Product name="Papaya" price='40/Kg' image={papaya}/>
        <Product name="Cucumber" price='40/Kg' image={cucu}/>
        <Product name="Pomegranate" price='60/Kg' image={pome}/> 
        <Product name="Corn" price='25/peice' image={corn}/> 
      </div>
      <Explore/>
      <Footer/>
    </>
  )
}

export default Fruit