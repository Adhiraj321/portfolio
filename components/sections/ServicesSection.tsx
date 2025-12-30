"use client";

import { services } from "@/lib/constants";
import SpotlightCard from "@/components/SpotlightCard";

// Icon components
const iconMap: Record<string, JSX.Element> = {
    target: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" strokeWidth="2" fill="currentColor" />
        </svg>
    ),
    social: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    design: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
    ),
    analytics: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    event: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
        </svg>
    ),
    leadership: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
            <circle cx="9" cy="7" r="4" strokeWidth="2" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
};

export function ServicesSection() {
    return (
        <section className="transition-all duration-300 px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-4 sm:mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
                What I Offer
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {services.map((service, index) => (
                    <SpotlightCard
                        key={index}
                        className="rounded-lg p-3 sm:p-4 md:p-5 border dark:border-white/10 border-black/10 dark:bg-[#0E0E10] bg-white transition-all duration-300 hover:border-black/20 dark:hover:border-white/20"
                        spotlightColor="rgba(255, 255, 255, 0.08)"
                    >
                        <div className="relative z-10 space-y-2 sm:space-y-3">
                            {/* Icon with background */}
                            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center p-1.5 sm:p-2 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:dark:bg-white/10 hover:bg-black/10">
                                {iconMap[service.icon]}
                            </div>

                            {/* Title */}
                            <h3 className="text-xs sm:text-sm lg:text-base font-semibold dark:text-white text-gray-900 leading-tight">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[10px] xs:text-xs sm:text-xs lg:text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
}