import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "linear-gradient(135deg, #0B2A4A 0%, #1E5F8A 60%, #6FAFCF 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {/* Animated water blobs */}
          <motion.div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(111, 175, 207, 0.2)",
              filter: "blur(80px)",
              top: "10%",
              right: "10%",
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(30, 95, 138, 0.3)",
              filter: "blur(60px)",
              bottom: "15%",
              left: "5%",
            }}
            animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Logo SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ marginBottom: "2rem" }}
          >
            {/* Manoel das Piscinas Logo (SVG recreation) */}
            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer light blue diamond */}
              <rect x="40" y="40" width="120" height="120" rx="18" fill="rgba(111,175,207,0.5)" transform="rotate(45 100 100)" />
              {/* Middle blue diamond */}
              <rect x="52" y="52" width="96" height="96" rx="14" fill="#1E5F8A" transform="rotate(45 100 100)" />
              {/* Inner dark diamond */}
              <rect x="64" y="64" width="72" height="72" rx="10" fill="#0B2A4A" transform="rotate(45 100 100)" />
              {/* Center white diamond */}
              <rect x="80" y="80" width="40" height="40" rx="6" fill="#FFFFFF" transform="rotate(45 100 100)" />
            </svg>
          </motion.div>

          {/* Company name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ textAlign: "center", position: "relative" }}
          >
            <div style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#fff",
              textTransform: "uppercase",
            }}>
              MANOEL
              <span style={{ color: "#6FAFCF", fontWeight: 400, fontSize: "0.55em", marginLeft: "0.4em" }}>DAS</span>
            </div>
            <div style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 900,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#fff",
              textTransform: "uppercase",
            }}>
              PISCINAS
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              marginTop: "1.5rem",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.3em",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Especialistas em Piscinas desde 1990
          </motion.p>

          {/* Loading bar */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              A carregar...
            </motion.p>
            <div style={{
              width: 180,
              height: 2,
              background: "rgba(255,255,255,0.2)",
              borderRadius: 4,
              overflow: "hidden",
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.2, ease: "easeInOut", delay: 0.2 }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #6FAFCF, #fff)",
                  borderRadius: 4,
                }}
              />
            </div>
          </motion.div>

          {/* Wave bottom decoration */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            overflow: "hidden",
            opacity: 0.15,
          }}>
            <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
              <path d="M0 40 C200 0 400 80 600 40 C800 0 1000 80 1200 40 L1200 80 L0 80 Z" fill="white" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
