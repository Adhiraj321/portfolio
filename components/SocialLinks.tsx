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
            className="flex flex-wrap justify-center lg:justify-start gap-2"
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
            {/* Resume Button */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full transition-all duration-200 dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:text-white bg-white border-gray-300 text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        Resume
                        <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                </Link>
            </motion.div>

            {/* Social Icons */}
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
                            size="sm"
                            className="rounded-full transition-all duration-200 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <Icon className="w-4 h-4" />
                        </Button>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
