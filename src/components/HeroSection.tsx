import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "351917626854";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de pedir um orçamento para os serviços de piscinas.");

interface Bubble {
  id: number;
  x: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const bubblesRef = useRef<Bubble[]>([]);

  useEffect(() => {
    const count = 30;
    bubblesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 4 + Math.random() * 18, // Slightly larger range
      speed: 0.3 + Math.random() * 0.5,
      delay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.3, // Increased base opacity
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      for (let wave = 0; wave < 4; wave++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(111,175,207,${0.06 - wave * 0.01})`;
        ctx.lineWidth = 1.5;
        const amp = 18 + wave * 10;
        const freq = 0.008 - wave * 0.001;
        const offset = (t + wave * 80) * 0.5;
        for (let x = 0; x <= width; x += 2) {
          const y =
            height * 0.5 +
            Math.sin((x + offset) * freq) * amp +
            Math.sin((x * 0.5 + offset * 0.7) * freq * 1.5) * (amp * 0.5);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      bubblesRef.current.forEach((b) => {
        const elapsed = (t * 0.3 + b.delay * 60) % (height + 50);
        const yPos = height - elapsed;
        const xPos = (b.x / 100) * width + Math.sin(t * 0.01 + b.id) * 15;

        // Outer stroke - sharper white
        ctx.beginPath();
        ctx.arc(xPos, yPos, b.size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Highlight shine - more "nítido"
        ctx.beginPath();
        ctx.arc(xPos - b.size * 0.35, yPos - b.size * 0.35, b.size * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 1.5})`;
        ctx.fill();

        // Subtle core soft glow
        ctx.beginPath();
        ctx.arc(xPos, yPos, b.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(xPos, yPos, 0, xPos, yPos, b.size);
        gradient.addColorStop(0, "rgba(111, 175, 207, 0)");
        gradient.addColorStop(0.8, "rgba(111, 175, 207, 0)");
        gradient.addColorStop(1, `rgba(111, 175, 207, ${b.opacity * 0.2})`);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      t++;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const stats = [
    { value: "+30", label: "Anos de Experiência" },
    { value: "500+", label: "Piscinas Tratadas" },
    { value: "100%", label: "Satisfação Garantida" },
    { value: "24h", label: "Resposta Rápida" },
  ];

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background pool image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-pool.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(11,42,74,0.88) 0%, rgba(11,42,74,0.65) 50%, rgba(30,95,138,0.55) 100%)",
          zIndex: 1,
        }}
      />

      {/* Canvas overlay */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Decorative blobs */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(111,175,207,0.08)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(30,95,138,0.12)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "7rem 2rem 4rem",
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(111,175,207,0.15)",
            border: "1px solid rgba(111,175,207,0.3)",
            borderRadius: "100px",
            padding: "0.4rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "#6FAFCF",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            ⭐ Desde 1990 • Lagos, Algarve
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          Especialistas em{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6FAFCF 0%, #a8d8ea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Piscinas
          </span>
          <br />
          de Alta Qualidade
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 600,
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Manutenção, construção e soluções completas com profissionalismo desde 1990. A sua piscina merece o melhor cuidado — confie nos especialistas do Algarve.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <motion.a
            href="#contactos"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #1E5F8A, #0B2A4A)",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0.9rem 2rem",
              borderRadius: "50px",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(11,42,74,0.4)",
            }}
          >
            <span>📋</span>
            <span>Pedir Orçamento</span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0.9rem 2rem",
              borderRadius: "50px",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(11,42,74,0.6)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(111,175,207,0.2)",
          padding: "1.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            >
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#6FAFCF",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
                  color: "rgba(255,255,255,0.65)",
                  marginTop: "0.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Wave bottom */}
      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          zIndex: 5,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", display: "block" }}
        >
          <path
            d="M0 30 C360 60 720 0 1080 30 C1260 45 1380 20 1440 30 L1440 60 L0 60 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
}
