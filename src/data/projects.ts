
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string | null;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "eyego-dashboard",
    title: "EyeGo.Ai — Analytics Dashboard",
    description:
      "Scalable enterprise dashboard with real-time IoT sensor monitoring, forensic search, alert management, and role-based access — built for EyeGo.Ai.",
    image: null,
    techStack: ["Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "https://eyego.ai",
  },
  {
    id: "eeg-wheelchair",
    title: "EEG Controlled Wheelchair System",
    description:
      "Graduation project (Itida-sponsored). Brain-signal–driven wheelchair prototype using Neurosky EEG, C++ firmware, and custom signal-filtering algorithms. Graded Excellent.",
    image: null,
    techStack: ["C++", "Neurosky API", "Signal Processing", "Hardware Integration"],
    githubUrl: "#",
    liveUrl: "",
  },
  {
    id: "angular-spa",
    title: "Dynamic Angular SPA",
    description:
      "Feature-rich single-page application with full RESTful API integration, component-driven architecture, and reactive state management built during the DEPI initiative.",
    image: null,
    techStack: ["Angular", "TypeScript", "RxJS", "REST APIs", "Git"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "ui-interfaces",
    title: "Modern Interactive UI Interfaces",
    description:
      "Pixel-perfect, cross-browser–compatible web interfaces translated from Figma mockups with advanced CSS animations and SCSS architecture.",
    image: null,
    techStack: ["React", "SCSS", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "next-portfolio",
    title: "Personal Portfolio — v2",
    description:
      "This very portfolio — dark sage-green theme, Framer Motion animations, component-driven Next.js architecture, and fully responsive design.",
    image: null,
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/jehanusama",
    liveUrl: "#",
  },
  {
    id: "vue-app",
    title: "Vue.js E-Commerce Storefront",
    description:
      "Responsive product listing, cart management, and checkout flow built in Vue 3 with Composition API, Pinia store, and REST API integration.",
    image: null,
    techStack: ["Vue 3", "Pinia", "TypeScript", "Vite", "REST APIs"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
