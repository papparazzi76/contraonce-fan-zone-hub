
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { rewardsData, userRewards } from "@/components/rewards/rewardsData";
import RewardsList from "@/components/rewards/RewardsList";
import RedemptionHistory from "@/components/rewards/RedemptionHistory";
import ReferralTab from "@/components/rewards/ReferralTab";

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
  
  const getProgressColor = (percentage) => {
    if (percentage > 70) return "bg-gradient-to-r from-brand-green to-brand-gold";
    if (percentage >= 30) return "bg-gradient-to-r from-yellow-500 to-yellow-400";
    return "bg-gradient-to-r from-red-500 to-red-400";
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
            
            <ul className="space-y-3 mb-8">
              {["50 goles de bienvenida", "Cupones exclusivos", "Acceso anticipado a drops", "Entradas para eventos"].map((reward, index) => (
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
            
            <Button 
              className="bg-brand-gold text-black hover:bg-brand-gold/90"
              onClick={() => window.location.href = "#rewards-dashboard"}
            >
              Canjea tus goles
            </Button>
          </div>
          
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-sm text-gray-500">Nivel de aficionado</p>
                <h3 className="font-display text-2xl text-brand-green">
                  {userData.level.name}
                  <Badge className="ml-2 bg-brand-green text-white">Nivel 3</Badge>
                </h3>
              </div>
              <div className="bg-brand-gold text-black px-4 py-2 rounded-lg font-display text-xl">
                {userData.points} GOLES
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Nivel actual</span>
                <span>Siguiente nivel</span>
              </div>
              <Progress 
                value={userData.level.percentage} 
                className="h-3 rounded-full bg-gray-200"
                indicatorClassName={getProgressColor(userData.level.percentage)}
              />
              <div className="flex justify-between text-xs mt-1">
                <span>{userData.level.current} goles</span>
                <span>{userData.level.next} goles</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-500 mb-2">Te faltan solo {userData.level.next - userData.level.current} goles para tu próximo nivel</p>
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar canje</DialogTitle>
            <DialogDescription>
              {selectedReward && (
                <>
                  ¿Estás seguro que quieres canjear "{selectedReward.title}" por {selectedReward.cost} goles?
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-brand-green hover:bg-brand-green/90" 
              onClick={handleConfirmRedeem}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RewardsSection;
