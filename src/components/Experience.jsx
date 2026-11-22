import React from 'react';
import { useReveal } from '../hooks';
import './Experience.css';
export default function Experience() {
  useReveal();
  return <section id="experience" className="section-wrapper">
    <div className="reveal"><div className="section-header"><span className="section-num">03</span><h2 className="section-title">Internship Experience</h2><div className="section-line" /></div></div>
    <div className="experience-wrap reveal">
      <div>
          <div className="experience-meta">30-DAY INTERNSHIP · AIML</div>
          
          <div className="experience-company">RECCSAR Private Limited</div>
          <div className="experience-location">Madurai, Tamil Nadu</div>
          <div className="experience-domain">Domain: Artificial Intelligence and Machine Learning (AIML)</div>
        </div>
    </div>
  </section>;
}
