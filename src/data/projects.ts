
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
    id: "veilora-store",
    title: "Veilora Store",
    description:
      "A premium e-commerce application featuring robust user authentication, advanced cart management, and wishlist functionalities. Engineered with a custom luxury design system using Tailwind CSS, offering a dynamic and responsive shopping experience.",
    image: "/images/projects/veilora.png",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router DOM", "Axios", "Context API"],
    githubUrl: "",
    liveUrl: "https://veilora-five.vercel.app/",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard Application",
    description:
      "A full-featured analytics dashboard providing real-time data visualization with Recharts and complex table operations managed via Redux Toolkit. Includes comprehensive export capabilities and is fully Dockerized for production deployment.",
    image: "/images/projects/dashboard.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Recharts", "jsPDF", "xlsx", "Docker"],
    githubUrl: "",
    liveUrl: "https://dashboard-application-coral.vercel.app/",
  },
  {
    id: "moderax",
    title: "ModeraX - Explainable AI Content Moderation",
    description:
      "A high-performance, B2B single-page application for NLP-powered explainable AI content moderation. Features a scalable atomic component architecture, dynamic data visualization, and a decoupled API service layer to deliver an optimized and accessible user experience.",
    image: "/images/projects/moderax.png",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "React Router 7", "Recharts", "Axios", "Google reCAPTCHA v3"],
    githubUrl: "",
    liveUrl: "https://modera-x.vercel.app/",
  },
  {
    id: "project-x-nlp-frontend",
    title: "Enterprise NLP Content Moderation",
    description:
      "An enterprise-grade, NLP-powered moderation interface built with an atomic component architecture. Implements an environment-aware service layer and centralized state management to deliver a highly responsive experience.",
    image: "/images/projects/project-x.png",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "React Router 7", "Recharts", "Vercel"],
    githubUrl: "",
    liveUrl: "https://project-x-cyan-pi.vercel.app/",
  },
  {
    id: "pyramis-travel-platform",
    title: "Pyramis Travel & Booking Platform",
    description:
      "A high-performance travel and booking platform integrating Stripe for payments, Leaflet for maps, and SignalR for real-time synchronization. Features an AI-driven experience module and complex state management via Pinia.",
    image: "/images/projects/pyramis.png",
    techStack: ["Vue 3", "Vite", "Pinia", "Vue Router", "Tailwind CSS", "DaisyUI", "Stripe", "Leaflet", "Microsoft SignalR", "Chart.js", "Axios", "Day.js"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "books-authors-vue-cms",
    title: "Books & Authors Management System",
    description:
      "A comprehensive CMS built with Vue 3 and Pinia for managing book and author catalogs. Features a public storefront and a secure admin dashboard with visual analytics, advanced data tables, and strict authentication guards.",
    image: "/images/projects/books-authors.png",
    techStack: ["Vue 3", "Vite", "Pinia", "Vue Router", "Tailwind CSS", "DaisyUI", "Axios", "Chart.js", "json-server", "FontAwesome"],
    githubUrl: "",
    liveUrl: "",
  }
];
