import React from 'react'
import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <Navbar></Navbar>
      <div className='contact'>
        <h1>contact</h1>
        <p>
          <span>Email:</span> ywc005@ucsd.edu
        </p>
        <p>
          <span>Phone:</span> (619)-535-8443
        </p>
        <p>
          <span>Located In:</span> Winchester and San Diego, CA
        </p>
        <p>
          <span>Current Services:</span> Tutoring ($40/hr), Portrait Photography
        </p>
      </div>
    </div>
  )
}

export default Contact