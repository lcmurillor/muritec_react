import { useEffect, useRef } from "react";
import Icon from "./Icon";
import { imageUrl, emailUrl } from "../data/site";

export default function ProjectGallery({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="gallery-title"
      aria-describedby="gallery-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="gallery-body">
        <div className="gallery-heading">
          <p className="eyebrow">CUIDADO DE TU EQUIPO</p>
          <button
            className="icon-button"
            aria-label="Cerrar detalle"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="gallery-image">
          <img
            src={imageUrl(project.images[0])}
            alt={project.imageAlt}
            width="1400"
            height="1050"
          />
        </div>
        <p className="image-credit">
          Imagen ilustrativa ·{" "}
          <a
            href={project.imageSource}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.imageCredit} / Pexels
          </a>
        </p>
        <div className="gallery-caption">
          <h2 id="gallery-title">{project.category}</h2>
        </div>
        <p id="gallery-description">{project.description}</p>
        <a
          className="text-link service-contact"
          href={emailUrl(
            `Hola, me gustaría consultar sobre ${project.category.toLowerCase()}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar este servicio <Icon name="diagonal" size={18} />
        </a>
      </div>
    </dialog>
  );
}
