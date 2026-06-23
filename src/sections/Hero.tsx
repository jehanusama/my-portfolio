"use client";
import { Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const text = "Front-End Engineer";

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 bg-[#0f0b18] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-6 md:px-20 py-6 flex justify-between items-center z-50">
        <div className="text-white font-bold text-xl tracking-tight">JU.</div>
        <div className="flex items-center gap-6 text-sm font-medium text-violet-300/60">
          <Link href="#about" className="hover:text-violet-300 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-violet-300 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-violet-300 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Main content: two-column layout */}
      <div className="z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-16">

        {/* Left: Text */}
        <div className="flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-fuchsia-400 font-semibold text-sm md:text-base mb-4 tracking-wide"
          >
            Hi, I&apos;m Jehan Usama
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-rose-50 tracking-tight flex flex-wrap">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.05 + 0.5 }}
                className={char === " " ? "w-3 md:w-4" : ""}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-5 max-w-md text-base md:text-lg text-violet-200/60 font-medium leading-relaxed"
          >
            I build elegant, scalable, and highly interactive web applications, translating complex design concepts into beautiful code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8"
          >
            <a
              href="/Jehan_Usama.pdf"
              className="group flex items-center justify-center gap-2 h-11 px-7 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Resume
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 h-11 px-7 rounded-full text-sm font-semibold text-violet-300 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
              <Mail className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="flex items-center gap-6 mt-10 text-violet-400/40"
          >
            <a href="https://github.com/jehanusama" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/jehan-usama" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-end"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/20 blur-2xl" />
            {/* Decorative rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-violet-500/20"
            />
            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-violet-700/50 shadow-2xl shadow-violet-900/50">
              <Image
                src="/Jehan.jpg"
                alt="Jehan Usama - Front-End Engineer"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle inner overlay to blend with palette */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#16112a] border border-violet-800/60 px-4 py-2 rounded-full shadow-lg shadow-violet-900/50"
            >
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_6px_rgba(217,70,239,0.8)]" />
              <span className="text-xs font-semibold text-violet-200/80 whitespace-nowrap">Open to Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

