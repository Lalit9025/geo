import React from 'react';
import './SidebarElement.css'

const SidebarElement = ({ name }) => {
  return (
    <div className='sidebar_element'>
      <p className='sidebar_element_name'>{name}</p>
    </div>
  );
};

export default SidebarElement;
