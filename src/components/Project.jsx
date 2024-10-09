import React from 'react';
import './Project.css';

function Project({ title, image, appLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">Live App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;