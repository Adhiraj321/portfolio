"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { marketingCampaigns } from '@/lib/constants';

// Lazy load CircularGallery for better performance
const CircularGallery = dynamic(() => import('@/components/CircularGallery'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center dark:bg-white/5 bg-black/5 rounded-lg">
            <div className="animate-pulse dark:text-white/50 text-black/50">Loading gallery...</div>
        </div>
    )
});

// Convert marketing campaigns to CircularGallery format
const galleryItems = marketingCampaigns.map(campaign => ({
    image: campaign.video || campaign.image || '',
    text: campaign.title,
    isVideo: !!campaign.video
}));

export default function PortfolioGallery() {
    const { theme } = useTheme();
    const [galleryHandle, setGalleryHandle] = useState<{
        scrollLeft: () => void;
        scrollRight: () => void;
    } | null>(null);

    return (
        <section className="transition-all duration-300 w-full px-2 sm:px-4">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-3 lg:mb-4 transition-colors duration-300 tracking-wide uppercase px-2 sm:px-0">
                Gallery
            </h2>
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
                <div className="w-full h-full touch-pan-x">
                    <CircularGallery
                        items={galleryItems}
                        bend={1}
                        textColor={theme === 'dark' ? '#ffffff' : '#000000'}
                        borderRadius={0.05}
                        scrollEase={0.02}
                        scrollSpeed={2}
                        font="bold 16px Inter, sans-serif"
                        onReady={setGalleryHandle}
                    />
                </div>

                {/* Navigation Buttons - Hidden on mobile, shown on md and up */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        galleryHandle?.scrollLeft();
                    }}
                    className="hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full dark:bg-white/10 bg-black/10 dark:hover:bg-white/20 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 items-center justify-center group"
                    aria-label="Scroll left"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 dark:text-white text-gray-900 group-hover:scale-110 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        galleryHandle?.scrollRight();
                    }}
                    className="hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full dark:bg-white/10 bg-black/10 dark:hover:bg-white/20 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 items-center justify-center group"
                    aria-label="Scroll right"
                >
                    <svg
                        className="w-5 h-5 md:w-6 md:h-6 dark:text-white text-gray-900 group-hover:scale-110 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Mobile navigation indicators */}
                <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {galleryItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                // Optional: Add logic to scroll to specific item
                            }}
                            className="w-2 h-2 rounded-full bg-white/50 transition-all"
                            aria-label={`Go to item ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Mobile swipe hint */}
            <p className="md:hidden text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                Swipe left or right to navigate
            </p>
        </section>
    );
}
