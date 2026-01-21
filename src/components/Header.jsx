export function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>TechNova</div>
      <nav style={styles.nav}>
        <a href="#services" style={styles.link}>Serviços</a>
        <a href="#about" style={styles.link}>Sobre</a>
        <a href="#contact" style={styles.link}>Contato</a>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "20px 8%",
    background: "rgba(15,23,42,0.85)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #1e293b",
    zIndex: 100,
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  },
  logo: {
    fontSize: "2rem",
    fontWeight: 900,
    color: "#ffffff",
  },
  nav: {
    display: "flex",
    gap: "40px",
  },
  link: {
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#ffffff",
    textDecoration: "none",
  },
}
