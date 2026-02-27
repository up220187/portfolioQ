import { motion } from "framer-motion";

const skills = [
  {
    title: "React",
    level: 85,
    description:
      "Desarrollo de interfaces modernas con componentes reutilizables, hooks y manejo eficiente de estado.",
  },
  {
    title: "JavaScript",
    level: 80,
    description:
      "Programación estructurada y lógica orientada a la resolución de problemas en aplicaciones web.",
  },
  {
    title: "Node.js",
    level: 75,
    description:
      "Construcción de APIs REST y manejo de autenticación para aplicaciones escalables.",
  },
  {
    title: "Express",
    level: 70,
    description:
      "Desarrollo de rutas, middlewares y arquitectura backend organizada.",
  },
  {
    title: "MongoDB",
    level: 75,
    description:
      "Diseño de bases de datos NoSQL con modelos estructurados y relaciones eficientes.",
  },
  {
    title: "Tailwind CSS",
    level: 85,
    description:
      "Diseño de interfaces modernas, consistentes y responsive con enfoque en buenas prácticas.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-primaryBg text-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold">Technical Skills</h2>
          <p className="text-slate-400 mt-4">
            Tecnologías que utilizo para construir soluciones modernas y escalables.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-cardBg p-8 rounded-2xl shadow-lg border border-transparent hover:border-accent transition-all duration-300 hover:shadow-accent/20 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {skill.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Nivel */}
              <div className="w-full">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}