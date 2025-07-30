import React from 'react';

interface PictureProps {
    className?: string;
    src?: string;
    icon?: React.ReactNode;
}

export const Picture: React.FC<PictureProps> = ({ className, src, icon }) => {
    if (icon) {
        return <span className={className}>{icon}</span>;
    }

    return (
        <img
            src={src}
            alt="Imagen"
            className={className}
        />
    );
}; 