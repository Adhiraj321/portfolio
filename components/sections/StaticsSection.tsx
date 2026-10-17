"use client";

import { CarouselSection, CarouselSet } from "./CarouselSection";
import staticsData from "@/lib/staticsData.json";

const { images, titles } = staticsData as { images: string[]; titles: string[] };

// Each static is its own slide; opening any of them shows the whole folder
const slides: CarouselSet[] = images.map((src, i) => ({ title: titles[i], cover: src, images: [src] }));
const all: CarouselSet = { title: "Static & Creatives", cover: images[0], images };

export function StaticsSection() {
    return <CarouselSection sets={slides} showCount={false} getModal={(i) => ({ set: all, start: i })} />;
}
