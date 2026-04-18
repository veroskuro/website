import { Link } from 'react-router-dom';
import { useRef, useCallback } from 'react';
import profileData from '../content/data/profile.json';
import { parseMarkdownFiles } from '../utils/markdown';

// Pull latest deduction
interface DeductionAttributes {
  title: string;
  date: Date;
  case_id?: string;
}
const deductionFiles = import.meta.glob('../content/deductions/*.md', { eager: true, query: '?raw', import: 'default' });
const deductions = parseMarkdownFiles<DeductionAttributes>(deductionFiles as Record<string, string>);
deductions.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());
const latestDeduction = deductions.length > 0 ? deductions[0] : null;

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning. The archives are open.";
  if (hour >= 12 && hour < 17) return "Good afternoon. The archives are open.";
  if (hour >= 17 && hour < 22) return "Good evening, detective. The archives are open.";
  return "Late night session? The archives never close.";
}

// Mouse-tracking glow component
function GlowCard({ children, className = '', to }: { children: React.ReactNode; className?: string; to: string }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(233,193,118,0.08), transparent 60%)`;
  }, []);

  return (
    <Link
      ref={cardRef}
      to={to}
      onMouseMove={handleMouseMove}
      className={`glow-card gradient-border group bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 ${className}`}
    >
      <div ref={glowRef} className="glow-effect" />
      <div className="glow-content h-full">
        {children}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="bg-surface text-on-surface min-h-screen relative overflow-hidden flex flex-col justify-center py-24 md:py-32">
      {/* Parallax grid background */}
      <div aria-hidden className="parallax-grid" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-10 mt-12 md:mt-8">
        
        {/* Header: Title + Portrait */}
        <header className="mb-16 md:mb-20">
          <div className="flex flex-col items-center md:items-stretch md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-6 animate-slide-up gradient-text typewriter-cursor">
                The Study
              </h1>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed italic max-w-lg md:mx-0 mx-auto animate-fade-in delay-3">
                {profileData.tagline}
              </p>
            </div>

            <div className="relative w-40 md:w-48 aspect-square border border-outline-variant/20 bg-surface-container-low p-1.5 shrink-0 order-first md:order-last animate-scale-in delay-2 overflow-hidden">
              <span aria-hidden className="absolute -top-px -left-px w-2 h-2 border-t border-l border-outline-variant/40 z-20" />
              <span aria-hidden className="absolute -top-px -right-px w-2 h-2 border-t border-r border-outline-variant/40 z-20" />
              <span aria-hidden className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-outline-variant/40 z-20" />
              <span aria-hidden className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-outline-variant/40 z-20" />
              
              {/* Holographic Scan Bar */}
              <div className="portrait-scan-bar" aria-hidden />

              <img src="/portrait.png" alt={profileData.name} className="w-full h-full object-cover relative z-0" />
            </div>
          </div>
        </header>

        {/* Currently Investigating — live pulse */}
        <section className="mb-12 md:mb-16 animate-fade-in delay-4">
          <div className="flex items-start gap-4 p-5 md:p-6 bg-surface-container-lowest border border-outline-variant/10">
            <div className="flex items-center gap-3 shrink-0 pt-0.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary">Active</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-headline text-lg md:text-xl text-on-surface leading-tight mb-1">
                {profileData.currentInvestigation.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                {profileData.currentInvestigation.description}
              </p>
            </div>
          </div>
        </section>

        {/* Time-aware greeting */}
        <div className="animate-fade-in delay-5 mb-6">
          <span className="font-body text-sm italic text-on-surface-variant/50">
            {getGreeting()}
          </span>
        </div>

        {/* BENTO GRID — the main upgrade */}
        <section className="animate-fade-in delay-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            
            {/* Investigations — large card, spans 2 columns */}
            <GlowCard to="/investigation" className="md:col-span-2 p-6 md:p-8">
              <div className="flex flex-col h-full justify-between min-h-[140px] md:min-h-[180px]">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">Investigations</span>
                  <h3 className="font-headline text-2xl md:text-3xl text-on-surface group-hover:text-primary transition-colors duration-300 mb-2">
                    Ongoing research projects
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-md">
                    What I'm currently working on — active experiments, hypotheses being tested.
                  </p>
                </div>
                <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 flex items-center gap-1 mt-4">
                  Enter lab <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </GlowCard>

            {/* Field Notes — tall card */}
            <GlowCard to="/field-notes" className="p-6 md:p-8">
              <div className="flex flex-col h-full justify-between min-h-[140px] md:min-h-[180px]">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">Field Notes</span>
                  <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                    Weekly logs
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">
                    Short findings and experiments.
                  </p>
                </div>
                <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 flex items-center gap-1 mt-4">
                  Read <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </GlowCard>

            {/* Deductions — medium card */}
            <GlowCard to="/deductions" className="p-6 md:p-8">
              <div className="flex flex-col h-full justify-between min-h-[120px]">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">Deductions</span>
                  <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                    Long-form essays
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">
                    On research, on thinking, on whatever.
                  </p>
                </div>
                <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 flex items-center gap-1 mt-4">
                  Read <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </GlowCard>

            {/* Artifacts — medium card */}
            <GlowCard to="/artifacts" className="p-6 md:p-8">
              <div className="flex flex-col h-full justify-between min-h-[120px]">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">Artifacts</span>
                  <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                    Built things
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">
                    Tools and software.
                  </p>
                </div>
                <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 flex items-center gap-1 mt-4">
                  View <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </GlowCard>

            {/* Dossier — wide card, spans 2 cols on the right */}
            <GlowCard to="/dossier" className="md:col-span-1 p-6 md:p-8">
              <div className="flex flex-col h-full justify-between min-h-[120px]">
                <div>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">Dossier</span>
                  <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                    Who I am
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-1">
                    CV, academic record, contact.
                  </p>
                </div>
                <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 flex items-center gap-1 mt-4">
                  Open file <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </GlowCard>

          </div>
        </section>

        {/* Latest Deduction — proof of life */}
        {latestDeduction && (
          <section className="mt-12 md:mt-16 animate-fade-in delay-8">
            <div className="mb-6">
              <span className="font-label text-xs tracking-[0.2em] text-outline uppercase small-caps">Latest Deduction</span>
            </div>

            <GlowCard to={`/deductions/${latestDeduction.slug}`} className="p-5 md:p-6 block">
              <div className="flex flex-wrap items-center gap-4 font-label text-xs tracking-widest text-on-surface-variant uppercase mb-3">
                <span className="text-primary">
                  {new Date(latestDeduction.attributes.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                {latestDeduction.attributes.case_id && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                    <span className="text-secondary opacity-70">CASE: {latestDeduction.attributes.case_id}</span>
                  </>
                )}
              </div>
              <h3 className="font-headline text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors duration-300 mb-2">
                {latestDeduction.attributes.title}
              </h3>
              <span className="font-label text-[10px] tracking-widest uppercase text-outline group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                Read deduction <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </span>
            </GlowCard>
          </section>
        )}

      </div>
    </main>
  );
}
