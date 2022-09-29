import React,{Link} from 'react'
import './Nearby.css'
import Card from '../Card/Card'
import biryani from '../../Assets/shop/biryani1.jpg'
import momo from'../../Assets/shop/momo1.webp'
import rolls from'../../Assets/shop/roll2.png'
import coffee from'../../Assets/shop/coffee2.jpg'

function Nearby() {
  return (
    <div className='nearby-container'>
        <div className='nearby-heading'>
            <h1>Shops & Restautants</h1>
        </div>
        <div className='nearby-items'>
            <Card image={biryani} name='biryani' btnName=''/>
            <Card image={coffee} name='coffee' btnName=''/>
            <Card image={rolls} name='rolls' btnName=''/>
            <Card image={momo} name='momo' btnName=''/>
        </div>
        <a href='/shops'>
        <div className='nearby-btn'>Explore All</div>
        </a>
    </div>
  )
}

export default Nearby