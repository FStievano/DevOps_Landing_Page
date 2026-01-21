export function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Fale Conosco</h2>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          required
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          required
          style={styles.input}
        />

        <textarea
          placeholder="Mensagem"
          rows="5"
          required
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Enviar Mensagem
        </button>
      </form>
    </section>
  )
}

const styles = {
  section: {
    padding: "120px 8%",
    background: "#0f172a",
    color: "#f8fafc",
    textAlign: "center",
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
    fontWeight: 700,
  },

  form: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  input: {
    padding: "16px 20px",
    borderRadius: "12px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "#f8fafc",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
  },

  textarea: {
    padding: "16px 20px",
    borderRadius: "12px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "#f8fafc",
    fontSize: "1rem",
    outline: "none",
    resize: "vertical",
    transition: "all 0.3s ease",
  },

  button: {
    padding: "18px 40px",
    fontSize: "1.2rem",
    fontWeight: 700,
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    color: "#f8fafc",
    background: "linear-gradient(135deg, #2563eb, #6366f1)",
    transition: "all 0.3s ease",
  },
}

// Adicionando efeito de foco nos inputs (inline styles não permitem :focus, então podemos usar CSS global ou styled-components)
// Exemplo simples usando CSS global no index.css:
