import profileData from '../content/data/profile.json';

export default function Detective() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto grid grid-cols-12 gap-12">
      {/* Main Narrative Column */}
      <article className="col-span-12 lg:col-span-8 pr-0 lg:pr-16">
        <header className="mb-16">
          <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block">PERSONNEL_DOSSIER // INTERPRETABILITY</span>
          <h1 className="font-headline text-6xl md:text-8xl font-light italic tracking-tight text-on-surface leading-[0.9]">
            {profileData.tagline}
          </h1>
        </header>

        <section className="space-y-10 text-on-surface leading-relaxed max-w-3xl">
          <p className="text-xl md:text-2xl font-body italic opacity-90 border-l-2 border-primary-container pl-8 py-2">
            {profileData.quote}
          </p>

          <div className="font-body text-lg space-y-6 opacity-80 mt-12">
            {profileData.bioParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Current Investigation Feature */}
        <section className="mt-20 border-t border-outline-variant/30 pt-12">
          <h3 className="font-headline text-3xl mb-8 text-secondary">ACTIVE_INQUIRY</h3>
          <div className="bg-surface-container p-8 border border-outline-variant/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4"></div>
            
            <span className="font-label text-xs uppercase tracking-widest text-primary mb-3 block">Primary Target</span>
            <h4 className="font-headline text-2xl mb-4 text-on-surface group-hover:text-primary transition-colors duration-300">
              {profileData.currentInvestigation.title}
            </h4>
            <p className="font-body text-sm opacity-80 max-w-2xl">
              {profileData.currentInvestigation.description}
            </p>
          </div>
        </section>

      </article>

      {/* Sidebar / Terminal UI */}
      <aside className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
        <div className="sticky top-32 space-y-8">
          
          {/* Status Block */}
          <div className="bg-surface-container-lowest p-6 border border-outline-variant/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/20">
              <span className="font-headline text-lg uppercase tracking-wider text-on-surface">STATUS</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse"></span>
                <span className="font-label text-xs text-primary">{profileData.docketCv.status}</span>
              </div>
            </div>
            
            <ul className="space-y-4 font-label text-xs tracking-widest">
              <li className="flex justify-between">
                <span className="opacity-50">ID</span>
                <span className="text-on-surface">{profileData.docketCv.researcherId}</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-50">LOCATION</span>
                <span className="text-on-surface">{profileData.docketCv.location}</span>
              </li>
              <li className="flex justify-between">
                <span className="opacity-50">SPECIALTY</span>
                <span className="text-on-surface text-right max-w-[150px]">{profileData.docketCv.specialty}</span>
              </li>
            </ul>
          </div>

          {/* Tools of the Trade */}
          <div className="bg-surface-container-low p-6 border-l-2 border-secondary">
            <h4 className="font-label text-xs uppercase tracking-[0.2em] mb-4 text-secondary">INSTRUMENTATION</h4>
            <ul className="space-y-3">
              {profileData.fieldSkills.map((skill, idx) => (
                <li key={idx} className="font-body text-sm flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                  <span className="text-secondary opacity-50">&gt;</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Comms */}
          <div className="p-6 border border-outline-variant/20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]">
            <h4 className="font-label text-xs uppercase tracking-[0.2em] mb-4 text-on-surface">SECURE COMMS</h4>
            <div className="flex flex-col gap-4 font-body text-sm">
              <a href={`mailto:${profileData.contact.email}`} className="text-primary hover:text-primary-container transition-colors flex items-center gap-2">
                [INITIATE_CONTACT]
              </a>
              <a href={`https://github.com${profileData.contact.github}`} className="text-on-surface opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
                [ACCESS_REPO]
              </a>
            </div>
          </div>

        </div>
      </aside>
    </div>
  );
}
