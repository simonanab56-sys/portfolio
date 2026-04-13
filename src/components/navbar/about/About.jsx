import React from 'react'
import './About.css'
import profile from "../../../assets/profile.png";
const About = () => {
  return (
    <section className='about-container' id='about'>
      <h1>About Me</h1>
      <div className="about-me">
        <div className="me-explian">
          <p>I'm a passionate frontend developer who completed the Meta Front-End Developer cours. <br />
            i enjoy building beautiful,
            responsive web applications and learning new technologies.
          </p>
          <button>Downloand Resume</button>
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>

      </div>
    </section>
  )
}

export default About
