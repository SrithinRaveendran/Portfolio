import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { projects } from "../data";
import { SectionLabel } from "./Skills";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" style={{ padding: "100px 40px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <SectionLabel style={{ fontSize : 13}} label="03 — Projects" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: 12 }}>
          What I've <span style={{ color: "var(--cyan)" }}>Built</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          style={{ color: "var(--muted)", marginBottom: 48, fontSize: 18 }}>
          End-to-end applications — from idea to deployed product.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{
                background: "var(--bg2)", border: `1px solid ${expanded === i ? "rgba(0,212,255,0.3)" : "var(--border)"}`,
                borderRadius: 14, overflow: "hidden", transition: "border-color 0.3s",
              }}
            >
              {/* Header */}
              <div
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  padding: "24px 28px", cursor: "pointer", display: "flex",
                  alignItems: "flex-start", justifyContent: "space-between", gap: 16,
                  userSelect: "none",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                    <h3 style={{ fontSize: "clamp(14px,2.5vw,20px)", fontWeight: 700 }}>{p.title}</h3>
                    <span style={{
                      fontFamily: "var(--mono)", fontSize: 12, padding: "2px 10px", borderRadius: 20,
                      background: p.status === "ongoing" ? "rgba(57,255,143,0.1)" : "rgba(0,212,255,0.1)",
                      color: p.status === "ongoing" ? "var(--green)" : "var(--cyan)",
                      border: `1px solid ${p.status === "ongoing" ? "rgba(57,255,143,0.2)" : "var(--border)"}`,
                    }}>
                      {p.status === "ongoing" ? "● ongoing" : "● live"}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--muted)" }}>{p.tag}</span>
                    <span style={{ color: "var(--border)" }}>·</span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--muted)" }}>{p.year}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        fontFamily: "var(--mono)", fontSize: 14, color: "var(--muted)",
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                        padding: "3px 9px", borderRadius: 4,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 4 }}>
                  {expanded === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 28px 28px", borderTop: "1px solid var(--border)" }}>
                      <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 14, marginTop: 20, marginBottom: 20 }}>{p.desc}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
                        {p.highlights.map(h => (
                          <div key={h} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <Zap size={13} style={{ color: "var(--cyan)", marginTop: 3, flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: "var(--text)" }}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
