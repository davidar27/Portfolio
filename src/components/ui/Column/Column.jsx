import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Column = ({
    className,
    titleClassName,
    iconClassName,
    descriptionClassName,
    technologiesClassName,
    icon,
    title,
    description,
    technologies,
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className={className}>
                {icon && <div className={iconClassName}>{icon}</div>}
                <h1 className={titleClassName}>{title}</h1>
                <p className={descriptionClassName}>{description}</p>
                {technologies && (
                    <div className={technologiesClassName}>
                        <ul>
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.button>
    );
};