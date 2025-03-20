import React from "react";
import { Column } from "../../ui/Column/Column";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from '../../../styles';

export const TechnicalSkills = () => {
  const skills = [
    {
      icon: <FaReact />,
      title: "Desarrollador Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <FaNode />,
      title: "Desarrollador Backend",
      technologies: ["Node.js", "Express", "C#"],
      delay: 0.3,
    },
    {
      icon: <FaGithub />,
      title: "Control de Versiones & Despliegue",
      technologies: ["Git", "GitHub", "Clever Cloud"],
      delay: 0.5,
    },
  ];




  return (
    <section className={styles.mySection}>
      <h2 className={styles.myTitle}>Habilidades Técnicas</h2>
      <div className={styles.myContainer}>
        {skills.map(({ icon, title, technologies, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
          >
            <Column
              className={styles.myColumn}
              titleClassName={styles.myTitleColumn}
              iconClassName={styles.myIcon}
              technologiesClassName={styles.mytechnologies}
              icon={icon}
              title={title}
              technologies={technologies}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
