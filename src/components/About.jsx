// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondaryBg text-slate-200 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          Desarrolladora enfocada en frontend moderno con experiencia en React,
          diseño de interfaces estructuradas y desarrollo de APIs con Node.js.
          Me interesa crear soluciones funcionales, escalables y visualmente
          coherentes.
        </p>
      </motion.div>
    </section>
  );
}