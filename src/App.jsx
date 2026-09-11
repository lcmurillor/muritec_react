import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
