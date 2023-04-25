import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'; // Import icons from react-icons/fa
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4 className="footer-heading">Hours</h4>
        <p className="footer-text">
          <FaClock className="footer-icon" />
          Monday - Friday: 9am - 5pm
        </p>
        <p className="footer-text">
          <FaClock className="footer-icon" />
          Saturday - Sunday: Closed
        </p>
      </div>
      <div className="footer-section">
        <h4 className="footer-heading">Location</h4>
        <p className="footer-text">
          <FaMapMarkerAlt className="footer-icon" />
          1234 Elm Street
        </p>
        <p className="footer-text">
          <FaMapMarkerAlt className="footer-icon" />
          Springfield, IL 62704
        </p>
      </div>
      <div className="footer-section">
        <h4 className="footer-heading">Contact</h4>
        <p className="footer-text">
          <FaPhone className="footer-icon" />
          Phone:{' '}
          <a href="tel:+15551234567" className="footer-link">
            (555) 123-4567
          </a>
        </p>
        <p className="footer-text">
          <FaMapMarkerAlt className="footer-icon" />
          Address:{' '}
          <a
            href="https://www.google.com/maps?q=1234+Elm+Street,+Springfield,+IL+62704"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            1234 Elm Street, Springfield, IL 62704
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
