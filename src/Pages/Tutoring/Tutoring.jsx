import React from 'react';
import './Tutoring.css';
import Navbar from '../../Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

const Tutoring = () => {
  return (
    <div className='tutoring-wrapper'>
      <Navbar></Navbar>
      <div className='tutoring'>
        <h1>tutoring</h1>
        <p>
          I am a <span>UCSD Computer Science (B.S., Magna Cum Laude Honors) graduate</span> with experience as an official UCSD undergraduate tutor for the Computer Science department.
          I also transferred through the California Community College system (Diablo Vista, Miramar).
        </p>
        <p>
          Therefore, I am confident in tutoring <span>Computer Science courses (coding, theory), Mathematics.</span>
        </p>
        <p>
          Furthermore, I can provide <span>mentorship to High School, Community College, and UC students.</span> Specifically, I can help High School students build a path to Community College/UC, Community College students build a path to UC/University, and UC students achieve success at school (tutoring, M.S. program).
        </p>
        <p>
          My theory in tutoring is to teach efficienty, learning by example, and learning how to approach UC and CCC courses rather than simply learning the material
          (If you know how to approach the courses, you won't need me or any tutor anymore!).
        </p>
        <p>Rates start from <span>$40/hour</span> (small discount for bundled hours). Check the contact page to reach out.</p>
        <Link className='page-links' to='/contact'><span>to contact</span></Link>
      </div>
    </div>
  )
}

export default Tutoring