import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const newsItems = [
  {
    icon: "🎉",
    date: "Janeiro 2024",
    title: "Bem-vindo ao nosso novo site",
    desc: "Renovámos a nossa presença online para melhor servir os nossos clientes. Explore os nossos serviços e contacte-nos para um orçamento personalizado.",
    tag: "Novidade",
    tagColor: "#1E5F8A",
  },
  {
    icon: "💬",
    date: "Março 2024",
    title: "Perguntas e sugestões",
    desc: "Estamos sempre abertos ao feedback dos nossos clientes. Se tiver perguntas ou sugestões, entre em contacto connosco. A sua opinião é fundamental para melhorarmos.",
    tag: "Comunicado",
    tagColor: "#6FAFCF",
  },
];

export default function EquipaSection() {
  const ref = useRef(null);
  const newsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const newsInView = useInView(newsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Team Section */}
      <section
        id="equipa"
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
                A Nossa Equipa
              </span>
              <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #6FAFCF, #1E5F8A)", borderRadius: 2 }} />
            </div>

            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              color: "#0B2A4A",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}>
              Profissionais ao Seu Serviço
            </h2>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "#4a6080",
              maxWidth: 650,
              margin: "0 auto",
              lineHeight: 1.75,
            }}>
              A nossa equipa é composta por profissionais altamente qualificados e experientes. Cada colaborador passa por um rigoroso processo de seleção, garantindo excelência, responsabilidade e profissionalismo em todos os serviços prestados.
            </p>
          </motion.div>

          {/* Team Photos Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
            className="team-grid"
          >
            <style>{`
              @media(max-width:768px){.team-grid{grid-template-columns:1fr!important}}
            `}</style>

            {[
              { src: "https://images.unsplash.com/photo-1584824486516-0555a07fc511?w=800&q=80", label: "Equipa Lagos" },
              { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", label: "Serviço de Qualidade" },
              { src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&q=80", label: "Profissionais Certificados" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  position: "relative",
                  boxShadow: "0 8px 30px rgba(11,42,74,0.12)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1rem",
                  background: "linear-gradient(transparent, rgba(11,42,74,0.85))",
                }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#fff",
                  }}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Award image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              background: "#fff",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "0 8px 40px rgba(11,42,74,0.08)",
              border: "1px solid rgba(111,175,207,0.15)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1E5F8A20, #6FAFCF30)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
              }}>
                🏆
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#0B2A4A",
                marginBottom: "0.5rem",
              }}>
                Empresa Reconhecida pelo Setor
              </h4>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "0.9rem",
                color: "#4a6080",
                lineHeight: 1.6,
              }}>
                Ao longo de mais de 30 anos de atividade, a Manoel das Piscinas tem sido reconhecida pela sua excelência e compromisso com a qualidade, conquistando a confiança de centenas de clientes no Algarve.
              </p>
            </div>
            <div style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}>
              {[
                { value: "+500", label: "Clientes" },
                { value: "+30", label: "Anos" },
                { value: "100%", label: "Dedicação" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "#1E5F8A",
                    lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                    color: "#6a8aaa",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section
        id="novidades"
        ref={newsRef}
        style={{ padding: "6rem 2rem", background: "#fff" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
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
                Blog & Notícias
              </span>
              <div style={{ width: 40, height: 3, background: "linear-gradient(90deg, #6FAFCF, #1E5F8A)", borderRadius: 2 }} />
            </div>

            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              color: "#0B2A4A",
              letterSpacing: "-0.02em",
            }}>
              Novidades
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
            className="news-grid"
          >
            <style>{`@media(max-width:650px){.news-grid{grid-template-columns:1fr!important}}`}</style>

            {newsItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={newsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(11,42,74,0.12)" }}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(111,175,207,0.2)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 4px 20px rgba(11,42,74,0.06)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: `${item.tagColor}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{
                      display: "inline-block",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      color: item.tagColor,
                      background: `${item.tagColor}15`,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}>
                      {item.tag}
                    </span>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.75rem",
                      color: "#9ab0c0",
                      marginTop: "0.2rem",
                    }}>
                      {item.date}
                    </div>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0B2A4A",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.87rem",
                  color: "#6a8aaa",
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
