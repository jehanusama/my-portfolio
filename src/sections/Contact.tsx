"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Github, Linkedin, Whatsapp } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";


interface SocialBtnProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}
function SocialBtn({ href, label, icon }: SocialBtnProps) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ rotate: 8, scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center w-11 h-11 rounded-full border"
      style={{
        borderColor: hovered ? "var(--accent-primary)" : "var(--border-color)",
        background: hovered ? "var(--accent-primary)" : "var(--bg-secondary)",
        color: hovered ? "#ffffff" : "var(--text-muted)",
        transition: "background 0.3s, border-color 0.3s, color 0.3s",
      }}
    >
      {icon}
    </motion.a>
  );
}


interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}
function InfoItem({ icon, label, value, href }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 border"
        style={{
          background: "rgba(43,87,72,0.12)",
          borderColor: "var(--accent-primary)",
          color: "var(--accent-light)",
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col pt-1">
        <span className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-muted)" }}>
          {label}
        </span>
        {href ? (
          <a
            href={href}
            className="text-base font-bold transition-colors duration-300 hover:text-[var(--accent-light)]"
            style={{ color: "var(--text-primary)" }}
          >
            {value}
          </a>
        ) : (
          <span className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
            {value}
          </span>
        )}
      </div>
    </div>
  );
}


export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal delay={0}>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s Work Together
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              Have a project in mind? Let&apos;s talk.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mt-6 w-16 h-[3px] rounded-full mx-auto"
              style={{ background: "var(--accent-primary)" }}
            />
          </Reveal>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          
          {/* LEFT: Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col gap-8 mb-10">
              <InfoItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="jehanusama3@gmail.com"
                href="mailto:jehanusama3@gmail.com"
              />
              <InfoItem
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value="01202942911"
                href="tel:+201202942911"
              />
              <InfoItem
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="Tanta, Egypt"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
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
                href="https://wa.me/201202942911"
                label="WhatsApp"
                icon={<Whatsapp className="w-[18px] h-[18px]" />}
              />
            </div>
          </motion.div>

          {/* RIGHT: Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-2xl border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-color)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold pl-1" style={{ color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300"
                  style={{
                    background: "rgba(13,21,18,0.6)",
                    border: "1.5px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(43,87,72,0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold pl-1" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300"
                  style={{
                    background: "rgba(13,21,18,0.6)",
                    border: "1.5px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(43,87,72,0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold pl-1" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all duration-300 resize-none"
                  style={{
                    background: "rgba(13,21,18,0.6)",
                    border: "1.5px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(43,87,72,0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white relative overflow-hidden"
                style={{
                  background: isSuccess ? "#4a8a73" : "var(--accent-primary)",
                  boxShadow: "0 0 20px rgba(43,87,72,0.4)",
                  cursor: isSubmitting || isSuccess ? "not-allowed" : "pointer",
                  transition: "background 0.3s, box-shadow 0.3s",
                }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Loader2 className="w-5 h-5" />
                  </motion.div>
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Error message */}
              {error && (
                <p className="text-center text-sm font-medium" style={{ color: "#e05252" }}>
                  {error}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
