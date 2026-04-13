import React from "react";
import "./SkillsTools.css";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h1>Skills & Expertise</h1>

      <div className="skills-grid">


        <div className="skill-card">
          <h2>Frontend</h2>

          <div className="skill">
            <p>HTML & CSS <span>95%</span></p>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
          </div>

          <div className="skill">
            <p>JavaScript <span>90%</span></p>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill">
            <p>React <span>88%</span></p>
            <div className="bar"><div style={{ width: "88%" }}></div></div>
          </div>
        </div>


        <div className="skill-card">
          <h2>Tools</h2>

          <div className="skill">
            <p>Git & GitHub <span>90%</span></p>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
          </div>

          <div className="skill">
            <p>Figma <span>85%</span></p>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <p>VS Code <span>95%</span></p>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
          </div>
        </div>


        <div className="skill-card">
          <h2>Other</h2>

          <div className="skill">
            <p>Responsive Design <span>95%</span></p>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
          </div>

          <div className="skill">
            <p>Web Performance <span>88%</span></p>
            <div className="bar"><div style={{ width: "88%" }}></div></div>
          </div>

          <div className="skill">
            <p>SEO Optimization <span>85%</span></p>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
          </div>

          <div className="skill">
            <p>UI/UX Design <span>82%</span></p>
            <div className="bar"><div style={{ width: "82%" }}></div></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;