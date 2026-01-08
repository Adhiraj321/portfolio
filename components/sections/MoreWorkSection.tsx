"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const moreWorkImages = [
    "/more/WhatsApp Image 2026-01-08 at 18.16.46.jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.47.jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.48 (1).jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.49.jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.49 (1).jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.49 (2).jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.49 (3).jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.50.jpeg",
    "/more/WhatsApp Image 2026-01-08 at 18.16.50 (1).jpeg",
];

export function MoreWorkSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const totalItems = moreWorkImages.length;
    const radius = 400; // Radius of the circular path
    const angleStep = 360 / totalItems;

    useEffect(() => {
        if (!carouselRef.current) return;

        // Position items in a circular arrangement
        itemsRef.current.forEach((item, index) => {
            if (!item) return;

            const angle = (index - currentIndex) * angleStep;
            const radian = (angle * Math.PI) / 180;

            const x = Math.sin(radian) * radius;
            const z = Math.cos(radian) * radius - radius;
            const scale = Math.cos(radian) * 0.5 + 0.5; // Scale based on position
            const opacity = Math.cos(radian) * 0.5 + 0.5; // Fade based on position

            gsap.to(item, {
                x: x,
                z: z,
                scale: scale,
                opacity: opacity,
                rotateY: -angle * 0.5,
                duration: 0.8,
                ease: "power2.out",
            });
        });
    }, [currentIndex]);

    useEffect(() => {
        // Auto-play
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalItems);
        }, 4000);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, []);

    const goToPrevious = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const goToNext = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    return (
        <div className="relative w-full overflow-hidden py-8 bg-white dark:bg-transparent rounded-xl">
            {/* 3D Carousel Container */}
            <div
                ref={carouselRef}
                className="relative h-[400px] md:h-[500px] lg:h-[600px]"
                style={{ perspective: "1200px" }}
            >
                <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                    {moreWorkImages.map((image, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                            style={{
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                            }}
                            onClick={() => {
                                if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                                setCurrentIndex(index);
                            }}
                        >
                            <img
                                src={image}
                                alt={`Work ${index + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay for non-active items */}
                            {index !== currentIndex && (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={goToPrevious}
                    className="bg-black/80 dark:bg-white/80 hover:bg-black dark:hover:bg-white text-white dark:text-black p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Slide Indicator */}
                <div className="bg-black/70 dark:bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {currentIndex + 1} / {totalItems}
                </div>

                <button
                    onClick={goToNext}
                    className="bg-black/80 dark:bg-white/80 hover:bg-black dark:hover:bg-white text-white dark:text-black p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 active:scale-95"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {moreWorkImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                            setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-blue-600 dark:bg-blue-400 w-8"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
