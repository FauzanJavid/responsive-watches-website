import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">WATCHES</h3>
            <p className="footer__description">
              Premium timepieces crafted with precision and style
            </p>
          </div>
          
          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>Home</a></li>
              <li><a href="#watches" onClick={(e) => { e.preventDefault(); document.getElementById('watches').scrollIntoView({ behavior: 'smooth' }); }}>Watches</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>About</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer__contact">
            <h4>Contact Info</h4>
            <p>Email: fauzan.javid@gmail.com</p>
            <p>Phone: +91 7338360428</p>
            <p>Address: Bengaluru, Karnataka, India</p>
          </div>
          
          <div className="footer__social">
            <h4>Follow Us</h4>
            <div className="footer__social-links">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://twitter.com/" aria-label="Twitter">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; {currentYear} WATCHES. All rights reserved.</p>
            <p className="footer__trademark">
              ™ Designed & Developed by <strong>Fauzan</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
