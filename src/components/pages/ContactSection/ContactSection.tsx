import { motion } from "framer-motion";
import { memo } from "react";

const ContactSection = memo(() => {
    return (
        <div className="flex flex-col items-center gap-8 relative z-10">
            <p className="text-2xl text-center max-w-3xl text-[#e0e0e0] leading-relaxed">
                ¿Interesado en trabajar juntos? ¡No dudes en contactarme!
            </p>
            <div className="flex gap-6">
                <motion.button
                    className="bg-gradient-to-r from-[#6e07f3] to-[#9945ff] text-white px-8 py-4 rounded-xl hover:from-[#9945ff] hover:to-[#b366ff] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(110,7,243,0.4)] hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Enviar Mensaje
                </motion.button>
                <motion.button
                    className="bg-gradient-to-r from-[rgba(110,7,243,0.2)] to-[rgba(153,69,255,0.1)] backdrop-blur-[20px] text-white px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.2)] hover:border-[#6e07f3] hover:bg-gradient-to-r hover:from-[rgba(110,7,243,0.3)] hover:to-[rgba(153,69,255,0.2)] transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Volver al Inicio
                </motion.button>
            </div>
        </div>
    );
});

export default ContactSection;