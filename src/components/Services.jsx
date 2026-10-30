import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import SectionHeader from "./SectionHeader";

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeader
          kicker="WHAT I DO"
          title="Services"
          intro="From the first product decision to the final integration, I build practical software around your business goals."
        />
        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article className="service-card" key={title}>
              <div className="service-card-top">
                <span className="service-icon">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="card-index">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight
                className="service-arrow"
                size={21}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
