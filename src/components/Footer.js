'use client';

import Image from "next/image";

function Footer() {
  return (
<footer className="w-full fixed bottom-0 left-0 z-20 border-t border-gray-900 bg-black text-sm text-gray-400 relative overflow-hidden">

  {/* Animated Fog/Smoke */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-30 animate-fade-slow"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
    <div className="flex flex-wrap justify-center items-center gap-6">

      {/* Portfolio Link */}
      <a
        href="https://react-td-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-gray-400 uppercase tracking-widest font-serif flicker glow-hover"
      >
        <Image
          src="/mammal.svg"
          alt="Mammal"
          width={18}
          height={18}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        />
        <span className="transition-all duration-300 group-hover:text-red-600">
          sifzerda
        </span>
      </a>

      {/* Github Link */}
      <a
        href="https://github.com/sifzerda/next-horror"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 text-gray-400 uppercase tracking-widest font-serif flicker glow-hover"
      >
        <Image
          src="/github.svg"
          alt="Github"
          width={16}
          height={16}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        />
        <span className="transition-all duration-300 group-hover:text-red-600">
          2025
        </span>
      </a>

    </div>
  </div>
</footer>
  );
}

export default Footer;