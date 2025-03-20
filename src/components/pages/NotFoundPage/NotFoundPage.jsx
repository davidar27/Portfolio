import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "../../../styles";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4 gap-8">
            <h1 className={`${styles.myTitle} !text-red-600 !m-0`}>404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">Página no encontrada</h2>
            <p className="text-gray-600 mt-2">Lo sentimos, la página que buscas no existe.</p>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>

                <Link
                    to="/"
                    className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Volver al inicio
                </Link>

            </motion.button>
        </div>
    );
};

export default NotFoundPage;
