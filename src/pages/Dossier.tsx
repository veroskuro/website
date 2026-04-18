import profileData from "../content/data/profile.json";
import { useInView } from "../hooks/useInView";

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export default function Dossier() {
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Header Block — entrance animation */}
        <header className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-6 animate-slide-right">
            <span className="w-12 h-px bg-primary opacity-50"></span>
            <span className="font-label text-primary text-[10px] tracking-[0.3em] uppercase">
              DOSSIER // {profileData.docketCv.researcherId}
            </span>
          </div>
          
          <h1 className="font-headline text-[3.5rem] md:text-7xl lg:text-[7.5rem] leading-[0.9] text-on-surface tracking-tighter mb-8 animate-slide-up delay-1">
            Mechanistic <br className="hidden md:block" />
            <span className="text-primary italic pr-4">Interpretability.</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed animate-fade-in delay-3">
            I don't trust black boxes. I trust the geometry of the weights. If a model exhibits a behavior, there is a circuit responsible for it. My job is to find it, isolate it, and prove it.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: The Philosophy / Bio */}
          <RevealSection className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-8 pb-4 border-b border-outline-variant/20">
                The Diagnosis
              </h2>
              <div className="font-body text-lg text-on-surface leading-loose space-y-6 opacity-90">
                <p>
                  Most researchers treat transformers like patients who can't speak—they look at the symptoms (the outputs) and guess the disease. 
                  That's bad science. 
                </p>
                <p>
                  I treat them like cadavers. You don't ask a cadaver what hurts; you cut it open and look at the pathways. 
                  Mechanistic interpretability isn't just theory to me, it's an autopsy. We map the embeddings, we patch the activations, and we ablate the attention heads until the illusion of "magic" breaks down into pure, cold linear algebra.
                </p>
                <p className="text-primary italic border-l-2 border-primary/30 pl-4 py-1 my-8">
                  {profileData.quote}
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-outline-variant/10 hidden lg:block">
              <span className="font-label text-[10px] text-outline tracking-widest uppercase">
                End of philosophy. Check the record.
              </span>
            </div>
          </RevealSection>

          {/* Right Column: The Hard Facts (CV, Academic, Contact) */}
          <aside className="lg:col-span-6 space-y-16">
            
            {/* Academic Record */}
            <RevealSection delay={0.1}>
              <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-8 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
                <span>Academic Record</span>
                <span className="material-symbols-outlined text-sm opacity-50">history_edu</span>
              </h2>
              <div className="space-y-6">
                {profileData.academicRecord.map((record, idx) => (
                  <div key={idx} className="group">
                    <h3 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors">
                      {record.degree}
                    </h3>
                    <p className="font-body text-base text-on-surface-variant italic mt-1">
                      {record.institution}
                    </p>
                  </div>
                ))}
              </div>
            </RevealSection>

            {/* Curriculum Vitae (Skills & Status) */}
            <RevealSection delay={0.2}>
              <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-8 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
                <span>Operational Parameters</span>
                <span className="material-symbols-outlined text-sm opacity-50">tune</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-8 mb-8">
                <div>
                  <span className="block font-label text-[10px] text-outline tracking-widest uppercase mb-2">Location</span>
                  <span className="font-body text-lg text-on-surface">{profileData.docketCv.location}</span>
                </div>
              </div>

              <div>
                <span className="block font-label text-[10px] text-outline tracking-widest uppercase mb-4">Primary Arsenal</span>
                <div className="flex flex-wrap gap-2">
                  {profileData.fieldSkills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="font-label text-xs px-3 py-1.5 border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/40 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Contact Protocols */}
            <RevealSection delay={0.3}>
              <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-8 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
                <span>Secure Comms</span>
                <span className="material-symbols-outlined text-sm opacity-50">lock</span>
              </h2>
              
              <div className="flex flex-col gap-4">
                <a 
                  href={`mailto:${profileData.contact.email}`} 
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors duration-300 shrink-0">mail</span>
                    <span className="font-body text-base md:text-lg text-on-surface truncate">{profileData.contact.email}</span>
                  </div>
                  <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 shrink-0 pl-10 sm:pl-0">
                    Dispatch
                  </span>
                </a>
                
                <a 
                  href={profileData.contact.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors duration-300 shrink-0">code</span>
                    <span className="font-body text-base md:text-lg text-on-surface">@veroskuro</span>
                  </div>
                  <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 shrink-0 pl-10 sm:pl-0">
                    Access
                  </span>
                </a>
              </div>
            </RevealSection>

          </aside>
        </div>
      </div>
    </main>
  );
}
