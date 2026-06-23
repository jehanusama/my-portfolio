"use client";
import { Reveal } from "@/components/Reveal";
import { MessageCircle } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative z-10 bg-[#0c0917] border-t border-violet-900/30">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left: Heading */}
          <div>
            <Reveal>
              <p className="text-fuchsia-400 font-semibold text-sm tracking-wide mb-4 uppercase">About Me</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-rose-50 leading-[1.15]">
                Bridging the gap between design &amp; engineering.
              </h2>
            </Reveal>
          </div>

          {/* Right: Bio + CTA */}
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <p className="text-violet-200/70 text-base md:text-lg font-medium leading-relaxed">
                Hello! I&apos;m a Front-End Developer specializing in React.js and Vue.js, deeply passionate about translating complex requirements into elegant, performant interfaces.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-violet-300/50 text-base leading-relaxed">
                Skilled in component-based architecture, API integration, and performance optimization. I bring a keen eye for usability, accessibility, and user-centered design to every project.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://wa.me/"
                  target="_blank" rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

