"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import { DocViewerModal, ViewerItem } from "./DocViewerModal";
import brandDocs from "@/lib/brandDocs.json";

const items: ViewerItem[] = [
    { type: "pdf", label: "Social Audit", title: "Social Media Audit", src: "/brand/social-audit.pdf" },
    { type: "pdf", label: "Competitor Analysis", title: "Competitor Analysis", src: "/brand/competitor-analysis.pdf" },
    { type: "text", label: "Ad Script", title: "Ad Script – “Ghar Mein Seelan Hai”", src: "/brand/ad-script.docx", text: brandDocs["ad-script"] },
    { type: "text", label: "Copywriter Assignment", title: "Creative Strategist / Copywriter Assignment", src: "/brand/peppyforall-assignment.docx", text: brandDocs["peppyforall-assignment"] },
];

export function BrandStrategySection() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                {[
                    { i: 0, img: "/brand/social-audit.webp", alt: "Social media audit – first page" },
                    { i: 1, img: "/brand/competitor-analysis.webp", alt: "Competitor analysis – first page" },
                ].map((c) => (
                    <button
                        key={c.i}
                        onClick={() => setActive(c.i)}
                        className="group relative block w-full rounded-xl overflow-hidden border dark:border-white/10 border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left"
                        aria-label={`Open ${items[c.i].title}`}
                    >
                        <img src={c.img} alt={c.alt} loading="lazy" className="w-full aspect-video object-cover block" />
                        <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-white text-xs sm:text-sm font-medium">
                            {items[c.i].title}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <Expand className="w-4 h-4" /> View
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <DocViewerModal title="Brand Strategy & Copywriting" items={items} active={active} onChange={setActive} />
        </div>
    );
}
