"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO - Style Terminal */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <Terminal size={18} />
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-slate-100">
            WALID<span className="text-blue-500">.ENG</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  isActive ? "text-blue-500" : "text-slate-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          
          {/* CTA BUTTON */}
          <a
            href="/cv.pdf" // On mettra le fichier plus tard
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-blue-500/50"
          >
            <Download size={14} />
            <span>CV</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-blue-400"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/cv.pdf"
                className="flex w-full items-center justify-center gap-2 rounded bg-blue-600 py-2 text-sm font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                <Download size={16} /> Download CV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}