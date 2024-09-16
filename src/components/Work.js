import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../Style/Work.css';

function Work() {
  const projects = [
    {
      title: 'Jerusalem Real Estate',
      description: 'A premium real estate platform for buying houses in Jerusalem',
      images: ['n3.png', 'n2.png', 'n1.png', 'n4.png'],
      link: '',
      link2: 'https://jerusalemrealestate.us/',
      technologies: ['JavaScript', 'EmailJS', 'React', 'Node.js', 'PostgreSQL', 'Google Maps API']
    },
    {
      title: 'Briniac',
      description: 'An innovative learning website for children, combining education with interactive games',
      images: ['b1.png', 'b3.png', 'briniac.png', 'b2.png', 'b4.png'],
      link: 'https://github.com/YehudaCollins/Braniac-main',
      link2: 'https://braniac-f455c.web.app/',
      technologies: ['React', 'Firebase', 'Unity', 'C#']
    },
    {
      title: 'KosherMind',
      description: 'Flight site. which is in the market',
      images: ['f1.png', 'f2.png', 'f3.png', 'f4.png', 'f5.png'],
      link2: 'https://pleasuairlines.com/',
      technologies: ['React', 'Node.js', 'Firebase','api','qr','Typescript','express']
    },
    {
      title: 'CinaWave',
      description: 'A comprehensive database for movie and series information',
      images: ['c1.png', 'c2.png', 'c3.png', 'c4.png'],
      link: 'https://github.com/YehudaCollins/cinawave',
      link2: 'https://cinawave.com/',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TMDB API']
    },
    {
      title: 'KosherMind',
      description: 'ai project - adapted to the religious community',
      images: ['g2.png', 'g5.png', 'g3.png'],
      link: 'https://github.com/YehudaCollins/GourmetGalaxy',
      link2: 'https://gourmet-galaxy.netlify.app/',
      technologies: ['React', 'Node.js', 'Firebase','api-gpt']
    },
    {
      title: 'Zombieland',
      description: 'An immersive maze-style horror game set in an abandoned house',
      images: ['z1.png', 'z2.png', 'z3.png', 'z4.png'],
      link: '#',
      link2: 'https://yehudacollins.github.io/Zombieland.com/#',
      technologies: ['Unity', 'C#', 'JavaScript', 'React']
    }
  ];

  return (
    <section id="work" className="work-section">
      <h2 className="work-title">My Portfolio</h2>
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
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        {project.link && (
          <a href={project.link} className="project-button project-button-view" target="_blank" rel="noopener noreferrer">
            <FaGithub className="button-icon" /> View Code
          </a>
        )}
        {project.link2 && (
          <a href={project.link2} className="project-button project-button-enter" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="button-icon" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default Work;