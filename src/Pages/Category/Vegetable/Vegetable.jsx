import React from 'react'
import Product from '../../../Components/Product/Product'
import Footer from '../../../Components/Footer/Footer'
import Explore from '../../../Components/Explore/Explore'
import broccoli from '../../../Assets/vege/brocoli1.jpg'
import potato from '../../../Assets/vege/potato1.jpg'
import ladyfingure from '../../../Assets/vege/ladyfingure2.jpg'
import tomato from '../../../Assets/vege/tomato1.jpg'
import cabbage from '../../../Assets/vege/cabbage1.jpg'
import cauli from '../../../Assets/vege/cauli2.jpg'
import beetroot from '../../../Assets/vege/beetroot1.jpg'
import garlic from '../../../Assets/vege/garlic1.jpg'
import onion from '../../../Assets/vege/onion1.jpg'
import ginger from '../../../Assets/vege/adrak1.jpg'
import radish from '../../../Assets/vege/radish1.webp'
import beans from '../../../Assets/vege/beans1.jpg'
import karela from '../../../Assets/vege/karela1.jpg'
import lauki from '../../../Assets/vege/lauki1.webp'
import pea from '../../../Assets/vege/pea1.jpg'
import lal from '../../../Assets/vege/lal2.webp'
import capsicum from '../../../Assets/vege/capsicum1.jpg'
import musroom from '../../../Assets/vege/musroom1.jpg'

function Vegetable() {
  return (
    <>
    <div className='fruit-container'>
    <div className='fruit-heading-container'>
        <h1>VEGETABLES</h1>
    </div>
    <div className='fruit-item-container'>
        <Product name="Broccoli" image={broccoli}/>
        <Product name="Potato" image={potato}/>
        <Product name="Lady Finger" image={ladyfingure}/>
        <Product name="Tomato" image={tomato}/>
        <Product name="Cabbage" image={cabbage}/>
        <Product name="Cauli Flower" image={cauli}/>
        <Product name="Beetroot" image={beetroot}/>
        <Product name="Garlic" image={garlic}/>
        <Product name="Onion" image={onion}/>
        <Product name="Ginger" image={ginger}/>
        <Product name="White Radish" image={radish}/>
        <Product name="Beans" image={beans}/>
        <Product name="Karela" image={karela}/>
        <Product name="Lauki" image={lauki}/>
        <Product name="Pea" image={pea}/>
        <Product name="Red Chili" image={lal}/>
        <Product name="Capsicum" image={capsicum}/>
        <Product name="Mushroom" image={musroom}/>
    </div>
    </div>
    <Explore/>
    <Footer/>
    </>
  )
}

export default Vegetable