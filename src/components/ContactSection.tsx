import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0B2A4A 0%, #1E5F8A 60%, #6FAFCF 100%)",
          padding: "5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(111,175,207,0.1)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(50px)",
        }} />

        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "0.4rem 1rem",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}>
                📅 Marque uma Reunião
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "#fff",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}>
              Receba uma Avaliação<br />
              <span style={{ color: "#a8d8ea" }}>Profissional Gratuita</span>
            </h2>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}>
              Marque uma reunião connosco e receba uma avaliação profissional com soluções à medida para a sua piscina.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href="#contactos"
                onClick={(e) => { e.preventDefault(); document.getElementById("contactos")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#fff",
                  color: "#0B2A4A",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
              >
                📅 Agendar Agora
              </motion.a>
              <motion.a
                href="https://wa.me/351917626854"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                💬 WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactos" ref={ref} style={{ padding: "6rem 2rem", background: "#fff" }}>
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
                Fale Connosco
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
              Contactos
            </h2>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
            className="contact-grid"
          >
            <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#0B2A4A",
                marginBottom: "2rem",
              }}>
                Informações de Contacto
              </h3>

              {[
                {
                  icon: "📍",
                  label: "Morada",
                  value: "Quinta de Santo António bloco C 22 Garagem O\n8600-315 Lagos",
                  href: "https://maps.google.com?q=Quinta+de+Santo+António,+Lagos,+Portugal",
                  btnText: "Abrir no Maps",
                  btnColor: "#1E5F8A",
                },
                {
                  icon: "📞",
                  label: "Telefone",
                  value: "917 626 854",
                  href: "tel:917626854",
                  btnText: "Ligar agora",
                  btnColor: "#0B2A4A",
                },
                {
                  icon: "📧",
                  label: "Email",
                  value: "maneldaspiscinas@hotmail.com",
                  href: "mailto:maneldaspiscinas@hotmail.com",
                  btnText: "Enviar email",
                  btnColor: "#1E5F8A",
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                  padding: "1.25rem",
                  background: "#f8fbfd",
                  borderRadius: "14px",
                  border: "1px solid rgba(111,175,207,0.2)",
                }}>
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #1E5F8A20, #6FAFCF20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      color: "#1E5F8A",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.25rem",
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      color: "#0B2A4A",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                      marginBottom: "0.75rem",
                    }}>
                      {item.value}
                    </div>
                    <a
                      href={item.href}
                      target={item.label === "Morada" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        background: item.btnColor,
                        color: "#fff",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        padding: "0.4rem 0.9rem",
                        borderRadius: "50px",
                        textDecoration: "none",
                      }}
                    >
                      {item.btnText}
                    </a>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/351917626854"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "14px",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💬</span>
                <div>
                  <div>Falar no WhatsApp</div>
                  <div style={{ fontWeight: 400, fontSize: "0.78rem", opacity: 0.85 }}>
                    Resposta em minutos
                  </div>
                </div>
                <span style={{ marginLeft: "auto" }}>→</span>
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#0B2A4A",
                marginBottom: "2rem",
              }}>
                Envie-nos uma Mensagem
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: "3rem 2rem",
                    background: "linear-gradient(135deg, #0B2A4A, #1E5F8A)",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h4 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#fff",
                    marginBottom: "0.75rem",
                  }}>
                    Mensagem Enviada!
                  </h4>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.6,
                  }}>
                    Obrigado pelo seu contacto. Entraremos em contacto consigo brevemente.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { name: "nome", label: "Nome completo", type: "text", placeholder: "O seu nome" },
                    { name: "telefone", label: "Telefone", type: "tel", placeholder: "9XX XXX XXX" },
                    { name: "email", label: "Email", type: "email", placeholder: "email@exemplo.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{
                        display: "block",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#0B2A4A",
                        marginBottom: "0.4rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "0.85rem 1rem",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "0.9rem",
                          color: "#0B2A4A",
                          background: "#f8fbfd",
                          border: "1.5px solid rgba(111,175,207,0.3)",
                          borderRadius: "10px",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{
                      display: "block",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#0B2A4A",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}>
                      Mensagem
                    </label>
                    <textarea
                      placeholder="Descreva o que precisa..."
                      rows={4}
                      required
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        color: "#0B2A4A",
                        background: "#f8fbfd",
                        border: "1.5px solid rgba(111,175,207,0.3)",
                        borderRadius: "10px",
                        resize: "vertical",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    style={{
                      background: "linear-gradient(135deg, #1E5F8A, #0B2A4A)",
                      color: "#fff",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      padding: "1rem",
                      borderRadius: "12px",
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.8 : 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      boxShadow: "0 8px 24px rgba(30,95,138,0.3)",
                    }}
                  >
                    {loading ? (
                      <>
                        <span style={{ animation: "spin 1s linear infinite" }}>⏳</span>
                        A enviar...
                      </>
                    ) : (
                      <>📩 Enviar Mensagem</>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Map embed placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              marginTop: "3rem",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(11,42,74,0.1)",
              border: "1px solid rgba(111,175,207,0.2)",
            }}
          >
            <iframe
              title="Localização Manoel das Piscinas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.5!2d-8.6724!3d37.1038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b2d56f5b8c8b1%3A0x3d4e1b2a7c5f6e0d!2sLagos%2C+Portugal!5e0!3m2!1spt!2spt!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
