import React, { memo } from 'react';
import MiImage from '@/assets/images/avatar.svg';
import { Picture } from '@/components/ui/Picture/Picture';
import { ButtonIcon } from '@/components/ui/ButtonIcon/ButtonIcon';
import styles from '@/styles';
import { motion } from 'framer-motion';
import { PortfolioDataService } from '@/services/portfolioData';

const SocialLinksList = memo(() => {
    const socialLinks = PortfolioDataService.getSocialLinks();
    
    return (
        <motion.div 
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            {socialLinks.map(({ label, url, icon }, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    viewport={{ once: true }}
                >
                    <ButtonIcon
                        className="bg-gradient-to-br from-[rgba(110,7,243,0.15)] to-[rgba(153,69,255,0.08)] backdrop-blur-[15px] rounded-full border-2 border-[rgba(255,255,255,0.15)] h-14 w-14 flex justify-center items-center hover:border-[#6e07f3] hover:bg-gradient-to-br hover:from-[rgba(110,7,243,0.25)] hover:to-[rgba(153,69,255,0.15)] hover:shadow-[0_0_20px_rgba(110,7,243,0.25)] transition-all duration-200"
                        label={label}
                        url={url}
                    >
                        <span className="text-2xl text-white group-hover:text-[#b366ff] transition-colors duration-200">
                            {icon}
                        </span>
                    </ButtonIcon>
                </motion.div>
            ))}
        </motion.div>
    );
});

SocialLinksList.displayName = 'SocialLinksList';

export const Footer: React.FC = memo(() => {
    return (
        <footer className="bg-gradient-to-t from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] text-white py-16 relative overflow-hidden">
            {/* Efecto de partículas de fondo optimizado */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(110,7,243,0.03)] to-[rgba(153,69,255,0.01)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center gap-10">
                    {/* Logo and Description */}
                    <motion.div 
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="relative">
                            <Picture className={`${styles.picture} !h-24 !w-24`} src={MiImage} />
                            {/* Efecto de brillo optimizado */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6e07f3] to-[#9945ff] opacity-15 blur-lg"></div>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#6e07f3] to-[#9945ff] bg-clip-text text-transparent">
                                Jhonatan Arcos
                            </h2>
                            <p className="text-[#b366ff] text-lg font-medium">Desarrollador Full Stack</p>
                            <p className="text-[#e0e0e0] text-sm mt-2">Concentrado, Tranquilo y Perseverante</p>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <SocialLinksList />

                    {/* Copyright */}
                    <motion.div 
                        className="text-center text-[#e0e0e0] text-sm border-t border-[rgba(255,255,255,0.1)] pt-8 w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>&copy; 2025 Jhonatan Arcos. Todos los derechos reservados.</p>
                        <p className="text-[#b366ff] mt-2">Desarrollado con ❤️ y TypeScript</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer'; 