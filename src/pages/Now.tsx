import ReactMarkdown from 'react-markdown';
import nowData from '../content/data/now.json';
import { useInView } from '../hooks/useInView';

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

export default function Now() {
  return (
    <div className="flex-grow max-w-3xl mx-auto px-6 md:px-8 w-full mt-32 mb-24">
      <header className="mb-16">
        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block animate-slide-right">
          STATUS_REPORT // CURRENT_DIRECTIVES
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface leading-[1.1] mb-6 animate-slide-up delay-1">
          Now.
        </h1>
        <p className="font-label text-sm text-outline-variant tracking-widest uppercase animate-fade-in delay-2">
          Last Updated: {new Date(nowData.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <div className="space-y-8">
        {/* Current Focus */}
        <RevealSection>
          <section className="bg-surface-container-low p-6 md:p-10 border border-outline-variant/10">
            <h3 className="font-label text-sm text-primary uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
              Current Focus
            </h3>
            <div className="font-body text-lg text-on-surface leading-relaxed opacity-90 prose prose-invert prose-p:my-4 prose-a:text-primary">
              <ReactMarkdown>{nowData.currentFocus}</ReactMarkdown>
            </div>
          </section>
        </RevealSection>

        {/* Life Update — the human part */}
        {(nowData as any).lifeUpdate && (
          <RevealSection delay={0.1}>
            <section className="bg-surface-container-low p-6 md:p-10 border border-outline-variant/10">
              <h3 className="font-label text-sm text-tertiary uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">person</span>
                Life, Generally
              </h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed italic">
                {(nowData as any).lifeUpdate}
              </p>
            </section>
          </RevealSection>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reading / Consuming */}
          {nowData.readingList && nowData.readingList.length > 0 && (
            <RevealSection delay={0.15}>
              <section className="bg-surface-container-low p-6 md:p-8 border border-outline-variant/10 h-full">
                <h3 className="font-label text-sm text-secondary uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">menu_book</span>
                  Reading
                </h3>
                <ul className="space-y-3 font-body italic text-on-surface-variant">
                  {nowData.readingList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-secondary opacity-50 mt-1">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </RevealSection>
          )}

          {/* Currently Listening */}
          {(nowData as any).currentlyListening && (
            <RevealSection delay={0.2}>
              <section className="bg-surface-container-low p-6 md:p-8 border border-outline-variant/10 h-full">
                <h3 className="font-label text-sm text-tertiary uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">headphones</span>
                  Listening To
                </h3>
                <p className="font-body text-base text-on-surface-variant leading-relaxed italic">
                  {(nowData as any).currentlyListening}
                </p>
              </section>
            </RevealSection>
          )}
        </div>

        {/* Currently Annoyed By */}
        {(nowData as any).currentlyAnnoyed && (
          <RevealSection delay={0.25}>
            <section className="bg-surface-container-low p-6 md:p-10 border border-outline-variant/10 border-l-2 border-l-error/30">
              <h3 className="font-label text-sm text-error uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">sentiment_frustrated</span>
                Currently Annoyed By
              </h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed italic">
                {(nowData as any).currentlyAnnoyed}
              </p>
            </section>
          </RevealSection>
        )}
      </div>

      <div className="mt-16 text-center animate-fade-in delay-5">
        <p className="font-label text-xs tracking-widest text-outline-variant uppercase">
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer" className="text-on-surface hover:text-primary transition-colors border-b border-outline-variant/30">/now page</a>.
        </p>
      </div>
    </div>
  );
}
