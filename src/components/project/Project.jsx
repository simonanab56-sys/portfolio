import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <section id='project'>
      <h2>Featured Project</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="" alt="" />
          </div>
          <div className="project-content">
            <h3>E-commerce Platform</h3>
            <p>A modern, responsive e-commerce platform with product filtering, cart management, and checkout flow.</p>
            <div className="tec-stack">
              <span>React</span>
              <span>CSS</span>
              <span>Javascipt</span>
              <span>API</span>
            </div>
            <div className="project-link">
              <a href='' target='_blank'>Live Demo</a>
               <a href='' target='_blank'>Github</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="" alt="" />
          </div>
          <div className="project-content">
            <h3>Task Management App</h3>
            <p>A collaborative task management tool with real-time updates, team collaboration, and progress tracking.</p>
            <div className="tec-stack">
              <span>React</span>
              <span>CSS</span>
              <span>Javascipt</span>
              <span>API</span>
            </div>
            <div className="project-link">
              <a href='' target='_blank'>Live Demo</a>
              <a href='' target='_blank'>Github</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="" alt="" />
          </div>
          <div className="project-content">
            <h3>Analytics Dashboard</h3>
            <p>An interactive analytics dashboard with real-time data visualization and comprehensive reporting features.</p>
            <div className="tec-stack">
              <span>React</span>
              <span>CSS</span>
              <span>Javascipt</span>
              <span>API</span>
            </div>
            <div className="project-link">
              <a href='' target='_blank'>Live Demo</a>
              <a href='' target='_blank'>Github</a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Project
