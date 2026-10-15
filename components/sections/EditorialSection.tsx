"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import { DocViewerModal, ViewerItem } from "./DocViewerModal";

const magazineDesc =
    "The quarterly flagship Magazine of Adsparkx featuring the various events, happenings and other miscellaneous sections in the company. Managed and executed by me end to end.";
const inductionDesc = "Concept, Strategy, Script writing and Shooting done end to end by me.";

const items: ViewerItem[] = [
    { type: "pdf", label: "Pulse Magazine", title: "Adsparkx Pulse Magazine", description: magazineDesc, src: "/editorial/magazine.pdf" },
    { type: "pdf", label: "ADX Magazine May", title: "Adsparkx Magazine – May Edition", description: magazineDesc, src: "/editorial/magazine-may.pdf" },
    { type: "video", label: "Induction Video", title: "Adsparkx New Employee Induction Video", description: inductionDesc, src: "/editorial/induction-v1.mp4" },
    { type: "video", label: "Induction Video v2", title: "Adsparkx New Employee Induction Video (v2)", description: inductionDesc, src: "/editorial/induction-v2.mp4" },
];

const points = [
    { n: 1, title: "Adsparkx Pulse Magazine", desc: magazineDesc, open: 0 },
    { n: 2, title: "Adsparkx Magazine – May Edition", desc: "The May edition of the Adsparkx magazine, designed and executed by me.", open: 1 },
    { n: 3, title: "Adsparkx new Employee Induction Video", desc: inductionDesc, open: 2 },
];

export function EditorialSection() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,240px)_1fr] gap-6 items-start">
            <div className="flex sm:flex-col gap-4">
                {[
                    { i: 0, img: "/editorial/magazine.webp", alt: "Adsparkx Pulse Magazine cover" },
                    { i: 1, img: "/editorial/magazine-may.webp", alt: "Adsparkx Magazine May edition cover" },
                ].map((c) => (
                    <button
                        key={c.i}
                        onClick={() => setActive(c.i)}
                        className="group relative block w-full max-w-[260px] rounded-xl overflow-hidden border dark:border-white/10 border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left"
                        aria-label={`Open ${items[c.i].title}`}
                    >
                        <img src={c.img} alt={c.alt} loading="lazy" className="w-full h-auto block" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <Expand className="w-4 h-4" /> View
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <ol className="space-y-5">
                {points.map((p) => (
                    <li key={p.n}>
                        <button onClick={() => setActive(p.open)} className="text-left group">
                            <p className="font-semibold dark:text-white text-gray-900 group-hover:text-blue-500 transition-colors">
                                {p.n}. {p.title}
                            </p>
                            <p className="mt-1 text-sm lg:text-base dark:text-gray-400 text-gray-600 leading-relaxed">{p.desc}</p>
                        </button>
                    </li>
                ))}
            </ol>

            <DocViewerModal title="Editorial & Other Work" items={items} active={active} onChange={setActive} />
        </div>
    );
}
