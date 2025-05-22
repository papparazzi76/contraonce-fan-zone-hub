
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FantasyLeague from "@/components/Fantasy/FantasyLeague";
import { Helmet } from "react-helmet-async";

const Games = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Juegos | 11contraonce</title>
        <meta name="description" content="Participa en nuestros juegos y gana puntos para canjear por premios" />
      </Helmet>
      
      <Navbar />
      
      <div className="py-8 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display mb-2">JUEGOS</h1>
          <p className="text-xl opacity-90">Demuestra tus conocimientos futbolísticos y gana premios</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="fantasy" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="fantasy">Fantasy League</TabsTrigger>
            <TabsTrigger value="porra">Porra Semanal</TabsTrigger>
            <TabsTrigger value="trivias">Trivias</TabsTrigger>
            <TabsTrigger value="penaltis">Penaltis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fantasy" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-3xl font-display mb-4 text-brand-green">FANTASY MUNDIAL DE CLUBES 2025</h2>
              <p className="text-gray-600 mb-6">
                Crea tu equipo ideal, compite con amigos y demuestra tus conocimientos futbolísticos 
                en nuestro juego oficial del Mundial de Clubes 2025.
              </p>
              
              <FantasyLeague />
            </div>
          </TabsContent>
          
          <TabsContent value="porra">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-display mb-4">Porra Semanal</h3>
                  <p className="text-gray-500 mb-6">
                    Próximamente podrás predecir resultados de partidos y ganar puntos por tus aciertos.
                  </p>
                  <Button disabled>Disponible pronto</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="trivias">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-display mb-4">Trivias de Fútbol</h3>
                  <p className="text-gray-500 mb-6">
                    Próximamente podrás poner a prueba tus conocimientos futbolísticos
                    con nuestras trivias semanales.
                  </p>
                  <Button disabled>Disponible pronto</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="penaltis">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-display mb-4">Penaltis Challenge</h3>
                  <p className="text-gray-500 mb-6">
                    Próximamente podrás disfrutar de nuestro minijuego arcade de penaltis.
                    ¡Compite por la mejor puntuación!
                  </p>
                  <Button disabled>Disponible pronto</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Games;
