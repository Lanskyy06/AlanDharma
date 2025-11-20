import React from "react";
import "./FindMe.css";
import location_icon from "/src/assets/location_icon.svg";
import mail_icon from "/src/assets/mail_icon.svg";
import call_icon from "/src/assets/call_icon.svg";

const FindMe = () => {
  return (
    <div className="findme">
      <h2>Find Me</h2>
      <div className="findme-content">
        <div className="findme-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0302985290077!2d112.73612307502545!3d-7.350494272315766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4b5815b5563%3A0xd254728d9177f1c4!2sGedangan%20Electric%20II%20Shop!5e0!3m2!1sen!2sid!4v1763225576234!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location"
          ></iframe>
        </div>
        <div className="findme-info">
          <div className="info-item">
            <img src={location_icon} alt="Location" />
            <p>Sidoarjo, Indonesia</p>
          </div>
          <div className="info-item">
            <img src={mail_icon} alt="Email" />
            <p>lanskyyit@Gmail.com</p>
          </div>
          <div className="info-item">
            <img src={call_icon} alt="Phone" />
            <p>+62 895-0659-6698</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/alan-dharma-343805370/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Lanskyy06" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/alandh06_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMe;
