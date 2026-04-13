import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/navbar/hero/Hero'
import About from './components/navbar/about/About';
import Project from './components/project/Project';
import SkillsTools from './components/skiils/SkillsTools';
import Contact from './components/contact/Contact';

const App = () => {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);



  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Project />
      <SkillsTools />
      <Contact />
    </div>
  )
}

export default App
