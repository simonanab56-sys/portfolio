import React, { useState } from 'react'
import './Navbar.css'


const Navbar = ({ dark, setDark }) => {

  const scrollToSection = (id)=>{
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <div>
      <div className={`navbar-container ${dark ? "dark":"light"}`}>
        <h1>A.<span>S</span> </h1>
        <ul>
          <li onClick={()=>scrollToSection('about')}>About</li>
          <li  onClick={()=>scrollToSection('project')} >Project </li>
          <li onClick={()=>scrollToSection('skills')} >Skills</li>
          <li onClick={()=>scrollToSection('contact')} >Contact</li>
          <li onClick={() => setDark(prev => !prev)}>
          {dark ? "☀️" : " 🌙 "}
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
