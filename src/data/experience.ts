import { Briefcase, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: "work" | "education";
  Icon: LucideIcon;
  bullets: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "eyego-engineer",
    company: "EyeGo.Ai",
    role: "Front-End Engineer",
    duration: "06/2026 – Present",
    type: "work",
    Icon: Briefcase,
    bullets: [
      "Developed and maintained scalable dashboard features including forensic search, alert management, and IoT sensor monitoring.",
      "Integrated complex REST APIs using RTK Query with optimistic updates and caching strategies.",
      "Built interactive data visualization and reporting modules consumed by enterprise clients.",
      "Managed global application state with Redux Toolkit across feature-heavy modules.",
    ],
  },
  {
    id: "eyego-intern",
    company: "EyeGo.Ai",
    role: "Front-End Engineer Intern",
    duration: "03/2026 – 06/2026",
    type: "work",
    Icon: Briefcase,
    bullets: [
      "Built responsive dashboard features using React, Next.js, and TypeScript.",
      "Resolved UI/UX issues reported by QA and product teams, improving consistency across modules.",
      "Participated in code reviews and adopted established patterns for component architecture.",
    ],
  },
  {
    id: "iti",
    company: "Information Technology Institute (ITI)",
    role: "UI/UX Development Track",
    duration: "07/2025 – 12/2025",
    type: "education",
    Icon: GraduationCap,
    bullets: [
      "Completed an intensive training program focused on building responsive, accessible web interfaces.",
      "Translated complex Figma design mockups into pixel-perfect, cross-browser–compatible code.",
      "Applied user-centered design principles through iterative testing and feedback cycles.",
    ],
  },
  {
    id: "depi",
    company: "Digital Egyptian Pioneer Initiative (DEPI)",
    role: "Front-End Development Track",
    duration: "10/2024 – 04/2025",
    type: "education",
    Icon: GraduationCap,
    bullets: [
      "Built dynamic single-page applications with Angular, leveraging components, services, and routing.",
      "Integrated RESTful APIs and managed asynchronous state using RxJS observables.",
      "Practiced version control and collaborative workflows with Git and GitHub.",
    ],
  },
];
