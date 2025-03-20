import React from 'react';
import { Picture } from '../../ui/Picture/Picture';
import { MainTitle } from '../../ui/MainTitle/MainTitle';
import MiImage from '../../../assets/images/avatar.svg';
import styles from '../../../styles';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
export const Home = () => {

  const info = {
    title: "Jhonatan David Arcos Dominguez",
    description: "Desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas y eficientes. Especializado en tecnologías frontend como React y TailwindCSS, y con sólidos conocimientos en backend utilizando Node.js, Express y bases de datos como MySQL. Apasionado por resolver problemas complejos y entregar soluciones de alta calidad, siempre enfocado en el aprendizaje continuo y las mejores prácticas de desarrollo.",
  }

  const { title,description } = info;

  return (
    <section className={styles.mySection}>

      <MainTitle title={title} />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Picture className={styles.picture} src={MiImage} />
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <p className={styles.myDescription}>{description}</p>
      </motion.div>




    </section>
  );
};
