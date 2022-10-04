import React from 'react'
import Explore from '../../../Components/Explore/Explore'
import Footer from '../../../Components/Footer/Footer'
import Product from '../../../Components/Product/Product'
import bingo from '../../../Assets/snacks/bingo1.jpg'
import cheetos from '../../../Assets/snacks/cheetos2.png'
import lays from '../../../Assets/snacks/lays1.jpg'
import kurkure from '../../../Assets/snacks/kurkure1.jpg'
import madangles from '../../../Assets/snacks/mad1.webp'
import takatak from '../../../Assets/snacks/takatak1.jpg'
import tedemede from '../../../Assets/snacks/tede1.jpg'

function Snack() {
  return (
    <>
        <div className='fruit-container'>
      <div className='fruit-heading-container'>
        <h1>SNACKS</h1>
      </div>
      <div className='fruit-item-container'>
        <Product name="Lays" price='100/Kg' image={lays}/>
        <Product name="Cheetos" price='100/Kg' image={cheetos}/>
        <Product name="Kurkure" price='100/Kg' image={kurkure}/>
        <Product name="Mad Angles" price='100/Kg' image={madangles}/>
        <Product name="Taka Tak" price='100/Kg' image={takatak}/>
        <Product name="Bingo" price='100/Kg' image={bingo}/>
        <Product name="Tede Mede" price='100/Kg' image={tedemede}/>
      </div>
    </div>
      <Explore/>
      <Footer/>
    </>
  )
}

export default Snack