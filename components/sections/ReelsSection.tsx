"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Modal } from "./Modal";

const CircularGallery = dynamic(() => import("@/components/CircularGallery"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center dark:bg-white/5 bg-black/5 rounded-lg">
            <div className="animate-pulse dark:text-white/50 text-black/50">Loading reels...</div>
        </div>
    ),
});

const reels = [
    { title: "12 Years of Adsparkx", src: "/reels/12-years.mp4", poster: "/reels/12-years.jpg" },
    { title: "Mom Dialogues", src: "/reels/mom-dialogues.mp4", poster: "/reels/mom-dialogues.jpg" },
    { title: "Yoga Challenge", src: "/reels/yoga-challenge.mp4", poster: "/reels/yoga-challenge.jpg" },
    { title: "Corporate Jutsu", src: "/reels/corporate-jutsu.mp4", poster: "/reels/corporate-jutsu.jpg" },
    { title: "Men's Day", src: "/reels/mens-day.mp4", poster: "/reels/mens-day.jpg" },
    { title: "We're Hiring", src: "/reels/hiring.mp4", poster: "/reels/hiring.jpg" },
];

const galleryItems = reels.map((r) => ({ image: r.src, text: r.title }));

export function ReelsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [handle, setHandle] = useState<{ scrollLeft: () => void; scrollRight: () => void } | null>(null);
    const gridRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Bring the clicked reel into view once the modal has mounted
    useEffect(() => {
        if (activeIndex === null) return;
        const t = setTimeout(() => {
            gridRefs.current[activeIndex]?.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 280);
        return () => clearTimeout(t);
    }, [activeIndex]);

    return (
        <section className="w-full px-2 sm:px-4">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
                <div className="w-full h-full touch-pan-x">
                    <CircularGallery
                        items={galleryItems}
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                        scrollSpeed={3}
                        font="bold 16px Inter, sans-serif"
                        onReady={setHandle}
                        onItemClick={(i) => setActiveIndex(i % reels.length)}
                    />
                </div>

                <button
                    onClick={() => handle?.scrollLeft()}
                    className="hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full dark:bg-white/10 bg-black/10 dark:hover:bg-white/20 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 items-center justify-center group"
                    aria-label="Scroll left"
                >
                    <svg className="w-6 h-6 dark:text-white text-gray-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => handle?.scrollRight()}
                    className="hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full dark:bg-white/10 bg-black/10 dark:hover:bg-white/20 hover:bg-black/20 backdrop-blur-sm transition-all duration-300 items-center justify-center group"
                    aria-label="Scroll right"
                >
                    <svg className="w-6 h-6 dark:text-white text-gray-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <p className="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                Drag to browse · Click a reel to watch them all
            </p>

            <Modal open={activeIndex !== null} onClose={() => setActiveIndex(null)} title="Reels & Video" className="max-w-6xl">
                <div className="p-3 sm:p-5 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {reels.map((r, i) => (
                        <div
                            key={r.src}
                            ref={(el) => { gridRefs.current[i] = el; }}
                            className={`rounded-xl overflow-hidden bg-black border ${i === activeIndex ? "border-blue-400/70" : "border-white/10"}`}
                        >
                            {/* Autoplay requires muted; users can unmute from the controls */}
                            <video
                                src={r.src}
                                poster={r.poster}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                preload="metadata"
                                className="w-full aspect-[9/16] object-contain bg-black"
                            />
                            <p className="px-3 py-2 text-xs sm:text-sm text-white/90 font-medium">{r.title}</p>
                        </div>
                    ))}
                </div>
            </Modal>
        </section>
    );
}
