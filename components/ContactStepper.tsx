import React, { useState, Children, useRef, useLayoutEffect, HTMLAttributes, ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
    onFinalStepCompleted?: () => void;
    stepCircleContainerClassName?: string;
    stepContainerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    backButtonText?: string;
    nextButtonText?: string;
    disableStepIndicators?: boolean;
    onClose?: () => void;
    renderStepIndicator?: (props: {
        step: number;
        currentStep: number;
        onStepClick: (clicked: number) => void;
    }) => ReactNode;
}

export default function ContactStepper({
    children,
    initialStep = 1,
    onStepChange = () => { },
    onFinalStepCompleted = () => { },
    stepCircleContainerClassName = '',
    stepContainerClassName = '',
    contentClassName = '',
    footerClassName = '',
    backButtonProps = {},
    nextButtonProps = {},
    backButtonText = 'Back',
    nextButtonText = 'Continue',
    disableStepIndicators = false,
    onClose,
    renderStepIndicator,
    ...rest
}: StepperProps) {
    const [currentStep, setCurrentStep] = useState<number>(initialStep);
    const [direction, setDirection] = useState<number>(0);
    const stepsArray = Children.toArray(children);
    const totalSteps = stepsArray.length;
    const isCompleted = currentStep > totalSteps;
    const isLastStep = currentStep === totalSteps;

    const updateStep = (newStep: number) => {
        setCurrentStep(newStep);
        if (newStep > totalSteps) {
            onFinalStepCompleted();
        } else {
            onStepChange(newStep);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setDirection(-1);
            updateStep(currentStep - 1);
        }
    };

    const handleNext = () => {
        if (!isLastStep) {
            setDirection(1);
            updateStep(currentStep + 1);
        }
    };

    const handleComplete = () => {
        setDirection(1);
        updateStep(totalSteps + 1);
    };

    return (
        <div className="w-full px-4 sm:px-0" {...rest}>
            <div
                className={`relative mx-auto w-full max-w-md rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl dark:bg-black bg-white border dark:border-white/10 border-black/10 ${stepCircleContainerClassName}`}
            >
                {/* Close Button */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute -top-3 -right-3 z-50 dark:bg-white bg-black dark:hover:bg-white hover:bg-black rounded-full p-2 shadow-lg transition-all duration-200 dark:text-black dark:hover:text-black text-white hover:text-white hover:rotate-90 hover:scale-110"
                    >
                        <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
                <div className={`${stepContainerClassName} flex w-full items-center p-8 pb-6`}>
                    {stepsArray.map((_, index) => {
                        const stepNumber = index + 1;
                        const isNotLastStep = index < totalSteps - 1;
                        return (
                            <React.Fragment key={stepNumber}>
                                {renderStepIndicator ? (
                                    renderStepIndicator({
                                        step: stepNumber,
                                        currentStep,
                                        onStepClick: clicked => {
                                            setDirection(clicked > currentStep ? 1 : -1);
                                            updateStep(clicked);
                                        }
                                    })
                                ) : (
                                    <StepIndicator
                                        step={stepNumber}
                                        disableStepIndicators={disableStepIndicators}
                                        currentStep={currentStep}
                                        onClickStep={clicked => {
                                            setDirection(clicked > currentStep ? 1 : -1);
                                            updateStep(clicked);
                                        }}
                                    />
                                )}
                                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
                            </React.Fragment>
                        );
                    })}
                </div>

                <StepContentWrapper
                    isCompleted={isCompleted}
                    currentStep={currentStep}
                    direction={direction}
                    className={`space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 pb-0 ${contentClassName}`}
                >
                    {stepsArray[currentStep - 1]}
                </StepContentWrapper>

                {!isCompleted && (
                    <div className={`px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 ${footerClassName}`}>
                        <div className={`mt-4 sm:mt-6 flex gap-2 ${currentStep !== 1 ? 'justify-between' : 'justify-end'}`}>
                            {currentStep !== 1 && (
                                <button
                                    onClick={handleBack}
                                    className={`duration-350 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 transition text-xs sm:text-sm font-medium ${currentStep === 1
                                        ? 'pointer-events-none opacity-50 dark:text-white/30 text-black/30'
                                        : 'dark:text-white/70 text-black/70 hover:dark:text-white hover:text-black dark:hover:bg-white/10 hover:bg-black/5'
                                        }`}
                                    {...backButtonProps}
                                >
                                    {backButtonText}
                                </button>
                            )}
                            <button
                                onClick={isLastStep ? handleComplete : handleNext}
                                className="duration-350 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black py-2 px-4 sm:py-2.5 sm:px-6 font-medium tracking-tight transition hover:bg-black/80 dark:hover:bg-white/80 active:bg-black/90 dark:active:bg-white/90 text-xs sm:text-sm"
                                {...nextButtonProps}
                            >
                                {isLastStep ? 'Complete' : nextButtonText}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

interface StepContentWrapperProps {
    isCompleted: boolean;
    currentStep: number;
    direction: number;
    children: ReactNode;
    className?: string;
}

function StepContentWrapper({
    isCompleted,
    currentStep,
    direction,
    children,
    className = ''
}: StepContentWrapperProps) {
    const [parentHeight, setParentHeight] = useState<number>(0);

    return (
        <motion.div
            style={{ position: 'relative', overflow: 'hidden' }}
            animate={{ height: isCompleted ? 0 : parentHeight }}
            transition={{ type: 'spring', duration: 0.4 }}
            className={className}
        >
            <AnimatePresence initial={false} mode="sync" custom={direction}>
                {!isCompleted && (
                    <SlideTransition key={currentStep} direction={direction} onHeightReady={h => setParentHeight(h)}>
                        {children}
                    </SlideTransition>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

interface SlideTransitionProps {
    children: ReactNode;
    direction: number;
    onHeightReady: (height: number) => void;
}

function SlideTransition({ children, direction, onHeightReady }: SlideTransitionProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (containerRef.current) {
            onHeightReady(containerRef.current.offsetHeight);
        }
    }, [children, onHeightReady]);

    return (
        <motion.div
            ref={containerRef}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute', left: 0, right: 0, top: 0 }}
        >
            {children}
        </motion.div>
    );
}

const stepVariants: Variants = {
    enter: (dir: number) => ({
        x: dir >= 0 ? '-100%' : '100%',
        opacity: 0
    }),
    center: {
        x: '0%',
        opacity: 1
    },
    exit: (dir: number) => ({
        x: dir >= 0 ? '50%' : '-50%',
        opacity: 0
    })
};

interface StepProps {
    children: ReactNode;
}

export function Step({ children }: StepProps) {
    return <div className="px-8">{children}</div>;
}

interface StepIndicatorProps {
    step: number;
    currentStep: number;
    onClickStep: (clicked: number) => void;
    disableStepIndicators?: boolean;
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators = false }: StepIndicatorProps) {
    const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

    const handleClick = () => {
        if (step !== currentStep && !disableStepIndicators) {
            onClickStep(step);
        }
    };

    return (
        <motion.div
            onClick={handleClick}
            className="relative cursor-pointer outline-none focus:outline-none"
            animate={status}
            initial={false}
        >
            <motion.div
                variants={{
                    inactive: {
                        scale: 1,
                        backgroundColor: 'var(--inactive-bg, #e5e7eb)',
                        color: 'var(--inactive-text, #9ca3af)'
                    },
                    active: {
                        scale: 1,
                        backgroundColor: 'var(--active-bg, #000000)',
                        color: 'var(--active-text, #ffffff)'
                    },
                    complete: {
                        scale: 1,
                        backgroundColor: 'var(--complete-bg, #000000)',
                        color: 'var(--complete-text, #ffffff)'
                    }
                }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full font-semibold
                    [--inactive-bg:theme(colors.black/5)] dark:[--inactive-bg:theme(colors.white/10)]
                    [--active-bg:theme(colors.black)] dark:[--active-bg:theme(colors.white)]
                    [--complete-bg:theme(colors.black)] dark:[--complete-bg:theme(colors.white)]
                    [--inactive-text:theme(colors.black/50)] dark:[--inactive-text:theme(colors.white/50)]
                    [--active-text:theme(colors.white)] dark:[--active-text:theme(colors.black)]
                    [--complete-text:theme(colors.white)] dark:[--complete-text:theme(colors.black)]"
            >
                {status === 'complete' ? (
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : status === 'active' ? (
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white dark:bg-black" />
                ) : (
                    <span className="text-xs sm:text-sm text-white dark:text-black">{step}</span>
                )}
            </motion.div>
        </motion.div>
    );
}

interface StepConnectorProps {
    isComplete: boolean;
}

function StepConnector({ isComplete }: StepConnectorProps) {
    const lineVariants: Variants = {
        incomplete: { width: 0, backgroundColor: 'transparent' },
        complete: { width: '100%', backgroundColor: '#000000' }
    };

    return (
        <div className="relative mx-3 h-0.5 flex-1 overflow-hidden rounded dark:bg-white/10 bg-black/10">
            <motion.div
                className="absolute left-0 top-0 h-full"
                variants={lineVariants}
                initial={false}
                animate={isComplete ? 'complete' : 'incomplete'}
                transition={{ duration: 0.4 }}
            />
        </div>
    );
}

interface CheckIconProps extends React.SVGProps<SVGSVGElement> { }

function CheckIcon(props: CheckIconProps) {
    return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    delay: 0.1,
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.3
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}
