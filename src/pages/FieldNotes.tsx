import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { parseMarkdownFiles } from '../utils/markdown';

interface FieldNoteAttributes {
  title: string;
  date: Date;
  status: 'ACTIVE' | 'PENDING' | 'COLD';
  reference: string;
  tags?: string[];
  image?: string;
}

const markdownFiles = import.meta.glob('../content/field-notes/*.md', { eager: true, query: '?raw', import: 'default' });
const allNotes = parseMarkdownFiles<FieldNoteAttributes>(markdownFiles as Record<string, string>);
allNotes.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());

export default function FieldNotes() {
  const [activeFilter, setActiveFilter] = useState(true);
  const [pendingFilter, setPendingFilter] = useState(true);
  const [coldFilter, setColdFilter] = useState(false);

  const filteredNotes = allNotes.filter(note => {
    if (note.attributes.status === 'ACTIVE' && activeFilter) return true;
    if (note.attributes.status === 'PENDING' && pendingFilter) return true;
    if (note.attributes.status === 'COLD' && coldFilter) return true;
    return false;
  });

  return (
    <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      <aside className="md:col-span-3 flex flex-col gap-8 md:gap-12 pt-4">
        <div className="bg-surface-container-lowest p-6 flex flex-col gap-4">
          <h3 className="font-headline text-xl text-primary italic tracking-tight">Active Registries</h3>
          <p className="font-body text-sm italic text-on-surface-variant leading-relaxed">
            Filter the dockets by their current status within the investigative hierarchy. Only subjects with active hypothesis testing are shown by default.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={activeFilter} onChange={(e) => setActiveFilter(e.target.checked)} className="form-checkbox bg-surface-container-low border-outline-variant text-primary rounded-sm focus:ring-0 focus:ring-offset-0 w-4 h-4" />
              <span className="font-label text-sm tracking-wide text-on-surface group-hover:text-primary transition-colors">ACTIVE HYPOTHESIS</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={pendingFilter} onChange={(e) => setPendingFilter(e.target.checked)} className="form-checkbox bg-surface-container-low border-outline-variant text-primary rounded-sm focus:ring-0 focus:ring-offset-0 w-4 h-4" />
              <span className="font-label text-sm tracking-wide text-on-surface group-hover:text-primary transition-colors">PENDING ANALYSIS</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={coldFilter} onChange={(e) => setColdFilter(e.target.checked)} className="form-checkbox bg-surface-container-low border-outline-variant text-primary rounded-sm focus:ring-0 focus:ring-offset-0 w-4 h-4" />
              <span className="font-label text-sm tracking-wide text-on-surface opacity-50 group-hover:opacity-100 transition-opacity">COLD FILES</span>
            </label>
          </div>
        </div>
      </aside>

      <section className="md:col-span-9 flex flex-col gap-8 mb-24">
        <header className="mb-8">
          <h1 className="font-headline text-5xl tracking-tight text-on-surface mb-4">Field Notes</h1>
          <p className="font-label text-sm text-primary tracking-widest uppercase">{allNotes.length} Open Investigative Files Found in Archive</p>
        </header>

        {filteredNotes.map((note) => (
          <article key={note.slug} data-stamp={note.attributes.status} className="evidence-stamp bg-surface-container-low p-6 md:p-10 hover:bg-surface-container-highest transition-colors duration-500 group relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="flex items-center gap-2 mb-2 md:absolute md:top-0 md:right-0 md:p-6 md:mb-0">
              <span className={`w-2 h-2 rounded-full ${note.attributes.status === 'ACTIVE' ? 'bg-primary animate-pulse' : note.attributes.status === 'PENDING' ? 'bg-secondary' : 'bg-outline-variant'}`}></span>
              <span className={`font-label text-xs tracking-widest ${note.attributes.status === 'ACTIVE' ? 'text-primary' : note.attributes.status === 'PENDING' ? 'text-secondary' : 'text-outline-variant'}`}>
                {note.attributes.status}
              </span>
            </div>
            
            {note.attributes.image && (
              <div className="md:w-1/3 w-full h-48 md:h-full relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply"></div>
                <img 
                  src={note.attributes.image} 
                  alt={note.attributes.title} 
                  className="w-full h-full object-cover sepia-[.3] contrast-[1.2]" 
                />
              </div>
            )}

            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between items-start">
                <div className="font-label text-sm text-primary tracking-widest bg-primary/10 inline-block px-2 py-1">
                  {note.attributes.reference}
                </div>
                <span className="font-label text-xs text-outline">{new Date(note.attributes.date).toLocaleDateString()}</span>
              </div>
              <h2 className="font-headline text-2xl md:text-3xl tracking-tight text-on-surface group-hover:text-primary transition-colors">
                {note.attributes.title}
              </h2>
              <div className="font-body text-base text-on-surface-variant leading-relaxed prose prose-invert prose-p:my-1">
                <ReactMarkdown>{note.body}</ReactMarkdown>
              </div>
              
              {note.attributes.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {note.attributes.tags.map(tag => (
                    <span key={tag} className="font-label text-xs px-2 py-1 border border-outline-variant/30 text-on-surface-variant uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
        
        {filteredNotes.length === 0 && (
          <div className="p-12 text-center border border-dashed border-outline-variant/30 text-on-surface-variant font-label text-sm uppercase tracking-widest">
            No dockets match the current filters.
          </div>
        )}
      </section>
    </div>
  );
}
