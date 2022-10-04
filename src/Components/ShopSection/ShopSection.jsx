import React from 'react'
import './ShopSection.css'
import Shop from '../../Components/Shop/Shop'


function ShopSection({heading}) {
  return (
    <>
        <div className='heading 1'>
            <h1>{heading}</h1>
        </div>
        <div className='biryani-item-container'>
            <Shop shopNum='1'/>
            <Shop shopNum='2'/>
            <Shop shopNum='3'/>
            {/* <Shop shopNum='4'/>
            <Shop shopNum='5'/>
            <Shop shopNum='6'/>
            <Shop shopNum='7'/>
            <Shop shopNum='8'/>
            <Shop shopNum='9'/>
            <Shop shopNum='10'/> */}
        </div>
    </>
  )
}

export default ShopSection