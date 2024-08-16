import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Resume.css'
import resume from '../../assets/resume/Resume2024.pdf'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const Resume = () => {

  function onResumeClick() {
    window.open(resume);
  };

  return (
    <div className="resume-wrapper">
      <Navbar></Navbar>
      <div className="resume">
        <h1>resume</h1>
        <h2>disclaimer:</h2>
        <p>This resume is probably not up to date. Feel free to reach out to get an updated version.</p>
        <div className="button-list">
          <div className='resume-link' onClick={onResumeClick}>
            <span>resume</span>
          </div>
          <Link className='page-links' to='/contact'><span>to contact</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Resume