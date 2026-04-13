import React from 'react'
import './Hero.css'
import profile from "../../../assets/profile.png";
const Hero = () => {
  return (
    <section className='hero-main-container'>
      <div className="hero-container"> <h1>Hi I'm <span>ANAB SIMON</span></h1>
        <h2>Front-end Developer</h2>
        <p>I create beautyful, responsive web experinces with clean code and modern <br />
          technologies. passionate about creating intuitive interface that users love.
        </p>
        <div className='btn'>
          <button>View project</button>
          <button>Contact Me</button>
        </div>
        <div className="social-links">
          <ul>
            <li><a href='https://github.com/simonanab56-sys' target='_blank' > Github </a></li>
            <li><a href=''> Linkedin</a></li>
            <li><a href=''>X</a></li>
          </ul>
        </div>
      </div>
      <img src={profile} alt="" />


    </section>
  )
}

export default Hero
