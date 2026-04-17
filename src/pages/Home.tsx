import profileData from '../content/data/profile.json';

export default function Home() {
  return (
    <div className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-24">
      {/* Left Column: The Portrait & The Marginalia */}
      <div className="lg:col-span-4 flex flex-col gap-12">
        <div className="relative w-full aspect-[3/4] bg-surface-container-low p-4">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDweU3Ic_TECFBoRccvuU__mRJHTTD9cLgbEjbh7cSYo7F7_Cmm5oNQc_BegryboV6K7ZZFfFRLCKPtwyRXKroO7_H12luPUCwmfrPNLCljcBICzKjQEolNXYn-56qchRVRnP0RbFOpbGMncVbFuBapjD3Y6WSURXSdOal59xrzcMf-78NumpehMljVcjmZ0HrJmaO_T_lxHrlBmHmX6CVEio_JwtlcWsQQO9l7wdDxy7SGv_-PNO4ZC7jjquHYqzYtP_20fYcScUs" 
            alt={profileData.name} 
            className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" 
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-surface to-transparent">
            <h2 className="font-headline text-2xl text-primary mb-1">{profileData.name}</h2>
            <p className="font-label text-sm text-on-surface opacity-70 uppercase tracking-widest">{profileData.title}</p>
          </div>
        </div>
        
        <aside className="bg-surface-container-lowest p-6 border-l border-outline-variant/20 font-body text-sm italic text-on-surface opacity-80">
          <p className="mb-4">{profileData.quote}</p>
          <ul className="font-label not-italic text-xs text-secondary opacity-90 space-y-2 mt-6">
            <li>[LOC] {profileData.docketCv.location}</li>
            <li>[SPEC] {profileData.docketCv.specialty}</li>
            <li>[EXP] {profileData.docketCv.experience}</li>
          </ul>
        </aside>
      </div>

      {/* Right Column: The Narrative */}
      <div className="lg:col-span-8 flex flex-col gap-16">
        <section className="max-w-prose">
          <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-tight mb-8 leading-tight">The Anatomy of a Deduction</h1>
          <p className="font-body text-lg text-on-surface leading-relaxed mb-6">
            Welcome to the private study. This archive serves as a repository for thoughts, methodologies, and case notes that span over a decade of forensic investigation. My work focuses on the intersection of historical texts and modern deductive reasoning.
          </p>
          <p className="font-body text-lg text-on-surface leading-relaxed">
            Here, the sterile environment of the modern lab is replaced by the quiet contemplation of the archive. We do not just collect data; we seek the narrative hidden within the evidence. The patterns are always there, provided one knows how to look.
          </p>
        </section>

        <section className="bg-surface-container-low p-8 lg:p-12">
          <h3 className="font-headline text-3xl text-on-surface mb-8">Areas of Obsession</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l border-primary/30 pl-6">
              <h4 className="font-label text-primary uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">fingerprint</span>
                Trace Evidence
              </h4>
              <p className="font-body text-on-surface opacity-80 text-sm leading-relaxed">
                The microscopic whispers left behind. Analyzing particulate matter to reconstruct timelines with devastating accuracy.
              </p>
            </div>
            
            <div className="border-l border-primary/30 pl-6">
              <h4 className="font-label text-primary uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">history_edu</span>
                Document Analysis
              </h4>
              <p className="font-body text-on-surface opacity-80 text-sm leading-relaxed">
                Forged signatures, obscured inks, and the subtle impressions on the page beneath. The paper always remembers.
              </p>
            </div>
            
            <div className="border-l border-primary/30 pl-6">
              <h4 className="font-label text-primary uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">psychology</span>
                Behavioral Profiling
              </h4>
              <p className="font-body text-on-surface opacity-80 text-sm leading-relaxed">
                Understanding the 'why' to predict the 'who'. A study of motives, patterns, and the dark recesses of human intent.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap items-center gap-6 mt-8">
          <a href="/detective" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label uppercase tracking-widest text-sm hover:bg-primary-fixed transition-colors duration-300">
            Commence Correspondence
          </a>
          <a href="/artifacts" className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant text-on-surface font-label uppercase tracking-widest text-sm hover:bg-surface-container-high transition-colors duration-300">
            Review Archive Index
          </a>
        </section>
      </div>
    </div>
  );
}
