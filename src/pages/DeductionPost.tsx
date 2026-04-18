import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parseMarkdownFiles } from '../utils/markdown';

interface DeductionAttributes {
  title: string;
  date: Date;
  case_id?: string;
  cover?: string;
}

const markdownFiles = import.meta.glob('../content/deductions/*.md', { eager: true, query: '?raw', import: 'default' });
const deductions = parseMarkdownFiles<DeductionAttributes>(markdownFiles as Record<string, string>);
deductions.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());

// Margin annotations — little scribbled researcher notes
const marginNotes = [
  { top: '15%', text: 'cf. Elhage et al., 2021' },
  { top: '35%', text: 'revisit after ablation results' },
  { top: '55%', text: '→ see Circuit Surgeon logs' },
  { top: '75%', text: 'interesting divergence here' },
];

export default function DeductionPost() {
  const { slug } = useParams<{ slug: string }>();
  const [readingProgress, setReadingProgress] = useState(0);
  
  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const post = slug 
    ? deductions.find(d => d.slug === slug) 
    : (deductions.length > 0 ? deductions[0] : null);

  if (!post) {
    return <div className="max-w-7xl mx-auto px-6 py-24 text-center mt-24">Deduction not found in archive.</div>;
  }

  const dateObj = new Date(post.attributes.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <>
      {/* Reading progress bar */}
      <div className="reading-progress" style={{ width: `${readingProgress}%` }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 w-full mt-24 relative">
        <Link to="/deductions" className="font-label text-xs uppercase tracking-widest text-primary mb-8 inline-block hover:underline animate-fade-in">
          &larr; Back to Archive Index
        </Link>
        
        {/* Article Header */}
        <article className="mb-24">
          <header className="mb-16 max-w-4xl animate-slide-up">
            <div className="flex items-center gap-4 mb-6 font-label text-sm tracking-widest text-primary uppercase">
              <time dateTime={dateObj.toISOString()}>{formattedDate}</time>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="text-on-surface-variant">[CASE_ID: {post.attributes.case_id || 'UNKNOWN'}]</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-medium tracking-tight text-on-surface leading-[1.1] mb-8">
              {post.attributes.title}
            </h1>
          </header>

          {/* Hero Image */}
          {post.attributes.cover && (
            <div className="w-full h-[400px] md:h-[500px] mb-20 bg-surface-container-low rounded flex items-center justify-center overflow-hidden relative group animate-fade-in delay-2">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              <img 
                src={post.attributes.cover} 
                alt={post.attributes.title} 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
              />
            </div>
          )}

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
            
            {/* The Marginalia (Left Sidebar) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32 bg-surface-container-lowest p-6 rounded outline outline-1 outline-outline-variant/20 shadow-[0_20px_40px_rgba(79,35,31,0.05)]">
                <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-6 border-b border-outline-variant/30 pb-2 small-caps">Forensic Metadata</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-label text-xs text-on-surface-variant mb-1">Author</dt>
                    <dd className="font-body text-sm italic text-on-surface">Chief Archivist</dd>
                  </div>
                  <div>
                    <dt className="font-label text-xs text-on-surface-variant mb-1">Verification Status</dt>
                    <dd className="font-body text-sm italic text-on-surface text-primary">Cryptographically Signed</dd>
                  </div>
                </dl>
              </div>
            </aside>

            {/* Narrative Body (Right Column) — with drop cap and margin notes */}
            <div className="lg:col-span-8 max-w-none relative">
              {/* Margin annotations — only on wide screens */}
              {marginNotes.map((note, i) => (
                <span key={i} className="margin-note" style={{ top: note.top }}>
                  {note.text}
                </span>
              ))}
              
              <div className="drop-cap prose prose-invert prose-p:font-body prose-p:text-lg prose-p:leading-loose prose-p:text-on-surface prose-headings:font-headline prose-headings:text-on-surface prose-a:text-primary prose-blockquote:border-primary/50 prose-blockquote:bg-surface-container-low prose-blockquote:p-4 prose-blockquote:rounded">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.body}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
