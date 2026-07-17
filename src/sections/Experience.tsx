"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { experienceEntries, type ExperienceEntry } from "@/data/experience";


interface PulsingDotProps {
  Icon: ExperienceEntry["Icon"];
}
function PulsingDot({ Icon }: PulsingDotProps) {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
      {/* Outer pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ scale: [1, 1.55, 1], opacity: [0.45, 0, 0.45] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "var(--accent-primary)" }}
      />
      {/* Inner solid circle */}
      <div
        className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2"
        style={{
          background:   "var(--bg-secondary)",
          borderColor:  "var(--accent-primary)",
          boxShadow:    "0 0 14px rgba(43,87,72,0.6)",
        }}
      >
        <Icon className="w-4 h-4" style={{ color: "var(--accent-light)" }} />
      </div>
    </div>
  );
}


function DateBadge({ duration }: { duration: string }) {
  return (
    <span
      className="inline-flex items-center shrink-0 px-3 py-1 rounded-full text-xs font-semibold border"
      style={{
        background:  "rgba(43,87,72,0.12)",
        borderColor: "var(--accent-primary)",
        color:       "var(--accent-light)",
      }}
    >
      {duration}
    </span>
  );
}


interface ExperienceCardProps {
  entry: ExperienceEntry;
  side: "left" | "right"; 
  index: number;
}
function ExperienceCard({ entry, side, index }: ExperienceCardProps) {
  const [hovered, setHovered] = React.useState(false);

  const slideFrom = side === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideFrom }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-5 md:p-6 rounded-2xl border transition-all duration-300"
      style={{
        background:  "var(--bg-secondary)",
        borderColor: hovered ? "var(--accent-primary)" : "var(--border-color)",
        boxShadow:   hovered
          ? "0 12px 36px rgba(43,87,72,0.2), 0 0 0 1px var(--accent-primary)"
          : "0 2px 10px rgba(0,0,0,0.18)",
        transform:   hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-0.5"
            style={{ color: "var(--accent-light)" }}
          >
            {entry.role}
          </p>
          <h3
            className="text-base font-bold leading-snug"
            style={{ color: "var(--text-primary)" }}
          >
            {entry.company}
          </h3>
        </div>
        <DateBadge duration={entry.duration} />
      </div>

      {/* Divider */}
      <div
        className="w-full h-px mb-3"
        style={{ background: "var(--border-color)" }}
      />

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent-primary)" }}
            />
            <span style={{ color: "var(--text-muted)" }}>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}


interface TimelineRowDesktopProps {
  entry: ExperienceEntry;
  index: number;
}
function TimelineRowDesktop({ entry, index }: TimelineRowDesktopProps) {
  const isLeft = index % 2 === 0;
  return (
    <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-6">
      {/* Left column */}
      <div className={isLeft ? "pr-2" : ""}>
        {isLeft && <ExperienceCard entry={entry} side="left" index={index} />}
      </div>

      {/* Centre dot */}
      <div className="flex flex-col items-center">
        <PulsingDot Icon={entry.Icon} />
      </div>

      {/* Right column */}
      <div className={!isLeft ? "pl-2" : ""}>
        {!isLeft && <ExperienceCard entry={entry} side="right" index={index} />}
      </div>
    </div>
  );
}


interface TimelineRowMobileProps {
  entry: ExperienceEntry;
  index: number;
}
function TimelineRowMobile({ entry, index }: TimelineRowMobileProps) {
  return (
    <div className="md:hidden flex gap-4">
      <div className="flex flex-col items-center">
        <PulsingDot Icon={entry.Icon} />
        {/* Connector segment to next entry */}
        <div
          className="w-px flex-1 mt-2"
          style={{ background: "var(--border-color)" }}
        />
      </div>
      <div className="flex-1 pb-8">
        <ExperienceCard entry={entry} side="right" index={index} />
      </div>
    </div>
  );
}


function AnimatedTimelineLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
      {/* Base faint line */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--border-color)" }}
      />
      {/* Animated sage green progress line */}
      <motion.div
        className="absolute top-0 left-0 w-full origin-top"
        style={{
          scaleY,
          height: "100%",
          background:
            "linear-gradient(to bottom, var(--accent-primary), var(--accent-light), var(--accent-primary))",
        }}
      />
    </div>
  );
}


export const Experience = () => {
  const containerRef = React.useRef<HTMLDivElement  >(null);

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle bg blob */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(43,87,72,0.07) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal delay={0}>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--accent-light)" }}
            >
              Career Journey
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Experience
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mt-4 w-16 h-[3px] rounded-full"
              style={{ background: "var(--accent-primary)" }}
            />
          </Reveal>
        </div>

        {/* Timeline container */}
        <div ref={containerRef} className="relative">
          {/* Scroll-driven centre line (desktop only) */}
          <AnimatedTimelineLine containerRef={containerRef} />

          {/* Entries */}
          <div className="flex flex-col gap-10 md:gap-14">
            {experienceEntries.map((entry, index) => (
              <React.Fragment key={entry.id}>
                {/* Desktop alternating */}
                <TimelineRowDesktop entry={entry} index={index} />
                {/* Mobile left-anchored */}
                <TimelineRowMobile entry={entry} index={index} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
