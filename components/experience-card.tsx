interface ExperienceCardProps {
  position: string
  company: string
  location: string
  duration: string
  isLast?: boolean
}

export function ExperienceCard({
  position,
  company,
  location,
  duration,
  isLast = false,
}: ExperienceCardProps) {
  const getIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }

  return (
    <div className="relative pb-8">
      <div className="absolute left-0 top-0 w-10 h-10 bg-white/10 dark:bg-white/10 border-2 border-gray-300 dark:border-white/30 rounded-full flex items-center justify-center text-gray-700 dark:text-white/70">
        {getIcon()}
      </div>

      {!isLast && <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-white/30 dark:to-white/10"></div>}

      <div className="ml-16">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{position}</h3>
        <p className="text-sm text-gray-700 dark:text-white/70 mb-2">{company}, {location}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-white/50">
          <span>{duration}</span>
        </div>
      </div>
    </div>
  )
}
