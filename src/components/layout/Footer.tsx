import { Link } from 'react-router-dom';
import siteSettings from '../../content/data/settings.json';
import profileData from '../../content/data/profile.json';

export default function Footer() {
  // profile.json stores the full GitHub URL, so use it directly
  const githubUrl = profileData.contact.github.startsWith('http') 
    ? profileData.contact.github 
    : `https://github.com/${profileData.contact.github.replace(/^\//, '')}`;

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 py-10 md:py-12 px-6 md:px-8 mt-auto">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center gap-6 md:gap-8 text-center">
        
        <div className="max-w-xl">
          <h4 className="font-headline text-xl md:text-2xl text-primary tracking-tight mb-3">{siteSettings.title}</h4>
          <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed italic">
            {siteSettings.footerText}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest mt-2">
          <Link to="/now" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-all duration-300">
            /now
          </Link>
        </nav>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-2">
          <a href={`mailto:${profileData.contact.email}`} className="text-primary hover:text-primary-container transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider py-2 px-1">
            <span className="material-symbols-outlined text-sm">mail</span> Email
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider py-2 px-1">
            <span className="material-symbols-outlined text-sm">code</span> GitHub
          </a>
          <a href="https://x.com/veroskuro" target="_blank" rel="noreferrer" className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider py-2 px-1">
            <span className="material-symbols-outlined text-sm">public</span> X
          </a>
          <a href="https://www.linkedin.com/in/veroskuro" target="_blank" rel="noreferrer" className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider py-2 px-1">
            <span className="material-symbols-outlined text-sm">work</span> LinkedIn
          </a>
        </div>
        
        <div className="font-label text-xs uppercase tracking-widest text-on-surface opacity-30 mt-4">
          <p>© {new Date().getFullYear()} VEROSKURO</p>
        </div>
      </div>
    </footer>
  );
}
