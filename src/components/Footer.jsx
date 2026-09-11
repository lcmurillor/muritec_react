import logo from "../assets/logotipo.svg";
import Icon from "./Icon";
import { socialLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a
            className="brand"
            href="#inicio"
            aria-label="Muritec, volver al inicio"
          >
            <img
              src={logo}
              alt="MuriTEC — Soluciones tecnológicas"
              width="158"
              height="50"
              loading="lazy"
            />
          </a>
          <nav aria-label="Redes sociales" className="social-links">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <Icon name="diagonal" size={14} />
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Muritec. Todos los derechos reservados.
          </p>
          <a href="#inicio">
            Volver arriba <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
