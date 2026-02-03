"use client";

import Link from "next/link"; // <--- Import important pour la navigation fluide
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

// Composant 3D Placeholder (Cube technique)
function EngineeringCube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-slate-950">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden">
        
        {/* BACKGROUND GRID (Effet papier millimétré) */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        {/* TEXT CONTENT */}
        <div className="z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-medium text-blue-400">
              SYSTEMS ENGINEERING • CAD • EMBEDDED
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Concevoir l'Avenir <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Aéronautique
              </span>
            </h1>
            <p className="mb-8 mx-auto max-w-2xl text-lg text-slate-400">
              Ingénieur spécialisé en conception mécanique avancée et systèmes embarqués temps réel.
              De la modélisation CATIA au code C++.
            </p>
            
            <div className="flex justify-center gap-4">
              <Link href="/projects" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500">
                Voir mes Projets
              </Link>
              <Link href="/contact" className="rounded-md border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800">
                Me Contacter
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3D SCENE BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <EngineeringCube />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
      </section>

      {/* --- SECTION PROJETS --- */}
      <section className="relative z-10 w-full max-w-7xl px-4 py-24">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Projets <span className="text-blue-500">Sélectionnés</span>
          </h2>
          <Link href="/projects" className="text-sm text-slate-400 transition-colors hover:text-white">
            Voir tout le portfolio →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
      </section>

    </main>
  );
}