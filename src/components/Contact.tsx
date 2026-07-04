"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Mail, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values for 3D tilt & spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth tilting (highly responsive but smooth)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]), { stiffness: 400, damping: 30 });

  // Spring for the spotlight position (pixels)
  const spotlightX = useSpring(0, { stiffness: 300, damping: 40 });
  const spotlightY = useSpring(0, { stiffness: 300, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates for rotation (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    // Pixel coordinates for spotlight glow
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Return to center when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
    if (cardRef.current) {
      spotlightX.set(cardRef.current.offsetWidth / 2);
      spotlightY.set(cardRef.current.offsetHeight / 2);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("udaykiranhari07@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dynamic radial gradient based on mouse position
  const spotlightBackground = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 150, 255, 0.08), transparent 40%)`;
  const borderGlow = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 229, 255, 0.4), transparent 40%)`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden section-light">
      {/* 
        Perspective wrapper: needed for the 3D transforms to work 
      */}
      <div 
        className="max-w-4xl mx-auto px-6 relative z-10 flex justify-center"
        style={{ perspective: "1200px" }}
      >
        
        {/* The 3D Magnetic Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX, 
            rotateY, 
            transformStyle: "preserve-3d" 
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full glass-card rounded-[2.5rem] p-8 md:p-16 text-center group cursor-crosshair"
        >
          {/* Dynamic Spotlight Glow interior */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: spotlightBackground }}
          />

          {/* Interactive Glowing Border that follows cursor */}
          <motion.div 
            className="absolute inset-[-1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]"
            style={{ background: borderGlow }}
          />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[var(--color-bg-card)] pointer-events-none z-[-1]" />

          {/* 3D Inner Content Container - pulled forward on the Z-axis */}
          <div 
            className="transition-transform duration-300 group-hover:translate-z-[40px]"
            style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
          >
            
            <div className="w-20 h-20 bg-[rgba(0,71,255,0.05)] rounded-full flex items-center justify-center mx-auto mb-8 border border-[rgba(0,71,255,0.1)] shadow-[0_0_20px_rgba(0,71,255,0.05)] group-hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] group-hover:border-[rgba(0,229,255,0.3)] transition-all duration-500">
              <MessageSquare className="w-10 h-10 text-accent-primary group-hover:text-accent-secondary group-hover:scale-110 transition-all duration-500" />
            </div>

            <h2
              className="font-[Outfit] text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-sm"
              style={{ color: "var(--color-text-main)" }}
            >
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Incredible.</span>
            </h2>

            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              I&apos;m always open to discussing product design, AI automation, or partnership opportunities. Let&apos;s create intelligent systems that matter.
            </p>

            {/* Buttons layer - pushed even further out for parallax */}
            <div 
              className="flex flex-row flex-wrap gap-4 justify-center transition-transform duration-300 group-hover:translate-z-[60px]"
              style={{ transform: "translateZ(0px)" }}
            >
              <button
                onClick={handleCopyEmail}
                className={`btn-primary inline-flex items-center justify-center gap-2 font-[Outfit] font-bold text-lg px-8 py-4 transition-all duration-300 ${
                  copied ? 'bg-green-500 !shadow-[0_0_30px_rgba(34,197,94,0.4)] scale-105' : ''
                }`}
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 animate-in zoom-in duration-300" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
                    Copy Email
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/uday-kiran-hari-30706a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-[Outfit] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 glass-card hover:bg-[rgba(0,71,255,0.05)] hover:border-[rgba(0,229,255,0.3)] hover:text-accent-primary"
                style={{ color: "var(--color-text-main)" }}
              >
                <FaLinkedin className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300 text-[#0A66C2]" />
                LinkedIn
              </a>
              
              <a
                href="https://github.com/UDAYKIRANHARI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-[Outfit] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 glass-card hover:bg-[rgba(0,71,255,0.05)] hover:border-[rgba(0,229,255,0.3)] hover:text-accent-primary"
                style={{ color: "var(--color-text-main)" }}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                GitHub
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
