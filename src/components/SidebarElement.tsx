import React from 'react';
import './SidebarElement.css'
interface SidebarElementProps {
  name: string;
}

const SidebarElement: React.FC<SidebarElementProps> = ({ name }) => {
  return (
    <div className='sidebar_element'>
      <p className='sidebar_element_name'>{name}</p>
    </div>
  );
};

export default SidebarElement;
