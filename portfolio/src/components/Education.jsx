import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certs } from "../data";
import { SectionLabel } from "./Skills";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" style={{ padding: "100px 40px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <SectionLabel  style={{fontSize:13}} label="04 — Education" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: 48 }}>
          Learning <span style={{ color: "var(--cyan)" }}>Journey</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="edu-grid">
          {/* Education */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <GraduationCap size={18} style={{ color: "var(--cyan)" }} />
              <span style={{ fontWeight: 600, fontSize: 18 }}>Education</span>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: 7, top: 0, bottom: 0, width: 1,
                background: "linear-gradient(to bottom, var(--cyan), transparent)",
                opacity: 0.3,
              }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {education.map((e, i) => (
                  <motion.div key={e.degree} style={{ paddingLeft: 28, position: "relative" }}
                    initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15 + 0.3 }}>
                    <div style={{
                      position: "absolute", left: 0, top: 6, width: 15, height: 15, borderRadius: "50%",
                      background: "var(--bg)", border: "2px solid var(--cyan)",
                    }} />
                    <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--cyan)", marginBottom: 4 }}>{e.year}</div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{e.degree}</div>
                    <div style={{ color: "var(--muted)", fontSize: 14 }}>{e.school}{e.location ? `, ${e.location}` : ""}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certs */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <Award size={18} style={{ color: "var(--cyan)" }} />
              <span style={{ fontWeight: 600, fontSize: 18 }}>Certifications</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certs.map((c, i) => (
                <motion.div key={c.title}
                  initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.3 }}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "10px 16px", borderRadius: 8,
                    background: "var(--bg3)", border: "1px solid var(--border)",
                  }}
                  whileHover={{ borderColor: "rgba(0,212,255,0.25)", x: 4 }}
                >
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{c.title}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>{c.issuer}</div>
                  </div>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--cyan)" }}>{c.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) { .edu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
