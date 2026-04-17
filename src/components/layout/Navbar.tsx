import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteSettings from '../../content/data/settings.json';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md tonal-shift border-none shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-primary uppercase font-headline">
            {siteSettings.title}
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            to="/" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            THE STUDY
          </Link>
          <Link 
            to="/investigation" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/investigation') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            INVESTIGATION
          </Link>
          <Link 
            to="/field-notes" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/field-notes') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            FIELD NOTES
          </Link>
          <Link 
            to="/deductions" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/deductions') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            DEDUCTIONS
          </Link>
          <Link 
            to="/artifacts" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/artifacts') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            ARTIFACTS
          </Link>
          <Link 
            to="/detective" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/detective') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            DOSSIER
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 text-primary">
          {/* Dummy buttons removed per user request */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-highest border-t border-outline-variant/20 shadow-xl flex flex-col py-4 px-6 gap-4">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-headline tracking-tight uppercase text-lg ${isActive('/') ? 'text-primary' : 'text-on-surface'}`}
          >
            The Study
          </Link>
          <Link 
            to="/investigation" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-headline tracking-tight uppercase text-lg ${isActive('/investigation') ? 'text-primary' : 'text-on-surface'}`}
          >
            Investigation
          </Link>
          <Link 
            to="/field-notes" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-headline tracking-tight uppercase text-lg ${isActive('/field-notes') ? 'text-primary' : 'text-on-surface'}`}
          >
            Field Notes
          </Link>
          <Link 
            to="/deductions" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-headline tracking-tight uppercase text-lg ${isActive('/deductions') ? 'text-primary' : 'text-on-surface'}`}
          >
            Deductions
          </Link>
          <Link 
            to="/artifacts" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-headline tracking-tight uppercase text-lg ${isActive('/artifacts') ? 'text-primary' : 'text-on-surface'}`}
          >
            Artifacts
          </Link>
          <Link 
            to="/detective" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-headline tracking-tight uppercase text-lg ${isActive('/detective') ? 'text-primary' : 'text-on-surface'}`}
          >
            Dossier
          </Link>
        </div>
      )}
    </nav>
  );
}
