
import React from "react";
import { useNavigate } from "react-router-dom";

interface Game {
  id: string;
  name: string;
  desc: string;
  path: string;
}

interface GamesListProps {
  games: Game[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  const navigate = useNavigate();
  
  const handleGameClick = (gameId: string) => {
    const game = games.find(g => g.id === gameId);
    if (game) {
      navigate(game.path);
    }
  };
  
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {games.map((game) => (
        <div 
          key={game.id}
          onClick={() => handleGameClick(game.id)}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover-scale cursor-pointer transition-all hover:shadow-md"
        >
          <h3 className="font-display text-lg">{game.name}</h3>
          <p className="text-sm text-gray-500">{game.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
