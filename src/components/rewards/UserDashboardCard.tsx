
import React from "react";
import { Button } from "@/components/ui/button";
import UserLevelProgress from "./UserLevelProgress";

interface UserData {
  points: number;
  level: {
    name: string;
    current: number;
    next: number;
    percentage: number;
  };
}

const UserDashboardCard: React.FC<{ userData: UserData }> = ({ userData }) => {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
      <UserLevelProgress level={userData.level} points={userData.points} />
      
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
  );
};

export default UserDashboardCard;
