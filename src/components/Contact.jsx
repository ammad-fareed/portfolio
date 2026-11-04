import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "../config/site";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";
import BookingLink from "./BookingLink";

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
            <Mail size={19} aria-hidden="true" />
            <span>{site.email}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="contact-booking">
            <BookingLink />
          </div>
          <div className="contact-links">
            <SocialLinks />
          </div>
        </div>
        <div className="contact-form-area">
          <ContactForm />
          <p className="contact-privacy">
            I use your details only to reply to your inquiry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
