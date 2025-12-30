"use client";

import { skills } from "@/lib/constants";

export function SkillsSection() {
    return (
        <section className="transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
                Skills & Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Marketing Skills */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b dark:border-white/10 border-black/10">
                        <div className="w-8 h-8 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center text-lg">
                            📱
                        </div>
                        <h3 className="text-sm lg:text-base font-semibold dark:text-white text-gray-900">
                            Marketing
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        {skills.marketing.map((skill, index) => (
                            <div key={index}>
                                <div className="mb-1.5">
                                    <span className="text-xs lg:text-sm font-medium dark:text-gray-300 text-gray-700">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className="relative w-full h-1 dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full dark:bg-white bg-black rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Design Skills */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b dark:border-white/10 border-black/10">
                        <div className="w-8 h-8 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center text-lg">
                            🎨
                        </div>
                        <h3 className="text-sm lg:text-base font-semibold dark:text-white text-gray-900">
                            Design
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        {skills.design.map((skill, index) => (
                            <div key={index}>
                                <div className="mb-1.5">
                                    <span className="text-xs lg:text-sm font-medium dark:text-gray-300 text-gray-700">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className="relative w-full h-1 dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full dark:bg-white bg-black rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Analytics Skills */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b dark:border-white/10 border-black/10">
                        <div className="w-8 h-8 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center text-lg">
                            📊
                        </div>
                        <h3 className="text-sm lg:text-base font-semibold dark:text-white text-gray-900">
                            Analytics
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        {skills.analytics.map((skill, index) => (
                            <div key={index}>
                                <div className="mb-1.5">
                                    <span className="text-xs lg:text-sm font-medium dark:text-gray-300 text-gray-700">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className="relative w-full h-1 dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full dark:bg-white bg-black rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Skills */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b dark:border-white/10 border-black/10">
                        <div className="w-8 h-8 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center text-lg">
                            🎯
                        </div>
                        <h3 className="text-sm lg:text-base font-semibold dark:text-white text-gray-900">
                            Strategic
                        </h3>
                    </div>
                    <div className="space-y-2.5">
                        {skills.strategic.map((skill, index) => (
                            <div key={index}>
                                <div className="mb-1.5">
                                    <span className="text-xs lg:text-sm font-medium dark:text-gray-300 text-gray-700">
                                        {skill.name}
                                    </span>
                                </div>
                                <div className="relative w-full h-1 dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full dark:bg-white bg-black rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
