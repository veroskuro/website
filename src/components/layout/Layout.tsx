
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-primary relative overflow-hidden">
      {/* Ambient scan line — subtle forensic feel */}
      <div className="scan-line" aria-hidden></div>
      
      <Navbar />
      
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
