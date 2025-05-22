
import React from "react";
import { Button } from "@/components/ui/button";

const RewardsSection = () => {
  // Rewards section content
  const rewards = [
    "50 goles de bienvenida",
    "Cupones exclusivos",
    "Acceso anticipado a drops",
    "Entradas para eventos"
  ];

  return (
    <section className="bg-brand-green text-white py-16" id="recompensas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display mb-4">PROGRAMA DE RECOMPENSAS</h2>
            <p className="text-xl mb-8 opacity-90">
              Acumula "goles" con cada compra, predicción acertada o participación en la
              comunidad. Canjéalos por descuentos, productos exclusivos y experiencias únicas.
            </p>
            
            <ul className="space-y-3 mb-8">
              {rewards.map((reward, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-3 bg-brand-gold text-black rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {reward}
                </li>
              ))}
            </ul>
            
            <Button className="bg-brand-gold text-black hover:bg-brand-gold/90">
              Canjea tus goles
            </Button>
          </div>
          
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-sm text-gray-500">Nivel de aficionado</p>
                <h3 className="font-display text-2xl text-brand-green">LEYENDA</h3>
              </div>
              <div className="bg-brand-gold text-black px-4 py-2 rounded-lg font-display text-xl">
                750 GOLES
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Nivel actual</span>
                <span>Siguiente nivel</span>
              </div>
              <div className="h-3 rounded-full bg-gray-200 relative">
                <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-green to-brand-gold rounded-full" style={{ width: "75%" }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>750 goles</span>
                <span>1000 goles</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-semibold mb-4">Recompensas disponibles:</h4>
              <div className="space-y-4">
                {["Cupón 15% descuento", "Camiseta exclusiva", "Entrada partido"].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>{item}</span>
                    <Button variant="outline" size="sm" className="text-brand-green border-brand-green hover:bg-brand-green/10">
                      Canjear
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
