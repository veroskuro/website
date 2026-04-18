import { Link } from 'react-router-dom';
import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import profileData from '../content/data/profile.json';
import { parseMarkdownFiles } from '../utils/markdown';
import ScrambleText from '../components/ui/ScrambleText';

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
    <main className="bg-surface text-on-surface min-h-screen relative flex flex-col justify-center py-24 md:py-32">
      {/* Absolute positioning container for bleeding text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10 flex flex-col justify-between">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline text-[15vw] leading-none whitespace-nowrap text-outline/20 mt-12 ml-[-2vw]"
        >
          MECHANISTIC
        </motion.div>
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline text-[15vw] leading-none whitespace-nowrap text-outline/20 mb-12 self-end mr-[-2vw]"
        >
          INTERPRETABILITY
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full relative z-10 mt-12 md:mt-8">
        
        {/* Header: Editorial Typography */}
        <header className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-8 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-6 flex items-center gap-4">
                  <span className="w-8 h-px bg-primary/50"></span>
                  <ScrambleText text="SYS.INITIALIZED // OVERRIDE" delay={0.5} />
                </div>
                <h1 className="font-headline text-5xl md:text-8xl lg:text-[8rem] leading-[0.85] tracking-tighter mb-8 text-on-surface">
                  <span className="block mb-2">The</span>
                  <span className="block italic text-primary">Study.</span>
                </h1>
                <p className="font-label text-sm md:text-base text-on-surface-variant leading-relaxed max-w-lg mb-8 uppercase tracking-widest border-l-2 border-primary/30 pl-4">
                  <ScrambleText text={profileData.tagline} delay={1.2} />
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 relative mt-12 lg:mt-0"
            >
              <div className="relative w-48 md:w-64 aspect-[3/4] border border-outline-variant/30 bg-surface-container-low p-2 mx-auto lg:mx-0 overflow-hidden group">
                <span aria-hidden className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/50 z-20" />
                <span aria-hidden className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/50 z-20" />
                <span aria-hidden className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/50 z-20" />
                <span aria-hidden className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/50 z-20" />
                
                {/* Microfiche Scan Line */}
                <motion.div 
                  className="absolute left-0 right-0 h-px bg-primary/40 z-10 shadow-[0_0_8px_rgba(214,141,64,0.8)]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                />

                <div className="w-full h-full relative overflow-hidden mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700">
                  <img src="/portrait.png" alt={profileData.name} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-surface mix-blend-color opacity-40 group-hover:opacity-10 transition-opacity duration-700"></div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-1 font-label text-[10px] tracking-widest text-outline uppercase ml-8 lg:ml-0">
                <div className="flex justify-between w-48 md:w-64 border-b border-outline-variant/20 pb-1">
                  <span>SUBJECT</span>
                  <span className="text-on-surface-variant">0x8873</span>
                </div>
                <div className="flex justify-between w-48 md:w-64 pt-1">
                  <span>CLEARANCE</span>
                  <span className="text-primary">LEVEL 4</span>
                </div>
              </div>
            </motion.div>
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
