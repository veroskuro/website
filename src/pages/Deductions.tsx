import { Link } from 'react-router-dom';
import { parseMarkdownFiles } from '../utils/markdown';

interface DeductionAttributes {
  title: string;
  date: Date;
  case_id?: string;
  cover?: string;
}

// Vite feature to import all markdown files in a directory as raw strings
const markdownFiles = import.meta.glob('../content/deductions/*.md', { eager: true, query: '?raw', import: 'default' });
const deductions = parseMarkdownFiles<DeductionAttributes>(markdownFiles as Record<string, string>);

// Sort by date descending
deductions.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());

function calculateReadingTime(text: string): number {
  const wordsPerMinute = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function generateExcerpt(text: string): string {
  // Remove markdown headers, links, images, bold/italics
  const plainText = text.replace(/[#*`_\[\]()]/g, '').trim();
  if (plainText.length <= 150) return plainText;
  return plainText.substring(0, 150) + '...';
}

export default function Deductions() {
  if (deductions.length === 0) {
    return <div className="max-w-7xl mx-auto px-6 py-24 text-center font-label text-sm uppercase tracking-widest text-outline-variant">No deductions found.</div>;
  }

  return (
    <div className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-16 w-full mt-24 mb-24">
      <header className="mb-20 border-b border-outline-variant/30 pb-8">
        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block small-caps">LONG_FORM // ESSAYS</span>
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface leading-[1.1] mb-2">
          Deductions
        </h1>
        <p className="font-body text-xl text-on-surface-variant italic border-l-2 border-primary/30 pl-4 py-1">
          Extended analysis on research, models, and the silence between activations.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {deductions.map(d => {
          const readingTime = calculateReadingTime(d.body);
          const excerpt = generateExcerpt(d.body);
          
          return (
            <Link key={d.slug} to={`/deductions/${d.slug}`} className="group flex flex-col gap-3 p-6 -mx-6 rounded-lg hover:bg-surface-container-low transition-colors duration-300">
              <div className="flex flex-wrap items-center gap-4 font-label text-xs tracking-widest text-on-surface-variant uppercase mb-1">
                <span className="text-primary">{new Date(d.attributes.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                <span>{readingTime} min read</span>
                {d.attributes.case_id && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-outline-variant/50"></span>
                    <span className="text-secondary opacity-70">CASE: {d.attributes.case_id}</span>
                  </>
                )}
              </div>
              
              <h2 className="font-headline text-2xl md:text-3xl text-on-surface group-hover:text-primary transition-colors duration-300">
                {d.attributes.title}
              </h2>
              
              <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {excerpt}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
