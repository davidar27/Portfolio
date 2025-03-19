import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemNavBar = ({ url, text }) => {
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => 
          isActive ? "text-blue-500 font-bold" : "text-primary"
        }
      >
        {text}
      </NavLink>
    </li>
  );
};