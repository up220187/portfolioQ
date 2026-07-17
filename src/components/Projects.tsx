import { useState, useCallback } from 'react';

import skip1 from '../assets/projects/Skiptrade/1.png';
import skip2 from '../assets/projects/Skiptrade/2.png';
import skip3 from '../assets/projects/Skiptrade/3.png';

import stellar1 from '../assets/projects/stellarstock/1.png';
import stellar2 from '../assets/projects/stellarstock/2.png';
import stellar3 from '../assets/projects/stellarstock/3.png';

import secure1 from '../assets/projects/securewatch/1.png';
import secure2 from '../assets/projects/securewatch/2.png';
import secure3 from '../assets/projects/securewatch/3.png';

import med1 from '../assets/projects/medclinic/1.png';
import med2 from '../assets/projects/medclinic/2.png';
import med3 from '../assets/projects/medclinic/3.png';

import styles from './Projects.module.css';

const projects = [
  {
    name: 'Ecosistema Skiptrade (Web app & Mobile app)',
    tech: ['React', 'React Router v7', 'React Native', 'Expo', 'Zustand', 'TypeScript', 'CSS Modules', 'Axios'],
    description:
      'Arquitecturé y desarrollé tanto el portal web transaccional (React Router v7) protegiendo más de 25 rutas, como la app nativa (React Native, Expo). Manejé un registro complejo de 6 etapas usando Zustand e integré una estética glassmorphism logrando tiempos de respuesta visual <200ms en redes inestables.',
    images: [skip1, skip2, skip3],
    github: 'https://app.skiptrade.ai',
  },
  {
    name: 'StellarStock',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    description:
      'Sistema web para gestión de ventas e inventario diseñado para optimizar el control de productos, seguimiento de ventas y generación de reportes.',
    images: [stellar1, stellar2, stellar3],
    github: 'https://github.com/ISC-UPA/2025-1-ISC07B-StellarStock',
  },
  {
    name: 'SecureWatch - Sistema Móvil de Monitoreo',
    tech: ['Kotlin', 'Room', 'Retrofit 2', 'WorkManager', 'Azure App Service'],
    description:
      'Desarrollé una aplicación Android nativa para el monitoreo de hardware de sensores IoT. Implementé procesos en segundo plano con WorkManager para el consumo asíncrono de APIs REST en Azure y persistencia de datos local, garantizando la emisión de alertas críticas sin comprometer el rendimiento de la batería.',
    images: [secure1, secure2, secure3],
    github: 'https://github.com/up220187/Sistema-de-Deteccion-de-Movimiento',
  },
  {
    name: 'MedClinic - Sistema de Citas Médicas',
    tech: ['HTML5', 'CSS (Bootstrap)', 'AngularJS'],
    description:
      'Aplicación web para gestionar citas médicas. La interfaz permite visualizar, agendar y cancelar citas fácilmente mediante el uso de AngularJS para la lógica del cliente. Incluye funcionalidades principales como agendar nuevas citas, ver lista de citas agendadas y cancelar citas fácilmente.',
    images: [med1, med2, med3],
    github: 'https://github.com/up220187/MedClinic',
  },
];

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? project.images.length - 1 : i - 1));
  }, [project.images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % project.images.length);
  }, [project.images.length]);

  return (
    <article className={styles.card}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          <img
            src={project.images[current]}
            alt={project.name}
            className={styles.projectImage}
          />
        </div>

        <button
          className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
          onClick={prev}
          aria-label="Previous image"
        >
          &#8249;
        </button>

        <button
          className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
          onClick={next}
          aria-label="Next image"
        >
          &#8250;
        </button>

        <div className={styles.carouselDots}>
          {project.images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{project.name}</h3>

        <div className={styles.pills}>
          {project.tech.map((t, i) => (
            <span key={i} className={styles.pill}>{t}</span>
          ))}
        </div>

        <p className={styles.description}>{project.description}</p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub &rarr;
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Proyectos</h2>
          <p className={styles.subtitle}>
            Proyectos destacados donde aplico arquitectura estructurada y diseño moderno.
          </p>
        </header>

        <div className={`${styles.grid} stagger`}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
