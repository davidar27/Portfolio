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
    whileHover = { scale: 1.01 },
    whileTap = { scale: 0.99 }
}) => {
    return (
        <motion.div
            className={`glass-card-optimized ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={whileHover}
            whileTap={whileTap}
        >
            {children}
        </motion.div>
    );
}; 