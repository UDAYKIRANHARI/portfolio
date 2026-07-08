"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sort AI",
    description:
      "Built an AI-driven tool that automates workflows and organises tasks by integrating a large language model with backend logic. Tested prototypes with real usage, evaluated model outputs, and iterated on prompts based on observed failure cases.",
    stack: ["Python", "Gemini API", "Firebase", "Automation"],
    github: "https://github.com/UDAYKIRANHARI/sortai-smart-link-spaces",
    link: "#",
    number: "01",
  },
  {
    title: "Destiny",
    description:
      "Built an AI companion application combining structured prompts with deterministic logic to support user decision making. Refined prompt design and system behaviour through repeated testing and evaluation of model responses.",
    stack: ["Python", "Gemini API", "Flutter", "Dart"],
    github: "https://github.com/UDAYKIRANHARI/destiny",
    link: "#",
    number: "02",
  },
  {
    title: "RAG PDF Assistant",
    description:
      "Built a retrieval augmented generation pipeline for document question answering, including ingestion, chunking, and vector search. Improved retrieval accuracy from 65% to 92% through systematic prompt and embedding iteration.",
    stack: ["Python", "FastAPI", "FAISS", "OpenAI API", "Groq"],
    github: "https://github.com/UDAYKIRANHARI/rag-pdf-assistant",
    link: "#",
    number: "03",
  },
  {
    title: "MiroFish Multi Agent Engine",
    description:
      "Built a multi-agent pipeline where agents with persistent memory produce structured, ranked recommendations. Researched and applied emerging multi-agent design patterns, then translated findings into a working, documented system.",
    stack: ["Python", "Node.js", "React", "GraphRAG", "LLMs"],
    github: "https://github.com/UDAYKIRANHARI/MiroFish",
    link: "#",
    number: "04",
  },
  {
    title: "ConsentGate",
    description:
      "Built a stateless service using a five-stage sequential validation pipeline with structured outputs. Prioritised reliability and clear documentation so the system could be trusted and extended by others.",
    stack: ["Python", "FastAPI", "OpenCV", "JWT"],
    github: "https://github.com/UDAYKIRANHARI/consentgate-mvp",
    link: "#",
    number: "05",
  },
  {
    title: "Automated Shorts Factory",
    description:
      "Engineered an automated video content pipeline integrating large language models for script generation and FFmpeg for deterministic video rendering and assembly. Optimised for reliability and hands-off execution.",
    stack: ["Python", "Gemini API", "FFmpeg"],
    github: "https://github.com/UDAYKIRANHARI/automated-shorts-factory",
    link: "#",
    number: "06",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]), { stiffness: 400, damping: 30 });

  const spotlightX = useSpring(0, { stiffness: 300, damping: 40 });
  const spotlightY = useSpring(0, { stiffness: 300, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    mouseX.set((e.clientX - rect.left) / width - 0.5);
    mouseY.set((e.clientY - rect.top) / height - 0.5);

    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    if (cardRef.current) {
      spotlightX.set(cardRef.current.offsetWidth / 2);
      spotlightY.set(cardRef.current.offsetHeight / 2);
    }
  };

  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 150, 255, 0.08), transparent 40%)`;
  const borderGlow = useMotionTemplate`radial-gradient(300px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 229, 255, 0.4), transparent 40%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex flex-col h-full w-full group cursor-crosshair"
    >
      {/* Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlightBackground }}
      />

      {/* Cursor-tracking Glowing Border */}
      <motion.div
        className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]"
        style={{ background: borderGlow }}
      />
      
      {/* Solid Card Background */}
      <div 
        className="absolute inset-0 rounded-2xl border pointer-events-none z-[-1] transition-colors duration-300" 
        style={{
          background: "var(--color-bg-card)",
          borderColor: "var(--color-border)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)"
        }} 
      />

      {/* Large Faded Project Number (Pushed deeper in 3D space) */}
      <span
        className="absolute top-4 right-6 font-[Outfit] text-[80px] font-extrabold leading-none opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-500 select-none"
        style={{ color: "var(--color-text-main)", transform: "translateZ(-20px)" }}
      >
        {project.number}
      </span>

      {/* 3D Inner Content Container */}
      <div 
        className="p-8 flex flex-col h-full relative z-10 transition-transform duration-300 group-hover:translate-z-[30px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Top row (Icons) */}
        <div className="flex justify-between items-start mb-6">
          <div
            className="p-3 rounded-xl border shadow-sm group-hover:shadow-md group-hover:border-[rgba(0,71,255,0.3)] transition-all duration-300"
            style={{
              background: "var(--color-bg-card-hover)",
              borderColor: "var(--color-border)",
            }}
          >
            <FaGithub className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div 
            className="flex gap-3 transition-transform duration-300 group-hover:translate-z-[20px]"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center border hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
              style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border)" }}
            >
              <FaGithub className="w-4 h-4" />
            </a>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border)" }}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-[Outfit] text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors duration-300 flex items-center gap-2"
          style={{ color: "var(--color-text-main)" }}
        >
          {project.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </h3>

        {/* Description */}
        <p className="leading-relaxed mb-6 flex-grow" style={{ color: "var(--color-text-muted)" }}>
          {project.description}
        </p>

        {/* Tech stack (Popped out slightly more) */}
        <div
          className="flex flex-wrap gap-2 mt-auto pt-6 border-t transition-transform duration-300 group-hover:translate-z-[15px]"
          style={{ borderColor: "var(--color-border)" }}
        >
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border group-hover:border-[rgba(0,71,255,0.2)] transition-colors duration-300"
              style={{
                background: "var(--color-bg-card)",
                color: "var(--color-text-muted)",
                borderColor: "var(--color-border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative section-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20"
        >
          <div>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block h-[3px] rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #0047FF, #00E5FF)" }}
            />
            <h2
              className="font-[Outfit] text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-main)" }}
            >
              Featured Projects
            </h2>
            <p className="max-w-xl text-lg" style={{ color: "var(--color-text-muted)" }}>
              A selection of recent work focusing on AI integration, automation, and full-stack development.
            </p>
          </div>
          <a
            href="https://github.com/UDAYKIRANHARI"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary font-semibold transition-colors group"
          >
            View All on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* 3D Project Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
