import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ExperienceCard = ({ company, role, duration, location, type, points, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-xl mb-4 overflow-hidden"
    >

      {/* Header — always visible, click karo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-5 py-4 flex items-center justify-between"
      >

        {/* Left side */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base">{company}</span>
            <span className="bg-[#2a2a2a] text-gray-400 text-xs px-2 py-0.5 rounded-full">
              {type}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>{role}</span>
            <span>·</span>
            <span>{duration}</span>
            <span>·</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 text-lg shrink-0"
        >
          ↓
        </motion.span>

      </button>

      {/* Expandable content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-[#2a2a2a] pt-4">
              <ul className="flex flex-col gap-2">
                {points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-gray-400 text-sm">
                    <span className="text-gray-600 mt-0.5 shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default ExperienceCard