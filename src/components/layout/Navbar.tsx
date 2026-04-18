import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteSettings from '../../content/data/settings.json';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Track scroll position for navbar background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-surface/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-outline-variant/10' 
        : 'bg-transparent'
    }`}>
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
            to="/dossier" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/dossier') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            DOSSIER
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 text-primary">
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface-container-highest border-t border-outline-variant/20 shadow-xl flex flex-col py-4 px-6 gap-4 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <Link to="/" className={`font-headline tracking-tight uppercase text-lg ${isActive('/') ? 'text-primary' : 'text-on-surface'}`}>
          The Study
        </Link>
        <Link to="/investigation" className={`font-headline tracking-tight uppercase text-lg ${isActive('/investigation') ? 'text-primary' : 'text-on-surface'}`}>
          Investigation
        </Link>
        <Link to="/field-notes" className={`font-headline tracking-tight uppercase text-lg ${isActive('/field-notes') ? 'text-primary' : 'text-on-surface'}`}>
          Field Notes
        </Link>
        <Link to="/deductions" className={`font-headline tracking-tight uppercase text-lg ${isActive('/deductions') ? 'text-primary' : 'text-on-surface'}`}>
          Deductions
        </Link>
        <Link to="/artifacts" className={`font-headline tracking-tight uppercase text-lg ${isActive('/artifacts') ? 'text-primary' : 'text-on-surface'}`}>
          Artifacts
        </Link>
        <Link to="/dossier" className={`font-headline tracking-tight uppercase text-lg ${isActive('/dossier') ? 'text-primary' : 'text-on-surface'}`}>
          Dossier
        </Link>
      </div>
    </nav>
  );
}
