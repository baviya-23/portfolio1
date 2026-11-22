import React from 'react';
import { useReveal } from '../hooks';
import './About.css';
export default function About() {
 useReveal();
 return <section id="about" className="section-wrapper">
  <div className="reveal"><div className="section-header"><span className="section-num">01</span><h2 className="section-title">About Me</h2><div className="section-line" /></div></div>
  <div className="about-grid reveal"><div className="about-text">
   <p>I'm a <strong>Computer Science and Business Systems</strong> student at KPR Institute of Engineering and Technology, Coimbatore, with a strong interest in <strong>Cybersecurity and Artificial Intelligence</strong>.</p>
   <p>I have explored software development, AI concepts and open-source communities through projects, technical events and a 30-day internship in Artificial Intelligence and Machine Learning at <strong>RECCSAR Private Limited, Madurai</strong>.</p>
   <p>I enjoy problem solving, learning by building, and participating in communities that encourage knowledge sharing and technology for social impact.</p>
   <div className="about-tags">{['Cybersecurity','Artificial Intelligence','Problem Solving','Open Source'].map(t => <span className="about-tag" key={t}>{t}</span>)}</div>
  </div><div className="about-right"><div className="about-info-card">
   <div className="info-row"><span className="info-label">Name</span><span className="info-val">Baviya Varshini V</span></div>
   <div className="info-row"><span className="info-label">Location</span><span className="info-val">Avinashi, Tiruppur</span></div>
   <div className="info-row"><span className="info-label">Email</span><a href="mailto:baviyavarshinv@gmail.com" className="info-link">baviyavarshinv@gmail.com</a></div>
   <div className="info-row"><span className="info-label">Phone</span><span className="info-val">+91 6382251016</span></div>
   <div className="info-row"><span className="info-label">GitHub</span><a href="https://github.com/baviya-23" target="_blank" rel="noreferrer" className="info-link">github.com/baviya-23</a></div>
   <div className="info-row"><span className="info-label">LinkedIn</span><a href="https://www.linkedin.com/in/baviya-varshini-v-37ab60326" target="_blank" rel="noreferrer" className="info-link">baviya-varshini-v</a></div>
   <div className="info-row"><span className="info-label">Status</span><span className="info-val status-open"><span className="status-dot" /> Open to Opportunities</span></div>
  </div></div></div></section>;
}