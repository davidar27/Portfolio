import React from 'react';
import { NavLink } from 'react-router-dom';


export const ItemNavBar = ({ url, text, onClick }) => {
  
  return (
      <li>
        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-primary"
          }
          onClick = {onClick}
        >
          {text}
        </NavLink>
      </li>
  );
};