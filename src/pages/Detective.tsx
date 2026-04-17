import React from "react";

/* ──────────────────────────────────────────────────────────────────────────
 *  PERSONNEL DOSSIER  —  Case MI-2027-DC-001
 *  Forensic/investigator-style "about" page. Work-facing only.
 * ────────────────────────────────────────────────────────────────────────── */

type MetaRow = { label: string; value: string };
type Evidence = {
  id: string;
  codename: string;
  classification: string;
  year: string;
  status: "OPERATIONAL" | "ACTIVE" | "PRECEDENT" | "ARCHIVED";
  span: "wide" | "tall" | "default";
  notes: string;
  tags: string[];
};
type TimelineEntry = { year: string; title: string; detail: string };
type ArsenalGroup = { category: string; items: string[] };

/* ───────────── DATA ───────────── */

const SUBJECT_META: MetaRow[] = [
  { label: "Subject", value: "Deven Choudhary" },
  { label: "Handle", value: "@veroskuro" },
  { label: "Affiliation", value: "Bennett University" },
  { label: "Field", value: "Mechanistic Interpretability" },
  { label: "Current Focus", value: "Cross-Lingual Sentiment Circuits" },
  { label: "Status", value: "Case open since 2024" },
  { label: "Last Updated", value: "April 2026" },
  { label: "Classification", value: "Restricted" },
];

const EVIDENCE: Evidence[] = [
  {
    id: "EV-001",
    codename: "Circuit Surgeon",
    classification: "Automated Circuit Discovery",
    year: "2025",
    status: "OPERATIONAL",
    span: "wide",
    notes:
      "Edge attribution patching at scale. Built to bypass manual verification of attention heads. Ships with an exhaustive mathematical specification.",
    tags: ["PyTorch", "TransformerLens", "ACDC", "Attribution Patching"],
  },
  {
    id: "EV-002",
    codename: "SAE Feature Engine",
    classification: "Sparse Autoencoder Pipeline",
    year: "2025",
    status: "OPERATIONAL",
    span: "default",
    notes:
      "Training and feature-serving infrastructure. Isolating monosemantic features requires clean query mechanisms. Built to scale.",
    tags: ["PyTorch", "SAE Lens", "FastAPI"],
  },
  {
    id: "EV-003",
    codename: "Model Autopsy API",
    classification: "REST Interface / Transformer Internals",
    year: "2025",
    status: "OPERATIONAL",
    span: "default",
    notes:
      "Transformer internals exposed over HTTP. Bridges the gap between exploratory notebooks and production-grade endpoints.",
    tags: ["FastAPI", "PyTorch", "Docker", "REST"],
  },
  {
    id: "EV-004",
    codename: "mBERT — Cross-Lingual Sentiment Circuits",
    classification: "Active Investigation // Primary",
    year: "2026 — ongoing",
    status: "ACTIVE",
    span: "wide",
    notes:
      "Cross-lingual sentiment circuit analysis on multilingual BERT across English, Hindi, and Hinglish. Hypothesis: mBERT's sentiment circuits encode English-script geometry, not abstract sentiment. Hinglish deployed as a surgical probe.",
    tags: [
      "mBERT",
      "TransformerLens",
      "Activation Patching",
      "SST-2",
      "SentiRaama",
      "SemEval 2020 T9",
    ],
  },
  {
    id: "EV-005",
    codename: "mechinterp-env",
    classification: "RL Environment / Infrastructure",
    year: "2026",
    status: "ACTIVE",
    span: "default",
    notes:
      "Reinforcement-learning environment for MI circuit debugging. Accelerating interpretability means standardizing the training environments.",
    tags: ["OpenEnv", "PyTorch", "RL"],
  },
  {
    id: "EV-006",
    codename: "DistilBERT Sentiment Circuits",
    classification: "Precedent Case",
    year: "2024",
    status: "PRECEDENT",
    span: "default",
    notes:
      "Initial circuit-level study. Baseline verification of sub-network identification. Case closed.",
    tags: ["DistilBERT", "PyTorch"],
  },
];

