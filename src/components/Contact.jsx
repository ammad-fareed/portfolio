import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "../config/site";
import ContactForm from "./ContactForm";
import LinkedInIcon from "./LinkedInIcon";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> START A CONVERSATION
          </p>
          <h2>
            Let's talk about <em>your project.</em>
          </h2>
          <p>
            Have an idea, a product to improve, or a technical challenge to
            solve? Tell me what you're building.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            <Mail size={19} aria-hidden="true" /> {site.email}{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={16} aria-hidden="true" />
              LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
