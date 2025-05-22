
import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FantasyLeague from "../Fantasy/FantasyLeague";

const FantasySection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default FantasySection;
