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

export default function Deductions() {
  const post = deductions.length > 0 ? deductions[0] : null;

  if (!post) {
    return <div className="max-w-7xl mx-auto px-6 py-24 text-center">No deductions found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 w-full mt-24">
      {/* List of Deductions */}
      <div className="mb-16">
        <h2 className="font-headline text-3xl text-on-surface mb-8">All Deductions</h2>
        <div className="flex flex-col gap-4">
          {deductions.map(d => (
            <a key={d.slug} href={`/deductions/${d.slug}`} className="flex justify-between items-center p-4 bg-surface-container-low hover:bg-surface-container-highest transition-colors">
              <span className="font-headline text-xl text-primary">{d.attributes.title}</span>
              <span className="font-label text-xs text-outline">{new Date(d.attributes.date).toLocaleDateString()}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
