export const projects = [
  {
    id: 1,
    title: "DevOnboard",
    description:
      "A visual workflow builder for developer onboarding. Define your onboarding once on a drag-and-drop canvas — GitHub access, Slack channels, Jira setup, Notion docs — and it fires automatically every time a new developer joins. Zero manual steps.",
    tags: ["ReactFlow", "Node.js", "MongoDB", "JWT", " GitHub OAuth"],
    links: [
      { label: "Website", url: "https://dev-onboard.vercel.app" },
      {
        label: "Github",
        url: "https://github.com/Jatin-saini-developer/DevOnboard",
      },
    ],
  },
  {
    id: 2,
    title: "AI Thumbnail Generator",
    description:
      "Type a prompt, get a YouTube-ready thumbnail instantly. A full-stack SaaS that uses Google Gemini AI to generate custom thumbnails — with aspect ratio controls, style presets, and color palettes. JWT auth, protected routes, and MongoDB-backed generation history included.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini AI", "JWT"],
    links: [
      { label: "Website", url: "https://thumbnail-generator-uins.vercel.app" },
      {
        label: "Github",
        url: "https://github.com/Jatin-saini-developer/Thumbnail-Generator",
      },
    ],
  },
  {
    id: 3,
    title: "Medical Research Assistant",
    description:
      "Ask a medical question, get research-backed answers — not guesses. Pulls 100-200 results in parallel from PubMed, OpenAlex, and ClinicalTrials.gov, ranks them by relevance and credibility, then sends only the top 8 to Llama 3 via Groq. Zero hallucination, multi-turn memory, context-aware follow-ups.",
    tags: ["React", "Node.js", "Llama 3", "Groq", "RAG", "MongoDB"],
    links: [
      {
        label: "Website",
        url: "https://medical-research-assistant-phi.vercel.app",
      },
      {
        label: "Github",
        url: "https://github.com/Jatin-saini-developer/MedicalResearchAssistant",
      },
    ],
  },
];
