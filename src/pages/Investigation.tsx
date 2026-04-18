import ReactMarkdown from 'react-markdown';
import { parseMarkdownFiles } from '../utils/markdown';
import PostIt from '../components/ui/PostIt';

interface InvestigationAttributes {
  title: string;
  case_id: string;
  date: Date;
  hero_image?: string;
  summary?: string;
}

const markdownFiles = import.meta.glob('../content/investigations/*.md', { eager: true, query: '?raw', import: 'default' });
const investigations = parseMarkdownFiles<InvestigationAttributes>(markdownFiles as Record<string, string>);
investigations.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());

export default function Investigation() {
  const activeCase = investigations.length > 0 ? investigations[0] : null;

  if (!activeCase) {
    return <div className="max-w-7xl mx-auto px-6 py-24 text-center mt-24">No active investigations found.</div>;
  }

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-24 mt-24">
      {/* Hero Section: The Active Case */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Contextual Sidebar / Marginalia */}
        <aside className="lg:col-span-3 bg-surface-container-lowest p-6 flex flex-col gap-8 order-2 lg:order-1 h-full lg:sticky lg:top-32">
          <div className="flex flex-col gap-2">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-outline">Active Inquiry</span>
            <span className="font-label text-sm text-on-surface">[CASE_ID: {activeCase.attributes.case_id}]</span>
          </div>
          
          <div className="flex flex-col gap-4 flex-grow prose prose-invert prose-p:font-body prose-p:text-sm prose-p:italic prose-p:text-on-surface-variant prose-p:leading-relaxed">
            <ReactMarkdown>{activeCase.body}</ReactMarkdown>
          </div>

          <PostIt className="mt-8 self-center lg:self-start">
            <p className="text-sm">
              Note: The activation patching results for layer 12 are inconsistent. Need to re-run with different seeds. 
              <br/><br/>
              — V.
            </p>
          </PostIt>
          
          <div className="pt-6 border-t border-outline-variant/20">
            <span className="font-label text-xs text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">update</span>
              Last Modified: {new Date(activeCase.attributes.date).toLocaleDateString()}
            </span>
          </div>
        </aside>

        {/* Primary Hook */}
        <div className="lg:col-span-9 order-1 lg:order-2 flex flex-col gap-10">
          <header className="flex flex-col gap-4">
            <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface leading-[1.1] max-w-4xl">
              {activeCase.attributes.title}
            </h1>
          </header>
          
          {activeCase.attributes.hero_image && (
            <div className="w-full h-[400px] bg-surface-container-low relative overflow-hidden group">
              <img 
                src={activeCase.attributes.hero_image} 
                alt={activeCase.attributes.title} 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs uppercase tracking-widest text-primary">Exhibit A</span>
                  <h3 className="font-headline text-2xl text-on-surface">Recovered Fragments</h3>
                </div>
                <button className="bg-primary text-on-primary font-label text-sm uppercase tracking-widest px-6 py-3 hover:bg-primary-fixed transition-colors duration-300 rounded">
                  Examine Evidence
                </button>
              </div>
            </div>
          )}

          {activeCase.attributes.summary && (
            <div className="font-body text-xl text-on-surface-variant italic leading-relaxed border-l-2 border-primary-container pl-6 py-2">
              {activeCase.attributes.summary}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
