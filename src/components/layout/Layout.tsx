import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import CommandPalette from '../ui/CommandPalette';

export default function Layout() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-primary relative overflow-hidden">
      {/* Precision Interface Layer */}
      <CustomCursor />
      <CommandPalette />

      {/* Analog HUD Background Grid */}
      <div className="bg-hud-grid" aria-hidden></div>

      {/* Ambient scan line */}
      <div className="scan-line" aria-hidden></div>
      
      {/* Paper texture overlay — old manuscript grain */}
      <div className="paper-texture" aria-hidden></div>
      
      <Navbar />
      
      <main 
        className="flex-grow w-full transition-opacity duration-200 ease-in-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
