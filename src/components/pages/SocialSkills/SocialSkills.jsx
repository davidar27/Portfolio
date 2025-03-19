import React from 'react'
import { Column } from '../../ui/Column/Column';
import styles from '../../../styles';
import { FaRegComments } from "react-icons/fa";
import { GiThink } from 'react-icons/gi';
import { MdGroups } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai"; 
import { BiSolidUserDetail } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const SocialSkills = () => {
    const SocialSkills = [
        {
            icon: <FaRegComments />,
            title: "Comunicación efectiva"
        },
        {
            icon: <GiThink />,
            title: "Pensamiento analítico"
        },
        {
            icon: <MdGroups />,
            title: "Trabajo en equipo y colaboración"
        },
        {
            icon: <AiOutlineRise />,
            title: "Aprendizaje continuo y adaptabilidad"
        },
        {
            icon: <AiOutlineSolution />,
            title: "Resolución de problemas"
        },
        {
            icon: <BiSolidUserDetail />,
            title: "Atención al detalle"
        },
        {
            icon : <FaLanguage />,
            title : "Nivel de Ingles",
            description : ["B2"]
        }
    ];
    return (
        <section className={styles.mySection}>
            <h1 className={styles.myTitle}>Habilidades Sociales</h1>
            <div className={`${styles.myContainerSkills} `}>
                {SocialSkills.map(({ icon, title, description }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay:0.5 }}
                    >
                        <Column
                            className={`${styles.myColumn}  `}
                            titleClassName={styles.myTitleColumn}
                            iconClassName={styles.myIcon}
                            descriptionClassName={styles.myDescriptionColumn}
                            icon={icon}
                            title={title}
                            description={description}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
