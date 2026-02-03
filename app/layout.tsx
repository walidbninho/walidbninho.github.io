import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

// Configuration des polices
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Walid | Ingénieur Aéronautique & Embarqué",
  description: "Portfolio ingénieur spécialisé en systèmes embarqués, conception 3D et aéronautique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200`}>
        <Navbar />
        {/* Ajout d'un padding-top pour ne pas que le contenu soit caché sous la navbar fixe */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}