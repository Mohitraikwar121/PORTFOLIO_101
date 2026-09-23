import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return <section id="home" className="hero section-grid">
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15}/> Available for opportunities</div>
        <p className="kicker">HELLO, I'M</p>
        <h1>Mohit <span>Raikwar.</span></h1>
        <h2>AI/ML &amp; DevOps Enthusiast</h2>
        <p className="hero-text">Third-year Computer Science &amp; Engineering — Data Science student building intelligent products, scalable systems, and clean digital experiences.</p>
        <div className="location"><MapPin size={16}/> Bhopal, India</div>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">Explore Projects <ArrowRight size={17}/></a>
          <a className="btn ghost" href="#contact">Let's Connect</a>
        </div>
        <div className="socials"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href="mailto:mohitraikwar@example.com" aria-label="Email"><Mail/></a></div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orb orb-a"/><div className="orb orb-b"/>
        <div className="code-card"><div className="code-top"><i/><i/><i/></div><pre>{`const developer = {
  name: "Mohit Raikwar",
  focus: ["AI/ML", "DevOps"],
  stack: "Python • Go • React",
  mission: "Build. Learn. Scale."
};`}</pre></div>
        <div className="floating-card">01 <span>Building scalable systems</span></div>
      </div>
    </div>
  </section>;
}
