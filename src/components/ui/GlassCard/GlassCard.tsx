import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    whileHover?: any;
    whileTap?: any;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = "",
    delay = 0,
    whileHover = { scale: 1.02 },
    whileTap = { scale: 0.98 }
}) => {
    return (
        <motion.div
            className={`bg-gradient-to-br from-[rgba(110,7,243,0.1)] to-[rgba(153,69,255,0.05)] backdrop-blur-[25px] border border-[rgba(255,255,255,0.15)] p-6 rounded-xl shadow-xl hover:border-[rgba(255,255,255,0.25)] transition-all duration-300 ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={whileHover}
            whileTap={whileTap}
        >
            {children}
        </motion.div>
    );
}; 