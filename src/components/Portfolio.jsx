import { projects } from "../data/projects";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-intro">
          <SectionHeader
            kicker="SELECTED WORK"
            title="Featured Projects"
            intro="Software platforms and development experience across SaaS, productivity software, financial technology, automotive technology, and education."
          />
          <span className="project-count">
            {String(projects.length).padStart(2, "0")} / PROJECTS
          </span>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              total={projects.length}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
