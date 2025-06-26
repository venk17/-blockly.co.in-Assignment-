import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import logoimg from "../../assets/Logo.svg"
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logoimg}></img>
            <h2>ANISH KUMAR SINHA</h2>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;