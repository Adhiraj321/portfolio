import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '@/hooks/useTheme';

interface PillTabsProps {
    tabs: Array<{ id: string; label: string }>;
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

const PillTabs: React.FC<PillTabsProps> = ({
    tabs,
    activeTab,
    onTabChange
}) => {
    const { theme } = useTheme();
    const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);

    // Theme-aware colors
    const isDark = theme === 'dark';
    const containerBg = isDark ? '#ffffff' : '#000000';
    const pillBg = isDark ? '#000000' : '#ffffff';
    const pillText = isDark ? '#ffffff' : '#000000';
    const inactivePillBg = isDark ? '#ffffff' : '#000000';
    const inactivePillText = isDark ? '#000000' : '#ffffff';

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach((circle, index) => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement as HTMLElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector<HTMLElement>('.pill-label');
                const white = pill.querySelector<HTMLElement>('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.4, ease: 'power3.out', overwrite: 'auto' }, 0);

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 0.4, ease: 'power3.out', overwrite: 'auto' }, 0);
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();
        window.addEventListener('resize', layout);
        return () => window.removeEventListener('resize', layout);
    }, [tabs]);

    const handleEnter = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        tl.tweenTo(tl.duration(), { duration: 0.3, ease: 'power3.out', overwrite: 'auto' });
    };

    const handleLeave = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        tl.tweenTo(0, { duration: 0.2, ease: 'power3.out', overwrite: 'auto' });
    };

    return (
        <div className="flex flex-wrap gap-1 mb-6 p-1 rounded-full w-fit dark:bg-white bg-black">
            {tabs.map((tab, i) => {
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={() => handleLeave(i)}
                        className={`relative overflow-hidden inline-flex items-center justify-center h-[28px] sm:h-[42px] px-2 sm:px-6 rounded-full font-semibold text-[9px] sm:text-sm uppercase tracking-wide transition-all duration-300 ${isActive
                            ? "dark:bg-black dark:text-white bg-white text-black"
                            : "dark:bg-white dark:text-black bg-black text-white"
                            }`}
                    >
                        <span
                            className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none dark:bg-black bg-white"
                            ref={el => {
                                circleRefs.current[i] = el;
                            }}
                        />
                        <span className="label-stack relative inline-block leading-[1] z-[2]">
                            <span className="pill-label relative z-[2] inline-block leading-[1]">{tab.label}</span>
                            <span
                                className="pill-label-hover absolute left-0 top-0 z-[3] inline-block dark:text-white text-black"
                            >
                                {tab.label}
                            </span>
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default PillTabs;
