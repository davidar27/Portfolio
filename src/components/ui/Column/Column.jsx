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
        <motion.div
            whileHover={{
                scale: [null, 1, 1.1],
                transition: {
                    duration: 0.5,
                    times: [0, 0.2, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
        >
            <div className={className}>
                {icon && <div className={iconClassName}>{icon}</div>}
                <h1 className={titleClassName}>{title}</h1>
                <p className={descriptionClassName}>{description}</p>
                {technologies && (
                    <div className={technologiesClassName}>
                        <ul className="list-disc">
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.div>
    );
};