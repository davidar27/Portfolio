import { motion } from "framer-motion";
import { memo } from "react";

interface ContactSectionProps {
    onNavigate?: (sectionId: string) => void;
}

const ContactSection = memo(({ onNavigate }: ContactSectionProps) => {
    const handleEmailClick = () => {
        window.location.href = "mailto:jhonatanarcos10@gmail.com";
    };

    const handleBackToHome = (sectionId: string) => {
        onNavigate?.(sectionId);
    };

    return (
        <div className="flex flex-col items-center gap-8 relative z-10">
            <motion.p
                className="text-2xl text-center max-w-3xl text-[#e0e0e0] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                ¿Interesado en trabajar juntos? ¡No dudes en contactarme!
            </motion.p>

            <motion.div
                className="flex gap-6 flex-wrap justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.button
                    className="bg-gradient-to-r from-[#6e07f3] to-[#9945ff] text-white px-8 py-4 rounded-xl hover:from-[#9945ff] hover:to-[#b366ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(110,7,243,0.4)] font-medium"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(110,7,243,0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailClick}
                    aria-label="Enviar mensaje por correo electrónico"
                >
                    Enviar Mensaje
                </motion.button>

                <motion.button
                    className="bg-gradient-to-r from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[20px] text-white px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.2)] hover:border-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300 font-medium"
                    whileHover={{
                        scale: 1.05,
                        borderColor: "#6e07f3"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleBackToHome('home')}
                    aria-label="Volver a la página de inicio"
                >
                    Volver al Inicio
                </motion.button>
            </motion.div>
        </div>
    );
});

export default ContactSection;