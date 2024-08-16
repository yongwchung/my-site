import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <p>Yong Chung</p>
      <Link className='menu-links' to='/'>
        <span>home</span>
      </Link>
    </nav>
  )
}

export default Navbar