
import React from "react";
import { Button } from "@/components/ui/button";

const GameSection = () => {
  // Game section content
  const games = [
    {
      name: "Porra Semanal",
      desc: "Predice resultados y gana puntos"
    },
    {
      name: "Fantasy League",
      desc: "Crea tu equipo ideal"
    },
    {
      name: "Trivias",
      desc: "Pon a prueba tus conocimientos"
    },
    {
      name: "Penaltis",
      desc: "Minijuego arcade"
    }
  ];

  return (
    <section className="bg-gray-50 py-16" id="juegos-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display mb-4">JUEGA Y GANA</h2>
            <p className="text-xl mb-8 text-gray-600">
              Participa en nuestros juegos semanales, compite contra otros aficionados 
              y acumula puntos para canjear por premios exclusivos.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {games.map((game, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover-scale"
                >
                  <h3 className="font-display text-lg">{game.name}</h3>
                  <p className="text-sm text-gray-500">{game.desc}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-brand-green hover:bg-brand-green/90">
              Juega ahora
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl relative z-10">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-gold rounded-full opacity-20"></div>
              <h3 className="text-3xl font-display mb-6 text-brand-green">LEADERBOARD</h3>
              
              {[1, 2, 3, 4, 5].map((position) => (
                <div 
                  key={position}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full ${
                      position === 1 
                        ? "bg-brand-gold text-black" 
                        : position === 2
                        ? "bg-gray-300 text-black"
                        : position === 3
                        ? "bg-brand-gold/60 text-black"
                        : "bg-gray-100 text-gray-600"
                    } text-xs font-bold mr-3`}>
                      {position}
                    </span>
                    <div>
                      <p className="font-medium">Usuario {position}</p>
                      <p className="text-xs text-gray-500">Club Favorito {position}</p>
                    </div>
                  </div>
                  <div className="font-display text-xl text-brand-green">
                    {1000 - (position * 150)} pts
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-green rounded-full opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-60 h-40 bg-brand-gold rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