const CHRONOLOGY: TimelineEntry[] = [
  {
    year: "2023",
    title: "Initial Vector",
    detail:
      "Medical-imaging XAI analysis (GRAD-CAM, SHAP, LIME). Identified critical flaws in post-hoc attribution. Shifted focus to mechanistic approaches.",
  },
  {
    year: "2024",
    title: "First Circuit Extraction",
    detail:
      "Isolated sentiment pathways in DistilBERT. Established baseline operational protocols for reverse-engineering.",
  },
  {
    year: "2025",
    title: "Infrastructure Assembly",
    detail:
      "Deployed Circuit Surgeon, SAE Feature Engine, and Model Autopsy API. Standardized the tooling pipeline to accelerate future diagnostics.",
  },
  {
    year: "2026",
    title: "Cross-Lingual Probe",
    detail:
      "Initiated deep-dive into mBERT sentiment structures. Challenging the assumption of language-agnostic representation.",
  },
];

const ARSENAL: ArsenalGroup[] = [
  {
    category: "Research Frameworks",
    items: ["PyTorch", "TransformerLens", "SAE Lens", "HF Transformers"],
  },
  {
    category: "Methods",
    items: [
      "Activation Patching",
      "Path Patching",
      "ACDC",
      "Sparse Autoencoders",
      "Attribution Analysis",
      "Circuit Discovery",
    ],
  },
  {
    category: "Backend / Infra",
    items: ["FastAPI", "REST", "Docker", "Git"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "C", "Bash"],
  },
  {
    category: "Probes & Datasets",
    items: ["SST-2", "SentiRaama", "SemEval 2020 T9", "MultiBERTs"],
  },
];

/* ───────────── SMALL PRIMITIVES ───────────── */

const Corner: React.FC<{ pos: string }> = ({ pos }) => (
  <span
    aria-hidden
    className={`absolute ${pos} w-3 h-3 border-outline-variant/40`}
  />
);

