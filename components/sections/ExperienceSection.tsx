"use client";

import { experienceData } from "@/lib/constants";

export function ExperienceSection() {
    return (
        <section className="transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300">
                Experience
            </h2>
            <div className="space-y-8 lg:space-y-10">
                {experienceData.map((exp, index) => (
                    <div key={index} className="relative pb-12 lg:pb-14">
                        <div className="absolute left-0 top-0 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 dark:bg-white/10 border-2 border-gray-300 dark:border-white/30 rounded-full flex items-center justify-center text-gray-700 dark:text-white/70">
                            {exp.icon === "location" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            )}
                        </div>
                        <div className="ml-16 lg:ml-20">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                {exp.title}
                            </h3>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-white/70 mb-2">{exp.company}</p>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-white/50 mb-3">{exp.duration}</p>
                            <ul className="space-y-2.5 lg:space-y-3 text-sm sm:text-base text-gray-700 dark:text-white/70">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-gray-500 dark:text-white/50 mr-2">•</span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
