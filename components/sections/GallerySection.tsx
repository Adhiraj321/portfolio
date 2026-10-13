"use client";

import { ExternalLink } from "lucide-react";
import { CarouselSection } from "./CarouselSection";
import { ReelsSection } from "./ReelsSection";
import { EditorialSection } from "./EditorialSection";
import { BrandStrategySection } from "./BrandStrategySection";

const viewAllClass =
    "flex items-center gap-1.5 text-xs lg:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium";
const h3Class =
    "text-xl lg:text-2xl font-bold dark:text-white text-gray-900 transition-colors duration-300 tracking-wide uppercase";

export function GallerySection() {
    return (
        <section className="transition-all duration-300 space-y-12 lg:space-y-14">
            {/* Main Heading */}
            <div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 transition-colors duration-300 tracking-wide uppercase">
                    My Work
                </h2>
                <p className="mt-3 text-sm lg:text-base dark:text-gray-400 text-gray-600 max-w-2xl">
                    A collection of ideas brought to life through content strategy and ideation, storytelling and creative execution
                </p>
            </div>

            {/* Reels & Video */}
            <div>
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <h3 className={h3Class}>Reels &amp; Video</h3>
                    <a href="https://drive.google.com/drive/folders/10tBNoWqr6XP53kcgW9St1OklaehCLNv0?hl=nl" target="_blank" rel="noopener noreferrer" className={viewAllClass}>
                        <span>View All</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
                <ReelsSection />
            </div>

            {/* Carousel */}
            <div>
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <h3 className={h3Class}>Carousel</h3>
                    <a href="https://drive.google.com/drive/folders/1OaMJELGnfDOwwOOp_PME85e2Hcb7b1Cq?hl=nl" target="_blank" rel="noopener noreferrer" className={viewAllClass}>
                        <span>View All</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
                <CarouselSection />
            </div>

            {/* Editorial & Other Work */}
            <div>
                <h3 className={`${h3Class} mb-4 lg:mb-6`}>Editorial &amp; Other Work</h3>
                <EditorialSection />
            </div>

            {/* Brand Strategy & Copywriting */}
            <div>
                <h3 className={`${h3Class} mb-2`}>Brand Strategy &amp; Copywriting</h3>
                <p className="mb-4 lg:mb-6 text-sm lg:text-base dark:text-gray-400 text-gray-600 max-w-2xl">
                    A selection of independent projects and assignments exploring brand positioning, creative concepts, strategic communication and copywriting.
                </p>
                <BrandStrategySection />
            </div>
        </section>
    );
}
