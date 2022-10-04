import React from 'react'
import {Link} from 'react-router-dom'
import './MainSection.css'
// import mainImg from "../../Assets/background1.jpg"
import mainImg from "../../Assets/main-photo2.png"


function MainSection() {
  return (
    <div className='main-section-container'>
        <div className='main-text'>
            <h1>Bee Lazy,</h1>
            <h1>We'll get it done!</h1>
            <div className='steps-container'>
                <h3>- Shop from all your near by stores here</h3>
                <h3>- Order Fruits, Vegetables, Drinks, Food and many more...</h3>
            </div>
            <div className='button-container'>
            <Link to='/products'><button>Products</button></Link>
            {/* <button style={{backgroundColor:'#1a8d26'}}>Contact</button> */}
            </div>
        </div>
        <div className='main-image'>
        </div>
        <img src={mainImg}/>
    </div>
  )
}

export default MainSection