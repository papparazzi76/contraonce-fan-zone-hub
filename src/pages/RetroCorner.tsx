
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RetroHero from "@/components/RetroCorner/RetroHero";
import RetroTimeline from "@/components/RetroCorner/RetroTimeline";
import RetroGrid from "@/components/RetroCorner/RetroGrid";
import DecadeFilter from "@/components/RetroCorner/DecadeFilter";

const RetroCorner = () => {
  const [activeDecade, setActiveDecade] = useState<string>("all");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <RetroHero />
      
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DecadeFilter activeDecade={activeDecade} setActiveDecade={setActiveDecade} />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <RetroTimeline decade={activeDecade} />
            </div>
            <div className="lg:col-span-9">
              <RetroGrid decade={activeDecade} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RetroCorner;
