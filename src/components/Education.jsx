import { education } from "../data/education"
import { motion } from "framer-motion"

const Education = () => {
  return (
    <div className="py-10">

      {/* Heading */}
      <div className="mb-8">
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
          Education
        </span>
        <h1 className="text-2xl font-bold mt-3">Academic Background</h1>
        <p className="text-gray-400 mt-2">
          Where it all started.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-xl px-5 py-4 flex items-center justify-between"
          >

            {/* Left — logo + text */}
            <div className="flex items-center gap-4">

              {/* Logo */}
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center shrink-0 overflow-hidden">
                {edu.logo
                  ? <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                  : <span className="text-gray-500 text-xl font-bold">
                      {edu.institution.charAt(0)}
                    </span>
                }
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-sm md:text-base">
                  {edu.institution}
                </span>
                <span className="text-gray-400 text-sm">
                  {edu.degree}
                </span>
                <span className="text-gray-600 text-xs">
                  {edu.location}
                </span>
              </div>

            </div>

            {/* Right — duration */}
            <span className="text-gray-500 text-sm shrink-0 ml-4">
              {edu.duration}
            </span>

          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default Education