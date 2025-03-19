import React from "react";
import { Column } from "../../ui/Column/Column";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const TechnicalSkills = () => {
  const skills = [
    {
      icon: <FaReact />,
      title: "Desarrollador Frontend",
      description: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <FaNode />,
      title: "Desarrollador Backend",
      description: ["Node.js", "Express", "C#"],
      delay: 0.3,
    },
    {
      icon: <FaGithub />,
      title: "Control de Versiones & Despliegue",
      description: ["Git", "GitHub", "Clever Cloud"],
      delay: 0.5,
    },
  ];
  

  const styles = {
    mySection: "h-screen bg-[linear-gradient(to_bottom,#6e07f3_50%,white_50%)] p-8",
    myTitle: "text-5xl font-bold text-center mb-12 text-white",
    myContainerSkills: "h-[80vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-center bg-white bg-opacity-50 p-8 rounded-lg shadow-lg",
    myColumn: "bg-white bg-opacity-50 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center h-full w-[20vw] gap-8",
    myIcon: "text-8xl text-primary",
    myTitleColumn: "text-3xl font-bold text-primary",
    myDescriptionColumn: "text-2xl font-light text-gray-800 text-left",
  };

  const { mySection, myTitle, myContainerSkills, myColumn, myIcon, myTitleColumn, myDescriptionColumn } = styles;
  return (
    <section className={mySection}>
      <h2 className={myTitle}>Habilidades Técnicas</h2>

      <div className={myContainerSkills}>
        {skills.map(({ icon, title, description, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
          >
            <Column
              className={myColumn}
              titleClassName={myTitleColumn}
              iconClassName={myIcon}
              descriptionClassName={myDescriptionColumn}
              icon={icon}
              title={title}
              description={description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
