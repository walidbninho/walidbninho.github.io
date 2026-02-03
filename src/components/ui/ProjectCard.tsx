"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
    >
      {/* Image Placeholder (Zone Grise pour l'instant) */}
      <div className="aspect-video w-full bg-slate-800 group-hover:scale-105 transition-transform duration-500 relative">
        {/* Ici on mettra la vraie image plus tard */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm">
          [Image: {project.title}]
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <Link 
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
        >
          Voir les détails <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}