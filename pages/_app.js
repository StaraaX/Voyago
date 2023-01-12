import "../styles/output.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Script from "next/script";

export default function App({ Component, pageProps }) {
    return (
        <>

            <Header />
            <div class="container mx-auto">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    );
}
