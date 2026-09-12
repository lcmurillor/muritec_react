import Icon from "../components/Icon";
import { contact, emailUrl } from "../data/site";

export default function Contact() {
  return (
    <section
      className="section contact-section"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">04 / HABLEMOS</p>
          <h2 id="contact-title">
            ¿Un equipo por reparar?
            <br />
            ¿Una idea por construir?
          </h2>
          <p>
            Cuéntanos qué necesitas. En Muritec encontrarás orientación para dar el siguiente paso.
          </p>
          <a
            className="button button-light"
            href={emailUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mail" /> Contáctanos por correo{" "}
            <Icon name="diagonal" size={18} />
          </a>
          <p className="contact-location">
            <Icon name="pin" size={16} />
            {contact.location}
          </p>
        </div>
        <div className="contact-card">
          <span className="eyebrow">TU CONTACTO EN MURITEC</span>
          <h3>{contact.name}</h3>
          <p>{contact.role}</p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <Icon name="mail" />
              <span>
                <small>Correo electrónico</small>
                {contact.email}
              </span>
              <Icon name="diagonal" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
