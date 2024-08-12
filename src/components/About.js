import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaFlag, FaGraduationCap, FaIndustry, FaStar } from 'react-icons/fa';
import '../Style/About.css';

const About = () => {  
  return (
    <div className="container-1">
      <div className="profile-card-1">
        <div className="text-container-1">
          <h1 className="title-1">About <span className="highlight-1">me</span></h1>
          <p className="description-1">
            I am an enthusiastic developer with a deep passion for coding, especially in full stack and game development. Born in Givat Ze'ev, I am currently studying Software Engineering at Ashkelon College.
          </p>
          <p className="description-1">
          I finished my matriculation certificate at Chachmi Lev. After that, an engineer's certificate at Ashkelon College. At the same time I studied and taught a game development course. I am currently working at idf           </p>
          <p className="description-1">
            Outside of my studies and work, I enjoy Spending time in nature, Painting, and constantly exploring new technologies and trends in game development.
          </p>
          <div className="details-1">
            <div className="detail-item-1">
              <FaMapMarkerAlt className="icon-1" />
              <span className="detail-title-1">Location:</span> Givat Ze'ev, Israel
            </div>
            <div className="detail-item-1">
              <FaCalendarAlt className="icon-1" />
              <span className="detail-title-1">Age:</span> 19
            </div>
            <div className="detail-item-1">
              <FaFlag className="icon-1" />
              <span className="detail-title-1">Nationality:</span> Israeli
            </div>
            <div className="detail-item-1">
              <FaGraduationCap className="icon-1" />
              <span className="detail-title-1">Study:</span> Ashkelon College
            </div>
            <div className="detail-item-1">
              <FaStar className="icon-1" />
              <span className="detail-title-1">Interests:</span> Drawing, developing games and websites, trips
            </div>
            <div className="detail-item-1">
              <FaIndustry className="icon-1" />
              <span className="detail-title-1">Employment:</span> Freelance Web and Game Developer
            </div>
          </div>
        </div>
        <div className="image-container-1">
          <img
            src="yy.jpg"
            alt="Profile"
            className="profile-image-1"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
