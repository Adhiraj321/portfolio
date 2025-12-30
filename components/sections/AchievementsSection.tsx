"use client";

import FlowingMenu from "@/components/FlowingMenu";
import { detailedAchievements } from "@/lib/constants";

// Map achievements to FlowingMenu items
const achievementMenuItems = detailedAchievements.map(achievement => ({
    link: "#achievements",
    title: `${achievement.icon} ${achievement.title}`,
    description: achievement.description,
    image: ""
}));

export function AchievementsSection() {
    return (
        <section className="transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
                Leadership & Achievements
            </h2>

            {/* FlowingMenu Component */}
            <div className="h-[260px] rounded-lg overflow-hidden dark:bg-[#0E0E10] bg-[#FAFAFA]">
                <FlowingMenu items={achievementMenuItems} />
            </div>
        </section>
    );
}
