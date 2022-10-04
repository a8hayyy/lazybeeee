import React from 'react'
import ShopProduct from '../../../../Components/ShopProduct/ShopProduct'
import Footer from '../../../../Components/Footer/Footer'
import productImage from '../../../../Assets/biryani/biryanimain.jpg'

function Shop3() {
  return (
    <>
        <div className='shop-discription-container'>
            <div className='shop-discription-image'>
                <img src={productImage} alt='Akram Bhai Biryani'/>
            </div>
            <div className='shop-discription-text'>
                <h2>Akram Bhai Biryani</h2>
                <p> shop discription which will bes of food  and products it offersshop discription which will bes of food  and products it offers.shop discription which will bes of food  and products it offersshop discription which will bes of food  and products it offersshop discription which will bes of food  and products it offersshop discription which will bes of food  and products it offers</p>
            </div>
        </div>

        <div className='shop-product-container'>
            <div className='shop-product-heading'>
                <h3>MENU</h3>
            </div>
            <div className='shop-product-list'>
                <ShopProduct name='Half Plate' price='₹90'/>
                <ShopProduct name='Full Plate' price='₹90'/>
                <ShopProduct name='Korma' price='₹90'/>
                <ShopProduct name='Half Plate' price='₹90'/>
                <ShopProduct name='Half Plate' price='₹90'/>
                <ShopProduct name='Half Plate' price='₹90'/>
                <ShopProduct name='Half Plate' price='₹90'/>
                <ShopProduct name='Half Plate' price='₹90'/>
            </div>
        </div>
        <Footer/>

    </>
  )
}

export default Shop3