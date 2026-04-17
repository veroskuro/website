

interface Artifact {
  id: string;
  title: string;
  description: string;
  problem_solved?: string;
  github_url?: string;
  tech_stack?: string[];
  image?: string;
  metadata: string;
  spanType: 'short' | 'normal' | 'tall';
}

const artifactFiles = import.meta.glob('../content/artifacts/*.json', { eager: true });
const artifacts = Object.values(artifactFiles).map((mod: any) => mod.default) as Artifact[];

export default function Artifacts() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
      <header className="mb-20 max-w-4xl">
        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block">EVIDENCE_ROOM // TOOLING</span>
        <h1 className="font-headline text-5xl md:text-7xl font-light tracking-tight text-on-surface leading-[1.1] mb-6">
          The Artifacts
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant italic leading-relaxed border-l-2 border-primary/30 pl-6 py-2">
          Software instruments built to dissect transformer pathways. From automated circuit discovery engines to sparse autoencoder training platforms. 
        </p>
      </header>

      {/* Masonry-style Grid */}
      <div className="columns-1 lg:columns-2 gap-12 space-y-12 w-full">
        {artifacts.map((artifact) => (
          <article 
            key={artifact.id} 
            className="break-inside-avoid bg-surface-container-low border border-outline-variant/10 flex flex-col group hover:border-primary/30 transition-colors duration-500 overflow-hidden"
          >
            {artifact.image && (
              <div className="w-full aspect-video bg-surface-container overflow-hidden relative border-b border-outline-variant/10">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <img 
                  src={artifact.image} 
                  alt={artifact.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
              </div>
            )}
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label text-xs tracking-widest uppercase text-secondary bg-secondary/10 px-2 py-1">
                  {artifact.id}
                </span>
                {artifact.github_url && (
                  <a href={artifact.github_url} target="_blank" rel="noreferrer" className="text-on-surface opacity-50 hover:opacity-100 hover:text-primary transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-lg">code</span>
                    <span className="font-label text-[10px] tracking-widest uppercase">Source</span>
                  </a>
                )}
              </div>
              
              <h2 className="font-headline text-3xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                {artifact.title}
              </h2>
              
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-6 font-medium">
                {artifact.description}
              </p>
              
              {artifact.problem_solved && (
                <div className="mb-6 bg-surface-container p-4 border-l-2 border-secondary">
                  <span className="font-label text-[10px] text-secondary tracking-widest uppercase block mb-1">The Problem</span>
                  <p className="font-body text-sm text-on-surface opacity-80 leading-relaxed italic">
                    "{artifact.problem_solved}"
                  </p>
                </div>
              )}
              
              <div className="mt-auto pt-6 border-t border-outline-variant/10 flex flex-wrap justify-between items-center gap-4">
                {artifact.tech_stack && artifact.tech_stack.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {artifact.tech_stack.map(tech => (
                      <span key={tech} className="font-label text-[10px] px-2 py-1 bg-surface-container-highest text-on-surface-variant uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="font-label text-[10px] text-outline tracking-[0.2em] uppercase">
                    {artifact.metadata}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
