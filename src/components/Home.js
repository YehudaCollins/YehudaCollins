import React from 'react';
import { gsap } from 'gsap';
import '../Style/Home.css';
import { FaGithub, FaEnvelope, FaInstagram, FaXing, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Home() {
  React.useEffect(() => {
    gsap.from('.home-title', { duration: 1.5, opacity: 0, y: -50 });
    gsap.from('.home-subtitle', { duration: 1.5, opacity: 0, y: 50, delay: 0.5 });
    gsap.from('.home-button', { duration: 1.5, opacity: 0, scale: 0.8, delay: 1 });
    gsap.from('.home-description', { duration: 1.5, opacity: 0, scale: 0.8, delay: 1.5 });
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <div className="">
          <div className="profile-card">
            <div className="image-container">
              <img
                src="gg.jpeg"
                alt="Desk Setup"
                className="profile-image"
              />
              <div className="profile-name">
                Yehuda <span>Collins</span>
              </div>
            </div>
            <div className="text-container">
              <p className="code-text">
                <span>&lt;code&gt;</span> Full Stack Developer and Game Developer <span>&lt;/code&gt;</span>
              </p>
              <div className="icons-container">
                <p className="profile-name-inline">Yehuda Collins</p>
                <a href="https://github.com/YehudaCollins" className="icon-link">
                  <FaGithub className="icon" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ycollins555@gmail.com&su=פנייה דרך ברייניאק&body=היי הגעתי עליכם דרך המשחק" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/yehuda_collins?igsh=MXQ2MDNrajBvd2hhbw==" className="icon-link">
                  <FaInstagram className="icon" />
                </a>
                <a href="https://xing.com/profile/YehudaCollins" className="icon-link">
                  <FaXing className="icon" />
                </a>
              </div>
              <p className="profile-description">
                I'm a developer based in Givat Ze'ev, currently Serves in a technology unit at idf. I have experience in full stack development and game development using Unity and C#.
              </p>
              <p className="profile-description">
                In my free time, you can catch me Spending time in nature, Painting, or exploring new technologies and game development trends.
              </p>
              <div className="button-container">
                <a
                  href="./Yehuda Collins resume.pdf"
                  className="button resume-button"
                >
                  <FaDownload className="icon" /> Resume
                </a>
                <Link to="contact" smooth={true} duration={1000} className="button contact-button">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
