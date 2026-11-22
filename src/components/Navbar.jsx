import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'certifications', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      for (const id of [...links].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('home')}>{'<BV />'}</div>

      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button
              className={`nav-link ${active === l ? 'active' : ''}`}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
