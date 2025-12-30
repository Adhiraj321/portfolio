"use client";

import { useState, useEffect } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as "dark" | "light") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(savedTheme);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, mounted]);

    const toggleTheme = async (event?: React.MouseEvent<HTMLButtonElement>) => {
        const newTheme = theme === "dark" ? "light" : "dark";

        // If no event (fallback) or browser doesn't support View Transitions
        if (!event || !document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        // Get click coordinates
        const x = event.clientX;
        const y = event.clientY;

        // Start the view transition
        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        // Wait for transition to be ready, then animate
        await transition.ready;

        // Calculate the radius needed to cover the entire viewport
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        // Animate with clip-path circle expanding from click position
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 700,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        );
    };

    return { theme, setTheme, toggleTheme, mounted };
}
