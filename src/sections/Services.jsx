import Icon from "../components/Icon";
import { services, whatsappUrl } from "../data/site";

export default function Services() {
  return (
    <section
      className="section services-section"
      id="servicios"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / LO QUE HACEMOS</p>
            <h2 id="services-title">
              Una solución para
              <br />
              cada necesidad.
            </h2>
          </div>
          <p>
            Del equipo que usas cada día a la idea que quieres hacer realidad.
            Te acompañamos en cada paso.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="service-top">
                <Icon name={service.icon} size={29} />
                <span>0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <details>
                <summary>
                  Qué incluye <Icon name="down" size={17} />
                </summary>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(
                    `Hola, me interesa el servicio de ${service.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar este servicio <Icon name="diagonal" size={16} />
                </a>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
