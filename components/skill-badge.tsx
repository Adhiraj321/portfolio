import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
  variant: "language" | "framework" | "backend" | "database" | "practice"
}

export function SkillBadge({ skill, variant }: SkillBadgeProps) {
  const variantStyles = {
    language: "dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/20 bg-gray-800/90 hover:bg-gray-900 text-white border border-gray-700 transition-colors duration-200",
    framework: "dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/20 bg-gray-800/90 hover:bg-gray-900 text-white border border-gray-700 transition-colors duration-200",
    backend: "dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/20 bg-gray-800/90 hover:bg-gray-900 text-white border border-gray-700 transition-colors duration-200",
    database: "dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/20 bg-gray-800/90 hover:bg-gray-900 text-white border border-gray-700 transition-colors duration-200",
    practice: "dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/20 bg-gray-800/90 hover:bg-gray-900 text-white border border-gray-700 transition-colors duration-200",
  }

  return <Badge className={`${variantStyles[variant]}`}>{skill}</Badge>
}
