"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
    Icon: LucideIcon;
    href: string;
    label: string;
    delay: number;
}

interface SocialLinksProps {
    links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                    },
                },
            }}
        >
            {/* Resume Button - Full Width Row */}
            <motion.div
                className="flex justify-center lg:justify-start"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.97 }}
            >
                <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto rounded-full px-8 py-3 h-auto text-base font-semibold transition-all duration-200 dark:bg-white dark:border-white dark:text-black dark:hover:bg-white/90 bg-gray-900 border-gray-900 text-white hover:bg-gray-800 hover:text-white shadow-md"
                    >
                        <FileText className="w-5 h-5 mr-2.5" />
                        Resume
                        <ExternalLink className="w-4 h-4 ml-2.5" />
                    </Button>
                </Link>
            </motion.div>

            {/* Social Icons - Separate Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1">
                {links.map(({ Icon, href, label, delay }, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay },
                            },
                        }}
                        whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, -10, 0],
                            transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full w-10 h-10 transition-all duration-200 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            >
                                <Icon className="w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