const StatusPip: React.FC<{ status: Evidence["status"] }> = ({ status }) => {
  const tone =
    status === "ACTIVE"
      ? "text-primary"
      : status === "OPERATIONAL"
      ? "text-on-surface"
      : "text-on-surface-variant";
  return (
    <span
      className={`font-label text-[10px] tracking-widest uppercase ${tone} inline-flex items-center gap-1.5`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "ACTIVE"
            ? "bg-primary animate-pulse"
            : status === "OPERATIONAL"
            ? "bg-on-surface/70"
            : "bg-outline"
        }`}
      />
      {status}
    </span>
  );
};

const SectionHeader: React.FC<{
  index: string;
  title: string;
  caption?: string;
}> = ({ index, title, caption }) => (
  <header className="mb-10 lg:mb-14 flex items-end justify-between gap-6 border-b border-outline-variant/20 pb-6">
    <div>
      <p className="font-label text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant mb-3">
        § {index}
      </p>
      <h2 className="font-headline text-3xl md:text-5xl text-on-surface leading-tight">
        {title}
      </h2>
    </div>
    {caption && (
      <p className="hidden md:block font-label text-[10px] tracking-widest uppercase text-outline max-w-[18ch] text-right">
        {caption}
      </p>
    )}
  </header>
);

/* ───────────── MAIN ───────────── */

const Detective: React.FC = () => {
  return (
    <main className="bg-surface text-on-surface min-h-screen relative overflow-hidden mt-12">
      {/* faint grid-paper background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* rotated CONFIDENTIAL watermark */}
      <div
        aria-hidden
        className="hidden lg:block pointer-events-none absolute top-[42%] -right-10 rotate-90 origin-right font-label text-[10px] tracking-[0.6em] uppercase text-outline/60"
      >
        Confidential · Do Not Duplicate · Confidential · Do Not Duplicate
      </div>

      {/* ───── TOP CLASSIFICATION BAR ───── */}
      <div className="relative border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between font-label text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Classified // Restricted
          </span>
          <span className="hidden sm:inline">Personnel Dossier</span>
          <span>MI-2027-DC-001</span>
        </div>
      </div>

      {/* ───── HERO / SUBJECT HEADER ───── */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Name + monologue */}
          <div className="lg:col-span-7">
            <p className="font-label text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant mb-6">
              § 00 — Subject of Investigation
            </p>

            <h1 className="font-headline text-[3.25rem] sm:text-7xl lg:text-[7.5rem] leading-[0.92] text-on-surface mb-10 tracking-tight">
              Deven
              <br />
              <span className="text-primary">Choudhary</span>
              <span className="text-outline">.</span>
            </h1>

            <div className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl space-y-4">
              <p>
                Primary obsession:{" "}
                <span className="text-on-surface">
                  mechanistic interpretability
                </span>
                . The methodology involves treating a 110-million-parameter
                transformer as a crime scene — tracing evidence
                from embedding to logit, isolating the exact circuits where
                cognition fractures. 
              </p>
              <p>
                Operates strictly on empirical verification. If a pathway cannot be isolated and causally patched, the hypothesis is discarded.
              </p>
            </div>
          </div>

          {/* Right: Identity card */}
          <aside className="lg:col-span-5 relative">
            <div className="relative border border-outline-variant/20 bg-surface-container-low p-6 md:p-8">
              <Corner pos="-top-px -left-px border-t border-l" />
              <Corner pos="-top-px -right-px border-t border-r" />
              <Corner pos="-bottom-px -left-px border-b border-l" />
              <Corner pos="-bottom-px -right-px border-b border-r" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/20">
                <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
                  Identity File
                </span>
                <span className="font-label text-[10px] tracking-widest uppercase text-primary flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Verified
                </span>
              </div>

              <dl className="space-y-3.5">
                {SUBJECT_META.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 gap-4 border-b border-outline-variant/10 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-label text-[10px] tracking-widest uppercase text-outline col-span-1">
                      {row.label}
                    </dt>
                    <dd className="font-body text-sm text-on-surface col-span-2">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between font-label text-[10px] tracking-widest uppercase text-outline">
                <span>File ref · MI-2027-DC-001</span>
                <span>Rev. 04 / 2026</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ───── § 01 — OBSERVER'S NOTE ───── */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 border-t border-outline-variant/20">
        <SectionHeader
          index="01"
          title="Observer's note."
          caption="Unstructured — written in margin"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7 lg:col-start-2 font-body text-base md:text-lg text-on-surface leading-relaxed space-y-6">
            <p>
              Operates strictly via implementation. Diagnostics performed by elimination. Constructs internal tooling before necessity dictates. Documentation is exhaustively maintained, entirely devoid of sentiment.
            </p>
            <p>
              Extracted from medical-image XAI coursework after identifying fatal flaws in post-hoc attribution. Shifted to causal circuit-level interventions. Abhors black-box assumptions.
            </p>
            <p>
              Functions under severe compute constraints, forcing highly optimized, high-signal experimental design. Does not outsource hypotheses. Every anomaly investigated is independently verified through ablation.
            </p>
          </div>

          <aside className="lg:col-span-3 lg:col-start-10 space-y-6">
            {[
              {
                tag: "Pattern",
                body: "Prioritizes infrastructure. Diagnoses systems through surgical patching.",
              },
              {
                tag: "Hypothesis",
                body: "Multilingual transformers reason in script-geometry, not language-abstraction.",
              },
              {
                tag: "Method",
                body: "Causal intervention. Disregards correlations lacking mechanistic proof.",
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="border-l border-outline-variant/40 pl-4"
              >
                <p className="font-label text-[10px] tracking-widest uppercase text-primary mb-2">
                  {c.tag}
                </p>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* ───── § 02 — EVIDENCE LOG ───── */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 border-t border-outline-variant/20">
        <SectionHeader
          index="02"
          title="Evidence log."
          caption="Active and archived cases"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {EVIDENCE.map((ev, i) => {
            const colSpan =
              ev.span === "wide"
                ? "md:col-span-8"
                : ev.span === "tall"
                ? "md:col-span-4 md:row-span-2"
                : "md:col-span-4";
            return (
              <article
                key={ev.id}
                className={`relative ${colSpan} bg-surface-container-low border border-outline-variant/20 p-6 md:p-7 flex flex-col hover:border-outline-variant/40 transition-colors`}
              >
                <span
                  aria-hidden
                  className="absolute top-4 right-5 font-label text-[10px] tracking-widest uppercase text-outline"
                >
                  {String(i + 1).padStart(2, "0")} / {EVIDENCE.length}
                </span>

                <div className="flex items-center justify-between mb-5 pr-16">
                  <span className="font-label text-[10px] tracking-widest uppercase text-primary">
                    {ev.id}
                  </span>
                  <StatusPip status={ev.status} />
                </div>

                <h3 className="font-headline text-xl md:text-2xl text-on-surface leading-tight mb-2">
                  {ev.codename}
                </h3>

                <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-5">
                  {ev.classification} · {ev.year}
                </p>

                <p className="font-body text-sm md:text-[15px] text-on-surface-variant leading-relaxed mb-6 flex-1">
                  {ev.notes}
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-4 border-t border-outline-variant/20">
                  {ev.tags.map((t) => (
                    <span
                      key={t}
                      className="font-label text-[10px] tracking-widest uppercase text-outline"
                    >
                      / {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ───── § 03 — CHRONOLOGY ───── */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 border-t border-outline-variant/20">
        <SectionHeader
          index="03"
          title="Chronology."
          caption="Recorded timeline"
        />

        <ol className="relative border-l border-outline-variant/30 ml-2 md:ml-4">
          {CHRONOLOGY.map((t) => {
            return (
              <li key={t.year} className="relative pl-6 md:pl-10 pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary`}
                />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <p className="font-label text-[10px] tracking-widest uppercase text-primary">
                      {t.year}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-2 leading-tight">
                      {t.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed max-w-3xl">
                      {t.detail}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ───── § 04 — TECHNICAL ARSENAL ───── */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 border-t border-outline-variant/20">
        <SectionHeader
          index="04"
          title="Technical arsenal."
          caption="Confirmed in the field"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {ARSENAL.map((group) => (
            <div key={group.category}>
              <div className="flex items-baseline justify-between border-b border-outline-variant/20 pb-2 mb-5">
                <p className="font-label text-[11px] tracking-widest uppercase text-primary">
                  {group.category}
                </p>
                <p className="font-label text-[10px] tracking-widest uppercase text-outline">
                  {String(group.items.length).padStart(2, "0")} items
                </p>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-label text-[11px] tracking-widest uppercase text-on-surface border border-outline-variant/30 px-2.5 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ───── FOOTER STAMP ───── */}
      <footer className="relative border-t border-outline-variant/20 bg-surface-container-low mb-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
          <div>
            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-3">
              Filed under
            </p>
            <p className="font-headline text-xl text-on-surface">
              @veroskuro
            </p>
            <p className="font-body text-sm text-on-surface-variant mt-1">
              Deven Choudhary
            </p>
          </div>

          <div className="md:text-center">
            <div className="inline-block border-2 border-primary/60 px-4 py-2 rotate-[-3deg]">
              <p className="font-label text-xs md:text-sm tracking-widest uppercase text-primary">
                File remains open.
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">
              Classification · Revision
            </p>
            <p className="font-body text-sm text-on-surface">
              Restricted · v2026.04
            </p>
            <p className="font-label text-[10px] tracking-widest uppercase text-outline mt-3">
              End of dossier.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Detective;
