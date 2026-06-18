import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setActive(id);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "12px 40px" : "20px 40px",
        background: scrolled ? "rgba(10,13,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      <span style={{ fontFamily: "var(--mono)", color: "var(--cyan)", fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>
        SR<span style={{ color: "var(--text)" }}>.dev</span>
      </span>

      <div style={{ display: "flex", gap: 32 }} className="nav-links">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--mono)", fontSize: 13, color: active === l ? "var(--cyan)" : "var(--muted)",
              transition: "color 0.2s", letterSpacing: 0.5,
            }}
            onMouseEnter={e => e.target.style.color = "var(--cyan)"}
            onMouseLeave={e => e.target.style.color = active === l ? "var(--cyan)" : "var(--muted)"}
          >
            {l}
          </button>
        ))}
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}
        style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--cyan)" }}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute", top: "100%", left: 0, right: 0,
              background: "rgba(10,13,20,0.98)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)", padding: "20px 40px",
              display: "flex", flexDirection: "column", gap: 16,
            }}>
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--mono)", fontSize: 14, color: "var(--text)", textAlign: "left" }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
