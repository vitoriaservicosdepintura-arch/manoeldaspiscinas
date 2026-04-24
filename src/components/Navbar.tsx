import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipa", label: "Equipa" },
  { href: "#contactos", label: "Contactos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.8 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
          background: scrolled ? "rgba(11,42,74,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(111,175,207,0.15)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            {/* Logo SVG */}
            <img
              src="/images/logo.png"
              width="50"
              height="50"
              alt="Logo Manoel das Piscinas"
              style={{ objectFit: "contain" }}
            />
            <div>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}>
                MANOEL <span style={{ color: "#6FAFCF", fontWeight: 400, fontSize: "0.75em" }}>DAS</span>
              </div>
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}>
                PISCINAS
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
            className="hidden-mobile">
            <style>{`@media(max-width:768px){.hidden-mobile{display:none!important}}`}</style>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: activeSection === link.href.slice(1) ? "#6FAFCF" : "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                  background: activeSection === link.href.slice(1) ? "rgba(111,175,207,0.1)" : "transparent",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contactos"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contactos"); }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#fff",
                textDecoration: "none",
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #1E5F8A, #0B2A4A)",
                marginLeft: "0.5rem",
                border: "1px solid rgba(111,175,207,0.3)",
              }}
            >
              Orçamento
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "0.5rem",
            }}
          >
            <style>{`@media(max-width:768px){.show-mobile{display:flex!important}}`}</style>
            <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: 320,
              background: "#0B2A4A",
              zIndex: 490,
              padding: "6rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "0.85rem 1rem",
                  borderRadius: "8px",
                  background: "rgba(111,175,207,0.08)",
                  borderBottom: "1px solid rgba(111,175,207,0.1)",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={`https://wa.me/351917626854`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: "1rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#fff",
                textDecoration: "none",
                padding: "1rem",
                borderRadius: "12px",
                background: "#25D366",
                textAlign: "center",
              }}
            >
              💬 WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 480,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
