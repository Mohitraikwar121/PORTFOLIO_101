import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const links = [
  ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Services', 'services'], ['Experience', 'experience'], ['Contact', 'contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => go('home')} aria-label="Go to home"><span>&lt;</span>Mohit<span>/&gt;</span></button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          <a className="nav-resume" href="mailto:mohitraikwar@example.com"><Download size={15}/> Resume</a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}
