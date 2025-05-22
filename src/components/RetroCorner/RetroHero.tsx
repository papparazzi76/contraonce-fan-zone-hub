
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RetroHero = () => {
  return (
    <div className="bg-gray-900 text-white relative">
      {/* Hero background image */}
      <div className="absolute inset-0 opacity-80">
        <img 
          src="/lovable-uploads/cf70d575-3e6e-481a-b8bb-0dafb2b230df.png" 
          alt="World Cup Legends" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      </div>
      
      {/* Film grain effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">RETRO CORNER</h1>
        <p className="text-xl max-w-2xl mb-8">
          Revive las camisetas que hicieron historia. Colecciona los momentos que definieron el fútbol.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="bg-brand-gold text-black px-3 py-1 rounded-md text-sm font-medium">
            Piezas auténticas
          </span>
          <span className="bg-brand-green text-white px-3 py-1 rounded-md text-sm font-medium">
            +25 GOLES por compra retro
          </span>
          <Link to="/tienda">
            <Button size="sm" className="ml-2 bg-white text-gray-900 hover:bg-white/90">
              Explorar colección
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RetroHero;
