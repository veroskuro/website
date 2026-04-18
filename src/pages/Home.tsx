import { Link } from 'react-router-dom';
import profileData from '../content/data/profile.json';
import { parseMarkdownFiles } from '../utils/markdown';

// Pull latest deduction for the "proof of life" section
interface DeductionAttributes {
  title: string;
  date: Date;
  case_id?: string;
}
const deductionFiles = import.meta.glob('../content/deductions/*.md', { eager: true, query: '?raw', import: 'default' });
const deductions = parseMarkdownFiles<DeductionAttributes>(deductionFiles as Record<string, string>);
deductions.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());
const latestDeduction = deductions.length > 0 ? deductions[0] : null;

const directoryLinks = [
  { to: '/investigation', label: 'Investigations', desc: "Ongoing research projects — what I'm currently working on." },
  { to: '/field-notes', label: 'Field Notes', desc: 'Short logs of weekly findings and experiments.' },
  { to: '/deductions', label: 'Deductions', desc: 'Long-form essays. On research, on thinking, on whatever.' },
  { to: '/artifacts', label: 'Artifacts', desc: "Tools and software I've built." },
  { to: '/dossier', label: 'Dossier', desc: 'Curriculum vitae, academic record, and contact.' },
];

export default function Home() {
  return (
    <main className="bg-surface text-on-surface min-h-screen relative overflow-hidden flex flex-col justify-center py-24 md:py-32">
      {/* Structural grid background */}
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

      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-10 mt-12 md:mt-8">
        
        {/* Header: Title + Portrait — staggered entrance */}
        <header className="mb-16 md:mb-20">
          <div className="flex flex-col items-center md:items-stretch md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
            
            {/* Left: Title + Tagline */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] text-on-surface tracking-tighter mb-6 animate-slide-up">
                The Study.
              </h1>
              <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed italic max-w-lg md:mx-0 mx-auto animate-fade-in delay-3">
                {profileData.tagline}
              </p>
            </div>

            {/* Right: Portrait */}
            <div className="relative w-40 md:w-48 aspect-square border border-outline-variant/20 bg-surface-container-low p-1.5 shrink-0 order-first md:order-last animate-scale-in delay-2">
              <span aria-hidden className="absolute -top-px -left-px w-2 h-2 border-t border-l border-outline-variant/40" />
              <span aria-hidden className="absolute -top-px -right-px w-2 h-2 border-t border-r border-outline-variant/40" />
              <span aria-hidden className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-outline-variant/40" />
              <span aria-hidden className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-outline-variant/40" />

              <img 
                src="/portrait.png" 
                alt={profileData.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </header>

        {/* Currently Investigating — live pulse */}
        <section className="mb-16 md:mb-20 animate-fade-in delay-4">
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

        {/* Directory Navigation */}
        <section className="animate-fade-in delay-5">
          <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-8 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
            <span>Directory Access</span>
            <span className="material-symbols-outlined text-sm opacity-50">folder_open</span>
          </h2>

          <div className="flex flex-col gap-4">
            {directoryLinks.map((link, i) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="dir-card group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-5 md:p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all duration-300"
                style={{ animationDelay: `${0.55 + i * 0.07}s` }}
              >
                <span className="font-label text-xs tracking-widest uppercase text-primary w-32 shrink-0">{link.label}</span>
                <span className="font-body text-base md:text-lg text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
                  {link.desc}
                </span>
                <span className="material-symbols-outlined text-sm text-outline-variant opacity-0 group-hover:opacity-60 transition-opacity duration-300 ml-auto hidden md:block">arrow_forward</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Deduction — proof of life */}
        {latestDeduction && (
          <section className="mt-16 md:mt-20 animate-fade-in delay-8">
            <h2 className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-6 pb-4 border-b border-outline-variant/20 flex items-center justify-between">
              <span>Latest Deduction</span>
              <span className="material-symbols-outlined text-sm opacity-50">edit_note</span>
            </h2>

            <Link to={`/deductions/${latestDeduction.slug}`} className="group block p-5 md:p-6 bg-surface-container-low border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container transition-all duration-300">
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
            </Link>
          </section>
        )}

      </div>
    </main>
  );
}
