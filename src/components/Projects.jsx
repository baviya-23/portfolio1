import React, { useState } from 'react';
import { useReveal } from '../hooks';
import './Projects.css';

const projects = [
  {
    num: '01',
    title: 'AI Satellite Risk Detection System',
    description:
      'A concept system that utilizes AI techniques and satellite imagery to identify potential environmental and disaster risks.',
    bullets: [
      'Analyzes satellite data to detect patterns related to floods, wildfires, or environmental anomalies',
      'Designed to support early warning systems and disaster risk monitoring',
      'Uses AI-driven analysis to improve response time to environmental threats',
    ],
    tags: ['Python', 'AI/ML', 'Satellite Data', 'Computer Vision'],
    accent: 'cyan',
  },
  {
    num: '02',
    title: 'UVAI — Food Redistribution System',
    description:
      'A prototype concept that collects surplus food data from donors and connects it with NGOs or recipients to reduce food waste.',
    bullets: [
      'Designed to reduce food waste and improve food redistribution efficiency',
      'Connects food donors with NGOs and recipients through a streamlined interface',
      'Focused on applying technology to address real-world social challenges',
    ],
    tags: ['Python', 'MongoDB', 'Prototype', 'Social Tech'],
    accent: 'purple',
  },
  {
    num: '03',
    title: 'My Anime List — Mobile Application',
    description:
      'A React Native mobile application to browse, add, and manage anime lists with a clean, user-friendly interface.',
    bullets: [
      'Built with React Native for cross-platform mobile support',
      'Implemented search functionality and favorites management',
      'Designed a simple and user-friendly interface for better content organization',
    ],
    tags: ['React Native', 'JavaScript', 'Android Studio', 'Mobile UI'],
    accent: 'pink',
  },
];

export default function Projects() {
  useReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="section-wrapper">
      <div className="reveal">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className={`project-card project-card--${p.accent} reveal`}
            key={p.num}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-num">// PROJECT {p.num}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-description">{p.description}</p>

            <ul className="project-bullets">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>

            <div className="project-tags">
              {p.tags.map(t => (
                <span className={`project-tag project-tag--${p.accent}`} key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
