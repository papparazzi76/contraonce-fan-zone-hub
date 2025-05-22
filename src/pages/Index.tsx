
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, CircleDashed } from "lucide-react";

const Index = () => {
  const features = [
    {
      id: "tienda",
      title: "Tienda",
      description: "Equipaciones actuales, vintage, merchandising y coleccionables exclusivos.",
      icon: <CircleDashed size={24} className="text-brand-green" />,
      buttonText: "Ir a la tienda"
    },
    {
      id: "retro",
      title: "Retro Corner",
      description: "Museo del fútbol con storytelling y timeline interactivo para cada prenda histórica.",
      icon: <Trophy size={24} className="text-brand-green" />,
      buttonText: "Revive la historia"
    },
    {
      id: "comunidad",
      title: "Comunidad",
      description: "Conecta con otros aficionados, comparte contenido y participa en foros temáticos.",
      icon: <Medal size={24} className="text-brand-green" />,
      buttonText: "Únete ahora"
    },
    {
      id: "juegos",
      title: "Juegos",
      description: "Porra semanal, fantasy league, minijuegos y retos para ganar puntos y recompensas.",
      icon: <CircleDashed size={24} className="text-brand-green" />,
      buttonText: "Jugar ahora"
    }
  ];

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

  // Rewards section content
  const rewards = [
    "50 goles de bienvenida",
    "Cupones exclusivos",
    "Acceso anticipado a drops",
    "Entradas para eventos"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
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
                buttonLink={`#${feature.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Game Section */}
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

      {/* Rewards Section */}
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

      {/* Community & Blog Preview */}
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

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display mb-6">ÚNETE A 11CONTRAONCE HOY</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Regístrate ahora y recibe 50 goles de bienvenida. Compra, juega, conecta y
            colecciona con la comunidad definitiva de fútbol.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-green hover:bg-brand-green/90">
              Crear cuenta
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Saber más
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
