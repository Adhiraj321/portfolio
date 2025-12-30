"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/hooks/useTheme";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationExperienceSection } from "@/components/sections/EducationExperienceSection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Toast } from "./components/toast";
import { PortfolioStructuredData } from "@/components/PortfolioStructuredData";

// Lazy load heavy components for better performance
const ChatBot = dynamic(() => import("./components/chat-bot").then(mod => ({ default: mod.ChatBot })), {
  ssr: false,
  loading: () => null
});

const ContactModal = dynamic(() => import("./components/contact-modal").then(mod => ({ default: mod.ContactModal })), {
  ssr: false
});

export default function Portfolio() {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  const handleContactSubmit = (success: boolean, message: string) => {
    setToast({
      message,
      type: success ? "success" : "error",
      isVisible: true,
    });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="min-h-screen transition-colors duration-500 dark:bg-[#0E0E10] bg-[#FAFAFA] dark:text-gray-100 text-gray-900"
      suppressHydrationWarning
    >
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <HeroSection
          theme={theme}
          onThemeToggle={toggleTheme}
          onContactClick={() => setIsContactModalOpen(true)}
        />

        {/* Main Content */}
        <div className="w-full lg:w-3/5 xl:w-[62%] 2xl:w-[65%] p-4 sm:p-6 lg:p-8 xl:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto lg:mx-0 space-y-12 lg:space-y-14">
            <AboutSection />

            <MetricsSection />
            <ServicesSection />
            <EducationExperienceSection />
            <PortfolioGallery />
            <AchievementsSection />
          </div>
        </div>
      </div>

      {/* Chat Bot */}
      <ChatBot />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSubmit={handleContactSubmit}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      {/* SEO Structured Data */}
      <PortfolioStructuredData />
    </div>
  );
}
