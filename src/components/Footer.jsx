import { ArrowUpRight, Mail } from "lucide-react";
import { navigation } from "../data/navigation";
import { site } from "../config/site";
import LinkedInIcon from "./LinkedInIcon";
import ScrollButton from "./ScrollButton";

const copyrightYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <ScrollButton
              className="footer-brand"
              targetId="home"
              aria-label="Ammad Fareed, back to home"
            >
              <img src="/favicon.svg" alt="" width="36" height="36" />
              <span>Ammad Fareed</span>
            </ScrollButton>
            <p>Software Developer</p>
            <p>Building reliable web, mobile, SaaS, and AI-powered software.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.map(([label, id]) => (
              <ScrollButton targetId={id} key={id}>
                {label}
              </ScrollButton>
            ))}
          </nav>
          <div className="footer-contact">
            <a href={`mailto:${site.email}`}>
              <Mail size={15} aria-hidden="true" />
              <span>{site.email}</span>
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={15} aria-hidden="true" />
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {copyrightYear} Ammad Fareed. All rights reserved.</span>
          <ScrollButton targetId="home">Back to top ↑</ScrollButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
