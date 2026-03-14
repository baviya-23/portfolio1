import React from 'react';
import { useReveal } from '../hooks';
import './Certifications.css';

const certifications = [
  {
    icon: '📊',
    name: 'Advanced R Programming for Business Analytics',
    issuer: 'NPTEL (SWAYAM)',
    color: 'cyan',
  },
  {
    icon: '🍃',
    name: 'MongoDB Certification',
    issuer: 'MongoDB University',
    color: 'purple',
  },
  {
    icon: '🤖',
    name: 'Foundations of Artificial Intelligence',
    issuer: 'Online Certification',
    color: 'pink',
  },
];

export default function Certifications() {
  useReveal();

  return (
    <section id="certifications" className="section-wrapper">
      <div className="reveal">
        <div className="section-header">
          <span className="section-num">05</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="certs-grid reveal">
        {certifications.map((c, i) => (
          <div
            className={`cert-card cert-card--${c.color}`}
            key={i}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className={`cert-icon-wrap cert-icon-wrap--${c.color}`}>
              <span className="cert-icon">{c.icon}</span>
            </div>
            <div className="cert-body">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
            </div>
            <div className={`cert-verified cert-verified--${c.color}`}>✓ Verified</div>
          </div>
        ))}
      </div>
    </section>
  );
}
