import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'


const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M5.34 3.25a2.09 2.09 0 1 1 0 4.18 2.09 2.09 0 0 1 0-4.18ZM3.54 8.92h3.6v11.83h-3.6V8.92Zm5.86 0h3.45v1.62h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52v6.56h-3.59v-5.82c0-1.39-.03-3.17-1.93-3.17-1.94 0-2.24 1.51-2.24 3.07v5.92H9.4V8.92Z" />
  </svg>
)

const XIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M13.9 10.47 21.35 2h-1.77l-6.47 7.35L7.95 2H2l7.81 11.12L2 22h1.77l6.83-7.76L16.05 22H22l-8.1-11.53Zm-2.42 2.75-.79-1.11L4.4 3.31h2.7l5.08 7.11.79 1.11 6.61 9.25h-2.7l-5.4-7.56Z" />
  </svg>
)

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-16">
      
      {/* Left — Text */}
      <div className="flex flex-col gap-3">
        
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
          Hi, I'm Jatin
        </h1>

        <p className="text-sm md:text-base xl:text-lg text-gray-500 font-normal max-w-sm">
          Building{" "}
          <span className="text-gray-900 font-medium">DevOnboard</span>{" "}
          to solve developer's onboarding
        </p>

        <a
          href="mailto:jatinrsaini@gmail.com"
          className="text-sm md:text-base text-gray-400 hover:text-gray-900 transition-colors duration-200 w-fit flex items-center gap-1"
        >
          <MdOutlineEmail size={16} />
          jatinrsaini@gmail.com
        </a>

      </div>

      {/* Right — Status + Social */}
      <div className="flex flex-row md:flex-col items-end gap-36 md:gap-4 shrink-0 mt-4 md:mt-0">

        {/* Status Badge */}
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-green-700 text-xs font-medium">Open to work</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Jatin-saini-developer"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            <GithubIcon />
          </a>

          <a
            href="http://linkedin.com/in/jatin-saini-578693318"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            <LinkedinIcon />
          </a>

          <a
            href="https://x.com/Jatin___Saini"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            <XIcon />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Header
