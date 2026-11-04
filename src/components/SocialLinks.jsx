import { ArrowUpRight, BriefcaseBusiness, CodeXml } from "lucide-react";
import { site } from "../config/site";
import LinkedInIcon from "./LinkedInIcon";

const profiles = [
  { label: "LinkedIn", href: site.linkedinUrl, Icon: LinkedInIcon },
  { label: "Upwork", href: site.upworkUrl, Icon: BriefcaseBusiness },
  { label: "GitHub", href: site.githubUrl, Icon: CodeXml },
];

export default function SocialLinks({ iconSize = 16 }) {
  return profiles.map(({ label, href, Icon }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={`${label} profile (opens in a new tab)`}
    >
      <Icon size={iconSize} aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight size={iconSize} aria-hidden="true" />
    </a>
  ));
}
