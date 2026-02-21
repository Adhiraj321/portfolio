"use client";

import { MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SocialLinks } from "@/components/SocialLinks";
import { socialLinks } from "@/lib/constants";
import TiltedCard from "../TiltedCard";



interface HeroSectionProps {
    theme: "dark" | "light";
    onThemeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function HeroSection({ theme, onThemeToggle }: HeroSectionProps) {


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

            <div className="flex flex-col justify-center space-y-5 lg:space-y-6 max-w-md mx-auto lg:max-w-none relative z-10 min-h-full">

                {/* Theme Toggle - Right Aligned */}
                <div className="flex justify-end items-center gap-4">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                </div>

                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                    <TiltedCard
                        imageSrc="/profile.webp"
                        altText="Kanishk Trikha"
                        captionText="Kanishk"
                        containerHeight="160px"
                        containerWidth="160px"
                        imageHeight="160px"
                        imageWidth="160px"
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
                <div className="flex items-center justify-center lg:justify-start space-x-2 dark:text-white/80 text-gray-600 transition-colors duration-300 text-sm lg:text-base">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>Delhi, India</span>
                    <span>🇮🇳</span>
                </div>

                {/* Tagline */}
                <p className="dark:text-gray-400 text-gray-600 leading-relaxed transition-colors duration-300 text-center lg:text-left text-sm lg:text-base max-w-sm">
                    Passionate about Marketing, Commerce, and Strategic Communication with hands-on experience in data-driven campaigns and team leadership
                </p>

                {/* Resume Button + Social Links */}
                <div className="pt-2">
                    <SocialLinks links={socialLinks} />
                </div>

            </div>
        </div>
    );
}
