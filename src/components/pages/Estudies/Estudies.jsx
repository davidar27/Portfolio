import React from 'react'
import styles from '../../../styles'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Column } from '../../ui/Column/Column';

export const Estudies = () => {

    const estudies = [
        {
            title: "Técnico en Análisis y Desarrollo de Software",
            description: "SENA",
            delay: 0.3
        },
        {
            title: "Pix RTA Basic y Microservicios",
            description: "PIX RPA",
            delay: 0.4
        },
        {
            title: "Fundamentos de Python 1",
            description: "Cisco",
            delay: 0.5
        }
    ];

    return (

        <section className={styles.mySection}>
            <h2 className={styles.myTitle}>Habilidades Técnicas</h2>

            <div className={styles.myContainer}>
                {estudies.map(({ title, description, delay }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay }}
                    >
                        <Column
                            className={styles.myColumn}
                            titleClassName={styles.myTitleColumn}                          
                            title={title}
                            description = {description}
                        />
                    </motion.div>
                ))}
            </div>
        </section>

    )
}
