
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { rewardsData, userRewards } from "@/components/rewards/rewardsData";
import RewardsList from "@/components/rewards/RewardsList";
import RedemptionHistory from "@/components/rewards/RedemptionHistory";
import ReferralTab from "@/components/rewards/ReferralTab";
import UserDashboardCard from "@/components/rewards/UserDashboardCard";
import BenefitsList from "@/components/rewards/BenefitsList";
import RewardConfirmationDialog from "@/components/rewards/RewardConfirmationDialog";

const RewardsSection = () => {
  const [activeTab, setActiveTab] = useState("redeem");
  const [selectedReward, setSelectedReward] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // User data (would come from an API/database)
  const userData = {
    points: 750,
    level: {
      name: "LEYENDA",
      current: 750,
      next: 1000,
      percentage: 75
    }
  };
  
  const handleRedeemClick = (reward) => {
    setSelectedReward(reward);
    setIsDialogOpen(true);
  };
  
  const handleConfirmRedeem = () => {
    // Here we would call the API endpoint: POST /rewards/:id/redeem
    // For now, we'll simulate the response
    
    if (userData.points >= selectedReward.cost) {
      // Show success toast with confetti effect
      toast({
        title: "¡Recompensa canjeada!",
        description: `Has canjeado "${selectedReward.title}" por ${selectedReward.cost} goles`,
      });
      
      // In a real app, we would update the user's points here
      
      // Switch to history tab
      setActiveTab("history");
    } else {
      toast({
        title: "No tienes suficientes goles",
        description: "Necesitas más goles para canjear esta recompensa",
        variant: "destructive"
      });
    }
    
    setIsDialogOpen(false);
  };

  const benefits = [
    "50 goles de bienvenida", 
    "Cupones exclusivos", 
    "Acceso anticipado a drops", 
    "Entradas para eventos"
  ];

  return (
    <section className="bg-brand-green text-white py-16" id="recompensas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display mb-4">PROGRAMA DE RECOMPENSAS</h2>
            <p className="text-xl mb-8 opacity-90">
              Acumula "goles" con cada compra, predicción acertada o participación en la
              comunidad. Canjéalos por descuentos, productos exclusivos y experiencias únicas.
            </p>
            
            <BenefitsList benefits={benefits} />
            
            <Button 
              className="bg-brand-gold text-black hover:bg-brand-gold/90"
              onClick={() => window.location.href = "#rewards-dashboard"}
            >
              Canjea tus goles
            </Button>
          </div>
          
          <UserDashboardCard userData={userData} />
        </div>
        
        {/* Rewards Dashboard */}
        <div id="rewards-dashboard" className="mt-24 bg-white text-black p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-display mb-6 text-brand-green">HINCHA REWARDS</h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="redeem">Canjear</TabsTrigger>
              <TabsTrigger value="history">Historial</TabsTrigger>
              <TabsTrigger value="referrals">Referidos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="redeem">
              <RewardsList 
                rewards={rewardsData} 
                userPoints={userData.points} 
                onRedeemClick={handleRedeemClick} 
              />
            </TabsContent>
            
            <TabsContent value="history">
              <RedemptionHistory redemptions={userRewards} />
            </TabsContent>
            
            <TabsContent value="referrals">
              <ReferralTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      <RewardConfirmationDialog
        isOpen={isDialogOpen}
        selectedReward={selectedReward}
        onOpenChange={setIsDialogOpen}
        onConfirm={handleConfirmRedeem}
      />
    </section>
  );
};

export default RewardsSection;
