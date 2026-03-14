import React from 'react';
import { useReveal } from '../hooks';
import './About.css';

export default function About() {
  useReveal();

  return (
    <section id="about" className="section-wrapper">
      <div className="reveal">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            Motivated <strong>2nd-year Computer Science and Business Systems</strong> student
            at KPR Institute of Engineering and Technology, Coimbatore, with a strong interest
            in <strong>Cyber Security</strong> and Artificial Intelligence.
          </p>
          <p>
            I'm actively seeking internship or entry-level opportunities to gain practical
            experience and apply academic knowledge to real-world projects. I enjoy working on
            problems that sit at the intersection of <strong>technology and social impact</strong>.
          </p>
          <p>
            When I'm not coding, I explore new developments in AI and cybersecurity,
            contribute to prototype concepts, and build mobile apps just for the fun of it.
          </p>
          <div className="about-tags">
            {['Cybersecurity', 'Artificial Intelligence', 'Problem Solving', 'Open Source'].map(t => (
              <span className="about-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-info-card">
            <div className="info-row">
              <span className="info-label">Name</span>
              <span className="info-val">Baviya Varshini V</span>
            </div>
            <div className="info-row">
              <span className="info-label">Location</span>
              <span className="info-val">Avinashi, Tiruppur</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email</span>
              <a href="mailto:baviyavarshinv@gmail.com" className="info-link">baviyavarshinv@gmail.com</a>
            </div>
            <div className="info-row">
              <span className="info-label">Phone</span>
              <span className="info-val">+91 6382251016</span>
            </div>
            <div className="info-row">
              <span className="info-label">GitHub</span>
              <a href="https://github.com/baviya-23" target="_blank" rel="noreferrer" className="info-link">
                github.com/baviya-23
              </a>
            </div>
            <div className="info-row">
              <span className="info-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/baviya-varshini-v-37ab60326" target="_blank" rel="noreferrer" className="info-link">
                baviya-varshini-v
              </a>
            </div>
            <div className="info-row">
              <span className="info-label">Status</span>
              <span className="info-val status-open">
                <span className="status-dot" /> Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
