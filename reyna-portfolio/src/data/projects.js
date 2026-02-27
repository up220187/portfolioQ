import secure1 from "../assets/projects/securewatch/1.png";
import secure2 from "../assets/projects/securewatch/2.png";
import secure3 from "../assets/projects/securewatch/3.png";

// StellarStock images
import stellar1 from "../assets/projects/stellarstock/1.png";
import stellar2 from "../assets/projects/stellarstock/2.png";
import stellar3 from "../assets/projects/stellarstock/3.png";

// PetShelter images
import petshelter1 from "../assets/projects/petshelter/1.png";
import petshelter2 from "../assets/projects/petshelter/2.png";
import petshelter3 from "../assets/projects/petshelter/3.png";

// MedClinic images
import medical1 from "../assets/projects/medclinic/1.png";
import medical2 from "../assets/projects/medclinic/2.png";
import medical3 from "../assets/projects/medclinic/3.png";


export const projects = [
  {
    title: "SecureWatch",
    description:
      "Aplicación móvil desarrollada en Kotlin enfocada en monitoreo y gestión de seguridad. Permite visualizar eventos en tiempo real, gestionar alertas y mantener control centralizado desde dispositivos Android. Diseñada con arquitectura limpia y enfoque en rendimiento y experiencia de usuario.",
    tech: ["Kotlin", "Android Studio", "Firebase", "MVVM"],
    images: [
      secure1,
      secure2,
      secure3,
    ],
    github: "https://github.com/up220187/Sistema-de-Deteccion-de-Movimiento",
  },
  {
    title: "StellarStock",
    description:
      "Sistema web para gestión de ventas e inventario diseñado para optimizar el control de productos, seguimiento de ventas y generación de reportes. Enfocado en eficiencia operativa, experiencia de usuario moderna y estructura escalable para negocios en crecimiento.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      stellar1,
      stellar2,
      stellar3,
    ],
    github: "https://github.com/ISC-UPA/2025-1-ISC07B-StellarStock",
  },
  {
    title: "PetShelter",
    description:
      "Plataforma web para gestión y adopción de mascotas con autenticación por roles y sistema de solicitudes.",
    tech: ["React", "Node.js", "MongoDB"],
    images: [
      petshelter1,
      petshelter2,
      petshelter3,
    ],
    github: "https://github.com/up220187/PetShelter",
  },
  {
    title: "MedClinic",
    description:
      "Sistema web para gestión de citas médicas con visualización tipo calendario y control por roles.",
    tech: ["React", "Express", "SQLite"],
    images: [
      medical1,
      medical2,
      medical3,
    ],
    github: "https://github.com/up220187/MedClinic",
  },
];