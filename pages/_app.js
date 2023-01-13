import "../styles/output.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Script from "next/script";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>

            <Header />

            <motion.div

                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}


            >


                <Component {...pageProps} />
            </motion.div>

            <Footer />
        </>
    );
}
