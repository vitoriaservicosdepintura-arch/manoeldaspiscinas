import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const whyItems = [
  { icon: "🏆", title: "+30 Anos de Experiência", desc: "Desde 1990 a oferecer serviços de excelência no Algarve" },
  { icon: "👤", title: "Atendimento Personalizado", desc: "Cada cliente é único. Soluções à medida das suas necessidades" },
  { icon: "✅", title: "Qualidade Garantida", desc: "Profissionais certificados e materiais de primeira qualidade" },
  { icon: "💰", title: "Preços Competitivos", desc: "Melhor relação qualidade-preço do mercado no Algarve" },
];

export default function SobreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} style={{ padding: "6rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Layout grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          marginBottom: "5rem",
        }}
          className="sobre-grid"
        >
          <style>{`@media(max-width:768px){.sobre-grid{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(11,42,74,0.2)",
              aspectRatio: "4/3",
            }}>
              <img
                src="/images/hero-pool.jpg"
                alt="Piscina Manoel das Piscinas"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Badge overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                position: "absolute",
                bottom: -24,
                right: -24,
                background: "linear-gradient(135deg, #0B2A4A, #1E5F8A)",
                color: "#fff",
                padding: "1.25rem 1.75rem",
                borderRadius: "16px",
                textAlign: "center",
                boxShadow: "0 12px 40px rgba(11,42,74,0.35)",
              }}
            >
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "2.5rem",
                lineHeight: 1,
                color: "#6FAFCF",
              }}>
                +30
              </div>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.8)",
                marginTop: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                Anos de<br/>Experiência
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}>
              <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #1E5F8A, #6FAFCF)", borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#1E5F8A",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}>
                Sobre Nós
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              color: "#0B2A4A",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}>
              Referência no setor<br/>
              <span style={{ color: "#1E5F8A" }}>de piscinas</span> no Algarve
            </h2>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#4a6080",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}>
              A <strong style={{ color: "#0B2A4A" }}>Manoel das Piscinas</strong> foi fundada em 1990 com o objetivo de oferecer serviços de qualidade a preços competitivos. Ao longo dos anos, tornámo-nos referência no setor, graças ao nosso compromisso com excelência, atendimento personalizado e confiança.
            </p>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#4a6080",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}>
              Trabalhamos exclusivamente com profissionais altamente qualificados, garantindo responsabilidade, experiência e resultados superiores.
            </p>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#4a6080",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}>
              Nossa missão é entregar soluções eficientes e personalizadas, atendendo às necessidades específicas de cada cliente.
            </p>

            <motion.a
              href="#contactos"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.getElementById("contactos")?.scrollIntoView({ behavior: "smooth" }); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #1E5F8A, #0B2A4A)",
                color: "#fff",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.85rem 1.75rem",
                borderRadius: "50px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(30,95,138,0.3)",
              }}
            >
              <span>Saiba mais</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Why choose us */}
        <div style={{ marginTop: "4rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}>
              <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #1E5F8A, #6FAFCF)", borderRadius: 2 }} />
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#1E5F8A",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}>
                Diferenciais
              </span>
              <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #6FAFCF, #1E5F8A)", borderRadius: 2 }} />
            </div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#0B2A4A",
              letterSpacing: "-0.02em",
            }}>
              ⭐ Por que escolher-nos?
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
            className="why-grid"
          >
            <style>{`@media(max-width:900px){.why-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.why-grid{grid-template-columns:1fr!important}}`}</style>
            {whyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(11,42,74,0.12)" }}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(111,175,207,0.2)",
                  borderRadius: "16px",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(11,42,74,0.06)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#0B2A4A",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.82rem",
                  color: "#6a8aaa",
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
