import React from 'react';

export const Column = ({ className, icon, title, description = [], titleClassName, iconClassName, descriptionClassName }) => {
    return (
        <div className={className}>
            <span className={iconClassName}>{icon}</span>
            <h1 className={titleClassName}>{title}</h1>
            <ul className={`${descriptionClassName} list-none`} >
                {Array.isArray(description) ? description.map((item, index) => (
                    <li key={index}>{item}</li>
                )) : null}
            </ul>
        </div>
    );
};