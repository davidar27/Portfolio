import React from 'react';

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
    );
};