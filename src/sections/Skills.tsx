"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5, SiCss, SiSass, SiJavascript, SiTypescript,
  SiTailwindcss, SiBootstrap, SiReact, SiNextdotjs, SiVuedotjs,
  SiAngular, SiRedux, SiFigma, SiGit, SiGithub,
  SiDocker, SiPostman,
} from "react-icons/si";
import { Reveal } from "@/components/Reveal";

/* ═══════════════════════════════════════════════════════
   Data
═══════════════════════════════════════════════════════ */
const CATEGORIES = [
  {
    id: "frontend",
    label: "Front-End",
    skills: [
      { name: "HTML5",          Icon: SiHtml5,          color: "#e34f26" },
      { name: "CSS3",           Icon: SiCss,            color: "#2965f1" },
      { name: "SCSS",           Icon: SiSass,           color: "#cc6699" },
      { name: "JavaScript",     Icon: SiJavascript,     color: "#f7df1e" },
      { name: "TypeScript",     Icon: SiTypescript,     color: "#3178c6" },
      { name: "Tailwind CSS",   Icon: SiTailwindcss,    color: "#38bdf8" },
      { name: "Bootstrap",      Icon: SiBootstrap,      color: "#7952b3" },
      { name: "React.js",       Icon: SiReact,          color: "#61dafb" },
      { name: "Next.js",        Icon: SiNextdotjs,      color: "#ffffff" },
      { name: "Vue.js",         Icon: SiVuedotjs,       color: "#42b883" },
      { name: "Angular",        Icon: SiAngular,        color: "#dd0031" },
      { name: "Redux Toolkit",  Icon: SiRedux,          color: "#764abc" },
    ],
  },
  {
    id: "uiux",
    label: "UI / UX",
    skills: [
      { name: "Figma",          Icon: SiFigma,          color: "#f24e1e" },
      { name: "Adobe XD",       Icon: null,             color: "#ff61f6" },
      { name: "Wireframing",    Icon: null,             color: "#4a8a73" },
      { name: "Prototyping",    Icon: null,             color: "#4a8a73" },
      { name: "User Research",  Icon: null,             color: "#4a8a73" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git",            Icon: SiGit,            color: "#f05032" },
      { name: "GitHub",         Icon: SiGithub,         color: "#ffffff" },
      { name: "Docker",         Icon: SiDocker,         color: "#2496ed" },
      { name: "Postman",        Icon: SiPostman,        color: "#ff6c37" },
      { name: "Photoshop",      Icon: null,             color: "#31a8ff" },
      { name: "Illustrator",    Icon: null,             color: "#ff9a00" },
    ],
  },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

/* ═══════════════════════════════════════════════════════
   SkillCard
═══════════════════════════════════════════════════════ */
interface SkillCardProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any> | null;
  color: string;
  index: number;
}

function SkillCard({ name, Icon, color, index }: SkillCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.82, y: 16 }}
      transition={{ duration: 0.35, delay: index * 0.045, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl border cursor-default transition-all duration-300"
      style={{
        background:    "var(--bg-secondary)",
        borderColor:   hovered ? "var(--accent-primary)" : "var(--border-color)",
        boxShadow:     hovered
          ? "0 8px 28px rgba(43,87,72,0.25), 0 0 0 1px var(--accent-primary)"
          : "none",
        transform:     hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Icon */}
      <motion.div
        animate={hovered ? { scale: 1.22, rotate: -6 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        className="text-3xl leading-none"
        style={{ color: hovered ? color : "var(--text-muted)" }}
      >
        {Icon ? (
          <Icon />
        ) : (
          /* Fallback — first two letters as monogram */
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold"
            style={{ background: "rgba(43,87,72,0.25)", color: "var(--accent-light)" }}
          >
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </motion.div>

      {/* Label */}
      <span
        className="text-[11px] font-medium text-center leading-tight tracking-wide transition-colors duration-300"
        style={{ color: hovered ? "var(--text-primary)" : "var(--text-muted)" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   Tab Button
═══════════════════════════════════════════════════════ */
interface TabBtnProps {
  label: string;
  active: boolean;
  onClick: () => void;
}
function TabBtn({ label, active, onClick }: TabBtnProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap"
      style={{
        color:      active ? "#ffffff" : "var(--text-muted)",
        background: active ? "var(--accent-primary)" : "transparent",
        border:     `1px solid ${active ? "var(--accent-primary)" : "var(--border-color)"}`,
      }}
    >
      {label}
      {active && (
        <motion.div
          layoutId="tab-indicator"
          className="absolute inset-0 rounded-full -z-10"
          style={{ background: "var(--accent-primary)" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════
   Skills Section
═══════════════════════════════════════════════════════ */
export const Skills = () => {
  const [activeTab, setActiveTab] = React.useState<CategoryId>("frontend");

  const activeCategory = CATEGORIES.find((c) => c.id === activeTab)!;

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle bg blob */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(43,87,72,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="flex flex-col items-center text-center mb-14">
          <Reveal delay={0}>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--accent-light)" }}
            >
              What I Work With
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Skills &amp; Tools
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mt-4 w-16 h-[3px] rounded-full"
              style={{ background: "var(--accent-primary)" }}
            />
          </Reveal>
        </div>

        {/* ── Category tabs ── */}
        <Reveal delay={0.25} width="100%">
          <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <TabBtn
                key={cat.id}
                label={cat.label}
                active={activeTab === cat.id}
                onClick={() => setActiveTab(cat.id as CategoryId)}
              />
            ))}
          </div>
        </Reveal>

        {/* ── Skill cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
          >
            {activeCategory.skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                Icon={skill.Icon}
                color={skill.color}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
