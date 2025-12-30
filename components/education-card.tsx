interface EducationCardProps {
  degree: string
  institution: string
  location: string
  duration: string
  isLast?: boolean
  isLearning?: boolean
  learningItems?: string[]
}

export function EducationCard({
  degree = "",
  institution = "",
  location = "",
  duration = "",
  isLast = false,
  isLearning = false,
  learningItems = [],
}: EducationCardProps) {
  const getIcon = () => {
    if (degree.toLowerCase().includes("bachelor")) {
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
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      )
    } else if (degree.toLowerCase().includes("intermediate")) {
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
          <path d="M12 7v14" />
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
      )
    }
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
        <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
        <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" />
        <path d="M18 5v17" />
        <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" />
        <path d="M6 5v17" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    )
  }

  if (isLearning) {
    return (
      <div className="relative pb-8">
        <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500/10 dark:bg-blue-400/20 border-2 border-blue-500/30 dark:border-blue-400/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
          </svg>
        </div>

        {!isLast && <div className="absolute left-5 top-10 w-0.5 h-12 bg-gradient-to-b from-blue-500/30 to-blue-500/10 dark:from-blue-400/30 dark:to-blue-400/10"></div>}

        <div className="ml-12">
          <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-3">{degree}</h3>
          <ul className="space-y-2">
            {learningItems?.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-700 dark:text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pb-4">
      <div className="absolute left-0 top-0 w-8 h-8 bg-white/10 dark:bg-white/10 border-2 border-gray-300 dark:border-white/30 rounded-full flex items-center justify-center text-gray-700 dark:text-white/70">
        {getIcon()}
      </div>

      {!isLast && <div className="absolute left-4 top-8 w-0.5 h-10 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-white/30 dark:to-white/10"></div>}

      <div className="ml-12">
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
          {degree}
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-white/70 mt-0.5">{institution}</p>
        {location && (
          <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs mt-0.5">
            {location}
          </p>
        )}
        <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs mt-0.5">{duration}</p>
      </div>
    </div>
  )
}
