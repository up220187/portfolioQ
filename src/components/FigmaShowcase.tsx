import styles from './FigmaShowcase.module.css';
import skiptradeImg from '../assets/figma/skiptrade.png';
import carlettoImg from '../assets/figma/Carletto.png';

const designs = [
  {
    name: 'Skiptrade — Seller Flow',
    description:
      'Diseño completo del flujo de vendedor para la plataforma Skiptrade. Incluye onboarding, gestión de inventario, publicación de productos, proceso de venta y panel de métricas. Prototipo interactivo de alta fidelidad con navegación completa.',
    image: skiptradeImg,
    figma:
      'https://www.figma.com/proto/XWaU60Hb8neSRS3PpJWIFM/Skiptrade-Design?node-id=1-1954&p=f&viewport=941%2C410%2C0.09&t=3SFHyEUBYdRlPFV9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1954&show-proto-sidebar=1&page-id=0%3A1',
  },
  {
    name: 'Carletto Napoletano — App Web & Landing Page',
    description:
      'Diseño de la landing page y aplicación web para Carletto Napoletano. Experiencia visual completa: secciones de menú, reservaciones, identidad de marca y flujo de usuario optimizado para conversión.',
    image: carlettoImg,
    figma:
      'https://www.figma.com/proto/fczFXsFGBgzbm4NygkdFmw/Carletto?node-id=2-2&p=f&viewport=-75%2C251%2C0.17&t=UK0DVpa0SwH1kS8U-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&page-id=0%3A1',
  },
];

export default function FigmaShowcase() {
  return (
    <section id="designs" className={`${styles.section} reveal`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Diseños Figma</h2>
          <p className={styles.subtitle}>
            Prototipos interactivos de alta fidelidad que respaldan la arquitectura visual de mis proyectos.
          </p>
        </header>

        <div className={styles.list}>
          {designs.map((d, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={d.image} alt={d.name} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{d.name}</h3>
                <p className={styles.description}>{d.description}</p>
                <a
                  href={d.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Ver prototipo &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
