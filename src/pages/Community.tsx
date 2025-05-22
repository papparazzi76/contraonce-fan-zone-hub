
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import CommunityRegistration from "@/components/CommunityRegistration";

const Community = () => {
  const [isRegistered, setIsRegistered] = useState(() => {
    // In a real app, you'd check localStorage or a user context
    const savedUser = localStorage.getItem("communityUser");
    return !!savedUser;
  });

  const [userData, setUserData] = useState<any>(() => {
    const savedUser = localStorage.getItem("communityUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleRegistrationComplete = (userData: any) => {
    // Save user data to localStorage (in a real app, you'd use a backend)
    localStorage.setItem("communityUser", JSON.stringify(userData));
    setUserData(userData);
    setIsRegistered(true);
  };

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
        
        {isRegistered ? (
          // Show the community content when registered
          <>
            <div className="bg-white py-8 border-b">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Bienvenido a la comunidad,</p>
                    <p className="font-medium">{userData?.fullName}</p>
                  </div>
                  <div className="bg-brand-gold bg-opacity-20 text-brand-gold px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">
                      Grupo: {userData?.ageGroup === "adult" ? "Adulto" : "Menores"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <CommunitySection showFullContent={true} />
          </>
        ) : (
          // Show registration form when not registered
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CommunityRegistration onRegistrationComplete={handleRegistrationComplete} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Community;
