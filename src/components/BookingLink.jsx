import { ArrowUpRight, CalendarDays } from "lucide-react";
import { site } from "../config/site";

export default function BookingLink() {
  return (
    <a
      className="button button-primary"
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a Meeting (opens Google Calendar in a new tab)"
    >
      <CalendarDays size={18} aria-hidden="true" />
      Book a Meeting
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
