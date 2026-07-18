import { experiences } from "../data/experience"
import ExperienceCard from "../cards/ExperienceCard"

const Experience = () => {
  return (
    <div className="py-10 px-4 md:px-0">

      {/* Heading — same style as baaki sections */}
      <div className="mb-8">
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
          Experience
        </span>
        <h1 className="text-2xl font-bold mt-3">Where I've worked</h1>
        <p className="text-gray-400 mt-2">
          Professional experience building real products.
        </p>
      </div>

      {/* Cards */}
      <div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} {...exp} index={index} />
        ))}
      </div>

    </div>
  )
}

export default Experience