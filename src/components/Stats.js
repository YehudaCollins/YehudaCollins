import React from 'react';
import '../Style/stats.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Stats = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="text-center text-white">
        <h2 className="text-3xl mb-8"><span>Sta</span>ts</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="stat-card">
            <h3><i className="fas fa-star"></i>Github stars</h3>
            <p>1563</p>
          </div>
          <div className="stat-card">
            <h3><i className="fas fa-users"></i>Happy clients</h3>
            <p>3</p>
          </div>
          <div className="stat-card">
            <h3><i className="fas fa-calendar-alt"></i>Years of experience</h3>
            <p>2</p>
          </div>
          <div className="stat-card">
            <h3><i className="fas fa-flask"></i>OSS Projects</h3>
            <p>5</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
