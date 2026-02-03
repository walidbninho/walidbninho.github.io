export interface Project {
  id: string;
  title: string;
  category: "CAD Design" | "Embedded Systems" | "Simulation";
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
  slug: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Moteur Radial 9 Cylindres",
    category: "CAD Design",
    description: "Conception complète et assemblage complexe sous CATIA V5. Analyse des contraintes et simulation cinématique.",
    image: "/api/placeholder/600/400",
    tags: ["CATIA", "Mechanical Design", "Thermodynamics", "Rendering"],
    featured: true,
    slug: "radial-engine-v8",
  },
  {
    id: "2",
    title: "Drone Autonome STM32",
    category: "Embedded Systems",
    description: "Développement d'un contrôleur de vol personnalisé. Programmation C++ sur STM32, gestion IMU et filtres de Kalman.",
    image: "/api/placeholder/600/400",
    tags: ["STM32", "C++", "PCB Design", "Control Theory", "I2C/SPI"],
    featured: true,
    slug: "autonomous-drone",
  },
  {
    id: "3",
    title: "Simulation Thermique Python",
    category: "Simulation",
    description: "Script Python pour visualiser les transferts thermiques dans une tuyère. Utilisation de Matplotlib et NumPy pour les calculs.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "NumPy", "Matplotlib", "Physics"],
    featured: true,
    slug: "thermal-simulation",
  },
];