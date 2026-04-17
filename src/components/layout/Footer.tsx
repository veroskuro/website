import { Link } from 'react-router-dom';
import siteSettings from '../../content/data/settings.json';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 py-12 px-8 mt-auto">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center gap-8 text-center">
        
        <div className="max-w-xl">
          <h4 className="font-headline text-2xl text-primary tracking-tight mb-4">{siteSettings.title}</h4>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">
            {siteSettings.footerText}
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest">
          <Link to="/artifacts" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            Archive Index
          </Link>
          <Link to="/detective" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            Contact the Detective
          </Link>
          <Link to="/" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            Confidentiality Policy
          </Link>
        </nav>
        
        <div className="font-label text-xs uppercase tracking-widest text-on-surface opacity-30 mt-4">
          <p>© MMXIV-MMXXVI The Forensic Archive • All Deductions Reserved</p>
        </div>
      </div>
    </footer>
  );
}
