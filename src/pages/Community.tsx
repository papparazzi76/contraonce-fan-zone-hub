
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display mb-4">COMUNIDAD 11CONTRAONCE</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Únete a la conversación con miles de aficionados, comparte tu pasión por el fútbol
                y gana puntos para canjear por recompensas exclusivas.
              </p>
            </div>
          </div>
        </div>
        <CommunitySection showFullContent={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Community;
