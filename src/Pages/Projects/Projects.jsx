import React from 'react'
import './Projects.css'
import Navbar from '../../Components/Navbar/Navbar'

const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <Navbar></Navbar>
      <div className='projects'>
        <h1>projects</h1>
        <p>ReactJS Web Development: </p>
        <p>
          Learning ReactJS web development. Actively designing/updating this personal site and developing client portfolio sites.
        </p>
      </div>
    </div>

  )
}

export default Projects