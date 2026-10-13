"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "./Modal";

interface CarouselModalProps {
    set: { title: string; images: string[] } | null;
    onClose: () => void;
}

export function CarouselModal({ set, onClose }: CarouselModalProps) {
    const [index, setIndex] = useState(0);
    const touchX = useRef<number | null>(null);
    // Keep the last set so the content doesn't vanish during the exit animation
    const lastSet = useRef(set);
    if (set) lastSet.current = set;
    const current = set ?? lastSet.current;
    const total = current?.images.length ?? 0;

    useEffect(() => {
        if (set) setIndex(0);
    }, [set]);

    const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
    const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

    useEffect(() => {
        if (!set) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [set, prev, next]);

    // Preload neighbours so navigation feels instant
    useEffect(() => {
        if (!current) return;
        [index + 1, index - 1].forEach((i) => {
            const img = new Image();
            img.src = current.images[(i + total) % total];
        });
    }, [index, current, total]);

    return (
        <Modal open={!!set} onClose={onClose} title={current ? `${current.title} · ${index + 1}/${total}` : ""} className="max-w-4xl">
            {current && (
                <div className="flex flex-col">
                    <div
                        className="relative flex items-center justify-center bg-black h-[62vh] sm:h-[68vh] select-none"
                        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                        onTouchEnd={(e) => {
                            if (touchX.current === null) return;
                            const dx = e.changedTouches[0].clientX - touchX.current;
                            if (dx > 50) prev();
                            else if (dx < -50) next();
                            touchX.current = null;
                        }}
                    >
                        <img
                            key={current.images[index]}
                            src={current.images[index]}
                            alt={`${current.title} ${index + 1}`}
                            className="max-w-full max-h-full object-contain animate-in fade-in duration-300"
                            draggable={false}
                        />
                        {total > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={next}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnail strip */}
                    <div className="flex gap-2 overflow-x-auto p-3 border-t border-white/10">
                        {current.images.map((src, i) => (
                            <button
                                key={src}
                                onClick={() => setIndex(i)}
                                className={`shrink-0 w-14 h-[70px] rounded-md overflow-hidden border-2 transition-all ${i === index ? "border-blue-400 opacity-100" : "border-transparent opacity-50 hover:opacity-90"}`}
                                aria-label={`Go to image ${i + 1}`}
                            >
                                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </Modal>
    );
}
