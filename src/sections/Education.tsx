"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Cpu, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

/* ─────────────────────────────────────────────────────────
   GlowBadge — small pill with sage green colour
───────────────────────────────────────────────────────── */
function GlowBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
      style={{
        background:  "rgba(43,87,72,0.18)",
        borderColor: "var(--accent-primary)",
        color:       "var(--accent-light)",
        boxShadow:   "0 0 10px rgba(43,87,72,0.2)",
      }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   IconCircle — icon inside a sage green glowing circle
───────────────────────────────────────────────────────── */
function IconCircle({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
      className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
      style={{
        background:  "rgba(43,87,72,0.18)",
        border:      "1.5px solid var(--accent-primary)",
        boxShadow:   "0 0 18px rgba(43,87,72,0.3)",
        color:       "var(--accent-light)",
      }}
    >
      {icon}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   EducationCard — degree info
───────────────────────────────────────────────────────── */
function EducationCard() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl border transition-all duration-300 h-full"
      style={{
        background:  "var(--bg-secondary)",
        borderColor: hovered ? "var(--accent-primary)" : "var(--border-color)",
        boxShadow:   hovered ? "0 12px 36px rgba(43,87,72,0.18)" : "0 2px 10px rgba(0,0,0,0.15)",
        transform:   hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Icon + label */}
      <div className="flex items-center gap-3">
        <IconCircle icon={<GraduationCap className="w-5 h-5" />} />
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "var(--accent-light)" }}
        >
          Education
        </span>
      </div>

      {/* Degree */}
      <div>
        <h3
          className="text-lg md:text-xl font-extrabold leading-snug mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          Bachelor of Engineering
        </h3>
        <p className="text-sm font-semibold" style={{ color: "var(--accent-light)" }}>
          Electronics &amp; Communication Engineering
        </p>
      </div>

      {/* Institution */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        Faculty of Engineering, Tanta University
      </p>

      {/* Divider */}
      <div className="w-full h-px" style={{ background: "var(--border-color)" }} />

      {/* Footer row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          09/2019 – 06/2024
        </span>
        <GlowBadge>
          <Award className="w-3 h-3" />
          83.13% — With Honors
        </GlowBadge>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   GradProjectCard — featured graduation project
   Animated shimmer border using keyframes via style tag
───────────────────────────────────────────────────────── */
function GradProjectCard() {
  return (
    <>
      {/* Shimmer keyframe injected once */}
      <style>{`
        @keyframes border-shimmer {
          0%   { opacity: 0.5; }
          50%  { opacity: 1;   }
          100% { opacity: 0.5; }
        }
        .shimmer-border { animation: border-shimmer 2.8s ease-in-out infinite; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col gap-4 p-6 md:p-8 rounded-2xl h-full overflow-hidden"
        style={{
          background: "var(--bg-secondary)",
          border: "1.5px solid transparent",
          backgroundClip: "padding-box",
        }}
      >
        {/* Animated glow border overlay */}
        <div
          className="shimmer-border pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            border: "1.5px solid var(--accent-primary)",
            boxShadow:
              "0 0 24px rgba(43,87,72,0.35) inset, 0 0 36px rgba(43,87,72,0.2)",
          }}
          aria-hidden="true"
        />

        {/* Soft glow background */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(43,87,72,0.15) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 h-full">
          {/* Icon + label */}
          <div className="flex items-center gap-3">
            <IconCircle icon={<Cpu className="w-5 h-5" />} />
            <div>
              <span
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent-light)" }}
              >
                <Sparkles className="w-3 h-3" />
                Graduation Project
              </span>
            </div>
          </div>

          {/* Title */}
          <div>
            <h3
              className="text-xl md:text-2xl font-extrabold leading-snug mb-1"
              style={{
                background:
                  "linear-gradient(135deg, var(--text-primary) 40%, var(--accent-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              EEG Controlled Wheelchair System
            </h3>
            <p className="text-sm font-semibold" style={{ color: "var(--accent-light)" }}>
              Sponsored by ITIDA
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
            A prototype wheelchair controlled entirely by brain signals using Eyeblink
            detection and Neurosky EEG technology. Demonstrated strong problem-solving,
            hardware integration, and signal-processing skills across firmware and UI layers.
          </p>

          {/* Divider */}
          <div className="w-full h-px" style={{ background: "var(--border-color)" }} />

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              Faculty Graduation Project · 2024
            </span>
            <GlowBadge>
              <Award className="w-3 h-3" />
              Grade: Excellent
            </GlowBadge>
          </div>
        </div>
      </motion.div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   Education Section
───────────────────────────────────────────────────────── */
export const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(43,87,72,0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <Reveal delay={0}>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--accent-light)" }}
            >
              Academic Background
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Education
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mt-4 w-16 h-[3px] rounded-full"
              style={{ background: "var(--accent-primary)" }}
            />
          </Reveal>
        </div>

        {/* Two-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <EducationCard />
          <GradProjectCard />
        </div>
      </div>
    </section>
  );
};
