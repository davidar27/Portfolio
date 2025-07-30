import React from 'react';

interface ColumnProps {
    className?: string;
    titleClassName?: string;
    iconClassName?: string;
    descriptionClassName?: string;
    technologiesClassName?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string | string[];
    technologies?: string[];
}

export const Column: React.FC<ColumnProps> = ({
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
        <div className={`flex flex-col items-center justify-center gap-4 w-full h-full p-6 ${className}`}>
            {/* Icon Container */}
            {icon && (
                <div className={`card-icon-container ${iconClassName}`}>
                    <div className="text-4xl text-[#6e07f3]">
                        {icon}
                    </div>
                </div>
            )}
            
            {/* Title */}
            {title && (
                <h3 className={`card-title ${titleClassName}`}>
                    {title}
                </h3>
            )}
            
            {/* Description */}
            {description && (
                <div className={`card-description ${descriptionClassName}`}>
                    {Array.isArray(description) ? (
                        <ul className="space-y-1">
                            {description.map((item, index) => (
                                <li key={index} className="text-[#b366ff] font-medium">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{description}</p>
                    )}
                </div>
            )}
            
            {/* Technologies */}
            {technologies && technologies.length > 0 && (
                <div className={`card-technologies ${technologiesClassName}`}>
                    <h4 className="text-sm font-semibold text-[#b366ff] mb-2 text-center w-full">
                        Tecnologías:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="tech-tag"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}; 