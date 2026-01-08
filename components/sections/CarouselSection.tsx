"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

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
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.8,
        }),
    };

    return (
        <section className="transition-all duration-300">
            {/* Carousel Container */}
            <motion.div
                className="relative group max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Main Image Display */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={slideshowImages[currentIndex]}
                            alt={`Slideshow image ${currentIndex + 1}`}
                            className="w-full h-full object-contain"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 400, damping: 35 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.2 },
                            }}
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <motion.button
                        onClick={goToPrevious}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 dark:bg-white/80 hover:bg-black dark:hover:bg-white text-white dark:text-black p-1.5 lg:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                        aria-label="Previous slide"
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                    </motion.button>

                    <motion.button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 dark:bg-white/80 hover:bg-black dark:hover:bg-white text-white dark:text-black p-1.5 lg:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
                        aria-label="Next slide"
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </motion.button>

                    {/* Slide Counter */}
                    <motion.div
                        className="absolute bottom-3 right-3 bg-black/70 dark:bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {currentIndex + 1} / {slideshowImages.length}
                    </motion.div>

                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-1.5 mt-3">
                    {slideshowImages.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-blue-600 dark:bg-blue-400 w-6"
                                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-1.5"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
