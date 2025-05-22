
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-br from-brand-green/10 to-brand-gold/5 h-full w-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-brand-black mb-6 leading-tight">
              FÚTBOL, <span className="text-brand-green">PASIÓN</span> Y <span className="text-brand-gold">COMUNIDAD</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La plataforma definitiva para los verdaderos amantes del fútbol. 
              Coleccionismo, historia, predicciones y recompensas en un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-green hover:bg-brand-green/90">
                Únete a la comunidad
              </Button>
              <Link to="/tienda">
                <Button size="lg" variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green/10">
                  Explorar tienda
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-semibold text-gray-500">+{i}k</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                +50.000 aficionados ya forman parte
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md animate-scale-up">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green rounded-full opacity-20"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/d58c6cde-bb6b-4db1-98ff-4edf73f43433.png"
                  alt="11contraonce"
                  className="w-64 h-64 mx-auto object-contain"
                />
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="font-display text-2xl">ÚNETE HOY</p>
                    <p className="text-sm text-gray-500">Y gana 50 goles de bienvenida</p>
                  </div>
                  <div className="bg-brand-green text-white px-4 py-2 rounded-lg font-semibold">
                    +50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
