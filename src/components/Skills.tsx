"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Database, Cloud, Terminal, MonitorSmartphone } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "TypeScript", "JavaScript", "Kotlin", "SQL", "Bash"],
    color: "#0047FF",
  },
  {
    category: "AI / ML",
    icon: <Brain className="w-6 h-6" />,
    items: ["LLMs", "RAG", "OpenCV", "Gemini API", "Claude", "Ollama"],
    color: "#00E5FF",
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["FastAPI", "Node.js", "REST APIs", "JWT Auth"],
    color: "#6366F1",
  },
  {
    category: "Frontend",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    items: ["React", "Next.js", "Tailwind", "HTML/CSS"],
    color: "#0047FF",
  },
  {
    category: "Cloud / Infra",
    icon: <Cloud className="w-6 h-6" />,
    items: ["Firebase", "GCP", "Oracle Cloud", "AWS", "Cloud Run"],
    color: "#00E5FF",
  },
  {
    category: "Automation",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Make.com", "FFmpeg", "GitHub Actions", "Git"],
    color: "#6366F1",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
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
            Technical Arsenal
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--color-text-muted)" }}>
            A comprehensive toolkit for building scalable, intelligent systems.
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              key={skill.category}
              className="glass-card p-8 rounded-2xl interactive group relative overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                style={{ background: skill.color }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors duration-300"
                style={{
                  background: `${skill.color}10`,
                  borderColor: `${skill.color}20`,
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>
              <h3
                className="font-[Outfit] text-xl font-bold mb-4"
                style={{ color: "var(--color-text-main)" }}
              >
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 group-hover:border-[rgba(0,71,255,0.2)]"
                    style={{
                      background: "var(--color-bg-card)",
                      color: "var(--color-text-muted)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
