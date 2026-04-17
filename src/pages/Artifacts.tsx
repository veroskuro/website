
import { artifactsData } from '../data/siteData';

export default function Artifacts() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 mt-24">
      <header className="mb-16 max-w-2xl">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-none mb-6">Cabinet of Curiosities</h1>
        <p className="font-body text-lg text-on-surface/70 italic leading-relaxed">
          A forensic collection of neural phenomena, scattered across the digital workspace. Each item is a specimen of interpretability—a fragment of the ghost in the machine.
        </p>
      </header>

      {/* Masonry Layout implemented via CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {artifactsData.map((artifact) => (
          <article 
            key={artifact.id}
            className="break-inside-avoid mb-8 flex flex-col bg-surface-container-highest p-8 relative group overflow-hidden transition-all duration-500 ease-in-out hover:bg-surface-variant min-h-[300px]"
          >
            <div className="mb-auto">
              <div className="font-label text-[10px] tracking-[0.2em] text-primary/50 uppercase mb-4">
                [ARTIFACT_ID: {artifact.id}]
              </div>
              <h2 className="font-headline text-3xl text-primary mb-4">{artifact.title}</h2>
              <p className="font-body text-on-surface/80 text-sm leading-relaxed mb-6">
                {artifact.description}
              </p>
            </div>

            {/* Visualizer specific rendering */}
            {artifact.image && (
              <div className="w-full aspect-square bg-surface-dim mb-6 relative overflow-hidden rounded-sm">
                <img 
                  src={artifact.image} 
                  alt={artifact.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent"></div>
              </div>
            )}

            {artifact.isAudioVisualizer && (
              <div className="flex-grow flex items-center justify-center my-6 space-x-1 min-h-[150px]">
                <div className="w-1 h-12 bg-primary/20 rounded-full group-hover:h-16 transition-all duration-500"></div>
                <div className="w-1 h-24 bg-primary/40 rounded-full group-hover:h-20 transition-all duration-500"></div>
                <div className="w-1 h-32 bg-primary rounded-full group-hover:h-24 transition-all duration-500"></div>
                <div className="w-1 h-20 bg-primary/60 rounded-full group-hover:h-28 transition-all duration-500"></div>
                <div className="w-1 h-8 bg-primary/30 rounded-full group-hover:h-12 transition-all duration-500"></div>
              </div>
            )}

            {artifact.isGridVisualizer && (
              <div className="grid grid-cols-6 gap-1 mb-6 opacity-40 group-hover:opacity-70 transition-opacity min-h-[150px]">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square ${
                      [0, 7, 8, 13, 14].includes(i) ? 'bg-primary' : 
                      [1, 15].includes(i) ? 'bg-primary/60' : 
                      'bg-surface-dim'
                    }`}
                  ></div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center mt-6">
              <span className="font-label text-[10px] text-on-surface/40">{artifact.metadata}</span>
              <button className="font-label text-xs uppercase tracking-widest text-primary hover:text-on-primary-container transition-colors">
                VIEW ARTIFACT
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
