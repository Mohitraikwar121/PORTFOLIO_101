import { BookOpen, Code2, Music2, Trophy } from 'lucide-react';

const facts = [
  { icon: BookOpen, title: 'Education', text: 'B.Tech CSE — Data Science at Oriental College of Technology, Bhopal. Graduation: 2027.' },
  { icon: Code2, title: 'What I Build', text: 'AI/ML applications, responsive web interfaces, APIs, and distributed microservices.' },
  { icon: Trophy, title: 'Hackathons', text: 'Represented college at national hackathons and built solutions around energy, healthcare, and climate.' },
  { icon: Music2, title: 'Beyond Code', text: 'Anchoring, public speaking, sketching, cooking, singing, and playing harmonium, piano and synthesizer.' },
];
export default function AboutSection() { return <section id="about" className="section"><div className="container">
  <div className="section-heading"><span>01 / ABOUT</span><h2>Curious mind. <em>Builder's mindset.</em></h2><p>I enjoy turning ideas into useful products while continuously learning how systems work under the hood.</p></div>
  <div className="about-grid"><div className="about-intro"><p>I'm a Computer Science student focused on Data Science, with a strong interest in Artificial Intelligence, Machine Learning, backend engineering, and DevOps.</p><p>My projects range from OCR and intelligent assistants to distributed rate limiting. I like working across the stack and understanding both the user experience and the infrastructure behind it.</p></div><div className="facts">{facts.map(({icon: Icon,title,text})=><article className="fact" key={title}><div className="icon-box"><Icon/></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
</div></section>; }
