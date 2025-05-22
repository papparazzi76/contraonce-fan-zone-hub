
import React from "react";
import FeatureCard from "@/components/FeatureCard";
import { Trophy, Medal, CircleDashed } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: "tienda",
      title: "Tienda",
      description: "Equipaciones actuales, vintage, merchandising y coleccionables exclusivos.",
      icon: <CircleDashed size={24} className="text-brand-green" />,
      buttonText: "Ir a la tienda",
      buttonLink: "/tienda"
    },
    {
      id: "retro",
      title: "Retro Corner",
      description: "Museo del fútbol con storytelling y timeline interactivo para cada prenda histórica.",
      icon: <Trophy size={24} className="text-brand-green" />,
      buttonText: "Revive la historia",
      buttonLink: "#retro"
    },
    {
      id: "comunidad",
      title: "Comunidad",
      description: "Conecta con otros aficionados, comparte contenido y participa en foros temáticos.",
      icon: <Medal size={24} className="text-brand-green" />,
      buttonText: "Únete ahora",
      buttonLink: "#comunidad"
    },
    {
      id: "juegos",
      title: "Juegos",
      description: "Porra semanal, fantasy league, minijuegos y retos para ganar puntos y recompensas.",
      icon: <CircleDashed size={24} className="text-brand-green" />,
      buttonText: "Jugar ahora",
      buttonLink: "#juegos"
    }
  ];

  return (
    <section className="bg-white py-16" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display mb-4">DESCUBRE 11CONTRAONCE</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La plataforma definitiva que une tienda, nostalgia, comunidad y juegos para
            los verdaderos amantes del fútbol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              buttonText={feature.buttonText}
              buttonLink={feature.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
