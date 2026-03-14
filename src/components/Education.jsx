import React from 'react';
import { useReveal } from '../hooks';
import './Education.css';

const education = [
  {
    institution: 'KPR Institute of Engineering and Technology',
    location: 'Coimbatore',
    degree: 'B.E. Computer Science and Business Systems',
    period: '2024 – 2028',
    score: 'CGPA: 8.51',
    icon: '🎓',
    current: true,
  },
  {
    institution: 'Sri Ramakrishna Vidyalaya Matric Higher Secondary School',
    location: 'Tamil Nadu',
    degree: 'HSE — 12th Grade',
    period: 'Completed',
    score: 'Percentage: 93.2%',
    icon: '🏫',
    current: false,
  },
  {
    institution: 'Sri Ramakrishna Vidyalaya Matric Higher Secondary School',
    location: 'Tamil Nadu',
    degree: 'SSLC — 10th Grade',
    period: 'Completed',
    score: 'Percentage: 93.6%',
    icon: '📘',
    current: false,
  },
];

export default function Education() {
  useReveal();

  return (
    <section id="education" className="section-wrapper">
      <div className="reveal">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="edu-timeline">
        {education.map((e, i) => (
          <div className="edu-item reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className="edu-dot">
              <span>{e.icon}</span>
            </div>
            <div className={`edu-card ${e.current ? 'edu-card--current' : ''}`}>
              {e.current && <span className="edu-badge">Current</span>}
              <div className="edu-period">{e.period}</div>
              <div className="edu-institution">{e.institution}</div>
              <div className="edu-location">{e.location}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-score">{e.score}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
