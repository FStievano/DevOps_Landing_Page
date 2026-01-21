import { useEffect, useState } from "react"

export function Services() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    const el = document.querySelector("#services-grid")
    if (el) observer.observe(el)
  }, [])

  return (
    <section id="services">
      <h2>Nossos Serviços</h2>
      <div
        id="services-grid"
        style={{
          ...styles.grid,
          transform: visible ? "translateY(0)" : "translateY(50px)",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease-out",
        }}
      >
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <img src={service.img} alt={service.title} style={styles.img} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const services = [
  { title: "Desenvolvimento Web", description: "Aplicações rápidas e escaláveis.", img: "/service3.jpg" },
  { title: "Cloud & Infraestrutura", description: "Infraestrutura segura e automatizada.", img: "/service2.jpg" },
  { title: "Segurança", description: "Proteção de dados e compliance robustos.", img: "/service1.jpg" },
]

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
    padding: "0 8%",
    marginTop: "40px",
  },
  card: {
    background: "#1e293b",
    padding: "40px 24px",
    borderRadius: "16px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    color: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    width: "180px",
    height: "180px",
    marginBottom: "16px",
    objectFit: "cover",
    borderRadius: "12px",
  },
}
