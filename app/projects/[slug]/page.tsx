import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Calendar, Layers } from "lucide-react";
import { projects } from "@/lib/projects";

// 1. Indispensable pour GitHub Pages (Static Export)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// ⚠️ CHANGEMENT NEXT.JS 15 : Les params sont maintenant une Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  // 2. On doit "attendre" (await) les paramètres avant de les utiliser
  const { slug } = await params;
  
  // 3. On trouve le projet correspondant
  const project = projects.find((p) => p.slug === slug);

  // Si l'URL n'existe pas, on renvoie une 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* BOUTON RETOUR */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>

        {/* HEADER DU PROJET */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              {project.category}
            </span>
            <span className="flex items-center text-slate-500 text-xs font-mono">
              <Calendar size={12} className="mr-1" /> 2026
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-white/5">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE : Texte & Analyse */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="flex items-center text-2xl font-bold text-white mb-4">
                <Layers size={24} className="mr-2 text-blue-500" />
                Contexte & Challenge
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p className="text-slate-400">
                  {/* Texte placeholder */}
                  Ce projet visait à résoudre des contraintes complexes d'ingénierie. 
                  L'objectif principal était d'optimiser le ratio poids/puissance tout en assurant une fiabilité thermique maximale.
                  J'ai utilisé une approche itérative, commençant par des calculs théoriques avant de passer à la modélisation CAO.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Architecture Technique</h2>
              <div className="p-6 rounded-lg border border-white/10 bg-white/5 font-mono text-sm text-slate-300">
                <p className="mb-2 text-blue-400">// Stack technique utilisée</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Core: C++ / Python</li>
                  <li>Simulation: MATLAB R2025b</li>
                  <li>Design: CATIA V5 / SolidWorks</li>
                  <li>Hardware: STM32F4 Discovery</li>
                </ul>
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : Sidebar */}
          <aside className="space-y-8">
            <div className="p-6 rounded-xl border border-white/10 bg-slate-900/50">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Ressources
              </h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center w-full justify-center gap-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/5 px-4 py-2 text-sm font-medium text-white transition-all">
                  <Github size={16} /> Repository GitHub
                </a>
              </div>
            </div>

            <div className="aspect-square rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <p className="relative z-20 text-center px-4">
                <span className="block text-white font-bold mb-1">Visualisation 3D</span>
                <span className="text-xs text-slate-400">Interactive Model Coming Soon</span>
              </p>
            </div>
          </aside>
        </div>

      </div>
    </main>
  );
}