'use client';

export default function ConstructionBanner() {
  return (
    <div className="w-full bg-yellow-500 text-black font-bold uppercase text-center tracking-widest py-2 relative overflow-hidden">
      {/* Animated black stripes */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fff_10px,#fff_20px)] opacity-30 animate-slide-stripes"></div>
      <span className="relative z-10">UNDER CONSTRUCTION</span>
    </div>
  );
}