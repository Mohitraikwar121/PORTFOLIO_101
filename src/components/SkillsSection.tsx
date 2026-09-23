const groups = [
  ['Languages', ['Python','SQL','Golang','JavaScript','TypeScript']],
  ['Frontend & Backend', ['React','Node.js','Express','REST APIs','gRPC']],
  ['Data & AI', ['Pandas','NumPy','Scikit-Learn','Machine Learning','OCR']],
  ['Cloud & DevOps', ['Docker','Kubernetes','Redis','Prometheus','Grafana']],
  ['Data & BI', ['Power BI','Tableau','MongoDB','Data Analysis']],
  ['Tools', ['Git','GitHub','VS Code','Linux','Postman']],
];
export default function SkillsSection(){return <section id="skills" className="section muted"><div className="container"><div className="section-heading"><span>02 / SKILLS</span><h2>Tools I use to <em>make things work.</em></h2></div><div className="skills-grid">{groups.map(([name,skills])=><article className="skill-card" key={name as string}><h3>{name}</h3><div className="chips">{(skills as string[]).map(s=><span key={s}>{s}</span>)}</div></article>)}</div></div></section>}
