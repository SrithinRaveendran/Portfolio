import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data";

const CATEGORY_ICONS = {
  "Languages": "{ }",
  "Frameworks": "</>",
  "Databases": "DB",
  "Tools": "⚙",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" style={{ padding: "100px 40px", background: "var(--bg2)", position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <SectionLabel style={{fontSize:18}} label="02 — Skills" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: 48 }}>
          Technical <span style={{ color: "var(--cyan)" }}>Arsenal</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {Object.entries(skills).map(([cat, items], ci) => (
            <motion.div key={cat}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              style={{
                background: "var(--bg3)", border: "1px solid var(--border)",
                borderRadius: 12, padding: "24px",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              whileHover={{ scale: 1.02, borderColor: "rgba(0,212,255,0.35)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{
                  fontFamily: "var(--mono)", fontSize: 14, color: "var(--cyan)",
                  background: "rgba(0,212,255,0.1)", padding: "2px 8px", borderRadius: 4,
                }}>
                  {CATEGORY_ICONS[cat]}
                </span>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{cat}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((skill, si) => (
                  <motion.div key={skill}
                    initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.05 + 0.2 }}
                    style={{display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--cyan)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ label }) {
  return (
    <div style={{
      fontFamily: "var(--mono)", fontSize: 12, color: "var(--cyan)", letterSpacing: 2,
      textTransform: "uppercase", marginBottom: 12, opacity: 0.7,
    }}>
      {label}
    </div>
  );
}
