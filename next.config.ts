/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Obligatoire pour GitHub Pages
  images: {
    unoptimized: true, // Obligatoire car GitHub Pages ne peut pas optimiser les images à la volée
  },
  // Si votre repo n'est PAS "username.github.io" mais "portfolio", décommentez la ligne dessous :
  // basePath: '/nom-du-repo', 
};

export default nextConfig;