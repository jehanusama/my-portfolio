"use client";
import { Reveal } from "@/components/Reveal";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative z-10 bg-[#0f0b18] border-t border-violet-900/30">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-fuchsia-600/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 flex flex-col items-center justify-center text-center relative z-10">
        <Reveal>
          <p className="text-fuchsia-400 font-semibold text-sm tracking-wide mb-4 uppercase">Get In Touch</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-rose-50 mb-6">
            Let&apos;s Work Together
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-violet-200/60 text-base md:text-lg font-medium max-w-xl mx-auto mb-12">
            I&apos;m currently open to new opportunities. Let&apos;s build something extraordinary together.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Primary: gradient pill */}
            <a
              href="mailto:jehanusama3@gmail.com"
              className="group relative flex items-center justify-center gap-2 h-12 px-7 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Send an Email
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            {/* Secondary: ghost */}
            <a
              href="https://wa.me/"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 h-12 px-7 rounded-full text-sm font-semibold text-violet-300 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

