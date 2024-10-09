import React from 'react';
import Project from './Project';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { title: 'Jungle Pairs', image: 'project1.jpg', appLink: 'https://paolanayala.github.io/jungle-pairs/', repoLink: 'https://github.com/paolanayala/jungle-pairs' },
    { title: 'Project 2 Coming Soon', image: 'project2.jpg', appLink: 'https://liveapp2.com', repoLink: 'https://github.com/repo2' },
    
  ];
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;