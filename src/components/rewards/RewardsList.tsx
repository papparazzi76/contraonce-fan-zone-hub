
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  type: 'coupon' | 'item';
  stock: number;
  expiryDate: string;
  isPopular: boolean;
}

interface RewardsListProps {
  rewards: Reward[];
  userPoints: number;
  onRedeemClick: (reward: Reward) => void;
}

const RewardsList: React.FC<RewardsListProps> = ({ rewards, userPoints, onRedeemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredRewards = rewards.filter(reward => 
    reward.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reward.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <div className="mb-6">
        <Label htmlFor="search-rewards">Buscar recompensas</Label>
        <Input
          id="search-rewards"
          placeholder="Buscar por nombre o descripción..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRewards.map((reward) => (
          <Card key={reward.id} className="overflow-hidden">
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              {reward.type === 'coupon' ? (
                <div className="text-4xl">🎫</div>
              ) : (
                <div className="text-4xl">🎁</div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{reward.title}</h3>
                {reward.isPopular && (
                  <Badge className="bg-red-500 hover:bg-red-500/90">🔥 Popular</Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-brand-green">{reward.cost} goles</span>
                <Button
                  size="sm"
                  onClick={() => onRedeemClick(reward)}
                  disabled={userPoints < reward.cost || reward.stock <= 0}
                  className={`${userPoints >= reward.cost ? 'bg-brand-green hover:bg-brand-green/90' : 'bg-gray-300 cursor-not-allowed'}`}
                >
                  {userPoints >= reward.cost ? 'Canjear' : 'Insuficiente'}
                </Button>
              </div>
              <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                <span>Stock: {reward.stock}</span>
                <span>Válido hasta: {new Date(reward.expiryDate).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredRewards.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No se encontraron recompensas que coincidan con tu búsqueda.
        </div>
      )}
    </div>
  );
};

export default RewardsList;
