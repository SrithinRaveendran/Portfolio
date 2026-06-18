import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const ROLES = ["Full-Stack Developer", "MERN Stack Engineer", "React Specialist", "API Architect"];

function TypeWriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 40 : 80;
    const pause = 1600;

    if (!deleting && displayed === word) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setIdx(i => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(d => deleting ? d.slice(0, -1) : word.slice(0, d.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, idx, words]);

  return (
    <span style={{ color: "var(--cyan)", fontFamily: "var(--mono)" }}>
      {displayed}<span style={{ borderRight: "2px solid var(--cyan)", animation: "blink 0.7s infinite", marginLeft: 2 }} />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "100px 40px 60px", position: "relative", overflow: "hidden",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
        zIndex: 0, pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, width: "100%", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span style={{
            fontFamily: "var(--mono)", fontSize: 13, color: "var(--cyan)", letterSpacing: 3,
            textTransform: "uppercase", opacity: 0.8,
          }}>
            {"// hello, world"}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 700, lineHeight: 1.1, margin: "16px 0 12px", letterSpacing: -1 }}>
          Srithin<br />
          <span style={{ color: "var(--cyan)" }}>Raveendran</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 300, marginBottom: 32, minHeight: 36 }}>
          <TypeWriter words={ROLES} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7, fontSize: 16 }}>
          Passionate full-stack developer building scalable web applications with the MERN stack.
          From RESTful APIs to pixel-perfect frontends — I ship end-to-end.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {[
            { icon: <MapPin size={14} />, label: "Vadakara, Kerala" },
            { icon: <Mail size={14} />, label: "srithinraveendran@gmail.com" },
            { icon: <Phone size={14} />, label: "+91 6282853754" },
          ].map(({ icon, label }) => (
            <span key={label} style={{
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)",
              background: "rgba(0,212,255,0.05)", border: "1px solid var(--border)",
              padding: "6px 14px", borderRadius: 20,
            }}>
              <span style={{ color: "var(--cyan)" }}>{icon}</span>
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          {[
            { href: "https://github.com", icon: <GitBranch size={20} />, label: "GitHub" },
            { href: "https://linkedin.com", icon: <Link2 size={20} />, label: "LinkedIn" },
            { href: "mailto:srithinraveendran@gmail.com", icon: <Mail size={20} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 8,
                background: label === "GitHub" ? "var(--cyan)" : "transparent",
                border: label === "GitHub" ? "none" : "1px solid var(--border)",
                color: label === "GitHub" ? "var(--bg)" : "var(--text)",
                fontWeight: 600, fontSize: 14, textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                if (label !== "GitHub") { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }
                else e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={e => {
                if (label !== "GitHub") { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }
                else e.currentTarget.style.opacity = "1";
              }}>
              {icon} {label}
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          style={{ marginTop: 64 }}
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown size={24} style={{ color: "var(--muted)", cursor: "pointer", animation: "float 2s ease-in-out infinite" }} />
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(8px) } }
      `}</style>
    </section>
  );
}
