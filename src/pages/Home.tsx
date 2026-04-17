import { Link } from 'react-router-dom';
import profileData from '../content/data/profile.json';

export default function Home() {
  return (
    <main className="bg-surface text-on-surface min-h-screen relative overflow-hidden flex flex-col justify-center py-24 md:py-32">
      {/* Structural grid background for that sterile, forensic feel */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center center",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 mt-12 md:mt-0">
        
        {/* Header Block */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-primary opacity-50"></span>
            <span className="font-label text-primary text-[10px] tracking-[0.3em] uppercase">
              SYSTEM_INDEX // ROOT
            </span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] text-on-surface tracking-tighter mb-8 max-w-5xl">
            The Study.
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Portrait & Quote */}
          <aside className="lg:col-span-4">
            <div className="relative w-48 md:w-64 aspect-square border border-outline-variant/20 bg-surface-container-low p-2 mb-8">
              {/* Corner markers */}
              <span aria-hidden className="absolute -top-px -left-px w-2 h-2 border-t border-l border-outline-variant/40" />
              <span aria-hidden className="absolute -top-px -right-px w-2 h-2 border-t border-r border-outline-variant/40" />
              <span aria-hidden className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-outline-variant/40" />
              <span aria-hidden className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-outline-variant/40" />

              <img 
                src="/portrait.png" 
                alt={profileData.name} 
                className="w-full h-full object-cover grayscale opacity-70 mix-blend-lighten" 
              />
            </div>
            
            <p className="font-body text-base text-on-surface-variant leading-relaxed italic border-l-2 border-primary/30 pl-4 py-1">
              {profileData.quote}
            </p>
          </aside>

          {/* Right Column: Navigation */}
          <section className="lg:col-span-7 lg:col-start-6">
            <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-8 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
              <span>Directory Access</span>
              <span className="material-symbols-outlined text-sm opacity-50">folder_open</span>
            </h2>

            <div className="flex flex-col gap-4">
              <Link to="/investigation" className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all">
                <span className="font-label text-xs tracking-widest uppercase text-primary w-32">Investigations</span>
                <span className="font-body text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Ongoing research projects — active cases.
                </span>
              </Link>

              <Link to="/field-notes" className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all">
                <span className="font-label text-xs tracking-widest uppercase text-primary w-32">Field Notes</span>
                <span className="font-body text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Short, chronological logs of weekly experiments.
                </span>
              </Link>

              <Link to="/deductions" className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all">
                <span className="font-label text-xs tracking-widest uppercase text-primary w-32">Deductions</span>
                <span className="font-body text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Long-form essays and comprehensive analyses.
                </span>
              </Link>

              <Link to="/artifacts" className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all">
                <span className="font-label text-xs tracking-widest uppercase text-primary w-32">Artifacts</span>
                <span className="font-body text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Tools, infrastructure, and software builds.
                </span>
              </Link>

              <Link to="/dossier" className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all">
                <span className="font-label text-xs tracking-widest uppercase text-primary w-32">Dossier</span>
                <span className="font-body text-lg text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Personnel file, academic record, and secure comms.
                </span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
