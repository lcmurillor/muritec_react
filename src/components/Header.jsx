import { useEffect, useState } from "react";
import logo from "../assets/logotipo.svg";
import { navigation } from "../data/site";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Muritec, inicio"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="MuriTEC — Soluciones tecnológicas"
            width="164"
            height="52"
          />
        </a>
        <button
          id="menu-toggle"
          className="icon-button menu-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button-small"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Hablemos <Icon name="diagonal" size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
