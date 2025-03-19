import React, { useState } from 'react';
import { ItemNavBar } from '../../ui/ItemNavBar/ItemNavBar';
import { HiMenu } from "react-icons/hi";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const styles = {
    myNav: "flex items-center",
    myUl: `flex flex-col md:flex-row justify-around gap-4 md:gap-10 bg-white md:bg-transparent absolute md:static top-[10vh] left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out ${
      isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
    }`,
    menuButton: "md:hidden text-3xl text-gray-800 hover:text-blue-500 cursor-pointer transition-colors duration-300",
  };

  const { myNav, myUl, menuButton } = styles;

  return (
    <nav className={myNav}>
      <HiMenu
        className={menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <ul className={myUl}>
        <ItemNavBar url="/" text="Inicio" />
        <ItemNavBar url="/habtec" text="Habilidades Técnicas" />
        <ItemNavBar url="/habsoc" text="Habilidades Sociales" />
        <ItemNavBar url="/expro" text="Experiencia Profesional" />
        <ItemNavBar url="/est" text="Estudios" />
      </ul>
    </nav>
  );
};