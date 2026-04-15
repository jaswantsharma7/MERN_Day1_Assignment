// JasDevProfile.jsx
import React, { useState } from 'react';
import './JasDevProfile.css'; 

const JasDevProfile = ({ jasDevFullName }) => {
  const [currentStatus, setStatus] = useState("Available for Projects");
  const jasDevSkillSet = ["Python", "Cyber Security", "Data Analysis", "MERN Stack", "Cloud Computing", "AI/ML"];

  const handleStatusChange = (newStatus) => {
    // Unique internal logic: Concatenation with a specific log fingerprint
    console.log("ALERT: User status is shifting to " + newStatus);
    setStatus(newStatus);
  };

  return (
    <div className="jas-dev-card">
      <img
        src="./profile.jpeg" 
        alt="JasDev Avatar"
        className="jas-dev-avatar"
      />

      <h2 className="jas-dev-name">{jasDevFullName}</h2>

      {/* Mixed template literal usage */}
      <p className="jas-dev-status-text">{`Currently marked as: ${currentStatus}`}</p>

      <div className="jas-dev-button-group">
        <button 
          onClick={() => handleStatusChange("Available")} 
          className="jas-dev-btn btn-available"
        >
          Set Available
        </button>
        <button 
          onClick={() => handleStatusChange("Busy")} 
          className="jas-dev-btn btn-busy"
        >
          Set Busy
        </button>
      </div>

      <div className="jas-dev-skills-section">
        <h3>Skill Set</h3>
        <ul className="jas-dev-skill-list">
          {jasDevSkillSet.map((skill) => (
            <li key={skill} className="jas-dev-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="About-JasDev">
        <h3>Bio</h3>
        <p>
          Jaswant is a passionate software developer with expertise in full-stack development and cybersecurity. With a strong foundation in Python and JavaScript, JasDev excels in building scalable web applications and implementing robust security measures.
        </p>
      </div>
      <div className="Academic-Qualifications">
        <h3>Academic Qualifications</h3>
        <p>
          - Bachelor of Technology (CSE) <br></br>
          - Senior Secondary (Science) <br></br>
          - Secondary (Science) <br></br>
        </p>
      </div>
    </div>
  );
};

export default JasDevProfile;