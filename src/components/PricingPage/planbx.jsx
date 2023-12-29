import React from 'react'
import tick from './Tick-Square.png'
import './planbx.css'
const Planbx = (props) => {
  return (
    <div className='planbx'>
        <p className='planbx_title'>{props.title}</p>
        <p className='planbx_price'>${props.price}</p>
        <div className="benefits">
            <div className='bn'>
             <img src={tick} alt="" />
              <p>{props.b1}</p>
            </div>
            <div className='bn'>
             <img src={tick} alt="" />
              <p>{props.b2}</p>
            </div>
            <div className='bn'>
             <img src={tick} alt="" />
              <p>{props.b3}</p>
            </div>
            
        </div> 
        <button>Get Started</button>
    </div>
  )
}

export default Planbx