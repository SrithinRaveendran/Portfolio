import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, Link2, ExternalLink } from "lucide-react";
import { SectionLabel } from "./Skills";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{ padding: "100px 40px 80px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }} ref={ref}>
        <SectionLabel style={{fontSize:18}} label="05 — Contact" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16 }}>
          Let's <span style={{ color: "var(--cyan)" }}>Connect</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          style={{ color: "var(--muted)", marginBottom: 48, fontSize: 17, lineHeight: 1.7 }}>
          I'm actively looking for opportunities. Whether it's a full-time role, freelance project,
          or just a chat about tech — my inbox is always open.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          style={{
            background: "var(--bg2)", border: "1px solid var(--border)",
            borderRadius: 16, padding: "36px", marginBottom: 32,
          }}>
          {[
            { icon: <Mail size={18} />, label: "Email", value: "srithinraveendran@gmail.com", href: "mailto:srithinraveendran@gmail.com" },
            { icon: <Phone size={18} />, label: "Phone", value: "+91 6282853754", href: "tel:+916282853754" },
            { icon: <MapPin size={18} />, label: "Location", value: "Vadakara, Kerala, India", href: null },
          ].map(({ icon, label, value, href }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              style={{
                display: "flex", alignItems: "center", gap: 16, padding: "14px 0",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: "rgba(0,212,255,0.08)",
                border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--cyan)", flexShrink: 0,
              }}>{icon}</div>
              <div style={{ textAlign: "left", flex: 1 }}>
                <div style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--mono)", marginBottom: 2 }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontSize: 14, color: "var(--text)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "var(--cyan)"}
                    onMouseLeave={e => e.target.style.color = "var(--text)"}>
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: 14 }}>{value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          {[
            { href: "https://github.com", icon: <GitBranch size={18} />, label: "GitHub" },
            { href: "https://linkedin.com", icon: <Link2 size={18} />, label: "LinkedIn" },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8, padding: "10px 24px",
                borderRadius: 8, border: "1px solid var(--border)",
                color: "var(--text)", textDecoration: "none", fontSize: 14, fontWeight: 500,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.color = "var(--cyan)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; }}>
              {icon} {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
        style={{
          textAlign: "center", marginTop: 80, paddingTop: 32,
          borderTop: "1px solid var(--border)",
          fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)",
        }}>
        <span style={{ color: "var(--cyan)" }}>{"<"}</span>
        {" "}Srithin Raveendran {" "}
        <span style={{ color: "var(--cyan)" }}>{"/>"}</span>
        {" "}— Built with React + Framer Motion
      </motion.div>
    </section>
  );
}
