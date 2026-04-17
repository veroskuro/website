import siteSettings from '../../content/data/settings.json';
import profileData from '../../content/data/profile.json';

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

        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <a href={`mailto:${profileData.contact.email}`} className="text-primary hover:text-primary-container transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">mail</span> Email
          </a>
          <a href={`https://github.com${profileData.contact.github}`} target="_blank" rel="noreferrer" className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">code</span> GitHub
          </a>
          <a href="https://x.com/veroskuro" target="_blank" rel="noreferrer" className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">public</span> X
          </a>
          <a href="https://www.linkedin.com/in/veroskuro" target="_blank" rel="noreferrer" className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-2 font-label text-xs uppercase tracking-wider">
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
