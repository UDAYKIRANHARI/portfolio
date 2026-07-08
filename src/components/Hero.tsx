"use client";

import { ArrowRight, ChevronDown, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import NeuralNetworkBg from "./NeuralNetworkBg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 section-light"
    >
      <NeuralNetworkBg />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[rgba(0,71,255,0.05)] border border-[rgba(0,71,255,0.1)] text-accent-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
        >
          MSc Software Engineering · BTH, Sweden
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="font-[Outfit] text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
          style={{ color: "var(--color-text-main)" }}
        >
          <span className="block overflow-hidden">
            {"Building".split("").map((char, i) => (
              <motion.span
                key={`b-${i}`}
                className="inline-block"
                variants={{
                  hidden: { y: 80, opacity: 0, filter: "blur(8px)" },
                  visible: {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                      delay: 0.3 + i * 0.04,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {"Intelligent Systems.".split("").map((char, i) => (
              <motion.span
                key={`is-${i}`}
                className={`inline-block ${char === " " ? "mr-[0.3em]" : ""} gradient-text`}
                variants={{
                  hidden: { y: 80, opacity: 0, filter: "blur(8px)" },
                  visible: {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                      delay: 0.6 + i * 0.035,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          style={{ color: "var(--color-text-muted)" }}
        >
          I&apos;m <strong style={{ color: "var(--color-text-main)" }}>Hari Uday Kiran</strong> — an AI/ML Developer &amp; Full-Stack Engineer combining
          strong engineering skills with a product mindset to build automation
          and real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Link
            href="#projects"
            className="btn-primary inline-flex items-center gap-2 font-[Outfit] font-bold text-base px-8 py-3.5"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/resume.pdf"
            download="Uday_Kiran_Hari_Resume.pdf"
            className="inline-flex items-center gap-2 font-[Outfit] font-bold text-base px-8 py-3.5 rounded-full transition-all duration-300 glass-card hover:bg-[rgba(0,71,255,0.05)] hover:border-[rgba(0,229,255,0.3)] hover:text-accent-primary"
            style={{ color: "var(--color-text-main)" }}
          >
            Download Resume
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 font-[Outfit] font-bold text-base px-8 py-3.5 rounded-full transition-all duration-300 glass-card hover:bg-[rgba(0,71,255,0.05)] hover:border-[rgba(0,229,255,0.3)] hover:text-accent-primary"
            style={{ color: "var(--color-text-main)" }}
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/UDAYKIRANHARI"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:-translate-y-1 transition-all"
            style={{ color: "var(--color-text-muted)" }}
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/uday-kiran-hari-30706a22b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:-translate-y-1 transition-all"
            style={{ color: "var(--color-text-muted)" }}
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:udaykiranhari07@gmail.com"
            className="p-3 rounded-full glass-card hover:-translate-y-1 transition-all"
            style={{ color: "var(--color-text-muted)" }}
          >
            <FileText className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 hover:text-accent-primary transition-colors animate-float"
        style={{ color: "var(--color-text-muted)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
