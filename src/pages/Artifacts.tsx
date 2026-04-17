

interface Artifact {
  id: string;
  title: string;
  description: string;
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
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 w-full">
        {artifacts.map((artifact) => (
          <article 
            key={artifact.id} 
            className="break-inside-avoid bg-surface-container-low border border-outline-variant/10 p-6 flex flex-col group hover:border-primary/30 transition-colors duration-500"
          >
            {artifact.image && (
              <div className="w-full aspect-video bg-surface-container mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img 
                  src={artifact.image} 
                  alt={artifact.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                />
              </div>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <span className="font-label text-xs tracking-widest uppercase text-secondary bg-secondary/10 px-2 py-1">
                {artifact.id}
              </span>
            </div>
            
            <h2 className="font-headline text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">
              {artifact.title}
            </h2>
            
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
              {artifact.description}
            </p>
            
            <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center mt-auto">
              <span className="font-label text-[10px] text-outline tracking-[0.2em] uppercase">
                {artifact.metadata}
              </span>
              <button className="text-primary hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
