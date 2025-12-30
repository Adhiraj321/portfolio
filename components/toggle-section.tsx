// components/toggle-section.tsx
"use client";

import { useState } from "react";

type TabType = "education" | "experience";

interface ToggleSectionProps {
  educationContent: React.ReactNode;
  experienceContent: React.ReactNode;
}

export function ToggleSection({ educationContent, experienceContent }: ToggleSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "education"
                ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "experience"
                ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Experience
          </button>
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeTab === "education" ? educationContent : experienceContent}
      </div>
    </div>
  );
}