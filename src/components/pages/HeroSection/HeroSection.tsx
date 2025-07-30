import { Picture } from "@/components/ui/Picture/Picture";
import { PortfolioDataService } from "@/services/portfolioData";
import styles from "@/styles";
import { motion } from "framer-motion";
import { memo } from "react";

const HeroSection = memo(() => {
    const info = PortfolioDataService.getPersonalInfo();

    return (
        <motion.div className="flex flex-col items-center gap-8 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <h1 className="text-5xl xl:text-6xl font-bold text-center bg-gradient-to-r from-[#6e07f3] to-[#9945ff] bg-clip-text text-transparent">
                {info.title}
            </h1>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                <Picture className={styles.picture} src={info.avatar} />
                {/* Efecto de brillo alrededor de la imagen */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6e07f3] to-[#9945ff] opacity-30 blur-2xl animate-pulse"></div>
            </motion.button>
            <p className={`${styles.myDescription} max-w-3xl text-center leading-relaxed`}>{info.description}</p>

            {/* Call to Action Buttons */}
            <div className="flex gap-6 mt-8">
                <motion.button
                    className="bg-gradient-to-r from-[#6e07f3] to-[#9945ff] text-white px-8 py-4 rounded-xl hover:from-[#9945ff] hover:to-[#b366ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(110,7,243,0.4)] hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ver Habilidades
                </motion.button>
                <motion.button
                    className="bg-gradient-to-r from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[20px] text-white px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.2)] hover:border-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ver Proyectos
                </motion.button>
            </div>
        </motion.div>
    );
});

export default HeroSection;