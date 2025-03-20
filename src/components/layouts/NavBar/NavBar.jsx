import React, { useState } from 'react';
import { ItemNavBar } from '../../ui/ItemNavBar/ItemNavBar';
import { HiMenu } from "react-icons/hi";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const styles = {
    myUl: `flex flex-col lg:flex-row list-disc justify-around xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 bg-white lg:bg-transparent absolute lg:static top-[10vh] left-0  text-center w-full lg:w-auto  transition-all duration-300 ease-in-out ${
      isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"
    }`,
    menuButton: "lg:hidden text-3xl text-gray-800 hover:text-blue-500 cursor-pointer transition-colors duration-300",
  };

  const { myUl, menuButton } = styles;

  return (
    <nav className="max-w-[70vw]">
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