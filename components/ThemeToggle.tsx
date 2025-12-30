"use client";

interface ThemeToggleProps {
    theme: "dark" | "light";
    onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className="relative overflow-hidden transition-all duration-300 hover:scale-105 dark:text-white/90 rounded-full dark:hover:text-white dark:hover:bg-white/10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 h-9 w-9 flex items-center justify-center cursor-pointer"
        >
            <div className="relative w-5 h-5 pointer-events-none">
                <svg
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <svg
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </div>
        </button>
    );
}
