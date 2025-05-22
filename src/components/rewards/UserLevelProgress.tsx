
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface UserLevelData {
  name: string;
  current: number;
  next: number;
  percentage: number;
}

interface UserLevelProgressProps {
  level: UserLevelData;
  points: number;
}

const UserLevelProgress: React.FC<UserLevelProgressProps> = ({ level, points }) => {
  const getProgressColor = (percentage: number) => {
    if (percentage > 70) return "bg-gradient-to-r from-brand-green to-brand-gold";
    if (percentage >= 30) return "bg-gradient-to-r from-yellow-500 to-yellow-400";
    return "bg-gradient-to-r from-red-500 to-red-400";
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-gray-500">Nivel de aficionado</p>
          <h3 className="font-display text-2xl text-brand-green">
            {level.name}
            <Badge className="ml-2 bg-brand-green text-white">Nivel 3</Badge>
          </h3>
        </div>
        <div className="bg-brand-gold text-black px-4 py-2 rounded-lg font-display text-xl">
          {points} GOLES
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Nivel actual</span>
          <span>Siguiente nivel</span>
        </div>
        <Progress 
          value={level.percentage} 
          className="h-3 rounded-full bg-gray-200"
          indicatorClassName={getProgressColor(level.percentage)}
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{level.current} goles</span>
          <span>{level.next} goles</span>
        </div>
      </div>
    </>
  );
};

export default UserLevelProgress;
