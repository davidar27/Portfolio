import React from 'react';
import { Picture } from '../../ui/Picture/Picture';
import MiImage from '../../../assets/images/avatar.svg';
import { motion } from 'framer-motion';

export const Home = () => {

  const info = {
    name: "Jhonatan David Arcos Dominguez",
    description: "Desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas y eficientes. Especializado en tecnologías frontend como React y TailwindCSS, y con sólidos conocimientos en backend utilizando Node.js, Express y bases de datos como MySQL. Apasionado por resolver problemas complejos y entregar soluciones de alta calidad, siempre enfocado en el aprendizaje continuo y las mejores prácticas de desarrollo.",
  }

  const { name, description } = info;
  const styles = {
    section: "flex flex-col items-center justify-center h-[85vh] gap-y-10 px-4 bg-[linear-gradient(to_bottom,#6e07f3_50%,white_50%)]",
    h1: "font-bold text-white hover:text-black transition-colors duration-300 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl",
    p: "text-gray-800 hover:text-primary xl:text-xl lg:text-lg md:text-base sm:text-sm max-w-4xl mx-auto text-center break-words",
    picture: "xl:w-64 xl:h-64 lg:w-56 lg:h-56 md:w-44 md:h-44 sm:w-36 sm:h-36 rounded-full",
  };

  const { section, h1, p, picture } = styles;

  return (
    <section className={section}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <h1 className={h1}>{name}</h1>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
      <Picture className={picture} icon={MiImage}/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <p className={p}>{description}</p>
        </motion.div>

  


    </section>
  );
};
