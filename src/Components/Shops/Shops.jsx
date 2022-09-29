import React from 'react'
import Card from '../Card/Card'

function Shops() {
  return (
    <div className='shops-container'>
        <div className='shops-heading-container'>
            <h1>Shops Near you</h1>
        </div>
        <div className='shops-item-container'>
            <Card />
        </div>
    </div>
  )
}

export default Shops