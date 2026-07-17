"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Create an observer for each section
    // We observe all ids present in NAV_LINKS plus contact
    const sectionIds = [...NAV_LINKS.map((l) => l.href.substring(1)), "contact"];
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: "-30% 0px -70% 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(13, 21, 18, 0.85)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? "1px solid var(--border-color)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.1)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* ── LEFT: Logo ── */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{
                background: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-primary) 100%)",
                boxShadow: "0 0 16px rgba(43,87,72,0.4)",
              }}
            >
              <span className="text-white font-black tracking-tighter text-lg leading-none">
                JU
              </span>
            </motion.div>
            <span
              className="hidden sm:block font-bold text-lg tracking-tight transition-colors duration-300 group-hover:text-[var(--accent-light)]"
              style={{ color: "var(--text-primary)" }}
            >
              Jehan Usama
            </span>
          </button>

          {/* ── CENTER: Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="relative py-2 text-sm font-semibold transition-colors duration-300 group"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                >
                  <span className="group-hover:text-[var(--text-primary)] transition-colors">
                    {link.name}
                  </span>
                  
                  {/* Animated hover/active underline */}
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] origin-left rounded-full transition-transform duration-300"
                    style={{
                      background: "var(--accent-primary)",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                  {/* Additional hover underline if not active */}
                  {!isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[2px] origin-left rounded-full transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                      style={{ background: "var(--accent-light)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: CTA & Mobile Toggle ── */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border"
              style={{
                borderColor: "var(--accent-primary)",
                color: "var(--accent-light)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-primary)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(43,87,72,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--accent-light)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Let&apos;s Talk
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--text-primary)] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Overlay Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center lg:hidden"
            style={{
              background: "rgba(13, 21, 18, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col items-center gap-6 w-full px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-bold transition-colors"
                  style={{
                    color: activeSection === link.href.substring(1)
                      ? "var(--accent-light)"
                      : "var(--text-primary)",
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 px-8 py-3.5 rounded-full text-base font-bold text-white w-full max-w-[240px]"
                style={{
                  background: "var(--accent-primary)",
                  boxShadow: "0 0 24px rgba(43,87,72,0.4)",
                }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
