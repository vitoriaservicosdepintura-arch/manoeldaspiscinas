import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: "🔧",
    title: "Manutenção de Piscinas",
    desc: "Serviço regular de manutenção para garantir que a sua piscina esteja sempre em perfeitas condições, com água limpa e equipamentos funcionais.",
    features: ["Limpeza semanal", "Verificação de equipamentos", "Ajuste de química da água"],
    color: "#1E5F8A",
  },
  {
    icon: "💧",
    title: "Limpeza e Tratamento de Água",
    desc: "Tratamento completo da qualidade da água com análise química, dosagem de produtos e eliminação de algas e bactérias.",
    features: ["Análise de pH e cloro", "Tratamento anti-algas", "Filtração profunda"],
    color: "#6FAFCF",
  },
  {
    icon: "🛠️",
    title: "Reparação e Assistência Técnica",
    desc: "Diagnóstico e reparação de bombas, filtros, equipamentos elétricos e estruturais. Resposta rápida para emergências.",
    features: ["Reparação de bombas", "Substituição de filtros", "Assistência de urgência"],
    color: "#0B2A4A",
  },
  {
    icon: "🏗️",
    title: "Construção e Remodelação",
    desc: "Construção de piscinas novas e remodelação completa de piscinas existentes, com design personalizado e acabamentos premium.",
    features: ["Projecto personalizado", "Revestimentos de qualidade", "Instalação completa"],
    color: "#1E5F8A",
  },
  {
    icon: "💡",
    title: "Consultoria Especializada",
    desc: "Aconselhamento técnico para otimizar a sua piscina, reduzir custos de manutenção e melhorar a eficiência dos sistemas.",
    features: ["Diagnóstico gratuito", "Plano de manutenção", "Recomendações de produtos"],
    color: "#6FAFCF",
  },
];

export default function ServicosSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      ref={ref}
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(180deg, #f0f7fc 0%, #e8f4fa 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
              O Que Fazemos
            </span>
            <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #6FAFCF, #1E5F8A)", borderRadius: 2 }} />
          </div>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
            color: "#0B2A4A",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}>
            Nossos Serviços
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "1.05rem",
            color: "#4a6080",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Oferecemos soluções completas e personalizadas para garantir o perfeito funcionamento e valorização da sua piscina.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
          className="services-grid"
        >
          <style>{`
            @media(max-width:900px){.services-grid{grid-template-columns:repeat(2,1fr)!important}}
            @media(max-width:550px){.services-grid{grid-template-columns:1fr!important}}
          `}</style>

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(11,42,74,0.15)" }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "2rem",
                boxShadow: "0 4px 20px rgba(11,42,74,0.06)",
                border: "1px solid rgba(111,175,207,0.15)",
                transition: "all 0.3s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top color bar */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${service.color}, #6FAFCF)`,
              }} />

              {/* Icon */}
              <div style={{
                width: 64,
                height: 64,
                borderRadius: "16px",
                background: `${service.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                marginBottom: "1.25rem",
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#0B2A4A",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}>
                {service.title}
              </h3>

              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "0.85rem",
                color: "#6a8aaa",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}>
                {service.desc}
              </p>

              {/* Features list */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {service.features.map((f, fi) => (
                  <li key={fi} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    color: "#4a6080",
                    marginBottom: "0.35rem",
                  }}>
                    <span style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: `${service.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      color: service.color,
                      flexShrink: 0,
                    }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              background: "linear-gradient(135deg, #0B2A4A 0%, #1E5F8A 100%)",
              borderRadius: "20px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "rgba(111,175,207,0.12)",
            }} />
            <div style={{
              position: "absolute",
              bottom: -30,
              left: -30,
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "rgba(111,175,207,0.08)",
            }} />

            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📞</div>

            <h3 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "1.3rem",
              color: "#fff",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
              position: "relative",
            }}>
              Precisa de um serviço?
            </h3>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
              position: "relative",
            }}>
              Entre em contacto connosco e receba um orçamento personalizado sem compromisso.
            </p>

            <motion.a
              href="#contactos"
              onClick={(e) => { e.preventDefault(); document.getElementById("contactos")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#fff",
                color: "#0B2A4A",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                position: "relative",
              }}
            >
              Pedir Orçamento →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
