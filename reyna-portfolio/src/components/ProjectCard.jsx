import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className="bg-cardBg rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-accent transition-all duration-300 hover:shadow-accent/20 hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Controles */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-1 rounded-full text-white text-sm"
        >
          ‹
        </button>

        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-1 rounded-full text-white text-sm"
        >
          ›
        </button>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent mb-3">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <a
            href={project.demo}
            className="bg-accent px-4 py-2 rounded-xl text-sm font-medium hover:bg-accentSoft transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="border border-accent px-4 py-2 rounded-xl text-sm font-medium hover:bg-accent/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
