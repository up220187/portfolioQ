import styles from './Certifications.module.css';

const certs = [
  {
    issuer: 'SCRUMstudy',
    name: 'SCRUM Fundamentals',
  },
  {
    issuer: 'Google',
    name: 'Google Data Analyst I',
  },
  {
    issuer: 'Oracle',
    name: 'Database Design Learner',
  },
  {
    issuer: 'Microsoft',
    name: 'Microsoft Office Specialist (MOS)',
  },
  {
    issuer: 'Cisco',
    name: 'Fundamentos de Redes y Ciberseguridad — CCNA 1 & 2, Cybersecurity & IoT, Linux Essentials',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Certificaciones</h2>
          <p className={styles.subtitle}>
            Cursos y certificaciones que validan mis competencias técnicas y profesionales.
          </p>
        </header>

        <div className={`${styles.grid} stagger`}>
          {certs.map((cert, i) => (
            <article key={i} className={styles.card}>
              <span className={styles.issuer}>{cert.issuer}</span>
              <h3 className={styles.name}>{cert.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
