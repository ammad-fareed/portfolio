import {
  Bot,
  Code2,
  DatabaseZap,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";

export const services = [
  {
    title: "Web Development",
    description:
      "Business websites, web applications, landing pages, and API integrations.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android applications using React Native and Expo.",
    icon: Smartphone,
  },
  {
    title: "SaaS and Custom Software",
    description:
      "SaaS platforms, dashboards, admin panels, and internal business tools.",
    icon: PanelsTopLeft,
  },
  {
    title: "AI Integration",
    description:
      "AI-powered applications, LLM workflows, chatbots, and business process automation.",
    icon: Bot,
  },
  {
    title: "Backend and Integrations",
    description:
      "API development, payment integrations, webhooks, background jobs, and third-party services.",
    icon: DatabaseZap,
  },
];
