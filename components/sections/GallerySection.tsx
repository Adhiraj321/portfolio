"use client";

import { ExternalLink } from "lucide-react";
import { CarouselSection } from "./CarouselSection";
import PortfolioGallery from "./PortfolioGallery";
import { MoreWorkSection } from "./MoreWorkSection";

export function GallerySection() {
    return (
        <section className="transition-all duration-300 space-y-12 lg:space-y-14">
            {/* Main Gallery Heading */}
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 transition-colors duration-300 tracking-wide uppercase">
                Gallery
            </h2>

            {/* Slideshow Subsection */}
            <div>
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold dark:text-white text-gray-900 transition-colors uppercase duration-300 tracking-wide">
                        Carousel
                    </h3>
                    <a
                        href="https://drive.google.com/drive/folders/1OaMJELGnfDOwwOOp_PME85e2Hcb7b1Cq?hl=nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs lg:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                    >
                        <span>View All</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
                <CarouselSection />
            </div>

            {/* Videos Subsection */}
            <div>
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold dark:text-white text-gray-900 transition-colors duration-300 tracking-wide">
                        VIDEOS
                    </h3>
                    <a
                        href="https://drive.google.com/drive/folders/10tBNoWqr6XP53kcgW9St1OklaehCLNv0?hl=nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs lg:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                    >
                        <span>View All</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
                <PortfolioGallery />
            </div>

            {/* More of My Work Subsection */}
            <div>
                <h3 className="text-xl lg:text-2xl font-bold dark:text-white text-gray-900 mb-4 lg:mb-6 transition-colors duration-300 tracking-wide">
                    MORE OF MY WORK
                </h3>
                <MoreWorkSection />
            </div>
        </section>
    );
}
