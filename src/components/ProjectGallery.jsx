import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { imageUrl, whatsappUrl } from "../data/site";

export default function ProjectGallery({ project, onClose }) {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const move = (direction) =>
    setIndex((current) => (current + direction + total) % total);

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
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      <div className="gallery-body">
        <div className="gallery-heading">
          <p className="eyebrow">NUESTROS TRABAJOS</p>
          <button
            className="icon-button"
            aria-label="Cerrar galería"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="gallery-image">
          <img
            src={imageUrl(project.images[index])}
            alt={`${project.category}, fotografía ${index + 1} de ${total}`}
            width="1400"
            height="1050"
          />
          <button
            className="icon-button gallery-previous"
            aria-label="Fotografía anterior"
            onClick={() => move(-1)}
          >
            <Icon name="arrow" />
          </button>
          <button
            className="icon-button gallery-next"
            aria-label="Fotografía siguiente"
            onClick={() => move(1)}
          >
            <Icon name="arrow" />
          </button>
        </div>
        <div className="gallery-caption">
          <h2 id="gallery-title">{project.category}</h2>
          <span role="status" aria-live="polite">
            {index + 1} / {total}
          </span>
        </div>
        <p id="gallery-description">{project.description}</p>
        <div className="gallery-thumbnails" aria-label="Elegir fotografía">
          {project.images.map((image, photoIndex) => (
            <button
              key={image}
              aria-label={`Ver fotografía ${photoIndex + 1}`}
              aria-pressed={photoIndex === index}
              onClick={() => setIndex(photoIndex)}
            >
              <img
                src={imageUrl(image, "small")}
                alt=""
                width="80"
                height="60"
              />
            </button>
          ))}
        </div>
        <a
          className="text-link"
          href={whatsappUrl(
            `Hola, me gustaría consultar sobre ${project.category.toLowerCase()}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por un trabajo similar <Icon name="diagonal" size={18} />
        </a>
      </div>
    </dialog>
  );
}
