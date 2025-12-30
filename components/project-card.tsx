"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { getTechIcon } from "@/lib/tech-logos";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  title: string;
  image: string;
  shortDescription?: string;
  description: string[];
  technologies: string[];
  liveDemo?: string;
  github?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  image,
  shortDescription,
  description,
  technologies,
  liveDemo,
  github,
  onClick
}: ProjectCardProps) {
  // Use shortDescription if available, otherwise use first description item
  const displayDescription = shortDescription || description[0];

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl dark:bg-black dark:border-white/10 dark:hover:border-white/20 bg-white border-black/10 hover:border-black/20 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-54 lg:h-58 overflow-hidden bg-black/5 dark:bg-white/5">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex flex-row
         justify-between">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold dark:text-white text-black mb-3 line-clamp-2">
            {title}
          </h3>
          {/* Action Buttons */}
          <TooltipProvider>
            <div className="flex gap-3 items-center">
              {github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="p-2 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 bg-black/5 hover:bg-black/10 transition-colors"
                    >
                      <Github className="h-5 w-5 dark:text-white text-black" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {liveDemo && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="p-2 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 bg-black/5 hover:bg-black/10 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 dark:text-white text-black" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </TooltipProvider>
        </div>

        {/* Description */}
        <p className="dark:text-white/70 text-black/70 text-sm sm:text-base mb-4 line-clamp-2 flex-1">
          {displayDescription}
        </p>

        {/* Technologies - Logo Icons */}
        <TooltipProvider>
          <div className="flex flex-wrap gap-3 mb-4 items-center">
            {technologies.slice(0, 8).map((tech, index) => {
              const Icon = getTechIcon(tech);

              if (!Icon) {
                // Fallback to badge if no icon found
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="dark:bg-white/10 dark:text-white dark:border-white/20 bg-black/5 text-black border-black/10 text-xs"
                  >
                    {tech}
                  </Badge>
                );
              }

              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="transition-transform hover:scale-110 cursor-pointer">
                      <Icon
                        className="w-6 h-6"
                        aria-label={tech}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            {technologies.length > 8 && (
              <Badge
                variant="secondary"
                className="dark:bg-white/10 dark:text-white dark:border-white/20 bg-black/5 text-black border-black/10 text-xs"
              >
                +{technologies.length - 8}
              </Badge>
            )}
          </div>
        </TooltipProvider>


      </div>
    </div>
  );
}
