import React, { useState } from 'react';
import { useReveal } from '../hooks';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    icon: '⌨',
    color: 'cyan',
    tags: ['Python', 'Java (Basics)', 'JavaScript'],
  },
  {
    title: 'Concepts',
    icon: '🧠',
    color: 'purple',
    tags: ['Data Structures', 'Object-Oriented Programming', 'Algorithms'],
  },
  {
    title: 'Tools & IDEs',
    icon: '🛠',
    color: 'pink',
    tags: ['VS Code', 'Android Studio', 'Beautiful Soup'],
  },
  {
    title: 'Database',
    icon: '🗄',
    color: 'cyan',
    tags: ['MongoDB'],
  },
  {
    title: 'Frameworks',
    icon: '⚛',
    color: 'purple',
    tags: ['React Native'],
  },
  {
    title: 'Interests',
    icon: '🎯',
    color: 'pink',
    tags: ['Cybersecurity', 'Artificial Intelligence', 'Problem Solving'],
  },
];

export default function Skills() {
  useReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="section-wrapper">
      <div className="reveal">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="skills-grid reveal">
        {skillGroups.map((group, i) => (
          <div
            className={`skill-group skill-group--${group.color} ${hovered === i ? 'hovered' : ''}`}
            key={group.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="skill-group-header">
              <span className="skill-icon">{group.icon}</span>
              <span className="skill-group-title">{group.title}</span>
            </div>
            <div className="skill-tags">
              {group.tags.map(tag => (
                <span className="skill-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
