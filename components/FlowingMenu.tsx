import React from 'react';
import { gsap } from 'gsap';

interface MenuItemProps {
    link: string;
    title: string;
    description: string;
    image: string;
}

interface FlowingMenuProps {
    items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
    return (
        <div className="w-full h-full overflow-hidden">
            <nav className="flex flex-col h-full m-0 p-0">
                {items.map((item, idx) => (
                    <MenuItem key={idx} {...item} />
                ))}
            </nav>
        </div>
    );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, title, description }) => {
    const itemRef = React.useRef<HTMLDivElement>(null);
    const marqueeRef = React.useRef<HTMLDivElement>(null);
    const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
        const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
        const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        const tl = gsap.timeline({ defaults: animationDefaults });
        tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
    };

    const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

        const tl = gsap.timeline({ defaults: animationDefaults });
        tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }).to(marqueeInnerRef.current, {
            y: edge === 'top' ? '101%' : '-101%'
        });
    };

    const repeatedMarqueeContent = React.useMemo(() => {
        return Array.from({ length: 6 }).map((_, idx) => (
            <span key={idx} className="dark:text-gray-900 text-white uppercase font-medium text-xs sm:text-sm lg:text-base leading-[1.2] px-[3vw] whitespace-nowrap">
                {description}
            </span>
        ));
    }, [description]);

    return (
        <div className="flex-1 relative overflow-hidden text-center border-t dark:border-white/10 border-gray-200" ref={itemRef}>
            <a
                className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-medium dark:text-white text-gray-900 text-sm sm:text-base lg:text-lg dark:hover:text-gray-900 hover:text-white focus:dark:text-white focus:text-gray-900 focus-visible:dark:text-gray-900 focus-visible:text-white px-3 py-1"
                href={link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className="line-clamp-2">{title}</span>
            </a>
            <div
                className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none dark:bg-white bg-gray-900 translate-y-[101%]"
                ref={marqueeRef}
            >
                <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
                    <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
                        {repeatedMarqueeContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
