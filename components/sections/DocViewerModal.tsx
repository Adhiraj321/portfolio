"use client";

import { useRef } from "react";
import { Download, ExternalLink, FileText, Play } from "lucide-react";
import { Modal } from "./Modal";

export interface ViewerItem {
    type: "pdf" | "video" | "text" | "embed";
    label: string;
    title: string;
    description?: string;
    src: string;
    /** Plain-text preview for documents that can't be embedded (e.g. .docx) */
    text?: string;
    /** Where "Open in Drive" goes for embedded items */
    link?: string;
}

interface DocViewerModalProps {
    title: string;
    items: ViewerItem[];
    /** Index of the open item, or null when closed */
    active: number | null;
    onChange: (index: number | null) => void;
}

export function DocViewerModal({ title, items, active, onChange }: DocViewerModalProps) {
    const lastActive = useRef(0);
    if (active !== null) lastActive.current = active;
    const item = items[active ?? lastActive.current];

    return (
        <Modal open={active !== null} onClose={() => onChange(null)} title={title} className="max-w-5xl">
            <div className="flex flex-col h-[82vh]">
                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto px-3 sm:px-5 py-3 border-b border-white/10 shrink-0">
                    {items.map((it, i) => {
                        const Icon = it.type === "video" || it.type === "embed" ? Play : FileText;
                        return (
                            <button
                                key={it.src}
                                onClick={() => onChange(i)}
                                className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${i === (active ?? lastActive.current) ? "bg-blue-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {it.label}
                            </button>
                        );
                    })}
                </div>

                {/* Viewer */}
                <div className="flex-1 min-h-0 bg-black/40">
                    {item.type === "pdf" && (
                        <iframe
                            key={item.src}
                            src={`${item.src}#view=FitH`}
                            title={item.title}
                            className="w-full h-full bg-white"
                        />
                    )}
                    {item.type === "video" && (
                        <video
                            key={item.src}
                            src={item.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            className="w-full h-full object-contain bg-black"
                        />
                    )}
                    {item.type === "embed" && (
                        <iframe
                            key={item.src}
                            src={item.src}
                            title={item.title}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            className="w-full h-full bg-black"
                        />
                    )}
                    {item.type === "text" && (
                        <div className="h-full overflow-y-auto p-5 sm:p-8">
                            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-white/85 max-w-3xl mx-auto">
                                {item.text}
                            </pre>
                        </div>
                    )}
                </div>

                {/* Caption */}
                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-t border-white/10 shrink-0">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                        {item.description && <p className="text-xs text-white/60 line-clamp-2">{item.description}</p>}
                    </div>
                    {item.type === "embed" && item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-medium"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Open in Drive
                        </a>
                    )}
                    {(item.type === "pdf" || item.type === "text") && (
                        <a
                            href={item.src}
                            download
                            className="shrink-0 flex items-center gap-1.5 text-xs sm:text-sm text-blue-400 hover:text-blue-300 font-medium"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </a>
                    )}
                </div>
            </div>
        </Modal>
    );
}
