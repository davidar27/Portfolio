import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles';

interface MainTitleProps {
    title: string;
}

export const MainTitle: React.FC<MainTitleProps> = ({ title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h1 className={styles.myTitle}>{title}</h1>
        </motion.div>
    );
}; 