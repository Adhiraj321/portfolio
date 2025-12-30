"use client";

import CountUp from "@/components/CountUp";

export function MetricsSection() {
    return (
        <section className="transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
                Impact & Results
            </h2>

            <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 lg:gap-6">
                {/* Total Reach */}
                <div className="text-center">
                    <div className="pb-1 sm:pb-2">
                        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                            <div className="text-sm xs:text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 tabular-nums whitespace-nowrap">
                                <CountUp from={0} to={50} separator="," direction="up" duration={2} />K+
                            </div>
                            <div className="text-[10px] xs:text-xs sm:text-sm font-semibold dark:text-gray-300 text-gray-700 uppercase tracking-wide">
                                Reach
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campaigns Led */}
                <div className="text-center">
                    <div className="pb-1 sm:pb-2">
                        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                            <div className="text-sm xs:text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 tabular-nums whitespace-nowrap">
                                <CountUp from={0} to={15} direction="up" duration={2} delay={0.2} />+
                            </div>
                            <div className="text-[10px] xs:text-xs sm:text-sm font-semibold dark:text-gray-300 text-gray-700 uppercase tracking-wide">
                                Campaigns
                            </div>
                        </div>
                    </div>
                </div>

                {/* Avg Engagement */}
                <div className="text-center">
                    <div className="pb-1 sm:pb-2">
                        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                            <div className="text-sm xs:text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 tabular-nums whitespace-nowrap">
                                <CountUp from={0} to={12} direction="up" duration={2} delay={0.4} />%
                            </div>
                            <div className="text-[10px] xs:text-xs sm:text-sm font-semibold dark:text-gray-300 text-gray-700 uppercase tracking-wide">
                                Engagement
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="text-center">
                    <div className="pb-1 sm:pb-2">
                        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                            <div className="text-sm xs:text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 tabular-nums whitespace-nowrap">
                                <CountUp from={0} to={20} direction="up" duration={2} delay={0.6} />+
                            </div>
                            <div className="text-[10px] xs:text-xs sm:text-sm font-semibold dark:text-gray-300 text-gray-700 uppercase tracking-wide">
                                Team
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}