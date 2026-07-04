"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "work",
    title: "Founder",
    company: "HTK Studio",
    date: "Present",
    description:
      "Personal agency specializing in product ads, landing pages, and UGC content.",
  },
  {
    type: "work",
    title: "Freelance AI Developer",
    company: "Self-Employed",
    date: "Present",
    description:
      "Building API integrations and automation pipelines using Make.com and LLM tools for diverse clients.",
  },
  {
    type: "education",
    title: "MSc Software Engineering",
    company: "Blekinge Tekniska Högskola (BTH), Sweden",
    date: "Current",
    description:
      "Focusing on software engineering practices, multi-agent orchestration, and AI-first systems.",
  },
  {
    type: "work",
    title: "Data Annotation & Evaluation",
    company: "Scale AI, UserTesting, RemoteTask",
    date: "Past",
    description:
      "Contributed to AI model training and user experience evaluation.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative section-alt overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="block h-[3px] rounded-full mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #0047FF, #00E5FF)" }}
          />
          <h2
            className="font-[Outfit] text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text-main)" }}
          >
            Experience & Education
          </h2>
          <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
            My journey through academia, freelancing, and building products.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative ml-4 md:ml-4 space-y-12 pb-8"
        >
          {/* Static background line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{ background: "var(--color-border)" }}
          />

          {/* Animated reveal line */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] z-0"
            style={{
              background: "linear-gradient(180deg, #0047FF 0%, #00E5FF 100%)",
              height: lineHeight,
            }}
          />
          {experience.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              key={index}
              className="relative pl-8 md:flex md:gap-8 items-start group interactive"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-17px] mt-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-4 z-10 transition-colors duration-300 ${
                    item.type === "work"
                      ? "bg-accent-primary group-hover:bg-accent-secondary"
                      : "bg-gray-600 group-hover:bg-gray-500"
                  }`}
                  style={{ borderColor: "var(--color-bg-main)" }}
                >
                  {item.type === "work" ? (
                    <Briefcase className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              </div>

              {/* Content card */}
              <div
                className="glass-card p-8 rounded-2xl w-full"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <h3
                    className="font-[Outfit] text-2xl font-bold group-hover:text-accent-primary transition-colors"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-sm font-bold text-accent-primary bg-[rgba(0,71,255,0.05)] px-4 py-1.5 rounded-full w-fit">
                    {item.date}
                  </span>
                </div>
                <h4 className="font-semibold mb-4 text-lg" style={{ color: "var(--color-text-muted)" }}>
                  {item.company}
                </h4>
                <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
