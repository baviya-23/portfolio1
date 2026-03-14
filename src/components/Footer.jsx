import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">{'<BV />'}</div>
        <p className="footer-copy">
          Designed &amp; Built by <span>Baviya Varshini V</span> · {new Date().getFullYear()}
        </p>
        <p className="footer-tag">// keep_building.exe</p>
      </div>
    </footer>
  );
}
