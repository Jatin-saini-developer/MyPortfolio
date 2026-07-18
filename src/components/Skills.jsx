const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "MongoDB", "REST APIs"]
  },
  {
    category: "AI / GenAI",
    items: ["LangChain", "RAG Pipelines", "Gemini API", "LangSmith", "Vector DBs"]
  }
]

export default function Skills() {
  return (
    <section className="py-10 px-4 md:px-0">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>

      <div className="flex flex-col gap-6">
        {skills.map((group) => (
            
          <div key={group.category} className="flex flex-col sm:flex-row gap-3">
            
            {/* Category Label */}
            <span className="text-sm font-semibold text-gray-400 w-28 pt-1 shrink-0">
              {group.category}
            </span>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-medium bg-black text-white rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}