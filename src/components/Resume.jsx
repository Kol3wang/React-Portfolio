import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <a href="Kol's RESUME 2024.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add other skills */}
      </ul>
    </div>
  );
}

export default Resume;