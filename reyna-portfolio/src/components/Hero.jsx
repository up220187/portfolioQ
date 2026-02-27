import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-primaryBg text-slate-100 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Reyna Martinez"
            className="w-64 h-64 object-cover rounded-full border-4 border-accent shadow-xl"
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
          Reyna <span className="text-accent">Martinez</span>
        </h1>
        
        <p className="text-textSecondary mt-4 max-w-xl">
          Frontend Developer creando experiencias digitales elegantes y funcionales.
        </p>

          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-accent px-6 py-3 rounded-xl font-medium hover:bg-accentSoft transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="border border-accent px-6 py-3 rounded-xl font-medium hover:bg-accent/10 transition"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}