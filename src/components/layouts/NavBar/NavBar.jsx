import React, { useState } from 'react';
import { ItemNavBar } from '../../ui/ItemNavBar/ItemNavBar';
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    myUl: `flex flex-col lg:flex-row list-disc justify-around xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 
    bg-white lg:bg-transparent absolute lg:static top-[10vh] left-0 text-center 
    w-full lg:w-auto transition-all duration-300 ease-in-out 
    ${isMenuOpen ? "h-auto opacity-100 " : "h-0 opacity-0 overflow-hidden lg:h-auto lg:opacity-100"}`,
    menuButton: "lg:hidden text-3xl text-gray-800 hover:text-blue-500 cursor-pointer transition-colors duration-300",
  };

  return (
    <nav className="max-w-[70vw]">
      {!isMenuOpen ? (
        <HiMenu
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(true)}
        />
      ) : (
        <IoMdClose
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(false)}
        />
      )}


      <ul className={styles.myUl}>
        <ItemNavBar onClick={() => setIsMenuOpen(false)} url="/" text="Inicio" />
        <ItemNavBar onClick={() => setIsMenuOpen(false)} url="/habtec" text="Habilidades Técnicas" />
        <ItemNavBar onClick={() => setIsMenuOpen(false)} url="/habsoc" text="Habilidades Sociales" />
        <ItemNavBar onClick={() => setIsMenuOpen(false)} url="/expro" text="Experiencia Profesional" />
        <ItemNavBar onClick={() => setIsMenuOpen(false)} url="/est" text="Estudios" />
      </ul>
    </nav>
  );
};
