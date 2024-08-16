import React from 'react'
import './Projects.css'
import Navbar from '../../Components/Navbar/Navbar'

const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <Navbar></Navbar>
      <div className='projects'>
        <h1>projects</h1>
        <p>ReactJS Web Dev: </p>
        <p>
          <span>(Current) </span>
          Learning ReactJS web development. Actively designing/updating this personal site and developing client portfolio sites.
        </p>
        <p>SQL Web Dev:</p>
        <p>
          <span>(Current) </span>
          Learning to integrate various database (Postgres, MongoDB, NoSQL) functionality to ReactJS websites (chat site, online store).
        </p>
      </div>
    </div>

  )
}

export default Projects