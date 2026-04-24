import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    src: "/images/hero-pool.jpg",
    alt: "Piscina residencial com jardim",
    label: "Manutenção & Limpeza",
  },
  {
    src: "/images/pool-gallery-1.jpg",
    alt: "Piscina de luxo com vista para o mar",
    label: "Construção Premium",
  },
  {
    src: "/images/pool-gallery-2.jpg",
    alt: "Piscina retangular com jardim tropical",
    label: "Remodelação Completa",
  },
  {
    src: "/images/pool-construction.jpg",
    alt: "Construção de piscina",
    label: "Construção & Instalação",
  },
  {
    src: "/images/pool-gallery-3.jpg",
    alt: "Manutenção profissional de piscina",
    label: "Serviço Profissional",
  },
  {
    src: "/images/pool-gallery-1.jpg",
    alt: "Piscina infinity com panorama",
    label: "Piscinas de Luxo",
  },
];

export default function GaleriaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      ref={ref}
      style={{ padding: "6rem 2rem", background: "#fff" }}
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
              Portfólio
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
            A Nossa Galeria
          </h2>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "1.05rem",
            color: "#4a6080",
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Conheça alguns dos nossos trabalhos de manutenção, construção e remodelação de piscinas.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
        }}
          className="gallery-grid"
        >
          <style>{`@media(max-width:900px){.gallery-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:550px){.gallery-grid{grid-template-columns:1fr!important}}`}</style>

          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              onClick={() => setLightbox(i)}
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "4/3",
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(11,42,74,0.1)",
              }}
              className="gallery-item-hover"
            >
              <style>{`
                .gallery-item-hover img { transition: transform 0.5s ease; }
                .gallery-item-hover:hover img { transform: scale(1.08); }
                .gallery-item-hover .gallery-overlay-inner { opacity: 0; transition: opacity 0.4s ease; }
                .gallery-item-hover:hover .gallery-overlay-inner { opacity: 1; }
              `}</style>

              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay */}
              <div
                className="gallery-overlay-inner"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11,42,74,0.85) 0%, rgba(11,42,74,0.2) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem",
                }}
              >
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#fff",
                  marginBottom: "0.25rem",
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.7)",
                }}>
                  {item.alt}
                </span>
                <div style={{
                  marginTop: "0.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#6FAFCF",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}>
                  <span>🔍</span> Ver imagem
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              zIndex: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: "16px",
                  display: "block",
                }}
              />
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "rgba(0,0,0,0.6)",
                  border: "none",
                  color: "#fff",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>

              {/* Nav arrows */}
              {lightbox > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.6)",
                    border: "none",
                    color: "#fff",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ‹
                </button>
              )}
              {lightbox < galleryItems.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(0,0,0,0.6)",
                    border: "none",
                    color: "#fff",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
