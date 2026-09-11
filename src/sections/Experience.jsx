import { lazy, Suspense, useRef, useState } from "react";
import Icon from "../components/Icon";
import { projects, imageUrl } from "../data/site";

const ProjectGallery = lazy(() => import("../components/ProjectGallery"));

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const returnFocusRef = useRef(null);
  const closeGallery = () => {
    setSelected(null);
    requestAnimationFrame(() =>
      returnFocusRef.current?.focus({ preventScroll: true }),
    );
  };
  return (
    <section
      className="section experience-section"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / EXPERIENCIA EN ACCIÓN</p>
            <h2 id="experience-title">
              Menos palabras.
              <br />
              Más soluciones reales.
            </h2>
          </div>
          <p>
            Una mirada a nuestros trabajos de mantenimiento, actualización y
            cuidado de equipos.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index === 0 ? "project-featured" : ""}`}
              key={project.id}
            >
              <button
                className="project-open"
                onClick={(event) => {
                  returnFocusRef.current = event.currentTarget;
                  setSelected(project);
                }}
                aria-label={`Ver galería: ${project.category}`}
                aria-haspopup="dialog"
              >
                <div className="project-image">
                  <img
                    src={imageUrl(project.images[0], "small")}
                    alt={project.category}
                    width="640"
                    height="480"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-count">
                    {project.images.length} fotografías
                  </span>
                  <span className="project-arrow">
                    <Icon name="diagonal" />
                  </span>
                </div>
                <div className="project-copy">
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </button>
            </article>
          ))}
        </div>
        <Suspense
          fallback={
            selected ? (
              <p role="status" className="gallery-loading">
                Abriendo galería…
              </p>
            ) : null
          }
        >
          {selected && (
            <ProjectGallery
              key={selected.id}
              project={selected}
              onClose={closeGallery}
            />
          )}
        </Suspense>
      </div>
    </section>
  );
}
