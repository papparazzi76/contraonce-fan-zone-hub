
import React from "react";

const RetroHero = () => {
  return (
    <div className="bg-gray-900 text-white relative">
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      
      {/* Add film grain effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">RETRO CORNER</h1>
        <p className="text-xl max-w-2xl mb-8">
          Revive las camisetas que hicieron historia. Colecciona los momentos que definieron el fútbol.
        </p>
        <div className="flex items-center">
          <span className="bg-brand-gold text-black px-3 py-1 rounded-md text-sm font-medium mr-4">
            Piezas auténticas
          </span>
          <span className="bg-brand-green text-white px-3 py-1 rounded-md text-sm font-medium">
            +25 GOLES por compra retro
          </span>
        </div>
      </div>
    </div>
  );
};

export default RetroHero;
