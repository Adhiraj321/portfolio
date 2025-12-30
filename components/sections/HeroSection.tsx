"use client";

import { MapPin, Mail, Calendar } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SocialLinks } from "@/components/SocialLinks";
import { socialLinks } from "@/lib/constants";
import TiltedCard from "../TiltedCard";

import Magnet from "../MagnetBtn";
import { useEffect } from "react";

interface HeroSectionProps {
    theme: "dark" | "light";
    onThemeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onContactClick: () => void;
}

export function HeroSection({ theme, onThemeToggle, onContactClick }: HeroSectionProps) {
    

    return (
        <div className="w-full lg:w-2/5 xl:w-[38%] 2xl:w-[35%] p-4 sm:p-6 lg:p-8 xl:p-10 lg:sticky lg:top-0 lg:h-screen transition-colors duration-500 dark:bg-[#0E0E10] bg-[#FAFAFA] border-b lg:border-b-0 lg:border-r dark:border-white/10 border-black/10 relative">
            {/* Diagonal Fade Grid Background - Top Left */}
            <div
                className="absolute inset-0 z-0 dark:opacity-20 opacity-30"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
                    maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
                    color: "rgb(209, 213, 219)", // gray-300
                }}
            ></div>

            <div className="flex flex-col space-y-3 lg:space-y-4 max-w-md mx-auto lg:max-w-none relative z-10">

                {/* Theme Toggle - Right Aligned */}
                <div className="flex justify-end items-center gap-4">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                </div>


                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start -mt-2">
                    <TiltedCard
                        imageSrc="/profile.jpeg"
                        altText="Kanishk Trikha"
                        captionText="Kanishk"
                        containerHeight="144px"
                        containerWidth="144px"
                        imageHeight="144px"
                        imageWidth="144px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent
                        className="rounded-full"
                    />
                </div>


                {/* Name and Title */}
                <div className="space-y-2 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 transition-colors duration-300 leading-tight tracking-wide">
                        Kanishk Trikha
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl dark:text-gray-300 text-gray-600 transition-colors duration-300">
                        Marketing & Commerce Professional
                    </p>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center lg:justify-start space-x-2 dark:text-white/80 text-gray-600 transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>Delhi, India</span>
                    <span>🇮🇳</span>
                </div>

                {/* Tagline */}
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed transition-colors duration-300 text-center lg:text-left text-sm lg:text-base">
                    Passionate about Marketing, Commerce, and Strategic Communication with hands-on experience in data-driven campaigns and team leadership
                </p>

                {/* Social Links */}
                <SocialLinks links={socialLinks} />

                {/* Call to Action Section */}
                <div className="pt-2 lg:pt-4 space-y-4 text-center lg:text-left">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold dark:text-gray-200 text-gray-800 transition-colors duration-300">
                        Want to Work Together?
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                        {/* Get in Touch button */}
                        <Magnet padding={50} disabled={false} magnetStrength={50}>
                            <button
                                onClick={onContactClick}
                                className="group flex flex-col items-center justify-center gap-1 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 min-h-[68px] w-full sm:w-auto"
                            >
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    <span className="font-semibold text-sm sm:text-base">Get in Touch</span>
                                </div>
                            </button>
                        </Magnet>

                      
                    </div>
                </div>
            </div>
        </div>
    );
}
