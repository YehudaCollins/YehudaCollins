import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaUnity, FaPython, FaHandPointDown } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import '../Style/Skills.css';

function Skills() {
  const [flippedSkill, setFlippedSkill] = useState(null);

  const skills = [
    { name: 'HTML', description: 'Hypertext Markup Language', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
    { name: 'CSS', description: 'Cascading Style Sheets', icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
    { name: 'JavaScript', description: 'A high-level programming language', icon: <FaJsSquare className="text-4xl text-yellow-400" /> },
    { name: 'Node.js', description: 'A JavaScript runtime', icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: 'React', description: 'A JavaScript library for building UIs', icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: 'Database', description: 'SQL & NoSQL databases', icon: <FaDatabase className="text-4xl text-red-600" /> },
    { name: 'Git', description: 'Version control system', icon: <FaGitAlt className="text-4xl text-orange-500" /> },
    { name: 'Unity', description: 'A game development platform', icon: <FaUnity className="text-4xl text-gray-700" /> },
    { name: 'C#', description: 'A modern programming language', icon: <SiCsharp className="text-4xl text-purple-600" /> },
    { name: 'Python', description: 'A high-level programming language', icon: <FaPython className="text-4xl text-yellow-500" /> }
  ];

  return (
    <section id="skills" className="py-10 bg-gray-900">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-white">These are my skills</h2>
        <p className="text-xl text-gray-400 flex justify-center items-center">
          Go over each card to reveal details
          <FaHandPointDown className="ml-2 text-2xl text-green-400" />
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${flippedSkill === index ? 'flipped' : ''} bg-gray-800 p-4 rounded-lg shadow-lg flex items-center hover:scale-105 transition-transform`}
            onMouseEnter={() => setFlippedSkill(index)}
            onMouseLeave={() => setFlippedSkill(null)}
          >
            <div className="skill-card-inner">
              <div className="skill-card-front flex items-center">
                {skill.icon}
                <div className="ml-4 text-white">
                  <h3 className="text-2xl font-bold">{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              </div>
              <div className="skill-card-back text-white p-4 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
