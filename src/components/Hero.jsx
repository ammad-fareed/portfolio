import { ArrowDownRight } from "lucide-react";
import ScrollButton from "./ScrollButton";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" /> SOFTWARE DEVELOPMENT
          </p>
          <h1>
            Ammad Fareed <span className="hero-divider">|</span>{" "}
            <em>Software Developer</em>
          </h1>
          <p className="hero-lead">
            I build web, mobile, and AI-powered software for businesses
            worldwide.
          </p>
          <p className="hero-description">
            From early-stage MVPs to production-ready SaaS, I help businesses
            turn ideas into reliable, scalable software.
          </p>
          <div className="hero-actions">
            <ScrollButton
              className="button button-outline"
              targetId="portfolio"
            >
              View My Work <ArrowDownRight size={18} aria-hidden="true" />
            </ScrollButton>
          </div>
        </div>
        <figure className="hero-portrait">
          <img
            src="/images/ammad-fareed-portrait.webp"
            alt="Portrait of Ammad Fareed"
            width="1000"
            height="1000"
            fetchPriority="high"
          />
          <figcaption className="hero-portrait-caption">
            <span>Ammad Fareed</span>
            <span>Software Developer</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
