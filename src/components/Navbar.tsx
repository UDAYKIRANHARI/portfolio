"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { theme } = useTheme();
  const { scrollY } = useScroll();

  const lightBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(250, 250, 250, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const darkBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 15, 0)", "rgba(10, 10, 15, 0.8)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0,0,0,0)", theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.05)"]
  );

  return (
    <motion.nav
      style={{
        backgroundColor: theme === "dark" ? darkBg : lightBg,
        borderBottomColor: navBorder,
        boxShadow: navShadow,
        backdropFilter: "blur(20px)",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#"
            className="font-[Outfit] text-2xl font-bold tracking-tighter"
            style={{ color: "var(--color-text-main)" }}
          >
            Hari Uday Kiran<span className="text-accent-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#skills" className="text-sm font-semibold transition-colors hover:text-accent-primary" style={{ color: "var(--color-text-muted)" }}>
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-semibold transition-colors hover:text-accent-primary" style={{ color: "var(--color-text-muted)" }}>
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-semibold transition-colors hover:text-accent-primary" style={{ color: "var(--color-text-muted)" }}>
              Experience
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold rounded-full hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm hover:shadow-md"
              style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text-main)",
                border: "1px solid var(--color-border)",
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
