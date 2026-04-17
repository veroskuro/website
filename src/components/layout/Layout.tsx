
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-container selection:text-primary relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUHN1JCeFsBbQOJYdsTkKFXvxuJ2gyNrGSR5sJSZ9rlpxqfyXetiVL3eIeS4b71XYvjl4_70OCm0djRE7cawMLjWyDlpiypUwMLuL1eDEpQVDeIOprGGxel-e-XVQbI_qeUhlX1s734yJIHonNRJ5H7l5qQPgZIjUAKbHI4yF6TYNH3DZ7n-ttAvSlsQyaifJ_xnwEnxyY0EOTXnVpVZQyY7nSF8731ZIRO8EQApl2D6ubT4SFTsaue6_OpXdPivKehKEmcXWnv3Q')" }}
      ></div>
      
      <Navbar />
      
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
