import { motion } from "framer-motion"

const statusColors = {
  Merged: "bg-purple-900 text-purple-300",
  Open: "bg-green-900 text-green-300"
}

const ContributionCard = ({ repo, repoUrl, pr, prUrl, status, year, description, index }) => {
  return (
    <div className="flex gap-4">

      {/* Left — Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-black mt-1 border-2 border-gray-400 shrink-0" />
        <div className="w-px bg-gray-200 flex-1 mt-1" />
      </div>

      {/* Right — Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] rounded-xl p-5 mb-6 flex-1"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-2">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold text-base hover:underline"
          >
            {repo}
          </a>
          <span className="text-gray-500 text-xs">{year}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-3">{description}</p>

        {/* PR title */}
        <p className="text-gray-300 text-sm mb-4">
          🔀 <span className="italic">{pr}</span>
        </p>

        {/* Bottom row — status + link */}
        <div className="flex items-center gap-3">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[status]}`}>
            {status === "Merged" ? "✓ Merged" : "⬤ Open"}
          </span>
          <a
            href={prUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs border border-gray-600 text-gray-400 px-3 py-1 rounded-md hover:bg-gray-800 transition"
          >
            View PR →
          </a>
        </div>

      </motion.div>
    </div>
  )
}

export default ContributionCard
