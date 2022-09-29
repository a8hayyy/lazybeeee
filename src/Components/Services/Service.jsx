import React from 'react'
import './Service.css'
import Card from '../Card/Card'
import laun from '../../Assets/laundary2.png'
import cook from'../../Assets/cook1.jpg'
import room from'../../Assets/room3.jpg'
import hostel from'../../Assets/hostel1.png'

function Service() {
  return (
    <>
        <div className='service-container'>
            <div className='service-heading'>
                <h1>Upcoming Service Options</h1>
            </div>
            <div className='service-product-container'>
                <Card image={laun} name=""/>
                <Card image={cook} name=""/>
                <Card image={hostel} name=""/>
                <Card image={room} name=""/>
            </div>
        </div>
    </>
  )
}

export default Service