import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index, total }) {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-visual project-visual-image">
          <img
            src={project.image}
            alt={project.imageAlt || `${project.name} project screenshot`}
            width={project.imageWidth || 960}
            height={project.imageHeight || 540}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div
          className={`project-visual visual-${project.color}`}
          role="img"
          aria-label={`Text-based visual placeholder for ${project.name}; approved screenshot pending`}
        >
          <span className="visual-top">
            <span>AF / SELECTED WORK</span>
            <span>
              {String(index + 1).padStart(2, "0")} —{" "}
              {String(total).padStart(2, "0")}
            </span>
          </span>
          <span className="visual-orbit" aria-hidden="true" />
          <span className="visual-name">
            {project.visualName || project.name}
          </span>
          <span className="visual-bottom">
            PROJECT IMAGE PENDING APPROVAL{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </div>
      )}
      <div className="project-content">
        <div className="project-head">
          <div>
            <span className="project-category">{project.category}</span>
            <h3>{project.name}</h3>
          </div>
          {project.url ? (
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} website`}
            >
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          ) : (
            <span
              className="project-link project-link-muted"
              title="Project website link awaiting verification"
            >
              <ArrowUpRight size={22} aria-hidden="true" />
            </span>
          )}
        </div>
        <p>{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
