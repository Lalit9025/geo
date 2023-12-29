import React from 'react'
import './Sidebar.css'
import SidebarElement from './SidebarElement'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='side_bar'>
      <div className="side_bar_elem">
        <Link to ="/">
        <SidebarElement name="Profile Dashboard"/>
        </Link>
        <Link to ="/newgraph">
        <SidebarElement name="Create New Graph"/>
        </Link>
        <Link to ="/graphdetails">
        <SidebarElement name="Graph Details"/>
        </Link>
        <SidebarElement name="Account Settings"/>
      </div>
      <div className='side_bar_elem'>
      <Link to ="/pricing">
         <SidebarElement name="Pricing"/>
         </Link>
      </div>
    </div>
  )
}

export default Sidebar