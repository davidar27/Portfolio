import React from "react";
import { NavBar } from "../../layouts/NavBar/NavBar";
import { Picture } from "../../ui/Picture/Picture";
export const Header = () => {
  const styles = {
    myHeader: "w-full p-4 flex justify-around items-center text-white bg-white", 
    logo: "w-16 h-16 rounded-full",
  };

  const { myHeader, logo } = styles;

  return (
    <header className={myHeader}>
      <Picture className={logo}  />
      <NavBar />
    </header>
  );
};