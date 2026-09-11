import Icon from "../components/Icon";
import { contact, whatsappUrl } from "../data/site";

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
            Cuéntanos qué necesitas. Encontraremos contigo el siguiente paso.
          </p>
          <a
            className="button button-light"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" /> Escríbenos por WhatsApp{" "}
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
            <a href={`tel:${contact.telephone}`}>
              <Icon name="phone" />
              <span>
                <small>Teléfono</small>
                {contact.phone}
              </span>
              <Icon name="diagonal" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
