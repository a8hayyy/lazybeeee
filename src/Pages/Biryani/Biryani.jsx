import React from 'react'
import './Biryani.css'
import ShopSection from '../../Components/ShopSection/ShopSection'
import TopItemsList from '../../Components/TopItemsList/TopItemsList'
import Footer from '../../Components/Footer/Footer'

function Biryani() {
  return (
    <div className='biryani-container'>
      <div className='category-heading-container'>
        <h1>Biryani</h1>
      </div>
      <div className='category-shopsection-container'>
        <TopItemsList heading='Top Selling'/>
        <ShopSection heading='Biryani Shops near you'/>
       </div>
       <Footer/>
    </div>
  )
}

export default Biryani