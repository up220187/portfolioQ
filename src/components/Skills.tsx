import styles from './Skills.module.css';

const categories = [
  {
    title: 'Frontend & UI Design',
    skills: [
      'Figma',
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'CSS Modules',
      'HTML5 / CSS3',
      'Atomic Design',
      'Design Tokens',
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      'React Native',
      'Expo',
      'Kotlin',
      'Zustand',
      'Axios',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express',
      'GraphQL',
      'APIs REST',
      'Arquitectura de Servidores',
    ],
  },
  {
    title: 'Bases de Datos & Infraestructura',
    skills: [
      'MySQL',
      'MongoDB',
      'SQL',
      'SQLite3',
      'Git',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Habilidades Técnicas</h2>
          <p className={styles.subtitle}>
            Stack tecnológico y herramientas que domino para construir soluciones completas.
          </p>
        </header>

        <div className={`${styles.categories} stagger`}>
          {categories.map((cat, i) => (
            <article key={i} className={styles.category}>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <div className={styles.badges}>
                {cat.skills.map((skill, j) => (
                  <span key={j} className={styles.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
