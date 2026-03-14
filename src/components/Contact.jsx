import React, { useState } from 'react';
import { useReveal } from '../hooks';
import './Contact.css';

const contactLinks = [
  {
    icon: '✉',
    label: 'Email',
    value: 'baviyavarshinv@gmail.com',
    href: 'mailto:baviyavarshinv@gmail.com',
  },
  {
    icon: '☏',
    label: 'Phone',
    value: '+91 6382251016',
    href: 'tel:+916382251016',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'github.com/baviya-23',
    href: 'https://github.com/baviya-23',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'baviya-varshini-v',
    href: 'https://www.linkedin.com/in/baviya-varshini-v-37ab60326',
  },
  {
    icon: '⌖',
    label: 'Location',
    value: 'Avinashi, Tiruppur, Tamil Nadu',
    href: null,
  },
];

export default function Contact() {
  useReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('baviyavarshinv@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="reveal">
        <div className="section-header">
          <span className="section-num">06</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="contact-wrapper reveal">
        {/* Left */}
        <div className="contact-left">
          <h3 className="contact-heading">
            Let's <span className="contact-heading-gradient">Work Together</span>
          </h3>
          <p className="contact-sub">
            I'm currently open to internships, entry-level opportunities, and collaborative
            projects. If you have something in mind, I'd love to hear about it.
          </p>

          <div className="contact-actions">
            <a href="mailto:baviyavarshinv@gmail.com" className="btn btn-primary">
              Send an Email
            </a>
            <button className="btn btn-outline" onClick={copyEmail}>
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>

          <div className="contact-note">
            <span className="contact-note-dot" />
            <span>Usually responds within 24 hours</span>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          {contactLinks.map((c, i) => (
            c.href ? (
              <a
                href={c.href}
                className="contact-link"
                key={i}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="contact-link-icon">{c.icon}</span>
                <div className="contact-link-body">
                  <span className="contact-link-label">{c.label}</span>
                  <span className="contact-link-value">{c.value}</span>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>
            ) : (
              <div className="contact-link contact-link--static" key={i}>
                <span className="contact-link-icon">{c.icon}</span>
                <div className="contact-link-body">
                  <span className="contact-link-label">{c.label}</span>
                  <span className="contact-link-value">{c.value}</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
