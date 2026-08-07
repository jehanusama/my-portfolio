"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Github } from "@/components/Icons";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";


const PLACEHOLDERS = [
  "linear-gradient(135deg, #0d1512 0%, #1a3028 50%, #2B5748 100%)",
  "linear-gradient(135deg, #0d1512 0%, #1a2a20 50%, #2b4a3d 100%)",
  "linear-gradient(135deg, #0a1210 0%, #1e352a 50%, #3a6b57 100%)",
];


function TechBadge({ label, index }: { label: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index, duration: 0.3 }}
      className="px-2.5 py-1 rounded-full text-[11px] font-semibold border"
      style={{
        background:  "rgba(43,87,72,0.12)",
        borderColor: "var(--accent-primary)",
        color:       "var(--accent-light)",
      }}
    >
      {label}
    </motion.span>
  );
}


interface LinkBtnProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}
function LinkBtn({ href, label, icon }: LinkBtnProps) {
  const [hovered, setHovered] = React.useState(false);
  if (!href || href === "") return null;
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300"
      style={{
        borderColor: hovered ? "var(--accent-primary)" : "var(--border-color)",
        background:  hovered ? "var(--accent-primary)" : "transparent",
        color:       hovered ? "#ffffff" : "var(--text-muted)",
      }}
    >
      {icon}
    </motion.a>
  );
}


interface ProjectCardProps {
  project: Project;
  placeholderGradient: string;
  index: number;
}

function ProjectCard({ project, placeholderGradient, index }: ProjectCardProps) {
  const [hovered, setHovered] = React.useState(false);
  
  // Alternate slide direction for grid layout
  const slideFrom = index % 2 === 0 ? -50 : 50;

  return (
    <motion.article
      initial={{ opacity: 0, x: slideFrom }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{
        background:   "var(--bg-secondary)",
        borderColor:  hovered ? "var(--accent-primary)" : "var(--border-color)",
        boxShadow:    hovered
          ? "0 16px 48px rgba(43,87,72,0.22), 0 0 0 1px var(--accent-primary)"
          : "0 2px 12px rgba(0,0,0,0.2)",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* ── Thumbnail ── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {/* Background — image or gradient placeholder */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            backgroundImage: project.image ? `url("${project.image}")` : placeholderGradient,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          {/* Decorative mesh lines on placeholder */}
          {!project.image && (
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(var(--accent-primary) 1px, transparent 1px), linear-gradient(90deg, var(--accent-primary) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          )}
        </motion.div>

        {/* Dark overlay that lifts on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: "rgba(13,21,18,0.65)" }}
        >
          {(project.liveUrl || project.githubUrl) && (
            <motion.a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: hovered ? 1 : 0.88, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white border"
              style={{
                borderColor: "var(--accent-light)",
                background:  "rgba(43,87,72,0.5)",
                backdropFilter: "blur(6px)",
              }}
            >
              {project.liveUrl ? "View Project" : "View Source"}
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3
          className="text-base font-bold leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.techStack.map((tech, i) => (
            <TechBadge key={tech} label={tech} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mt-1"
          style={{ background: "var(--border-color)" }}
        />

        {/* Link buttons */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <LinkBtn
              href={project.githubUrl}
              label="View source on GitHub"
              icon={<Github className="w-[15px] h-[15px]" />}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}


// Removed containerVariants as we trigger animations individually on scroll

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle bg accent */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(43,87,72,0.07) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <Reveal delay={0}>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--accent-light)" }}
            >
              What I&apos;ve Built
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mt-4 w-16 h-[3px] rounded-full"
              style={{ background: "var(--accent-primary)" }}
            />
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              placeholderGradient={PLACEHOLDERS[i % PLACEHOLDERS.length]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
