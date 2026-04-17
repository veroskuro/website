
import { detectiveProfile } from '../data/siteData';

export default function Detective() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto grid grid-cols-12 gap-12">
      {/* Main Narrative Column */}
      <article className="col-span-12 lg:col-span-8 pr-0 lg:pr-16">
        <header className="mb-16">
          <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-4 block">PERSONNEL_DOSSIER // INTERPRETABILITY</span>
          <h1 className="font-headline text-6xl md:text-8xl font-light italic tracking-tight text-on-surface leading-[0.9]">
            {detectiveProfile.tagline}
          </h1>
        </header>

        <section className="space-y-10 text-on-surface leading-relaxed max-w-3xl">
          <p className="text-xl md:text-2xl font-body italic opacity-90 border-l-2 border-primary-container pl-8 py-2">
            {detectiveProfile.quote}
          </p>

          <div className="space-y-6 text-lg opacity-80 font-body">
            {detectiveProfile.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-surface-container-low rounded-lg">
              <h3 className="font-label text-xs tracking-widest text-primary uppercase mb-4">CURRENT_INVESTIGATION</h3>
              <p className="font-body italic text-sm opacity-70">
                {detectiveProfile.currentInvestigation.description}
              </p>
            </div>
            <div className="p-8 bg-surface-container-low rounded-lg">
              <h3 className="font-label text-xs tracking-widest text-primary uppercase mb-4">PREVIOUS_EVIDENCE</h3>
              <p className="font-body italic text-sm opacity-70">
                {detectiveProfile.previousEvidence.description}
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Marginalia Sidebar */}
      <aside className="col-span-12 lg:col-span-4 space-y-2">
        <div className="sticky top-32 p-1 bg-surface-container-low rounded-sm">
          <div className="bg-surface p-8 space-y-12">
            
            {/* DOCKET_CV */}
            <section>
              <h4 className="font-label text-[10px] tracking-[0.4em] text-outline uppercase mb-6 flex items-center">
                <span className="material-symbols-outlined text-xs mr-2">fingerprint</span>
                DOCKET_CV
              </h4>
              <div className="font-label text-sm space-y-2">
                <div className="flex justify-between items-baseline opacity-90">
                  <span className="text-outline">RESEARCHER_ID:</span>
                  <span className="text-primary">{detectiveProfile.docketCv.researcherId}</span>
                </div>
                <div className="flex justify-between items-baseline opacity-90">
                  <span className="text-outline">STATUS:</span>
                  <span>{detectiveProfile.docketCv.status}</span>
                </div>
              </div>
            </section>

            {/* FIELD_SKILLS */}
            <section>
              <h4 className="font-label text-[10px] tracking-[0.4em] text-outline uppercase mb-6 flex items-center">
                <span className="material-symbols-outlined text-xs mr-2">biotech</span>
                FIELD_SKILLS
              </h4>
              <ul className="font-label text-sm space-y-3">
                {detectiveProfile.fieldSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-center group">
                    <span className="w-1.5 h-1.5 bg-primary-container mr-3 group-hover:bg-primary transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* ACADEMIC_RECORD */}
            <section>
              <h4 className="font-label text-[10px] tracking-[0.4em] text-outline uppercase mb-6 flex items-center">
                <span className="material-symbols-outlined text-xs mr-2">history_edu</span>
                ACADEMIC_RECORD
              </h4>
              <div className="space-y-4">
                {detectiveProfile.academicRecord.map((record, idx) => (
                  <div key={idx}>
                    <p className="font-label text-xs text-primary mb-1">{record.degree}</p>
                    <p className="font-body italic text-sm opacity-60">{record.institution}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECURE_COMMS */}
            <section>
              <h4 className="font-label text-[10px] tracking-[0.4em] text-outline uppercase mb-6 flex items-center">
                <span className="material-symbols-outlined text-xs mr-2">encrypted</span>
                SECURE_COMMS
              </h4>
              <div className="font-label text-[11px] space-y-4 tracking-wider">
                <div className="p-3 bg-surface-container-low rounded border-none hover:bg-surface-container-highest transition-colors cursor-pointer group">
                  <span className="text-outline block mb-1">EMAIL:</span>
                  <span className="text-on-surface group-hover:text-primary">{detectiveProfile.contact.email}</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded border-none hover:bg-surface-container-highest transition-colors cursor-pointer group">
                  <span className="text-outline block mb-1">GITHUB_KEY:</span>
                  <span className="text-on-surface group-hover:text-primary">{detectiveProfile.contact.github}</span>
                </div>
              </div>
            </section>

            <div className="pt-8 opacity-20 font-label text-[9px] uppercase tracking-widest text-center border-t border-outline-variant/10">
              * NO_USER_AVATAR_UPLOADED // SYSTEM_DEFAULT_VIEW *
            </div>
          </div>
        </div>
      </aside>
      
      {/* Aesthetic Detail */}
      <div className="fixed bottom-8 left-8 flex items-center space-x-4 opacity-30 select-none pointer-events-none">
        <div className="h-0.5 w-12 bg-primary"></div>
        <span className="font-label text-[10px] tracking-[0.5em] uppercase">SYSTEM_STABLE // 0xAF32-09</span>
      </div>
    </div>
  );
}
