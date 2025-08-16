import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ currentUser, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const removeMenu = () => {
    setShowMenu(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    removeMenu();
    scrollToSection(sectionId);
  };

  return (
    <header className={`header ${scrollHeader ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          WATCHES
        </a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={(e) => handleNavClick(e, 'home')}>
                HOME
              </a>
            </li>
            <li className="nav__item">
              <a href="#watches" className="nav__link" onClick={(e) => handleNavClick(e, 'watches')}>
                WATCHES
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={(e) => handleNavClick(e, 'about')}>
                ABOUT
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={(e) => handleNavClick(e, 'contact')}>
                CONTACT
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={toggleMenu}>
            <i className="ri-close-line"></i>
            <span className="sr-only">Close Menu</span>
          </div>
        </div>

        <div className="nav__actions">
          {currentUser && (
            <div className="nav__user-info">
              <span className="nav__username">
                Welcome, {currentUser.fullName || currentUser.email.split('@')[0]}!
              </span>
              <button className="nav__logout" onClick={onLogout}>
                <i className="ri-logout-circle-line"></i>
                Logout
              </button>
            </div>
          )}
          <div className="nav__social-links">
            <a href="https://www.facebook.com/" className="nav__social-link" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://www.instagram.com/" className="nav__social-link" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://twitter.com/" className="nav__social-link" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
          <span className="sr-only">Menu</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
