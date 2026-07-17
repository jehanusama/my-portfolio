"use client";

import { ChevronUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative z-10 py-8 px-6"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--accent-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative">
        
        {/* Spacer for mobile to keep text centered, but invisible */}
        <div className="hidden sm:block w-10"></div>
        
        {/* Center Text */}
        <p className="text-xs sm:text-sm text-center" style={{ color: "var(--text-muted)" }}>
          © 2026 Jehan Usama. All rights reserved.
        </p>

        {/* Right side back-to-top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
            color: "var(--accent-light)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent-primary)";
            e.currentTarget.style.borderColor = "var(--accent-primary)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-secondary)";
            e.currentTarget.style.borderColor = "var(--border-color)";
            e.currentTarget.style.color = "var(--accent-light)";
          }}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};
