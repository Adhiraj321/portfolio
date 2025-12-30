"use client";

import { EducationCard } from "@/components/education-card";
import { educationData, detailedExperience } from "@/lib/constants";

export function EducationExperienceSection() {
  return (
    <section className="transition-all duration-300 space-y-12">
      {/* Education Section */}
      <div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
          Education
        </h2>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <EducationCard
              key={`edu-${index}`}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              duration={edu.duration}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
          Experience
        </h2>
        <div className="space-y-8">
          {detailedExperience.map((exp, index) => (
            <div key={`exp-${index}`} className="group">
              <div className="space-y-3">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700">
                    {exp.type}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{exp.duration}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < detailedExperience.length - 1 && (
                <div className="mt-8 border-b border-gray-200 dark:border-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
