/**
 * SITE DATA CONFIGURATION
 *
 * All text, URLs, and data for the site.
 * Structure preserved exactly as the original template — only values replaced.
 */

export const detectiveProfile = {
  name: "Deven Choudhary",
  title: "Mechanistic Interpretability Researcher",
  tagline: "Reverse-Engineering the Silence Between Activations",
  quote: "\"Every model has a tell. A bias in a weight matrix, a specific firing pattern in a residual stream. You just have to know how to listen to the silence between the activations.\"",
  bioParagraphs: [
    "I am a third-year B.Tech CSE (AI/ML) student at Bennett University, working on mechanistic interpretability — the subfield of AI safety that tries to reverse-engineer what is actually happening inside a trained transformer. To the forensic researcher, weights are not just floating-point numbers; they are fingerprints left by a training process that leaves no bias unrecorded. My approach is less engineering, more pathology: dissect the pathways, find the exact circuit where a concept is born or a behavior breaks.",
    "My current investigation is cross-lingual sentiment in mBERT. The working hypothesis — and the subject of a paper targeting the ICML 2026 Mechanistic Interpretability Workshop — is that the model's sentiment circuit is not the language-agnostic universal it appears to be, but an English-script geometry that partially degrades on Hindi and fails predictably on Hinglish code-switched text. The method is activation patching across 144 components, ablations, and cross-lingual causal interventions.",
    "Alongside the research, I build the tooling: Circuit Surgeon for automated circuit discovery, SAE Feature Engine for training and serving sparse autoencoder features, Model Autopsy for exposing transformer internals over HTTP, and mechinterp-env — an RL environment for circuit-debugging agents, built for the Meta × Hugging Face × PyTorch OpenEnv Hackathon 2026. The throughline is simple: interpretability as forensic practice, rigorously instrumented."
  ],
  currentInvestigation: {
    title: "Cross-lingual sentiment circuits in mBERT",
    description: "Activation patching across 144 components on English, Hindi, and Hinglish to test whether mBERT's sentiment circuit is truly language-agnostic or an English-script artifact. Paper targeting ICML 2026 MI Workshop (May 8 deadline)."
  },
  previousEvidence: {
    title: "mechinterp-env — an RL environment for circuit debugging",
    description: "The first RL environment where agents learn to localize transformer circuits using activation patching, head ablation, and logit lens. Built on toy models with ground-truth circuits. Submitted to the Meta × Hugging Face × PyTorch OpenEnv Hackathon 2026."
  },
  docketCv: {
    researcherId: "0x8873",
    status: "ACTIVE_RESEARCHER",
    location: "Greater Noida, IN",
    specialty: "Mechanistic Interpretability",
    experience: "B.Tech CSE (AI/ML) — Class of 2027"
  },
  fieldSkills: [
    "Python / PyTorch",
    "TransformerLens",
    "Activation_Patching",
    "Sparse_Autoencoders",
    "FastAPI / Redis / Docker"
  ],
  academicRecord: [
    { degree: "B.Tech CSE (AI/ML specialization)", institution: "Bennett University, Greater Noida (Class of 2027)" },
    { degree: "Research supervisor: Dr. Kaliyar", institution: "Mechanistic Interpretability in Multilingual Transformers" }
  ],
  contact: {
    email: "deven@example.com",
    github: "/veroskuro"
  }
};

export const artifactsData = [
  {
    id: "MB-1144",
    title: "Cross-Lingual Sentiment Circuits",
    description: "Activation patching across all 144 components of mBERT on English, Hindi, and Hinglish sentiment. Tests five competing hypotheses — from abstract universality to English-script geometry to polysemantic interference. Paper targeting ICML 2026 MI Workshop.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcNXf4BjCaaz7IYVtsGveF3NAygdxipn32G1M0MZ2UTvn8VdFGgAw3cNUZDOhoig0vIsninSrVYmsgco4-eCy66i0dE36QUUqxrkd3pERaf0I-t8wgrh8qYMHj5-FM0-yzGgpnptA33fQbmd3cm51HjXbDKg7rb6ocbOBNOxAlfrXcH1YUMCiVU-C__OY-guY589oLyAIsPPWGzEHCSnN_6nWV6cmw9fBfXYlyzU7FygMlvf11dgi86D2h633eiQZpKMwnI5o2CZ8",
    metadata: "[COMPONENTS: 144 | LANGS: EN/HI/HIN]",
    spanType: "tall"
  },
  {
    id: "CS-001",
    title: "Circuit Surgeon",
    description: "Automated circuit discovery engine. ACDC-style edge attribution patching wrapped in a FastAPI service with async job queues, content-hash caching, and a MockHookedTransformer test harness so the entire pipeline runs on CI without a GPU.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeLm_Z1p-DHSe3Qw_TeWz-LaIXFkY3ySzV1hZ4XlaMnknRcxpkSMpBOdpvaaUW7lLj5dWOZqeQWkzUYhk3QE2eK_xV1Cl1TkLWVnGNHZ6Ov65yHqKdQV3wIsM2fbjntoWA3G4Y7P6j8lkQiEW31XapheUHman9EIDI-fiq34zTkU8h4O6FKXb3zQrk2oMt6NTFVqriQinFLJGHaZrqIw5yT_3vmSGf0evD1ISA328rDBP89hzAvvHZmaS5VmvvL5h4CXRARbnMlbU",
    metadata: "[METHOD: ACDC | GPU-OPTIONAL]",
    spanType: "normal"
  },
  {
    id: "SAE-882",
    title: "SAE Feature Engine",
    description: "Training and serving platform for sparse autoencoder features. Dual-indexed storage — PostgreSQL for metadata, Qdrant for high-dimensional cosine similarity. Ghost-gradient recovery for dead features, LLM-assisted monosemantic labeling, REST API for downstream consumers.",
    metadata: "[INDEX: PG + QDRANT]",
    spanType: "tall",
    isAudioVisualizer: true
  },
  {
    id: "MA-112",
    title: "Model Autopsy API",
    description: "Transformer internals exposed as a REST service. Twelve endpoints over residual streams, attention patterns, and logit lens projections. Redis-cached activations, Docker Compose orchestration, Pydantic-validated schemas — Jupyter output, production contract.",
    metadata: "[ENDPOINTS: 12 | CACHE: REDIS]",
    spanType: "normal",
    isGridVisualizer: true
  },
  {
    id: "ME-2026",
    title: "mechinterp-env",
    description: "The first RL environment for mechanistic interpretability debugging. Agents localize circuits in toy transformers using activation patching, head ablation, and logit lens. Ground-truth circuits mean every score is provably correct. Deployed to Hugging Face Spaces for OpenEnv Hackathon 2026.",
    metadata: "[ACTIONS: PATCH/ABLATE/LENS]",
    spanType: "short"
  }
];

export const siteMetadata = {
  title: "Deven Choudhary",
  subtitle: "Mechanistic Interpretability — Research Ledger",
  footerText: "All findings are logged and verified within the forensic interpretability framework. Weights leave fingerprints; this is the archive."
};
