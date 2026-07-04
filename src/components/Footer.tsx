"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 relative z-10 border-t"
      style={{
        background: "var(--color-bg-main)",
        borderColor: "var(--color-border)",
        transition: "background 0.5s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3
              className="font-[Outfit] text-2xl font-bold tracking-tighter mb-2"
              style={{ color: "var(--color-text-main)" }}
            >
              Hari Uday Kiran<span className="text-accent-primary">.</span>
            </h3>
            <p className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
              AI/ML Developer & Full-Stack Engineer
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/UDAYKIRANHARI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:text-accent-primary transition-all"
              style={{ color: "var(--color-text-muted)" }}
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/uday-kiran-hari-30706a22b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:text-accent-primary transition-all"
              style={{ color: "var(--color-text-muted)" }}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:udaykiranhari07@gmail.com"
              className="p-3 rounded-full glass-card hover:text-accent-primary transition-all"
              style={{ color: "var(--color-text-muted)" }}
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4 border-t"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
        >
          <p className="font-medium">
            © {new Date().getFullYear()} Hari Uday Kiran. All rights reserved.
          </p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-accent-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
