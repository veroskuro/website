import ReactMarkdown from 'react-markdown';
import nowData from '../content/data/now.json';

export default function Now() {
  return (
    <div className="flex-grow max-w-3xl mx-auto px-8 w-full mt-32 mb-24">
      <header className="mb-16">
        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block">STATUS_REPORT // CURRENT_DIRECTIVES</span>
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface leading-[1.1] mb-6">
          Now.
        </h1>
        <p className="font-label text-sm text-outline-variant tracking-widest uppercase">
          Last Updated: {new Date(nowData.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>

      <section className="bg-surface-container-low p-8 md:p-12 border border-outline-variant/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
        <h3 className="font-label text-sm text-primary uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4">
          Current Focus
        </h3>
        <div className="font-body text-lg text-on-surface leading-relaxed opacity-90 prose prose-invert prose-p:my-4 prose-a:text-primary">
          <ReactMarkdown>{nowData.currentFocus}</ReactMarkdown>
        </div>

        {nowData.readingList && nowData.readingList.length > 0 && (
          <div className="mt-12">
            <h3 className="font-label text-sm text-primary uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4">
              Reading / Consuming
            </h3>
            <ul className="space-y-3 font-body italic text-on-surface-variant">
              {nowData.readingList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-secondary opacity-50 mt-1">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <div className="mt-16 text-center">
        <p className="font-label text-xs tracking-widest text-outline-variant uppercase">
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noreferrer" className="text-on-surface hover:text-primary transition-colors border-b border-outline-variant/30">/now page</a>.
        </p>
      </div>
    </div>
  );
}
