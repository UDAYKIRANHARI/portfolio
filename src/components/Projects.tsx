"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ExternalLink, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MiroFish",
    description:
      "A simple and universal Swarm Intelligence Engine capable of predicting anything. Leverages collective behavior algorithms for powerful forecasting.",
    stack: ["Python", "Swarm Intelligence", "ML"],
    github: "https://github.com/UDAYKIRANHARI/MiroFish",
    link: "#",
    number: "01",
  },
  {
    title: "ConsentGate MVP",
    description:
      "AI-powered upload compliance gateway validating user authorization and consent using multi-frame AI face detection and JWT approval tokens.",
    stack: ["Python 3.11", "FastAPI", "OpenCV", "JWT"],
    github: "https://github.com/UDAYKIRANHARI/consentgate-mvp",
    link: "#",
    number: "02",
  },
  {
    title: "RAG PDF Assistant",
    description:
      "Intelligent PDF Q&A using Retrieval-Augmented Generation. Upload multiple PDFs, ask natural language questions, and get accurate answers with source citations.",
    stack: ["Python", "LangChain", "FAISS", "LLM"],
    github: "https://github.com/UDAYKIRANHARI/rag-pdf-assistant",
    link: "#",
    number: "03",
  },
  {
    title: "SortAI – Smart Link Spaces",
    description:
      "AI-powered bookmark/link organizer classifying and sorting URLs into smart categorized spaces using Gemini AI, React, Firebase, and Cloud Run.",
    stack: ["TypeScript", "React", "Firebase", "Gemini API"],
    github: "https://github.com/UDAYKIRANHARI/sortai-smart-link-spaces",
    link: "#",
    number: "04",
  },
  {
    title: "Automated Shorts Factory",
    description:
      "AI-powered video content pipeline generating daily animated comedy shorts using Google Gemini AI for scripting and FFmpeg for video production.",
    stack: ["Python", "Gemini API", "FFmpeg"],
    github: "https://github.com/UDAYKIRANHARI/automated-shorts-factory",
    link: "#",
    number: "05",
  },
  {
    title: "Destiny",
    description:
      "AI-Powered Decision Making App built with Flutter. Helps users make informed choices using intelligent analysis and personalized recommendations.",
    stack: ["Dart", "Flutter", "AI"],
    github: "https://github.com/UDAYKIRANHARI/destiny",
    link: "#",
    number: "06",
  },
  {
    title: "MovieLink",
    description:
      "A LinkedIn-for-movies platform — full-stack social network for film enthusiasts with React + TypeScript frontend and NestJS backend.",
    stack: ["React", "TypeScript", "NestJS", "Vite"],
    github: "https://github.com/UDAYKIRANHARI/movielink-frontend",
    link: "#",
    number: "07",
  },
  {
    title: "ML FastAPI Iris",
    description:
      "Production-ready ML REST API with FastAPI for Iris flower classification. Includes interactive UI and comprehensive API documentation.",
    stack: ["Python", "FastAPI", "scikit-learn", "ML"],
    github: "https://github.com/UDAYKIRANHARI/ml-fastapi-iris",
    link: "#",
    number: "08",
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
