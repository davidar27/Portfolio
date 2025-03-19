import React from 'react';

export const Picture = ({ className }) => {
  return (
    <img 
      src="src\assets\images\avatar.svg" 
      alt="Avatar"  
      className={className}
    />
  );
};
