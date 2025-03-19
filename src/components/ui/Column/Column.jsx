import React from 'react';

export const Column = ({ className, icon, title, description, titleClassName, iconClassName, descriptionClassName }) => {
    return (
        <div className={className}>
            <span className={iconClassName}>{icon}</span>
            <h1 className={titleClassName}>{title}</h1>
            <ul className={descriptionClassName}>
                {description.map((item, index) => (
                    <li key={index} className="list-disc list-inside">{item}</li>
                ))}
            </ul>
        </div>
    );
};