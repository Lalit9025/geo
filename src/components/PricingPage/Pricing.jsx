import React from 'react'
import Planbx from './planbx'
import './Pricing.css'
const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='pricing_s'>
          <Planbx 
            title='Basic' 
            price='4/month/user'
            b1='Up to 10 graphs'
            b2='Up to 500 chatbot queries'
            b3='xyz'
            />
            <Planbx 
            title='Pro Plan' 
            price='8/month/user'
            b1='Up to 50 graphs'
            b2='Up to 1000 chatbot queries'
            b3='xyz'
            />
            <Planbx 
            title='Enterprise Plan' 
            price='12/month/user'
            b1='Unlimited graphs'
            b2='Upload custom PDFs'
            b3='24/7 phone + email support
            '
            />
            
        </div>
    </div>
  )
}

export default Pricing