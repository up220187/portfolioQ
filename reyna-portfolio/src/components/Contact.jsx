import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-primaryBg text-slate-100 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mb-10 leading-relaxed">
            Actualmente estoy abierta a oportunidades como Junior Developer
            o prácticas profesionales donde pueda aportar valor y seguir creciendo
            en entornos técnicos estructurados.
          </p>

          {/* Botón principal */}
          <a
            href="mailto:tuemail@gmail.com"
            className="inline-block bg-accent px-8 py-4 rounded-2xl font-medium hover:bg-accentSoft transition-all duration-300 shadow-lg hover:shadow-accent/30"
          >
            Contact Me
          </a>

          {/* Links secundarios */}
          <div className="mt-10 flex justify-center gap-8 text-slate-400">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              className="hover:text-accent transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              className="hover:text-accent transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:tuemail@gmail.com"
              className="hover:text-accent transition"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}