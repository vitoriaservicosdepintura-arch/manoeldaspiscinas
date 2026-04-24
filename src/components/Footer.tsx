import { motion } from "framer-motion";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipa", label: "Equipa" },
  { href: "#novidades", label: "Novidades" },
  { href: "#contactos", label: "Contactos" },
];

const services = [
  "Manutenção de Piscinas",
  "Limpeza e Tratamento",
  "Reparação Técnica",
  "Construção e Remodelação",
  "Consultoria Especializada",
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0B2A4A 0%, #071a2d 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top wave */}
      <div style={{ lineHeight: 0, marginTop: -1 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
          <path d="M0 0 C360 60 720 0 1080 40 C1260 60 1380 20 1440 0 L1440 0 L0 0 Z" fill="#fff" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "5%",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "rgba(111,175,207,0.05)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      {/* Main footer content */}
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "4rem 2rem 2rem",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
          className="footer-grid"
        >
          <style>{`
            @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important}}
            @media(max-width:550px){.footer-grid{grid-template-columns:1fr!important}}
          `}</style>

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <img
                src="/images/logo.png"
                width="60"
                height="60"
                alt="Logo Manoel das Piscinas"
                style={{ objectFit: "contain" }}
              />
              <div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#fff",
                  lineHeight: 1,
                }}>
                  MANOEL <span style={{ color: "#6FAFCF", fontWeight: 400, fontSize: "0.7em" }}>DAS</span>
                </div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#fff",
                  lineHeight: 1,
                }}>
                  PISCINAS
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
              maxWidth: 280,
            }}>
              Especialistas em piscinas no Algarve desde 1990. Qualidade, profissionalismo e confiança ao seu serviço.
            </p>

            {/* Contact quick */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:917626854" style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.85rem",
              }}>
                📞 917 626 854
              </a>
              <a href="mailto:maneldaspiscinas@hotmail.com" style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.85rem",
              }}>
                📧 maneldaspiscinas@hotmail.com
              </a>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.85rem",
              }}>
                <span>📍</span>
                <span>Quinta de Santo António bloco C 22 Garagem O, 8600-315 Lagos</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#fff",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Links Rápidos
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#6FAFCF"; }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    <span style={{ color: "#6FAFCF", fontSize: "0.6rem" }}>▶</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#fff",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Serviços
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href="#servicos"
                    onClick={(e) => { e.preventDefault(); handleNav("#servicos"); }}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "#6FAFCF"; }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    <span style={{ color: "#6FAFCF", fontSize: "0.6rem" }}>▶</span>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp & CTA */}
          <div>
            <h4 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#fff",
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>
              Contacto Rápido
            </h4>

            <motion.a
              href="https://wa.me/351917626854"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#25D366",
                color: "#fff",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "0.85rem 1.25rem",
                borderRadius: "12px",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              💬 WhatsApp
            </motion.a>

            <motion.a
              href="tel:917626854"
              whileHover={{ scale: 1.04 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                padding: "0.85rem 1.25rem",
                borderRadius: "12px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                marginBottom: "1rem",
              }}
            >
              📞 917 626 854
            </motion.a>

            <div style={{
              background: "rgba(111,175,207,0.1)",
              borderRadius: "12px",
              padding: "1rem",
              border: "1px solid rgba(111,175,207,0.15)",
            }}>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                color: "#6FAFCF",
                marginBottom: "0.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}>
                Horário
              </div>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
              }}>
                Seg–Sex: 8h–18h<br />
                Sáb: 9h–13h
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.4)",
          }}>
            © {new Date().getFullYear()} Manoel das Piscinas. Todos os direitos reservados.
          </p>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.4)",
          }}>
            Lagos, Algarve, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
