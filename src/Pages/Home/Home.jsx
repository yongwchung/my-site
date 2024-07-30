import React from 'react'
import './Home.css'
import Menu from '../../Components/Menu/Menu'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Menu></Menu>
    </div>
  )
}

export default Home