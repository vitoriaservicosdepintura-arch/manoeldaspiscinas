import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    const tooltipTimer = setTimeout(() => setTooltip(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.75rem",
          }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "0.6rem 1rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  color: "#0B2A4A",
                  whiteSpace: "nowrap",
                }}
              >
                💬 Fale connosco!
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <div style={{ position: "relative" }}>
            {/* Pulse rings */}
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#25D366",
                zIndex: -1,
              }}
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#25D366",
                zIndex: -1,
              }}
            />

            <motion.a
              href="https://wa.me/351917626854?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20os%20servi%C3%A7os%20de%20piscinas."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
                textDecoration: "none",
                fontSize: "1.75rem",
              }}
            >
              💬
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
