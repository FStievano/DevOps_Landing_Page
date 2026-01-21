export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.social}>
        <a href="#" style={styles.link}>Twitter</a>
        <a href="#" style={styles.link}>LinkedIn</a>
        <a href="#" style={styles.link}>GitHub</a>
      </div>
      <p>© 2026 TechNova. Todos os direitos reservados.</p>
    </footer>
  )
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "40px 8%",
    background: "#0f172a",
    color: "#cbd5f5",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "16px",
  },
  link: {
    color: "#f8fafc",
    textDecoration: "none",
    fontWeight: 600,
  },
}
