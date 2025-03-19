import React from "react";

export const Picture = ({ className = "" }) => {
  return (
    <img
      src="https://mattfarley.ca/img/mf-avatar.svg"
      alt="Avatar"
      className={className} 
    />
  );
};
