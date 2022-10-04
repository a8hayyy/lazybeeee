import React,{useState} from 'react'
import './ShopProduct.css'

function ShopProduct({name,price}) {
    const [count,setcount] = useState(0)
    function increment(){
        setcount(count+1)
    }
    function dercement(){
        if(count > 0){
            setcount(count-1)
        }
    }
  return (
    <div className='shopproduct-container'>
        <div className='shopproduct-info'>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
        {/* <div className='shopproduct'>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={dercement}>-</button>
        </div> */}
    </div>
  )
}

export default ShopProduct