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
            <button
                onClick={() => setActive(0)}
                className="group relative block w-full max-w-[260px] rounded-xl overflow-hidden border dark:border-white/10 border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                aria-label="Open Brand Strategy & Copywriting work"
            >
                <img src="/brand/social-audit.webp" alt="Social media audit – first page" className="w-full h-auto block" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Expand className="w-4 h-4" /> View all {items.length}
                    </span>
                </div>
            </button>

            <DocViewerModal title="Brand Strategy & Copywriting" items={items} active={active} onChange={setActive} />
        </div>
    );
}
