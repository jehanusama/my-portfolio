"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";


const EASE = [0.22, 1, 0.36, 1] as const;

function AnimatedBlob() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Primary blob */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43,87,72,0.28) 0%, rgba(43,87,72,0.08) 55%, transparent 75%)",
          filter: "blur(80px)",
        }}
        animate={{ y: [0, 40, -20, 0], x: [0, 30, -20, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Secondary blob */}
      <motion.div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,138,115,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ y: [0, -30, 20, 0], x: [0, -20, 30, 0], scale: [1, 0.92, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #4a8a73 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll down"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors duration-300"
      style={{ color: "var(--text-muted)" }}
    >
      <span className="text-[11px] tracking-widest uppercase font-medium">Scroll</span>
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
      </motion.div>
    </motion.a>
  );
}


interface SocialBtnProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}
function SocialBtn({ href, label, icon, external = true }: SocialBtnProps) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ rotate: 8, scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300"
      style={{
        borderColor: hovered ? "var(--accent-primary)" : "var(--border-color)",
        background:  hovered ? "var(--accent-primary)" : "var(--bg-secondary)",
        color:       hovered ? "#ffffff" : "var(--text-muted)",
      }}
    >
      {icon}
    </motion.a>
  );
}

function PrimaryBtn() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.a
      href="#projects"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
      style={{
        background: hovered ? "var(--accent-light)" : "var(--accent-primary)",
        boxShadow: hovered
          ? "0 0 32px rgba(74,138,115,0.55)"
          : "0 0 20px rgba(43,87,72,0.4)",
      }}
    >
      View My Work
    </motion.a>
  );
}

function SecondaryBtn() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.a
      href="/cv/Jehan_Usama.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-full text-sm font-semibold border transition-all duration-300"
      style={{
        borderColor: "var(--accent-primary)",
        background: hovered ? "var(--accent-primary)" : "transparent",
        color:      hovered ? "#ffffff" : "var(--accent-light)",
      }}
    >
      Download CV
    </motion.a>
  );
}

const TITLES = [
  "Front-End Engineer",
  "React & Next.js Developer",
];

function TypewriterEffect() {
  const [text, setText] = React.useState("");
  const [titleIndex, setTitleIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text === "") {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }, 500);
      } else {
        timeoutId = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, 40);
      }
    } else {
      if (text === currentTitle) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      } else {
        timeoutId = setTimeout(() => {
          setText((prev) => currentTitle.slice(0, prev.length + 1));
        }, 70);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, titleIndex]);

  return (
    <div
      className="mt-3 text-lg md:text-xl font-semibold tracking-wide flex items-center justify-center min-h-[32px]"
      style={{ color: "var(--accent-light)" }}
    >
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-[2px] w-[2px] h-[1.1em]"
        style={{ background: "var(--accent-light)" }}
      />
    </div>
  );
}

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <AnimatedBlob />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">

        <Reveal delay={0.1} width="fit-content">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
            style={{
              borderColor: "var(--accent-primary)",
              color:       "var(--accent-light)",
              background:  "rgba(43,87,72,0.12)",
              boxShadow:   "0 0 18px rgba(43,87,72,0.25)",
            }}
          >
            Available for opportunities
          </span>
        </Reveal>

        <Reveal delay={0.25} width="100%">
          <h1
            className="mt-6 font-extrabold tracking-tight leading-[1.08]"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              background:
                "linear-gradient(135deg, var(--text-primary) 40%, var(--accent-light) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Jehan Usama
          </h1>
        </Reveal>

        {/* Role Typewriter */}  
        <Reveal delay={0.4} width="fit-content">
          <TypewriterEffect />
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.55} width="fit-content">
          <p
            className="mt-4 text-sm md:text-base leading-relaxed max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Building scalable, responsive web experiences with React &amp; Next.js
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.7} width="100%">
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <PrimaryBtn />
            <SecondaryBtn />
          </div>
        </Reveal>

        {/* Social Icons */}
        <Reveal delay={0.85} width="fit-content">
          <div className="mt-8 flex items-center gap-3">
            <SocialBtn
              href="https://github.com/jehanusama"
              label="GitHub"
              icon={<Github className="w-[18px] h-[18px]" />}
            />
            <SocialBtn
              href="https://linkedin.com/in/jehan-usama"
              label="LinkedIn"
              icon={<Linkedin className="w-[18px] h-[18px]" />}
            />
            <SocialBtn
              href="mailto:jehanusama3@gmail.com"
              label="Email"
              icon={<Mail className="w-[18px] h-[18px]" />}
              external={false}
            />
          </div>
        </Reveal>
      </div>

      {/* Scroll down indicator */}
      <ScrollIndicator />
    </section>
  );
};
