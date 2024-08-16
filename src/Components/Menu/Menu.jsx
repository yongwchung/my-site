import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './Menu.css'

const Menu = () => {

  return (
    <div className='menu'>
      <ul className='menu-list'>
        <li><Link className='menu-links' to='/about'><span>about me</span></Link></li>
        <li><Link className='menu-links' to='/resume'><span>resume</span></Link></li>
        <li><Link className='menu-links' to='/projects'><span>projects</span></Link></li>
        <li><Link className='menu-links' to='/photography'><span>photography</span></Link></li>
        <li><Link className='menu-links' to='/tutoring'><span>tutoring</span></Link></li>
        <li><Link className='menu-links' to='/contact'><span>contact</span></Link></li>
      </ul>
    </div>
  )
}

export default Menu