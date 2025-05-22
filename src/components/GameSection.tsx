
import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GamesList from "./games/GamesList";
import Leaderboard from "./games/Leaderboard";
import FantasySection from "./games/FantasySection";

const GameSection = () => {
  const navigate = useNavigate();

  // Game section content
  const games = [
    {
      id: "porra",
      name: "Porra Semanal",
      desc: "Predice resultados y gana puntos",
      path: "/juegos/porra"
    },
    {
      id: "fantasy",
      name: "Fantasy League",
      desc: "Crea tu equipo ideal",
      path: "/juegos/fantasy"
    },
    {
      id: "trivias",
      name: "Trivias",
      desc: "Pon a prueba tus conocimientos",
      path: "/juegos/trivias"
    },
    {
      id: "penaltis",
      name: "Penaltis",
      desc: "Minijuego arcade",
      path: "/juegos/penaltis"
    }
  ];

  return (
    <section className="bg-gray-50 py-16" id="juegos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display mb-4 text-brand-green">JUEGA Y GANA</h2>
            <p className="text-xl mb-8 text-gray-600">
              Participa en nuestros juegos semanales, compite contra otros aficionados 
              y acumula puntos para canjear por premios exclusivos.
            </p>
            
            <GamesList games={games} />
            
            <Button 
              onClick={() => navigate("/juegos")} 
              className="bg-brand-green hover:bg-brand-green/90 gap-2"
            >
              <Gamepad size={18} />
              Juega ahora
            </Button>
          </div>
          
          <Leaderboard />
        </div>
      </div>

      {/* Fantasy Mundial de Clubes 2025 Section */}
      <FantasySection />
    </section>
  );
};

export default GameSection;
