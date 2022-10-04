import React from 'react'
import {Link} from 'react-router-dom'
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
        <Link to='/shops' style={{textDecoration:"none"}}>
        <button className='nearby-btn'>Explore All</button>
        </Link>
    </div>
  )
}

export default Nearby