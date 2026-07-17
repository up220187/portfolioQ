import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Bussiness IA Solutions',
    role: 'Frontend Developer & UI Designer',
    period: 'Mayo 2026 - Julio 2026',
    description:
      'Diseño e implementación de interfaces de usuario para soluciones de inteligencia artificial empresarial. Desarrollo de componentes reutilizables y prototipado de dashboards orientados a la toma de decisiones.',
  },
  {
    company: 'Carletto Napoletano',
    role: 'Desarrolladora Junior',
    period: 'Enero 2025 - Abril 2025',
    description:
      'Desarrollo y mantenimiento de aplicaciones web internas. Implementación de funcionalidades front-end con enfoque en experiencia de usuario y rendimiento.',
  },
  {
    company: 'Tecnolochicas',
    role: 'Profesora de Tecnología y Programación',
    period: 'Enero 2025 - Abril 2025',
    description:
      'Impartición de cursos de programación y tecnología. Creación de material didáctico y acompañamiento en el aprendizaje de fundamentos de desarrollo web y lógica de programación.',
  },
  {
    company: 'Calvillo Publicidad',
    role: 'Soporte Técnico',
    period: 'Enero 2024 - Abril 2024',
    description:
      'Diagnóstico y resolución de incidencias técnicas. Soporte en infraestructura digital y asesoría tecnológica para clientes.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Experiencia</h2>
          <p className={styles.subtitle}>
            Trayectoria profesional y roles clave en mi formación como desarrolladora.
          </p>
        </header>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`${styles.item} ${index % 2 !== 0 ? styles.itemRight : ''}`}
            >
              <span className={styles.dot}></span>

              <div className={styles.card}>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
                <time className={styles.period}>{exp.period}</time>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
