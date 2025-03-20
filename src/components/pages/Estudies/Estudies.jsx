import React from 'react'
import styles from '../../../styles'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Column } from '../../ui/Column/Column';
import { FaCode, FaRobot, FaPython } from "react-icons/fa6";


export const Estudies = () => {

    const estudies = [
        {
            icon: <FaCode />,
            title: "Técnico en Análisis y Desarrollo de Software",
            description: "SENA",
            delay: 0.3
        },
        {
            icon: <FaRobot />,
            title: "Pix RTA Basic y Microservicios",
            description: "PIX RPA",
            delay: 0.4
        },
        {
            icon: <FaPython />,
            title: "Fundamentos de Python 1",
            description: "Cisco",
            delay: 0.5
        }
    ];

    return (

        <section className={styles.mySection}>
            <h2 className={styles.myTitle}>Habilidades Técnicas</h2>

            <div className={styles.myContainer}>
                {estudies.map(({ icon, title, description, delay }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay }}
                    >
                        <Column
                            icon={icon}
                            iconClassName={styles.myIcon}
                            className={styles.myColumn}
                            titleClassName={styles.myTitleColumn}
                            title={title}
                            description={description}
                        />
                    </motion.div>
                ))}
            </div>
        </section>

    )
}
