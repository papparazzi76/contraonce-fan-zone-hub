import React from "react";
import { Button } from "@/components/ui/button";
import FantasyLeague from "./Fantasy/FantasyLeague";
import { Link } from "react-router-dom";
import { Gamepad } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const handleGameClick = (gameId) => {
    // For now, just navigate to the path. In the future, this could do more
    const game = games.find(g => g.id === gameId);
    if (game) {
      navigate(game.path);
    }
  };

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
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {games.map((game, index) => (
                <div 
                  key={game.id}
                  onClick={() => handleGameClick(game.id)}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover-scale cursor-pointer transition-all hover:shadow-md"
                >
                  <h3 className="font-display text-lg">{game.name}</h3>
                  <p className="text-sm text-gray-500">{game.desc}</p>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={() => navigate("/juegos")} 
              className="bg-brand-green hover:bg-brand-green/90 gap-2"
            >
              <Gamepad size={18} />
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

      {/* Fantasy Mundial de Clubes 2025 Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display mb-4">FANTASY MUNDIAL DE CLUBES 2025</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crea tu equipo ideal, compite con amigos y demuestra tus conocimientos futbolísticos en nuestro juego oficial del Mundial de Clubes.
          </p>
        </div>
        
        <FantasyLeague />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-display text-xl mb-3 text-brand-green">Reglas básicas</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="bg-brand-green text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                15 jugadores (2 GK, 5 DEF, 5 MID, 3 FWD)
              </li>
              <li className="flex items-center">
                <span className="bg-brand-green text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                Presupuesto inicial: 100M €
              </li>
              <li className="flex items-center">
                <span className="bg-brand-green text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                7 formaciones disponibles
              </li>
              <li className="flex items-center">
                <span className="bg-brand-green text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                Sistema de puntos por rendimiento real
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-display text-xl mb-3 text-brand-green">Calendario</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Draft inicial</span>
                <span className="text-sm text-gray-500">Abierto</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Fase grupos</span>
                <span className="text-sm text-gray-500">15 Jun - 22 Jun</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="font-medium">Fase KO</span>
                <span className="text-sm text-gray-500">24 Jun - 2 Jul</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Final</span>
                <span className="text-sm text-gray-500">7 Jul 2025</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-display text-xl mb-3 text-brand-green">Premios</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="bg-brand-gold text-black w-7 h-7 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                <div>
                  <p className="font-medium">Campeón Mundial</p>
                  <p className="text-sm text-gray-500">Camiseta firmada + 5.000 GOLES</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="bg-gray-300 text-black w-7 h-7 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                <div>
                  <p className="font-medium">Subcampeón</p>
                  <p className="text-sm text-gray-500">Balón oficial + 2.500 GOLES</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="bg-brand-gold/60 text-black w-7 h-7 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                <div>
                  <p className="font-medium">Tercer puesto</p>
                  <p className="text-sm text-gray-500">1.000 GOLES + merchandising</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/juegos/fantasy")} 
            className="bg-brand-green hover:bg-brand-green/90 gap-2" 
            size="lg"
          >
            <Gamepad size={20} />
            Regístrate y crea tu equipo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
