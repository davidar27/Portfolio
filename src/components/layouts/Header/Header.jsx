import React from "react";
import { NavBar } from "../../layouts/NavBar/NavBar";
export const Header = () => {
  const styles = {
    myHeader: "w-full p-4 flex justify-around items-center text-white bg-white h-[10vh]", 
    myTitle: "text-4xl font-bold text-black",
  };

  const { myHeader, myTitle } = styles;

  return (
    <header className={myHeader}>
      <h1 className={myTitle}>MiPortafolio</h1>
      <NavBar />
    </header>
  );
};