
import { Link, useLocation } from 'react-router-dom';
import { siteMetadata } from '../../data/siteData';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface tonal-shift bg-surface-container-low border-none shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary uppercase font-headline">
          {siteMetadata.title}
        </Link>
        
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
            to="/lab-notes" 
            className={`font-headline tracking-tight uppercase text-sm transition-all duration-300 ${
              isActive('/lab-notes') ? 'text-primary border-b border-primary pb-1' : 'text-on-surface opacity-70 hover:text-primary hover:opacity-100'
            }`}
          >
            LAB NOTES
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

        <div className="flex items-center space-x-6 text-primary">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity">search</span>
          <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity">settings</span>
        </div>
      </div>
    </nav>
  );
}
