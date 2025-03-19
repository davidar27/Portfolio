import React from 'react';
import { Picture } from '../../ui/Picture/Picture';

export const Home = () => {
  const styles = {
    section: "flex flex-col items-center justify-center h-[90vh] gap-20",
    h1: "text-5xl font-bold hover:text-primary transition-colors duration-300",
    p: "text-2xl w-400 text-center",
    picture: "w-64 h-64 rounded-full",
  }

  const { section, h1, p, picture } = styles;
  
  return (
    <section className={section}>
      <h1 className={h1}>Jhonatan David Arcos Dominguez</h1>
      <Picture className={picture} />
      <p className={p}>Soy Jhonatan David Arcos Dominguez, desarrollador frontend con experiencia en React, TypeScript, Tailwind CSS y Node.js. Me apasiona crear interfaces limpias y funcionales, combinando mi conocimiento en bases de datos (SQL) y desarrollo backend para construir aplicaciones eficientes. He trabajado en proyectos de e-commerce, software de inventario y aplicaciones web interactivas, siempre enfocado en mejorar la experiencia del usuario y optimizar el rendimiento. 🚀</p>
    </section>
  );
};
