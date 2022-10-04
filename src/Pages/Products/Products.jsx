import React from 'react'
import Delivery from '../../Components/Delivery/Delivery'
import Footer from '../../Components/Footer/Footer'
import Service from '../../Components/Services/Service'

function Products() {
  return (
    <>
     <div style={{paddingTop:"0rem"}}>
     <Delivery/>   
     </div>   
     <Service/>
     <Footer/>
    </>
  )
}

export default Products