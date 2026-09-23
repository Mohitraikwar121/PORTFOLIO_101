const timeline=[
 {date:'2026',title:'B.Tech — CSE (Data Science)',org:'Oriental College of Technology, Bhopal',text:'Continuing undergraduate study with focus on data science, AI/ML, software engineering and systems.'},
 {date:'2025',title:'Web Development Intern',org:'Elevated Labs · 45 days',text:'Worked on frontend development and UI/UX implementation while building practical web-development experience.'},
 {date:'2025',title:'Smart India Hackathon',org:'Arogya — Team Project',text:'Developed an Aadhaar-authenticated digital demise record and hospital-management solution concept.'},
 {date:'2024',title:'NSS Literary Co-Head',org:'OCT NSS Unit',text:'Supported event planning, anchoring, scripting, communications and the seven-day NSS special camp.'},
];
export default function ExperienceSection(){return <section id="experience" className="section"><div className="container"><div className="section-heading"><span>05 / EXPERIENCE</span><h2>A timeline of <em>learning.</em></h2></div><div className="timeline">{timeline.map(x=><article className="timeline-item" key={x.title}><div className="timeline-date">{x.date}</div><div className="timeline-dot"/><div className="timeline-content"><h3>{x.title}</h3><strong>{x.org}</strong><p>{x.text}</p></div></article>)}</div></div></section>}
