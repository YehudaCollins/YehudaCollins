import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../Style/Work.css'; // ייבוא קובץ ה-CSS

function Work() {
  const projects = [
    {
      title: 'Gourmet-Galaxy',
      description: 'Shop site. which allows you to add stores and get details and prices for each store.',
      image: 'gourmet-galaxy.png',
      link: 'https://github.com/YehudaCollins/GourmetGalaxy',
      link2: 'https://gourmet-galaxy.netlify.app/',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Briniac',
      description: 'A learning website for children, which combines learning with games. Highly recommended for children',
      image: 'briniac.png',
      link: 'https://github.com/YehudaCollins/Braniac-main',
      link2: 'https://brniac.netlify.app/',
      technologies: ['JavaScript', 'CSS', 'React', 'Node.js', 'FireBase','Unity','C#']
    },
    {
      title: 'CinaWave',
      description: 'A site for information about every movie and series.',
      image: 'cinawave.png',
      link: 'https://github.com/YehudaCollins/cinawave',
      link2: 'https://cinawave.com/',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'PostgreSQL','api','tmdb']
    },
    {
      title: 'Zombieland',
      description: 'A maze-style horror game, in an old abandoned house.',
      image: 'Zombieland.png',
      link: '#',
      link2: 'https://yehudacollins.github.io/Zombieland.com/#',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'PostgreSQL','Unity','C#']
    }
  ];

  return (
    <section id="work" className="work-section">
      <h2 className="work-title">My Projects</h2>
      <div className="work-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="project-technology">{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.link} className="project-button project-button-view" target="_blank" rel="noopener noreferrer">
                <FaGithub className="button-icon" /> View Project
              </a>
              <a href={project.link2} className="project-button project-button-enter" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="button-icon" /> Enter the Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
