import React from 'react';
import './skills.css';
import SWE from '../Skills/SWE.png';
import IconJava from '../Skills/java.png';
import IconWeb from '../Skills/web.png';
import IconBackend from '../Skills/backend.png';
import IconGithub from '../Skills/github.png';
import IconDatabase from '../Skills/database.png';
import {Link} from'react-scroll';



const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3><img src={SWE} alt="SWE" />Software development</h3>
            <p>Building dynamic and interactive user interfaces.</p>
          </div>
          <div className="skill-item">
          <h3><img src={IconJava} alt="Java" />Programming in Java</h3>
            <p>Strong experience in java Programming.</p>
          </div>
          <div className="skill-item">
          <h3><img src={IconWeb} alt="Web" />Front-end development</h3>
            <p>Html, CSS, JavaScript, React.js<br/>Creating responsive, mobile-friendly layouts with CSS techniques.</p>
          </div>
          <div className="skill-item">
          <h3><img src={IconDatabase} alt="Database" />MySQL</h3>
            
            <p>Experience with relational  databases like MySQL.</p>
          </div>
          <div className="skill-item">
          <h3><img src={IconBackend} alt="Backend" />APIs</h3>
          <p>Building backend APIs and handling server-side logic </p>
          </div>
          <div className="skill-item">
          <h3><img src={IconGithub} alt="GitHub" />GitHub</h3>
            
            <p>Version control using Git and collaboration through GitHub repositories.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
