import React from 'react';
import '../Style/randomFacts.css';

const Skills = () => {
  const skills = [
    { name: 'Tea drinking', percent: 95, color: 'linear-gradient(to top, #4CAF50, #A5D6A7)' },
    { name: 'Design Systems', percent: 90, color: 'linear-gradient(to top, #FF9800, #FFCC80)' },
    { name: 'Fullstack', percent: 95, color: 'linear-gradient(to top, #FFC107, #FFECB3)' },
    { name: 'Peyton', percent: 75, color: 'linear-gradient(to top, #FFEB3B, #FFF9C4)' },
    { name: 'sleep well', percent: 40, color: 'linear-gradient(to top, #F44336, #FFCDD2)' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-meter">
          <ul className="skills-list">
            <li className="skill-level">___ Jedi</li>
            <li className="skill-level">___ Ninja</li>
            <li className="skill-level">___ Geek</li>
            <li className="skill-level">___ Newbie</li>
          </ul>
          <div className="meter-line"></div> {/* הפס החדש */}
        </div>
        <div className="skills-wrapper">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ height: `${skill.percent}%`, backgroundImage: skill.color }}>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RandomFacts = () => {
  return (
    <section id="random-facts" className="facts-section">
      <div className="facts-card">
        <div className="content-wrapper">
          <div className="image-side">
            <img
              src="yoda.png"
              alt="Computer with Yoda"
              className="facts-image"
            />
          </div>
          <div className="text-side">
            <h2 className="section-title">Random Facts</h2>
            <ul className="facts-list">
              <li>I drink a lot of tea</li>
              <li>I'm into interior design</li>
              <li>Debugging my fitness plan is harder than debugging my code.</li>
              <li>I like developing games (and play)</li>
              <li>I'm a bit of a clean freak</li>
              <li>I want to live on Pandora</li>
              <li>I'm slightly addicted to <a href="https://www.instagram.com/yehuda_collins?igsh=MXQ2MDNrajBvd2hhbw==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li>Yoda is my mentor</li>
            </ul>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default RandomFacts;
