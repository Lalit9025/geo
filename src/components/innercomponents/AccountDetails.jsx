import React from 'react'
import './top.css'
import './AccountDetails.css'
const AccountDetails = () => {
  return (
    <div className='account_details bx-border'>
        <h4>Account Details</h4>
        <div className='bx_start'>
            <div className='plan_bx'>
                <p>Current Plan :</p>
                <p>Status :</p>
                
            </div>
            <div className='plan_bx'>
                <p>Basic plan</p>
                <p>expires in 20 days</p>
            </div>
       </div>
    </div>
  )
}

export default AccountDetails