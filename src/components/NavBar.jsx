import React from 'react'
import Links from './Links'
import Title from './Title'
import "../styles/Navbar.css";
import Doctor from './Doctor';

function NavBar() {
  return (
    <div className='navbar'>
        <Title/>
        <Links/>
        <Doctor/>
    </div>
  )
}

export default NavBar