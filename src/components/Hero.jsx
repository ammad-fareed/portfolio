import { ArrowDownRight, Braces } from "lucide-react";
import ScrollButton from "./ScrollButton";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" /> SOFTWARE DEVELOPMENT · WORLDWIDE
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
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-top">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>AMMAD / SOFTWARE</span>
            <span>001</span>
          </div>
          <div className="hero-art-body">
            <div className="art-ring art-ring-one" />
            <div className="art-ring art-ring-two" />
            <div className="art-core">
              <Braces size={64} strokeWidth={1.1} />
            </div>
            <span className="art-label art-label-one">WEB & SAAS</span>
            <span className="art-label art-label-two">MOBILE</span>
            <span className="art-label art-label-three">AI SYSTEMS</span>
            <div className="art-coordinate">
              DESIGN&nbsp; / &nbsp;DEVELOP&nbsp; / &nbsp;DELIVER
            </div>
          </div>
          <div className="hero-art-bottom">
            <span>ENGINEERED FOR REAL-WORLD USE</span>
            <span>↗</span>
          </div>
        </div>
      </div>
      <div className="container hero-foot">
        <span>SCROLL TO EXPLORE</span>
        <span>01 / 05</span>
      </div>
    </section>
  );
}

export default Hero;
