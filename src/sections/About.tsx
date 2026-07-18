"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Briefcase } from "lucide-react";



const FACTS = [
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Tanta, Egypt (Open to Relocation)",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    text: "B.Eng Electronics & Communication",
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: "83.13% — With Honors",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    text: "Front-End Engineer @ EyeGo.Ai",
  },
] as const;

/* ─────────────────────────────────────────────────────────
   FactCard — single hoverable info tile
───────────────────────────────────────────────────────── */
interface FactCardProps {
  icon: React.ReactNode;
  text: string;
  delay: number;
}
function FactCard({ icon, text, delay }: FactCardProps) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-300"
      style={{
        background:   "var(--bg-secondary)",
        borderColor:  hovered ? "var(--accent-primary)" : "var(--border-color)",
        boxShadow:    hovered ? "0 8px 24px rgba(43,87,72,0.2)" : "none",
        transform:    hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <span
        className="mt-0.5 shrink-0 transition-colors duration-300"
        style={{ color: "var(--accent-light)" }}
      >
        {icon}
      </span>
      <span
        className="text-sm leading-snug font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        {text}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   ProfileImage — floating image with glow + decorations
───────────────────────────────────────────────────────── */
function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-center relative"
    >
      {/* Outer decorative dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[310px] h-[310px] md:w-[380px] md:h-[380px] rounded-full"
        style={{
          border: "1.5px dashed rgba(43,87,72,0.35)",
        }}
      />

      {/* Decorative dots at cardinal points */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: "var(--accent-primary)",
            opacity: 0.6,
            top: "50%",
            left: "50%",
            transform: `rotate(${deg}deg) translateY(-185px) translateX(-50%)`,
          }}
        />
      ))}

      {/* Glow backdrop */}
      <div
        className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(43,87,72,0.35) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* Floating image container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden"
        style={{
          border: "2px solid var(--accent-primary)",
          boxShadow: "0 0 40px rgba(43,87,72,0.35), 0 0 0 4px rgba(43,87,72,0.08)",
        }}
      >
        <Image
          src="/Jehan.jpg"
          alt="Jehan Usama — Front-End Engineer"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,21,18,0.55) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   About Section
───────────────────────────────────────────────────────── */
export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(43,87,72,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Two-column layout ── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — Profile Image */}
          <ProfileImage />

          {/* Right — Text content */}
          <div className="flex flex-col">
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span
                className="w-8 h-[2px] rounded-full"
                style={{ background: "var(--accent-primary)" }}
              />
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent-light)" }}
              >
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Turning ideas into{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--text-primary) 30%, var(--accent-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                interactive experiences
              </span>
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              Front-End Engineer with hands-on experience in{" "}
              <span style={{ color: "var(--accent-light)" }}>
                React.js, Next.js, TypeScript, Redux Toolkit,
              </span>{" "}
              and RTK Query. I hold a B.Eng in Electronics &amp; Communication
              Engineering from Tanta University, graduating with honors.
              Currently building scalable dashboard features at{" "}
              <span style={{ color: "var(--accent-light)" }}>EyeGo.Ai</span>,
              focused on clean architecture and great UX that makes a real
              difference.
            </motion.p>

            {/* Quick-fact cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FACTS.map((fact, i) => (
                <FactCard
                  key={i}
                  icon={fact.icon}
                  text={fact.text}
                  delay={0.3 + i * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
