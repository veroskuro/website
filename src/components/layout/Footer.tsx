
import { Link } from 'react-router-dom';
import { siteMetadata } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-24 bg-surface-container-low border-t border-outline-variant/20 relative z-10">
      <div className="flex flex-col items-center gap-6 w-full max-w-7xl mx-auto px-12">
        <div className="text-lg font-headline tracking-tighter text-on-surface">
          {siteMetadata.title}
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest">
          <Link to="/" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            Archive Index
          </Link>
          <Link to="/detective" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            Contact the Detective
          </Link>
          <a href="#" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            Confidentiality Policy
          </a>
        </nav>
        
        <div className="font-label text-xs uppercase tracking-widest text-on-surface opacity-50 mt-4 text-center max-w-2xl">
          <p className="mb-4">{siteMetadata.footerText}</p>
          <p>© MMXIV-MMXXIV The Forensic Archive • All Deductions Reserved</p>
        </div>
      </div>
    </footer>
  );
}
