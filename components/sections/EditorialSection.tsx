"use client";

import { useState } from "react";
import { Expand, Play } from "lucide-react";
import { DocViewerModal, ViewerItem } from "./DocViewerModal";

const driveFolder = "https://drive.google.com/drive/folders/1d_agslQ5NhqSmitYoWubGrlFA7rAbjYX?usp=sharing";
const magazineDesc =
    "The quarterly flagship Magazine of Adsparkx featuring the various events, happenings and other miscellaneous sections in the company. Managed and executed by me end to end.";
const inductionDesc = "Concept, Strategy, Script writing and Shooting done end to end by me.";

const items: ViewerItem[] = [
    { type: "pdf", label: "Pulse · Jan 2026", title: "Adsparkx Pulse Magazine", description: magazineDesc, src: "/editorial/magazine.pdf" },
    { type: "pdf", label: "Pulse · Issue 03", title: "Adsparkx Pulse Magazine – Issue 03 (Jan–June 2026)", description: magazineDesc, src: "/editorial/magazine-pulse3.pdf" },
    { type: "embed", label: "Induction Video 1", title: "Adsparkx New Employee Induction Video", description: inductionDesc, src: "https://drive.google.com/file/d/11iNqmduOfKJzt4vArvqR96h8uErcC-Xp/preview", link: driveFolder },
    { type: "embed", label: "Induction Video 2", title: "Adsparkx New Employee Induction Video (v2)", description: inductionDesc, src: "https://drive.google.com/file/d/1ju3m08ztuN3hDs_k3Hb4874i2b9UZHhG/preview", link: driveFolder },
];

const points = [
    { n: 1, title: "Adsparkx Pulse Magazine", desc: magazineDesc, open: 1 },
    { n: 2, title: "Adsparkx new Employee Induction Video", desc: inductionDesc, open: 2 },
];

const cardClass =
    "group relative block w-full rounded-xl overflow-hidden border dark:border-white/10 border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-left";
const overlayClass =
    "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center";
const pillClass =
    "flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300";

export function EditorialSection() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                {[
                    { i: 0, img: "/editorial/magazine.webp", alt: "Adsparkx Pulse Magazine cover" },
                    { i: 1, img: "/editorial/magazine-pulse3.webp", alt: "Adsparkx Pulse Issue 03 cover" },
                ].map((c) => (
                    <button key={c.i} onClick={() => setActive(c.i)} className={cardClass} aria-label={`Open ${items[c.i].title}`}>
                        <img src={c.img} alt={c.alt} loading="lazy" className="w-full aspect-[9/16] object-cover block" />
                        <div className={overlayClass}>
                            <span className={pillClass}>
                                <Expand className="w-4 h-4" /> View
                            </span>
                        </div>
                    </button>
                ))}

                {/* Induction video: live muted preview, click to watch the full-length videos */}
                <button onClick={() => setActive(2)} className={`${cardClass} col-span-2 lg:col-span-1`} aria-label="Watch the full induction videos">
                    <video
                        src="/editorial/induction-v2.mp4"
                        poster="/editorial/induction-v2.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video object-cover block bg-black"
                    />
                    <div className={overlayClass}>
                        <span className={pillClass}>
                            <Play className="w-4 h-4" /> Watch full video
                        </span>
                    </div>
                </button>
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
