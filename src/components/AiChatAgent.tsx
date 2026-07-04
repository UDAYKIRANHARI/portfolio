"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "bot";
  text: string;
}

// Knowledge base about Hari Uday Kiran
const KB: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "sup"],
    answer:
      "Hey there! 👋 I'm Hari's AI assistant. Ask me anything about his skills, projects, education, or experience!",
  },
  {
    keywords: ["who", "about", "introduce", "name"],
    answer:
      "Hari Uday Kiran is an AI/ML Developer & Full-Stack Engineer currently pursuing his MSc in Software Engineering at BTH, Sweden. He builds intelligent systems at the intersection of AI, automation, and real-world product impact.",
  },
  {
    keywords: ["skills", "tech", "stack", "technologies", "language", "programming"],
    answer:
      "Hari's core skills include:\n• Languages: Python, TypeScript/JS, Kotlin, SQL, Bash\n• AI/ML: LLMs, RAG pipelines, OpenCV, Gemini API, Anthropic Claude\n• Backend: FastAPI, Node.js, REST APIs, JWT Auth\n• Frontend: React, Next.js, Tailwind\n• Cloud: Firebase, GCP, Oracle Cloud, AWS\n• Automation: Make.com, FFmpeg, GitHub Actions",
  },
  {
    keywords: ["project", "work", "portfolio", "built", "build", "consentgate", "rag", "sortai", "shorts", "mirofish", "destiny", "movielink", "iris"],
    answer:
      "Hari's featured projects:\n\n🐟 MiroFish – Universal Swarm Intelligence Engine for predictions.\n🔐 ConsentGate MVP – AI upload compliance gateway with face detection & JWT.\n📄 RAG PDF Assistant – Intelligent PDF Q&A using RAG.\n🔗 SortAI – Smart link organizer powered by Gemini AI.\n🎬 Automated Shorts Factory – AI video pipeline with Gemini & FFmpeg.\n🎯 Destiny – AI-powered decision making app built with Flutter.\n🎬 MovieLink – LinkedIn-for-movies social platform (React + NestJS).\n🌸 ML FastAPI Iris – Production-ready ML REST API for classification.",
  },
  {
    keywords: ["education", "university", "degree", "study", "bth", "sweden", "college"],
    answer:
      "Hari is currently pursuing his MSc in Software Engineering at Blekinge Tekniska Högskola (BTH) in Karlskrona, Sweden. He also holds a B.Tech in Computer Science.",
  },
  {
    keywords: ["experience", "job", "freelance", "work experience", "career"],
    answer:
      "Hari's experience includes:\n• Founder of HTK Studio – specializing in product ads, landing pages, and UGC content.\n• Freelance AI Developer – building API integrations and automation pipelines.\n• Data Annotation & Evaluation – contributed to AI model training at Scale AI, UserTesting, and RemoteTask.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "connect", "linkedin", "github"],
    answer:
      "You can reach Hari through:\n🔗 GitHub: github.com/UDAYKIRANHARI\n💼 LinkedIn: linkedin.com/in/uday-kiran-hari-30706a22b\n📧 Email: udaykiranhari07@gmail.com",
  },
  {
    keywords: ["certification", "certificate", "course"],
    answer:
      "Hari holds certifications in AI/ML from Anthropic, Microsoft, and LinkedIn Learning — covering Prompt Engineering, LLM Applications, and Cloud AI.",
  },
  {
    keywords: ["htk", "studio", "agency"],
    answer:
      "HTK Studio is Hari's personal agency specializing in product ads, landing pages, and UGC content creation. It combines design, development, and marketing.",
  },
  {
    keywords: ["ai", "machine learning", "llm", "artificial intelligence", "ml"],
    answer:
      "Hari specializes in AI/ML with hands-on experience in LLMs, RAG pipelines, multi-frame face detection with OpenCV, and building AI-powered automation pipelines using Gemini API and Anthropic Claude.",
  },
];

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch: { score: number; answer: string } = { score: 0, answer: "" };

  for (const entry of KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) score++;
    }
    if (score > bestMatch.score) {
      bestMatch = { score, answer: entry.answer };
    }
  }

  return (
    bestMatch.answer ||
    "Hmm, I'm not sure about that one. Try asking about Hari's skills, projects, education, or experience! 🤔"
  );
}

export default function AiChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm Hari's AI assistant. Ask me about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(userMsg.text);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
    }, 600);
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0047FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-transform interactive cursor-none"
            aria-label="Open AI chat"
          >
            <Bot className="w-6 h-6" />
            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#0047FF] animate-ping opacity-30" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] rounded-3xl overflow-hidden shadow-2xl border"
            style={{
              background: "var(--color-bg-card)",
              backdropFilter: "blur(24px)",
              borderColor: "var(--color-border)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0047FF] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-[Outfit] font-bold text-sm" style={{ color: "var(--color-text-main)" }}>
                    Hari&apos;s AI Assistant
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1 relative top-[-1px]" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[rgba(0,71,255,0.1)] transition-colors interactive cursor-none"
              >
                <X className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="px-5 py-4 space-y-4 h-[320px] overflow-y-auto"
              style={{ scrollBehavior: "smooth" }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${
                      msg.role === "bot"
                        ? "bg-[#0047FF]"
                        : "bg-[rgba(0,71,255,0.15)]"
                    }`}
                  >
                    {msg.role === "bot" ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-[#0047FF]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "bot"
                        ? "rounded-tl-md"
                        : "rounded-tr-md bg-[#0047FF] text-white"
                    }`}
                    style={
                      msg.role === "bot"
                        ? {
                            background: "var(--color-bg-card-hover)",
                            color: "var(--color-text-main)",
                            border: "1px solid var(--color-border)",
                          }
                        : {}
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div
              className="px-4 py-3 border-t flex items-center gap-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Hari..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 cursor-none"
                style={{ color: "var(--color-text-main)" }}
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-full bg-[#0047FF] text-white flex items-center justify-center hover:bg-[#0037cc] transition-colors interactive cursor-none disabled:opacity-40"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
