import { useState, useEffect } from "react"

export function Hero() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight
      const newOpacity = Math.max(0, 1 - scrollY / vh)
      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Tecnologia que impulsiona seu negócio
        </h1>

        <p style={styles.subtitle}>
          Aplicações modernas, seguras e escaláveis, entregues com excelência.
        </p>

        <button style={styles.button}>Fale com um especialista</button>
      </div>

      <img
        src="/hero.jpg"
        alt="Hero Background"
        style={{ ...styles.bgImage, opacity }}
      />
    </section>
  )
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    color: "#f8fafc",
  },

  overlay: {
    position: "absolute",
    zIndex: 2,
    textAlign: "left",       // texto à esquerda
    left: "10%",             // mais afastado da borda
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",             // aumenta espaçamento entre elementos
  },

  title: {
    fontSize: "3.5rem",
    fontWeight: 900,
    lineHeight: 1.2,
  },

  subtitle: {
    fontSize: "1.3rem",
    lineHeight: 1.8,
  },

  button: {
    background: "linear-gradient(135deg, #2563eb, #6366f1)",
    color: "#f8fafc",
    border: "none",
    padding: "18px 40px",
    borderRadius: "12px",
    fontSize: "1.2rem",
    cursor: "pointer",
    maxWidth: "fit-content",
  },

  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.6)",
    zIndex: 1,
    transition: "opacity 0.3s linear",
  },
}
