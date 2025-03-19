import React from 'react';

export const Picture = ({ className, src, icon }) => {
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