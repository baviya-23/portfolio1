import React, { useState } from 'react';
import { useReveal } from '../hooks';
import './Skills.css';
const skillGroups = [
 {title:'Programming',icon:'⌨',color:'cyan',tags:['Python','Java (Basics)']},
 {title:'Core Concepts',icon:'🧠',color:'purple',tags:['Data Structures','Object-Oriented Programming']},
 {title:'Tools',icon:'🛠',color:'pink',tags:['VS Code','Android Studio','Beautiful Soup']},
 {title:'Database',icon:'🗄',color:'cyan',tags:['MongoDB']}
];
export default function Skills() {
 useReveal(); const [hovered,setHovered]=useState(null);
 return <section id="skills" className="section-wrapper"><div className="reveal"><div className="section-header"><span className="section-num">03</span><h2 className="section-title">Technical Skills</h2><div className="section-line" /></div></div>
 <div className="skills-grid reveal">{skillGroups.map((g,i)=><div className={`skill-group skill-group--${g.color} ${hovered===i?'hovered':''}`} key={g.title} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} style={{transitionDelay:`${i*0.07}s`}}><div className="skill-group-header"><span className="skill-icon">{g.icon}</span><span className="skill-group-title">{g.title}</span></div><div className="skill-tags">{g.tags.map(t=><span className="skill-tag" key={t}>{t}</span>)}</div></div>)}</div></section>;
}