import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    ref: React.RefObject<HTMLElement | null>;
    title: string;
    children: React.ReactNode;
    className?: string;
    backgroundGradient?: string;
    showParticles?: boolean;
}

export const Section = memo<SectionProps>(({
    id,
    ref,
    title,
    children,
    className = "",
    backgroundGradient = "bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e]",
    showParticles = false
}) => {
    return (
        <section
            ref={ref}
            id={id}
            className={`min-h-screen flex flex-col items-center justify-center gap-8 p-8 xl:p-32 md:p-16 md:pt-20 md:pb-20 ${backgroundGradient} ${className} relative overflow-hidden`}
        >
            {showParticles && (
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(110,7,243,0.03)] to-[rgba(153,69,255,0.01)]"></div>
            )}

            <motion.div
                className="relative z-10 w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-[#6e07f3] to-[#9945ff] bg-clip-text text-transparent mb-8">
                    {title}
                </h2>
                {children}
            </motion.div>
        </section>
    );
});

Section.displayName = 'Section'; 