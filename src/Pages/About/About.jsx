import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'

const About = () => {
  return (
    <div className='about-wrapper'>
      <Navbar></Navbar>
      <div className='about'>
        <h1>about me</h1>
        <p>
          My name is Will Chung and I'm currently a solo developer learning various skills. 
          Right now, I'm working on designing websites with ReactJS.
        </p>
        <p>
          I graduated from <span>UCSD </span>with a <span>B.S. in Computer Science</span> at the end of 2021.
          I graduated with <span>Magna Cum Laude Honors!</span>
        </p>
        <p>
          I am a photography hobbyist, but occasionally work with clients.
          You can see some of my work on this site.
        </p>
        <p>
          I have many quarters experience--spanning years--tutoring Computer Science at UCSD as an official undergraduate tutor.
          Teaching others as efficiently as possible is a passion of mine.
        </p>

        <p>
          Feel free to contact me for any opportunities (software, photography, tutoring).
          Be sure to see the specifics for each in their respective sections!
        </p>
      </div>
    </div>
  )
}

export default About