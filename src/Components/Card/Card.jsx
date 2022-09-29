import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

function Card({image, name, btnName}) {

  var c = (btnName==="Explore" || btnName==="View")? "#21758d":"#14c07b";
  var address = '/'+name;
  var x = (btnName==="Explore" || btnName==="All Items" || btnName==="View");
  

  return (
    <div className='card-container'>
        <Link to={address}>
        <div className='card'>
              <div className='card_image'>
                <img src={image} alt=""/>
              </div>
              <div className='card_title'>
                
              </div>
        </div>
        </Link>

        
        {(x)?(
          <div className='card-btn' >
          <Link to={address}>
            <button  style={{backgroundColor:c}}>{btnName}</button>
          </Link>
        </div>
        ):(
          <></>
        )}
    </div>
  )
}

export default Card