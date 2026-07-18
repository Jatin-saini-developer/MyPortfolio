const ProjectCard = ({ title, description, tags, links }) => {
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5 flex flex-col gap-4">
        
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-[#222] text-gray-300 text-xs px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        {links.map(link => (
          <a
            key={link.label}
            href={link.url}
            className="border border-[#333] text-gray-300 text-sm px-3 py-1 rounded-md hover:bg-[#222]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
