import { ArrowUpRight, Layers3 } from "lucide-react";
import ScrollButton from "./ScrollButton";

const skillGroups = [
  ["Backend", "Ruby on Rails", "Node.js", "Python", "FastAPI"],
  ["Frontend", "React", "Next.js", "TypeScript"],
  ["Mobile", "React Native", "Expo"],
  ["Database", "PostgreSQL", "Redis"],
  ["Infrastructure", "Docker", "AWS"],
  ["AI", "AI/LLM integrations"],
];
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> THE PERSON BEHIND THE WORK
          </p>
          <h2>About Me</h2>
          <div className="about-biography">
            <p>
              I'm Ammad Fareed, a software developer with 8+ years of experience
              building web applications, mobile products, SaaS platforms, and
              AI-powered solutions. I work across the full development
              lifecycle, from architecture and MVP development to third-party
              integrations, production deployments, and ongoing improvements.
            </p>
            <p>
              My focus is on building reliable, maintainable software that
              solves real business problems. I work with technologies including
              Ruby on Rails, React, Next.js, TypeScript, React Native, Node.js,
              Python, FastAPI, PostgreSQL, Redis, Docker, AWS, and modern AI/LLM
              tools.
            </p>
            <p>
              I value clear communication, practical engineering decisions,
              dependable delivery, and keeping clients informed throughout the
              project.
            </p>
          </div>
          <ScrollButton className="text-link" targetId="contact">
            Let's work together <ArrowUpRight size={18} aria-hidden="true" />
          </ScrollButton>
        </div>
        <div className="skills-panel">
          <div className="skills-panel-head">
            <span>TECHNICAL TOOLKIT</span>
            <Layers3 size={20} aria-hidden="true" />
          </div>
          {skillGroups.map(([group, ...skills]) => (
            <div className="skill-row" key={group}>
              <h3>{group}</h3>
              <div>
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
