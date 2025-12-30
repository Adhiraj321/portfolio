import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
    as,
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || 'button';

    return (
        <Component
            className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
            {...(rest as any)}
            style={{
                padding: `${thickness}px 0`,
                ...(rest as any).style
            }}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed
                }}
            ></div>
            <div className="relative z-1 bg-gradient-to-b dark:from-black dark:to-black/80 from-white to-gray-50 border dark:border-white/40 border-gray-300 dark:text-white text-gray-900 text-center text-[14px] py-[6px] px-[20px] rounded-[20px] transition-colors duration-300">
                {children}
            </div>
        </Component>
    );
};

export default StarBorder;
