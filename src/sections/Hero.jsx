import Icon from "../components/Icon";
import { imageUrl, whatsappUrl } from "../data/site";

export default function Hero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> SOLUCIONES TECNOLÓGICAS, CERCA DE TI
        </p>
        <h1 id="hero-title">
          Tecnología que
          <br />
          resuelve.
          <br />
          <span>
            Personas que
            <br className="desktop-break" /> conectan.
          </span>
        </h1>
        <p className="hero-description">
          Cuidamos tus equipos, conectamos tu negocio y damos forma a tus ideas.
          Soluciones informáticas con un trato cercano, desde Tilarán.
        </p>
        <div className="hero-actions">
          <a
            className="button"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cuéntanos qué necesitas <Icon name="diagonal" />
          </a>
          <a className="text-link" href="#servicios">
            Explorar servicios <Icon name="down" size={17} />
          </a>
        </div>
        <p className="location">
          <Icon name="pin" size={17} /> Tilarán, Costa Rica <span>·</span>{" "}
          Atención personal
        </p>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={imageUrl("img1")}
            srcSet={`${imageUrl("img1", "small")} 640w, ${imageUrl("img1")} 1400w`}
            sizes="(max-width: 760px) 100vw, 48vw"
            alt="Trabajo de mantenimiento en los componentes de una computadora portátil"
            width="1400"
            height="1050"
            fetchPriority="high"
          />
        </div>
        <div className="image-topline">
          <span>MuriTEC / EN CADA DETALLE</span>
          <span>TILARÁN / CR</span>
        </div>
        <div className="hero-caption">
          <span className="caption-icon">
            <Icon name="computer" size={27} />
          </span>
          <div>
            <span>DE VUELTA A LO QUE IMPORTA</span>
            <strong>Tu tecnología, en buenas manos.</strong>
          </div>
          <Icon name="diagonal" size={25} />
        </div>
      </div>
    </section>
  );
}
