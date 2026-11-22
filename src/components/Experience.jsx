import React from 'react';
import { useReveal } from '../hooks';
import './Experience.css';
export default function Experience() {
  useReveal();
  return <section id="experience" className="section-wrapper">
    <div className="reveal"><div className="section-header"><span className="section-num">03</span><h2 className="section-title">Internship Experience</h2><div className="section-line" /></div></div>
    <div className="edu-timeline">
      <div className="edu-item reveal"><div className="edu-dot"><span>💼</span></div>
        <div className="edu-card edu-card--current">
          <span className="edu-badge">30 Days</span>
          <div className="edu-period">Internship · Artificial Intelligence &amp; Machine Learning</div>
          <div className="edu-institution">RECCSAR Private Limited</div>
          <div className="edu-location">Madurai, Tamil Nadu</div>
          <div className="edu-degree">Domain: Artificial Intelligence and Machine Learning (AIML)</div>
        </div>
      </div>
    </div>
  </section>;
}
