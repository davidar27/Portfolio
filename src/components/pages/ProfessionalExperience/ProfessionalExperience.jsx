import React from 'react';
import styles from '../../../styles';
import { Column } from '../../ui/Column/Column';
import IconDonita from '../../../assets/images/icon_donita.jpg'
import { Picture } from '../../ui/Picture/Picture';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


export const ProfessionalExperience = () => {
    const experiences = [
        {
            icon: IconDonita,
            title: "Desarrollo Backend - Tienda de Mini Donas",
            description: "Implementación de autenticación, carrito de compras y gestión de productos.",
            technologies: ["TypeScript", "Express", "MySQL", "JWT"],
        },
    ];

    return (
        <section className={`${styles.mySection} bg-[linear-gradient(to_bottom_right,#6e07f3_50%,white_50%)]`}>
            <h1 className={styles.myTitle}>Experiencia Laboral</h1>
            <div className={styles.myContainer}>
                {experiences.map(({ icon, title, description, technologies }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Column
                            className={`${styles.myColumn} drop-shadow-xl`}
                            titleClassName={styles.myTitleColumn}
                            iconClassName={styles.myIcon}
                            descriptionClassName={styles.myDescription}
                            technologiesClassName={`${styles.mytechnologiesClassName}`}
                            icon={<Picture className={styles.picture} src={icon} />}
                            title={title}
                            description={description}
                            technologies={technologies}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};