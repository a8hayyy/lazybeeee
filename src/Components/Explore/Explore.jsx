import React from 'react'
import './Explore.css'
import Card from '../Card/Card'
import grocery from '../../Assets/grocery1.jpg'
import fruit from '../../Assets/fruit1.jpg'
import colddrink from '../../Assets/drink7.webp'
import vegetable from '../../Assets/vege4.jpg'
import snack from '../../Assets/snack2.jpg'
import cigarette from '../../Assets/cigarette.jpg'

function Explore() {
  return (
    <div className='explore-container'>
        <div className='explore-heading'>
            <h1>Explore</h1>
        </div>
        <div className='explore-product-container'>
        {/* <Card image={grocery} name="grocery" btnName='Explore'/> */}
                    <Card image={fruit} name='fruit' btnName='Explore'/>
                    <Card image={vegetable} name='vegetable' btnName='Explore'/>
                    <Card image={colddrink} name="drinks" btnName='Explore'/>
                    <Card image={snack} name="snack" btnName='Explore'/>
        </div>
    </div>
  )
}

export default Explore