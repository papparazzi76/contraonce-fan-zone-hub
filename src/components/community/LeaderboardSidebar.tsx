
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeaderboardUser {
  name: string;
  points: number;
  avatar: string | null;
  initials: string;
  clubColor: string;
}

interface LeaderboardSidebarProps {
  users: LeaderboardUser[];
}

const LeaderboardSidebar: React.FC<LeaderboardSidebarProps> = ({ users }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-display text-xl mb-4">Tabla de Líderes</h3>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-lg font-semibold w-6 text-center mr-2">{index + 1}</div>
                <Avatar className={`h-10 w-10 mr-3 border-2 ${user.clubColor}`}>
                  {user.avatar ? (
                    <AvatarImage src={user.avatar} alt={user.name} />
                  ) : (
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  )}
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="bg-brand-gold bg-opacity-20 text-brand-gold px-2 py-1 rounded font-medium">
                {user.points} pts
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h4 className="font-medium mb-2 text-sm">Actividades que suman puntos:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
              Publicar contenido: +5 ⚽
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
              Recibir likes: +1 ⚽
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-brand-green rounded-full mr-2"></div>
              Recibir/hacer comentarios: +2 ⚽
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-brand-gold rounded-full mr-2"></div>
              Fan de la semana: +200 ⚽
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardSidebar;
