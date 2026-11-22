import React from 'react';
import { useTypewriter, useReveal } from '../hooks';
import './Home.css';
export default function Home() {
  useReveal();
  const typed = useTypewriter(['3rd-Year CSBS Student','Cybersecurity Enthusiast','AI/ML Intern','FOSS Community Speaker']);
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <section id="home" className="section-wrapper"><div className="hero">
    <div className="hero-tag">// Welcome to my portfolio</div>
    <h1 className="hero-heading">Hi, I'm<span className="name-gradient"> Baviya Varshini V</span></h1>
    <p className="hero-sub"><span>{typed}<span className="cursor" /></span><br /><br />Third-year Computer Science and Business Systems student at KPR Institute of Engineering and Technology, Coimbatore, interested in cybersecurity, artificial intelligence and building technology for real-world challenges.</p>
    <div className="hero-cta"><button className="btn btn-primary" onClick={() => scrollTo('projects')}>View Projects</button><button className="btn btn-outline" onClick={() => scrollTo('contact')}>Contact Me</button></div>
  </div></section>;
}