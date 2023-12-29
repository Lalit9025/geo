import React from 'react'
import lalit from './lalit.jpg'
import './ProfileDash.css'
import ProfileDetails from './innercomponents/ProfileDetails'
import AccountDetails from './innercomponents/AccountDetails'
import Usage from './innercomponents/Usage'
import Buttons from './innercomponents/Buttons'
import SavedGraphs from './innercomponents/SavedGraphs'
import Favourite from './innercomponents/Favourite'
const Rside = () => {
  return (
    <div className='Rside'>
      <ProfileDetails/>
      <AccountDetails/>
      <Usage/>
      <Buttons/>
      <SavedGraphs/>
      <Favourite/>
    </div>
  )
}

export default Rside