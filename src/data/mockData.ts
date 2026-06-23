import { Code2, Laptop, Layout, Smartphone, PenTool, Sparkles, Database, Server } from "lucide-react";

export const skillsData = {
  frontend: [
    { name: "React.js / Next.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "Angular", level: 75 },
    { name: "TypeScript / JavaScript (ES6+)", level: 90 },
    { name: "Tailwind CSS / Bootstrap", level: 95 },
    { name: "HTML5 / CSS3 / SCSS", level: 95 },
  ],
  uiux: [
    { name: "Figma (Advanced)", level: 90 },
    { name: "User Research & Flow", level: 85 },
    { name: "Wireframing & Prototyping", level: 85 },
    { name: "Interaction Design", level: 80 },
    { name: "Adobe XD / Photoshop", level: 75 },
  ],
  tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Docker", level: 70 },
    { name: "Postman", level: 85 },
    { name: "Illustrator", level: 75 },
  ],
};

export const projectsData = [
  {
    id: "eeg-wheelchair",
    title: "EEG Controlled Wheelchair System",
    category: "Graduation Project (Itida Sponsored)",
    description: "Designed and implemented a prototype wheelchair controlled by brain signals using Eyeblink and Neurosky technology, demonstrating strong problem-solving and technical integration skills. Achieved Excellent grade.",
    image: "/mock-project-1.jpg", 
    techStack: ["C++", "Hardware Integration", "Neurosky API", "Signal Processing"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    challenges: "Interpreting noisy brain signals and translating them into accurate mechanical movements.",
    solution: "Implemented robust signal filtering algorithms and established an efficient communication protocol with the hardware.",
  },
  {
    id: "angular-spa",
    title: "Dynamic Angular SPA",
    category: "DEPI Initiative Project",
    description: "Built dynamic, single-page applications utilizing components, services, and routing, featuring complete RESTful API integration for state management.",
    image: "/mock-project-2.jpg",
    techStack: ["Angular", "TypeScript", "REST APIs", "Git"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    challenges: "Managing complex asynchronous state across multiple highly interactive components.",
    solution: "Utilized Angular services and RxJS observables to maintain a predictable, clean state architecture.",
  },
  {
    id: "ui-ux-portfolio",
    title: "Modern Interactive UI Interfaces",
    category: "ITI Track Projects",
    description: "Developed interactive, pixel-perfect, and responsive user interfaces, translating complex design mockups into functional web experiences with cross-browser compatibility.",
    image: "/mock-project-3.jpg",
    techStack: ["React", "HTML5", "CSS3/SCSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    challenges: "Ensuring 100% cross-browser compatibility while implementing advanced CSS3 animations.",
    solution: "Leveraged modern SCSS mixins and applied rigorous iterative testing to refine the user-centered design.",
  },
];

export const experienceData = [
  {
    id: 1,
    role: "UI/UX Development Intern",
    company: "Information Technology Institute (ITI)",
    duration: "07/2025 - 12/2025",
    description: "Intensive Training Program (ITP). Developed interactive and responsive UIs. Collaborated with cross-functional teams to translate design mockups into functional, pixel-perfect code. Applied user-centered design principles for iterative testing.",
  },
  {
    id: 2,
    role: "Front-end Development Intern",
    company: "Digital Egyptian Pioneer Initiative (DEPI)",
    duration: "10/2024 - 04/2025",
    description: "Built dynamic SPAs using Angular. Integrated RESTful APIs for asynchronous operations. Gained practical version control experience using Git/GitHub for collaborative development.",
  },
  {
    id: 3,
    role: "B.Sc. Electronics & Communication Engineering",
    company: "Tanta University (83.13% With Honors)",
    duration: "09/2019 - 06/2024",
    description: "Graduation Project: Design of EEG Controlled Wheelchair System (Sponsored by Itida). Grade: Excellent.",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Front-End Development",
    description: "Building scalable, responsive web applications using React.js, Vue.js, and Angular with clean, maintainable code.",
    icon: Layout,
  },
  {
    id: 2,
    title: "UI/UX Engineering",
    description: "Translating design mockups from Figma/XD into pixel-perfect, accessible, and interactive user interfaces.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "API Integration & Performance",
    description: "Integrating RESTful APIs efficiently while focusing on performance optimization and component-based architecture.",
    icon: Code2,
  },
];
