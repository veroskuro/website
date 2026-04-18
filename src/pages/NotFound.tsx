import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="bg-surface text-on-surface min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Grid background */}
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

      <div className="relative z-10 text-center max-w-lg animate-fade-in">
        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-6 block">
          ERROR // CASE_FILE_MISSING
        </span>
        
        <h1 className="font-headline text-7xl md:text-9xl text-on-surface tracking-tighter mb-4 animate-slide-up delay-1">
          404
        </h1>
        
        <p className="font-body text-xl text-on-surface-variant italic mb-2 animate-fade-in delay-2">
          "The file you're looking for doesn't exist. 
        </p>
        <p className="font-body text-xl text-on-surface-variant italic mb-12 animate-fade-in delay-3">
          Either it was never here, or someone got to it first."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-4">
          <Link 
            to="/" 
            className="font-label text-xs tracking-widest uppercase px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            Return to The Study
          </Link>
          <Link 
            to="/dossier" 
            className="font-label text-xs tracking-widest uppercase px-6 py-3 border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300"
          >
            Check the Dossier
          </Link>
        </div>

        <div className="mt-16 font-label text-[10px] tracking-widest text-outline-variant uppercase animate-fade-in delay-5">
          Case closed. No evidence recovered.
        </div>
      </div>
    </main>
  );
}
