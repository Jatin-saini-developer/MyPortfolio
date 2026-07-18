import { contributions } from "../data/contributions"
import ContributionCard from "../cards/ContributionCard"

const OpenSource = () => {
  return (
    <div className="py-10 px-4 md:px-0">

      {/* Heading — same style as Projects section */}
      <div className="mb-8">
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
          Open Source
        </span>
        <h1 className="text-2xl font-bold mt-3">Giving back to the community</h1>
        <p className="text-gray-400 mt-2">
          Contributing to open source projects I use and believe in.
        </p>
      </div>

      {/* Timeline */}
      <div>
        {contributions.map((item, index) => (
          <ContributionCard key={item.id} {...item} index={index} />
        ))}
      </div>

    </div>
  )
}

export default OpenSource