import React from 'react'
import down from './download.png';
import './ProfileDetails.css'
import './top.css'
const ProfileDetails = () => {
  return (
    <div className='profile_details bx-border'>
        <img src={down}/>
        <div className='details_bx'>
            <h3>Lalit Chouhan</h3>
            <p>lalit3chouhan@gmail.com</p>
            <p>Hello I'm Lalit full stack developer</p>
        </div>
    </div>
  )
}

export default ProfileDetails