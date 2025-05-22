
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
