"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideshowImages = [
    "/slideshow/WhatsApp Image 2026-01-08 at 17.36.58.webp",
    "/slideshow/WhatsApp Image 2026-01-08 at 17.36.59.webp",
    "/slideshow/WhatsApp Image 2026-01-08 at 17.36.59 (1).webp",
    "/slideshow/WhatsApp Image 2026-01-08 at 17.36.59 (2).jpeg",
    "/slideshow/WhatsApp Image 2026-01-08 at 17.37.00.webp",
    "/slideshow/WhatsApp Image 2026-01-08 at 17.37.00 (1).webp",
];

export function CarouselSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const totalItems = slideshowImages.length;

    // ===== Cinematic Editorial Config =====
    // Perspective: 1200-1600px as requested
    const radius = -1400; // Gentle arc radius
    const angleStepDeg = -13; // 12deg rotation per slide
    const centerZBoost = -120; // Center slide +120px forward
    const sideZ = 100; // Side slides -40px back

    const normalizedIndex = ((currentIndex % totalItems) + totalItems) % totalItems;

    // Swipe/Drag Logic
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        touchStartX.current = x;
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        touchEndX.current = x;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (distance > threshold) {
            goToNext();
        } else if (distance < -threshold) {
            goToPrevious();
        }

        // Reset
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    useEffect(() => {
        if (!carouselRef.current) return;

        itemsRef.current.forEach((item, index) => {
            if (!item) return;

            // Calculate shortest angular distance for infinite wrapping
            const rawDiff = (index - currentIndex) % totalItems;
            const diff = (rawDiff + totalItems * 1.5) % totalItems - totalItems / 2;
            const dist = Math.abs(diff);

            // Rotation: ±12deg per step from center
            const rotateY = diff * angleStepDeg;

            // Horizontal position along gentle arc
            const radian = (rotateY * Math.PI) / 180;
            const x = Math.sin(radian) * radius;

            // DEPTH ILLUSION (replaces scale):
            // Center (diff=0): translateZ(+120px), Zero rotation
            // Side slides: translateZ(-40px), rotateY(±12deg)
            // Gaussian falloff for smooth depth transition
            const depthFactor = Math.exp(-dist * dist * 2);
            const z = sideZ + (centerZBoost - sideZ) * depthFactor;

            // Visibility: only show nearby slides
            const isVisible = dist < 2.5;

            // Z-INDEX: Center slide highest, far slides (wrapping) go way behind
            // Slides at dist >= 2 get negative z-index to pass behind everything
            const zIndex = dist < 2 ? Math.round(10 - dist * 3) : -10;

            // Dynamic shadow: intensifies slightly on center
            const shadowIntensity = 0.15 + depthFactor * 0.25;
            const shadowBlur = 30 + depthFactor * 20;

            // For far slides (wrapping around), use instant positioning to avoid crossing in front
            const animDuration = dist > 2 ? 0 : 1.0;

            gsap.to(item, {
                x: x,
                y: 0, // Prevent vertical jumping
                z: dist > 2 ? -500 : z, // Push wrapping slides far back
                rotateY: rotateY,
                opacity: isVisible ? 1 : 0,
                scale: 1, // NO SCALE - depth replaces scaling
                display: isVisible ? "block" : "none",
                zIndex: zIndex, // Proper stacking order - wrapping slides behind
                boxShadow: `0 ${15 + depthFactor * 10}px ${shadowBlur}px -10px rgba(0,0,0,${shadowIntensity})`,
                duration: animDuration,
                ease: "power3.out", // Cinematic ease
                force3D: true, // GPU acceleration
            });
        });
    }, [currentIndex, totalItems]);

    useEffect(() => {
        // Auto-play
        autoPlayRef.current = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 4000);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, []);

    const goToPrevious = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        setCurrentIndex((prev) => prev - 1);
    };

    const goToNext = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        setCurrentIndex((prev) => prev + 1);
    };

    const handleItemClick = (index: number) => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);

        // Shortest path click navigation
        const diff = (index - normalizedIndex + totalItems) % totalItems;
        const shortestDiff = diff > totalItems / 2 ? diff - totalItems : diff;
        setCurrentIndex(prev => prev + shortestDiff);
    };

    return (
        <section className="relative w-full overflow-hidden py-4 pb-6">

            {/* Left Navigation Button */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 border border-white/10 backdrop-blur-md transition-all shadow-lg group"
            >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 border border-white/10 backdrop-blur-md transition-all shadow-lg group"
            >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* 3D Scene Container */}
            <div
                ref={carouselRef}
                className="relative h-[500px] md:h-[600px] touch-pan-y cursor-grab active:cursor-grabbing"
                style={{ perspective: "2500px" }} // Flatter perspective
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
            >
                <div className="relative w-full h-full flex justify-center items-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                    {slideshowImages.map((image, index) => (
                        <div
                            key={index}
                            ref={(el) => { itemsRef.current[index] = el; }}
                            // Dimensions: Fixed large width to match 'itemWidth' for seamless look
                            // Removed borders, large radius, and shadows for "Ribbon" look
                            className="absolute w-[320px] h-[450px] overflow-hidden cursor-pointer pointer-events-auto shadow-2xl"
                            style={{
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden",
                                left: "50%",
                                top: "50%",
                                marginLeft: "-160px", // Half of 320
                                marginTop: "-225px", // Half of 450
                                willChange: "transform, opacity",
                                transformOrigin: "center center",
                            }}
                            onClick={() => handleItemClick(index)}
                        >
                            {/* Main Image */}
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="relative z-10 w-full h-full object-cover"
                            />

                            {/* Reflection/Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Active State Highlight/Dim */}
                            <div className={`absolute inset-0 transition-all duration-500 ${index === normalizedIndex ? "bg-transparent ring-0" : "bg-black/30 backdrop-blur-[1px]"}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
