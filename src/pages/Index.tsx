
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import GameSection from "@/components/GameSection";
import RewardsSection from "@/components/RewardsSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <GameSection />
      <RewardsSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
