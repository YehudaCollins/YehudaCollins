import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaUnity, FaPython, FaHandPointDown } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import '../Style/Skills.css';

function Skills() {
  const [flippedSkill, setFlippedSkill] = useState(null);

  const skills = [
    { name: 'HTML', description: 'Hypertext Markup Language', icon: <FaHtml5 className="text-5xl" />, color: 'linear-gradient(45deg, #E44D26, #F16529)' },
    { name: 'CSS', description: 'Cascading Style Sheets', icon: <FaCss3Alt className="text-5xl" />, color: 'linear-gradient(45deg, #264DE4, #2965F1)' },
    { name: 'JavaScript', description: 'A high-level programming language', icon: <FaJsSquare className="text-5xl" />, color: 'linear-gradient(45deg, #F0DB4F, #F7DF1E)' },
    { name: 'Node.js', description: 'A JavaScript runtime', icon: <FaNodeJs className="text-5xl" />, color: 'linear-gradient(45deg, #68A063, #3C873A)' },
    { name: 'React', description: 'A JavaScript library for building UIs', icon: <FaReact className="text-5xl" />, color: 'linear-gradient(45deg, #61DAFB, #00B7FF)' },
    { name: 'Database', description: 'SQL & NoSQL databases', icon: <FaDatabase className="text-5xl" />, color: 'linear-gradient(45deg, #336791, #003B57)' },
    { name: 'Git', description: 'Version control system', icon: <FaGitAlt className="text-5xl" />, color: 'linear-gradient(45deg, #F05032, #F34F29)' },
    { name: 'Unity', description: 'A game development platform', icon: <FaUnity className="text-5xl" />, color: 'linear-gradient(45deg, #222C37, #000000)' },
    { name: 'C#', description: 'A modern programming language', icon: <SiCsharp className="text-5xl" />, color: 'linear-gradient(45deg, #9B4F96, #682876)' },
    { name: 'Python', description: 'A high-level programming language', icon: <FaPython className="text-5xl" />, color: 'linear-gradient(45deg, #3776AB, #FFD43B)' }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">My Skillset</h2>
        <p className="text-xl text-gray-300 flex justify-center items-center">
        click each card to reveal details
          <FaHandPointDown className="ml-2 text-2xl text-gold animate-bounce" />
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setFlippedSkill(index)}
            onMouseLeave={() => setFlippedSkill(null)}
          >
            <div className={`skill-card-inner ${flippedSkill === index ? 'flipped' : ''}`}>
              <div className="skill-card-front" style={{ background: skill.color }}>
                {skill.icon}
                <h3 className="text-2xl font-bold text-white mt-4">{skill.name}</h3>
              </div>
              <div className="skill-card-back">
                <h3 className="text-2xl font-bold text-gold mb-2">{skill.name}</h3>
                <p className="text-white">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;