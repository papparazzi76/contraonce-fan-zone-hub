
import React from "react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="bg-white py-16" id="comunidad-blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display mb-4">ÚNETE A LA COMUNIDAD</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comparte tu pasión por el fútbol con miles de aficionados.
            Historias, debates, coleccionismo y más.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover-scale"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                  <span className="text-sm text-gray-600">Usuario {i}</span>
                  <span className="ml-auto text-xs text-gray-500">hace {i} día{i !== 1 ? 's' : ''}</span>
                </div>
                <h3 className="font-display text-xl mb-2">Título del Post {i}</h3>
                <p className="text-gray-600 line-clamp-2 mb-4">
                  Una breve descripción del post o historia compartida por este usuario de la comunidad.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{30 - i * 5} me gusta</span>
                  <span>{10 - i} comentarios</span>
                  <span>{i} compartidos</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-brand-green hover:bg-brand-green/90">
            Ver todos los posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
