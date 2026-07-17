import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Lanyard from "./3d/Lanyard";
import styles from "./Hero.module.css";

function CanvasLoader() {
  return null;
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>

        {/* Texto */}
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.role}>
            Ingeniera en Sistemas Computacionales | Frontend Developer & UI/UX Designer
          </span>

          <h1 className={styles.name}>
            Reyna del Carmen Martínez Gómez
          </h1>

          <p className={styles.description}>
            Especializada en la conceptualización, arquitectura y desarrollo
            de aplicaciones web y móviles escalables.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="/CV_Reyna_Martinez.pdf"
              download="CV_Reyna_Martinez.pdf"
              className={styles.ctaPrimary}
            >
              Descargar CV
            </a>
            <a href="#projects" className={styles.ctaSecondary}>
              Ver Proyectos
            </a>
          </div>
        </motion.div>

        {/* Canvas 3D */}
        <motion.div
          className={styles.canvasContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Canvas
            camera={{ position: [0, 0, 14], fov: 35 }}
            gl={{ alpha: true, antialias: true }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <Lanyard />
            </Suspense>
          </Canvas>
        </motion.div>

      </div>
    </section>
  );
}
