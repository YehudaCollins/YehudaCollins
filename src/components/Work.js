import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../Style/Work.css';

function Work() {
  const projects = [
    {
      title: 'Jerusalem Real Estate',
      description: 'A real estate site for buying houses',
      images: ['n3.png', 'n2.png', 'n1.png', 'n4.png'], // Multiple images
      link: '',
      link2: 'https://jerusalemrealestate.us/',
      technologies: ['JavaScript', 'emailjs', 'CSS', 'React', 'Node.js', 'PostgreSQL', 'API', 'Google Maps']
    },
    {
      title: 'Briniac',
      description: 'A learning website for children, which combines learning with games. Highly recommended for children',
      images: [ 'b1.png','b3.png','briniac.png', 'b2.png','b4.png'], // Multiple images
      link: 'https://github.com/YehudaCollins/Braniac-main',
      link2: 'https://brniac.netlify.app/',
      technologies: ['JavaScript', 'CSS', 'React', 'Node.js', 'Firebase', 'Unity', 'C#']
    },
    {
      title: 'CinaWave',
      description: 'A site for information about every movie and series.',
      images: ['c1.png', 'c2.png', 'c3.png', 'c4.png'],
      link: 'https://github.com/YehudaCollins/cinawave',
      link2: 'https://cinawave.com/',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'PostgreSQL', 'API', 'tmdb']
    },
    {
      title: 'Zombieland',
      description: 'A maze-style horror game, in an old abandoned house.',
      images: ['z1.png', 'z2.png', 'z3.png', 'z4.png'], // Multiple images
      link: '#',
      link2: 'https://yehudacollins.github.io/Zombieland.com/#',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'PostgreSQL', 'Unity', 'C#']
    },
    {
      title: 'Gourmet-Galaxy',
      description: 'Shop site. which allows you to add stores and get details and prices for each store.',
      images: ['gourmet-galaxy.png', 'r2.png', 'r3.png'], // Multiple images
      link: 'https://github.com/YehudaCollins/GourmetGalaxy',
      link2: 'https://gourmet-galaxy.netlify.app/',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'MongoDB']
    }

  ];

  return (
    <section id="work" className="work-section">
      <h2 className="work-title">My Projects</h2>
      <div className="work-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="project-card">
      <div className="image-carousel">
        <button onClick={prevImage} className="carousel-button prev-button">
          <FaArrowLeft />
        </button>
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          className="project-image"
        />
        <button onClick={nextImage} className="carousel-button next-button">
          <FaArrowRight />
        </button>
      </div>
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
        {project.link2 && (
          <a href={project.link2} className="project-button project-button-enter" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="button-icon" /> Enter the Site
          </a>
        )}
      </div>
    </div>
  );
}

export default Work;
