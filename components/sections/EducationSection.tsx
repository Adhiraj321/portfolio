"use client";

import { EducationCard } from "@/components/education-card";
import { educationData } from "@/lib/constants";

export function EducationSection() {
    return (
        <section className="transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300">
                Education
            </h2>
            <div className="space-y-4">
                {educationData.map((edu, index) => (
                    <EducationCard
                        key={index}
                        degree={edu.degree}
                        institution={edu.institution}
                        location={edu.location}
                        duration={edu.duration}
                    />
                ))}
            </div>
        </section>
    );
}
