import Icon from "../components/Icon";
import { imageUrl } from "../data/site";

const values = [
  "Honestidad",
  "Transparencia",
  "Calidad",
  "Seguridad",
  "Empatía",
  "Creatividad",
];

export default function About() {
  return (
    <section
      className="section about-section"
      id="nosotros"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src={imageUrl("img2")}
              srcSet={`${imageUrl("img2", "small")} 640w, ${imageUrl("img2")} 1400w`}
              sizes="(max-width: 760px) 100vw, 40vw"
              alt="Revisión cuidadosa de los componentes internos de una computadora"
              loading="lazy"
              decoding="async"
              width="1400"
              height="1050"
            />
            <div className="about-note">
              <Icon name="pin" size={20} />
              <span>
                De Tilarán.
                <br />
                <strong>Para nuestra comunidad.</strong>
              </span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">02 / SOBRE MURITEC</p>
            <h2 id="about-title">
              La tecnología es mejor
              <br />
              cuando es cercana.
            </h2>
            <p>
              Muritec ofrece soluciones tecnológicas para personas, hogares y
              negocios. Sus servicios combinan computación, redes, desarrollo
              de software, bases de datos e infraestructura para resolver
              necesidades concretas y facilitar el trabajo de cada día.
            </p>
            <p>
              Desde Tilarán, Muritec apuesta por una atención cercana, asesoría
              clara y soluciones adaptadas a cada proyecto. El objetivo es que
              cada cliente pueda aprovechar la tecnología con confianza y contar
              con opciones que respondan a sus necesidades.
            </p>
            <a className="text-link" href="#contacto">
              Conversemos sobre tu proyecto <Icon name="diagonal" size={18} />
            </a>
          </div>
        </div>
        <div className="principles">
          <article>
            <span className="principle-number">01</span>
            <h3>Propósito</h3>
            <p>
              Brindar servicios de tecnologías de información adaptados a cada
              cliente e impulsar el desarrollo tecnológico de nuestra comunidad.
            </p>
          </article>
          <article>
            <span className="principle-number">02</span>
            <h3>Visión</h3>
            <p>
              Ser un referente en soluciones tecnológicas y desarrollo de
              software, creando oportunidades para jóvenes de zonas rurales.
            </p>
          </article>
          <article>
            <span className="principle-number">03</span>
            <h3>Valores</h3>
            <ul className="values-list">
              {values.map((value) => (
                <li key={value}>
                  <Icon name="check" size={14} />
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
