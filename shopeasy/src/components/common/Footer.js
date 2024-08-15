import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/index.css'; 
import '../../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <img src="images/logo.png" id="footer-logo" alt="Log"/>
        </div>
    </footer>
  );
};

export default Footer;